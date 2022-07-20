<script lang="ts">
  import { couple, coupleImage } from "../shared/app.store";
  import { mainRoles } from "../shared/app.value";
  import Emoji from "svelte-emoji";
  import { Card } from "svelte-chota";

  function getFirstName(name: string): string {
    return name.slice(1);
  }
</script>

<div class="section section-about">
  <h2 class="title">
    {getFirstName($couple.groom.name)}
    <span class="connector">그리고</span>
    {getFirstName($couple.bride.name)}
  </h2>
  <div class="wrapper">
    {#each mainRoles as role}
      <div class={`card-wrapper ${role}`}>
        <Card class="bg-error">
          <div class="contents">
            {#each $couple[role].about.contents as content}
              <div class="about-content">
                <span class="label">{content.label}</span>
                <span class="detail">{content.detail}</span>
              </div>
            {/each}
          </div>
          <div class="tags">
            {#each $couple[role].about.tags as tag, i}
              <span class="about-tag">
                <Emoji symbol={tag.emoji} />
                <span class="detail">{tag.detail}</span>
              </span>
            {/each}
          </div>
        </Card>
        <img src={$coupleImage[role]} alt={`${role} picture`} />
      </div>
    {/each}
  </div>
</div>

<style lang="scss">
  .title {
    margin-bottom: 45px;
    .connector {
      font-size: 15px;
      font-weight: 400;
      color: #797a71;
      margin: 0 3px;
    }
  }
  .wrapper {
    width: 90%;
    max-width: 540px;
    margin: auto;
  }
  .card-wrapper {
    margin: 35px 0;
    position: relative;
    img {
      width: 45%;
      max-width: 160px;
      position: absolute;
      bottom: 0;
    }
    .contents {
      width: 60%;
    }
    .tags {
      width: 65%;
    }
  }
  .card-wrapper.groom img {
    right: 0;
  }
  .card-wrapper.bride {
    .contents {
      text-align: right;
      width: 100%;
    }
    .tags {
      text-align: right;
      margin-left: 35%;
    }
  }
  .about-content {
    font-size: 14px;
    line-height: 20px;
    .label {
      font-weight: 600;
      color: #367456;
      font-size: 12px;
      margin-right: 5px;
    }
  }
  .tags br {
    margin: -5px 0;
    display: block;
    content: "";
  }
  .about-tag {
    font-size: 11px;
    color: #797a71;
  }
</style>
