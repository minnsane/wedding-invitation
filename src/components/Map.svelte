<script lang="ts">
  import { beforeUpdate, onDestroy } from "svelte";
  import { map } from "../shared/app.store";
  import { mdiArrowRightBold } from "@mdi/js";

  let mapContainer;
  let unsubscribeMap;

  beforeUpdate(
    () =>
      (unsubscribeMap = map.subscribe((mapValue) => {
        if (window.kakao || mapValue === null) {
          return;
        }

        const mapScript = document.createElement("script");

        mapScript.async = true;
        mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${mapValue.key}&autoload=false`;

        document.head.appendChild(mapScript);

        const onLoadKakaoMap = (): void => {
          window.kakao.maps.load(() => {
            const options = {
              level: 5,
              center: new window.kakao.maps.LatLng(
                mapValue.position.lat,
                mapValue.position.lng
              ),
            };
            const kakaoMap = new window.kakao.maps.Map(mapContainer, options);

            const markerImage = new kakao.maps.MarkerImage(
              "/image/marker.png",
              new kakao.maps.Size(44, 47),
              { offset: new kakao.maps.Point(22, 47) }
            );
            const markerPosition = new kakao.maps.LatLng(
              mapValue.position.lat,
              mapValue.position.lng
            );
            const marker = new kakao.maps.Marker({
              position: markerPosition,
              image: markerImage,
            });

            marker.setMap(kakaoMap);
            kakaoMap.addControl(
              new kakao.maps.ZoomControl(),
              kakao.maps.ControlPosition.RIGHT
            );

            const content = `
              <div class="speech-bubble">
                <a href="${mapValue.link}">
                  <span class="text">${mapValue.name}</span>
                  <svg class="arrow" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                    <path d="${mdiArrowRightBold}" fill="#ea4d4d"/>
                  </svg>
                </a>
              </div>
            `;

            new kakao.maps.CustomOverlay({
              map: kakaoMap,
              position: new kakao.maps.LatLng(
                mapValue.position.lat,
                mapValue.position.lng
              ),
              content,
              yAnchor: 1,
            });
          });
        };
        mapScript.addEventListener("load", onLoadKakaoMap);
      }))
  );

  onDestroy(unsubscribeMap);
</script>

{#if $map}
  <div class="map-wrapper">
    <h2 class="title">찾아오시는 길</h2>
    <span class="place">
      {$map.name}
      {$map.placeDetail ?? ""}
    </span>
    <span class="address">{$map.address}</span>
    <div class="map-container" bind:this={mapContainer} />
  </div>
{/if}

<style lang="scss">
  .map-wrapper {
    margin-bottom: 80px;
    text-align: center;
    > * {
      display: block;
    }
    .address {
      font-size: 16px;
      font-weight: 300;
      margin-bottom: 20px;
    }
    .place {
      font-size: 18px;
      font-weight: 500;
    }
  }
  .map-container {
    width: 96vw;
    height: 77vw;
    max-width: 400px;
    max-height: 320px;
    margin: auto !important;
  }
</style>
