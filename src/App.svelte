<script lang="ts">
  import { Swiper, SwiperSlide } from "swiper/svelte";
  import Home from "./components/Home.svelte";
  import Invitation from "./components/Invitation.svelte";
  import "swiper/css";
  import { onMount } from "svelte";
  import { getMain } from "./lib/api";
  import { response } from "./shared/app.store";

  onMount(async () => {
    const mainData = await getMain();
    response.set(mainData);
  });
</script>

<main>
  <Swiper slidesPerView={1} direction={"vertical"}>
    <SwiperSlide><Home /></SwiperSlide>
    <SwiperSlide><Invitation /></SwiperSlide>
    <!--
    <SwiperSlide><Timeline /></SwiperSlide>
    -->
  </Swiper>
</main>
