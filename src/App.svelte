<script lang="ts">
  import { Swiper, SwiperSlide } from "swiper/svelte";
  import Timeline from "./components/Timeline.svelte";
  import Main from "./components/Main.svelte";

  import "swiper/css";
</script>

<main>
  <Swiper slidesPerView={1} direction={"vertical"}>
    <SwiperSlide><Main /></SwiperSlide>
    <SwiperSlide><Timeline /></SwiperSlide>
  </Swiper>
</main>
