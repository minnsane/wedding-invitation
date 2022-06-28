<script lang="ts">
  import { Swiper, SwiperSlide } from "swiper/svelte";
  import Timeline from "./components/Timeline.svelte";
  import Home from "./components/Home.svelte";

  import "swiper/css";
</script>

<main>
  <Swiper slidesPerView={1} direction={"vertical"}>
    <SwiperSlide><Home /></SwiperSlide>
    <SwiperSlide><Timeline /></SwiperSlide>
  </Swiper>
</main>
