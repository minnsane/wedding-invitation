<script>
  import { couple, connector, details } from "../shared/app.store";
</script>

<div class="main">
  <div class="description">
    <h1 class="title">
      <span>{$couple.groom.name}</span>
      <span class="connector">{$connector}</span>
      <span>{$couple.bride.name}</span>
    </h1>
    {#each $details as detail}
      <span class="detail">{detail}</span>
    {/each}
  </div>
</div>

<style lang="scss">
  .main {
    background-image: url("/image/main.jpg");
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
