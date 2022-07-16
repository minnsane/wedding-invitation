<script lang="ts">
  import Home from "./components/Home.svelte";
  import Invitation from "./components/Invitation.svelte";
  import Timeline from "./components/Timeline.svelte";
  import { afterUpdate, onMount } from "svelte";
  import { getMain } from "./lib/api";
  import { response } from "./shared/app.store";

  const MAX_MOBILE_SCREEN_WIDTH = 512;

  let innerWidth;

  onMount(async () => {
    const mainData = await getMain();
    response.set(mainData);
  });

  afterUpdate(() => {
    if (innerWidth >= MAX_MOBILE_SCREEN_WIDTH) {
      alert("현재는 모바일 버전만 지원하고 있어요. 조금만 기다려주세요!");
    }
  });
</script>

<svelte:window bind:innerWidth />

<main>
  {#if innerWidth < MAX_MOBILE_SCREEN_WIDTH}
    <Home />
    <Invitation />
    <Timeline />
  {/if}
</main>
