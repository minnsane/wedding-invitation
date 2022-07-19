<script>
  import {
    coupleName,
    connector,
    details,
    mainImage,
    linkThumbnailImage,
  } from "../shared/app.store";
  import { appName } from "../shared/app.value";

  $: mainImageUrl = `url(${$mainImage})`;

  $: metaData = [
    {
      property: "og:type",
      content: `${$coupleName.groom.slice(
        1
      )} ${$connector} ${$coupleName.bride.slice(1)}`,
    },
    { property: "og:url", content: `${appName}.web.app` },
    {
      property: "og:description",
      content: `${$coupleName.groom}, ${$coupleName.bride}의 결혼식에 초대합니다.`,
    },
    { property: "og:image", content: $linkThumbnailImage },
  ];
</script>

<svelte:head>
  <meta content="website" property="og:type" />
  {#each metaData as { content, property }}
    <meta {content} {property} />
  {/each}
</svelte:head>

<div class="main" style="background-image: {mainImageUrl}">
  <div class="description">
    <h1 class="title">
      <span>{$coupleName.groom}</span>
      <span class="connector">{$connector}</span>
      <span>{$coupleName.bride}</span>
    </h1>
    {#each $details as detail}
      <span class="detail">{detail}</span>
    {/each}
  </div>
</div>

<style lang="scss">
  .main {
    height: 100vh;
    background-size: cover;
    background-position: center;
  }
  .description {
    padding-top: 15vh;
    padding-right: 7%;
    text-align: right;
  }
  .title {
    font-weight: 300;
    font-size: 30px;
    color: #313e40;
    margin-bottom: 12px;
    span {
      display: inline-block;
    }
  }
  .connector {
    opacity: 0.6;
    font-size: 20px;
    line-height: 20px;
  }
  .detail {
    opacity: 0.6;
    font-size: 18px;
    display: block;
    line-height: 22px;
  }
</style>
