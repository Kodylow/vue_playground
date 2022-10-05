<template>
  <header-home />
  <div>
    <router-view />
  </div>
  <footer-home />
</template>

<script>
import HeaderHome from "./components/HeaderHome.vue";
import FooterHome from "./components/FooterHome.vue";

export default {
  name: "App",
  components: {
    HeaderHome,
    FooterHome,
  },
};
</script>

<style></style>
