<script lang="ts">
  import "chota";
  import Home from "./components/Home.svelte";
  import Invitation from "./components/Invitation.svelte";
  import Map from "./components/Map.svelte";
  import { onMount } from "svelte";
  import { getMain } from "./lib/api";
  import { response } from "./shared/app.store";
  import About from "./components/About.svelte";

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
  <!--
  <Timeline />
  -->
</main>

<style>
  :global(:root) {
    --bg-color: #f4f4f4;
    --color-lightGrey: rgba(255, 255, 255, 0.5);
    --color-error: #fff;
    --font-family: "IBM Plex Sans KR", sans-serif;
  }
</style>
