<script lang="ts">
  import "chota";
  import Home from "./components/Home.svelte";
  import Invitation from "./components/Invitation.svelte";
  import Map from "./components/Map.svelte";
  import About from "./components/About.svelte";
  import Timeline from "./components/Timeline.svelte";
  import Gallery from "./components/Gallery.svelte";
  import { onMount } from "svelte";
  import { getMain } from "./lib/api";
  import { response } from "./shared/app.store";

  onMount(async () => {
    const mainData = await getMain();
    response.set(mainData);
  });
</script>

<main>
  <Home />
  <Invitation />
  <Map />
  <About />
  <Timeline />
  <Gallery />
</main>

<style>
  :global(:root) {
    --bg-color: #f4f4f4;
    --color-lightGrey: rgba(255, 255, 255, 0.5);
    --color-error: #fff;
    --font-family: "IBM Plex Sans KR", sans-serif;
  }
</style>
