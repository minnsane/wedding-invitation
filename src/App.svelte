<script lang="ts">
  import { Swiper, SwiperSlide } from "swiper/svelte";
  import Timeline from "./components/Timeline.svelte";
  // import Home from "./components/Home.svelte";
  import Home from "./components/temp/Home.svelte";
  import Invitation from "./components/Invitation.svelte";
  import { onMount } from "svelte";
  import { getMain } from "./lib/api";
  import "swiper/css";
  import Loading from "./components/temp/Loading.svelte";
</script>

<main>
  <Swiper slidesPerView={1} direction={"vertical"}>
    <SwiperSlide><Home /></SwiperSlide>
    <SwiperSlide><Loading /></SwiperSlide>
    <!--
    <SwiperSlide><Invitation /></SwiperSlide>
    <SwiperSlide><Timeline /></SwiperSlide>
    -->
  </Swiper>
</main>
