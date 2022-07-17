<script lang="ts">
  import { beforeUpdate } from "svelte";
  import { map } from "../shared/app.store";

  let mapContainer;

  beforeUpdate(() =>
    map.subscribe((mapValue) => {
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

          new kakao.maps.CustomOverlay({
            map: kakaoMap,
            position: new kakao.maps.LatLng(
              mapValue.position.lat,
              mapValue.position.lng
            ),
            content: `<div class="speech-bubble">${mapValue.name}</div>`,
            yAnchor: 1,
          });
        });
      };
      mapScript.addEventListener("load", onLoadKakaoMap);
    })
  );
</script>

{#if $map}
  <div class="map-wrapper">
    <span class="title">찾아오시는 길</span>
    <span class="address">{$map.address}</span>
    <span class="place">{$map.name}</span>
    <div class="map-container" bind:this={mapContainer} />
  </div>
{/if}

<style lang="scss">
  .map-wrapper {
    margin-bottom: 30px;
    text-align: center;
    * {
      display: block;
    }
    .title {
      font-size: 19px;
      margin-bottom: 20px;
      font-weight: 600;
    }
    .address {
      font-size: 16px;
      font-weight: 300;
    }
    .place {
      font-size: 18px;
      font-weight: 500;
      margin-bottom: 20px;
    }
  }
  .map-container {
    width: 96vw;
    height: 96vw;
    max-width: 400px;
    max-height: 400px;
    margin: auto !important;
  }
</style>
