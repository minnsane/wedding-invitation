<script lang="ts">
  import { Swiper, SwiperSlide } from "swiper/svelte";
  import Timeline from "./components/Timeline.svelte";
  import Home from "./components/Home.svelte";
  import Invitation from "./components/Invitation.svelte";
  import { onMount } from "svelte";
  import { response } from "./shared/app.store";
  import "swiper/css";

  const fetchData = async () => {
    const data = await (await fetch("./data.json")).json();
    response.set(data);
  };

  onMount(() => fetchData());
</script>

<main>
  {#await fetchData then}
    <Swiper slidesPerView={1} direction={"vertical"}>
      <SwiperSlide><Home /></SwiperSlide>
      <SwiperSlide><Invitation /></SwiperSlide>
      <SwiperSlide><Timeline /></SwiperSlide>
    </Swiper>
  {/await}
</main>
