<script lang="ts">
  import { Modal } from "svelte-chota";
  import Flicking, { FlickingPanel } from "@egjs/svelte-flicking";
  import { Arrow, Pagination } from "@egjs/flicking-plugins";
  import "@egjs/svelte-flicking/dist/flicking.css";
  import "@egjs/flicking-plugins/dist/arrow.css";
  import "@egjs/flicking-plugins/dist/pagination.css";
  import { tick } from "svelte";
  import { galleryImages, thumbnails } from "../shared/app.store";

  let isModalOpen = false;
  let currentIdx = 0;

  const plugins = [new Arrow(), new Pagination({ type: "bullet" })];
</script>

<section class="section-gallery">
  <h2 class="title">갤러리</h2>
  <div class="thumbnail-wrapper">
    {#each $thumbnails as src, idx}
      <img
        {src}
        alt="웨딩사진 썸네일"
        on:click={() => {
          currentIdx = idx;
          tick();
          isModalOpen = true;
        }}
      />
    {/each}
  </div>
  <Modal bind:open={isModalOpen}>
    <div class="modal-wrapper">
      <Flicking
        options={{
          circular: true,
          defaultIndex: currentIdx,
          renderOnlyVisible: true,
          noPanelStyleOverride: true,
        }}
        {plugins}
      >
        {#each $galleryImages as src}
          <FlickingPanel>
            <div class="img-wrapper">
              <img {src} alt="웨딩사진" />
            </div>
          </FlickingPanel>
        {/each}
        <svelte:fragment slot="viewport">
          <span class="flicking-arrow-prev hide-xs" />
          <span class="flicking-arrow-next hide-xs" />
          <div class="flicking-pagination" />
        </svelte:fragment>
      </Flicking>
    </div>
  </Modal>
</section>

<style lang="scss">
  .thumbnail-wrapper {
    display: flex;
    flex-flow: row wrap;
    align-items: flex-start;
    justify-content: center;
    img {
      width: 27.3333%;
      margin: 4px;
      cursor: pointer;
    }
  }
  .background {
    opacity: 0.7 !important;
  }
  .modal-wrapper {
    width: 100%;
    max-width: 100%;
  }
  .img-wrapper {
    width: 80vw;
    max-width: 480px;
    height: 120vw;
    max-height: 720px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 3px;
    img {
      width: 100%;
    }
  }
</style>
