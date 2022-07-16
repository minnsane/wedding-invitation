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
</script>

<main>
  <Home />
  <Invitation />
  <Timeline />
</main>
