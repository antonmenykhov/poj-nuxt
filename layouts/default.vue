<template>
  <div class="common-layout">
    <top-line />
    <Nuxt />
  </div>
</template>

<script>
import TopLine from '~/components/General/TopLine.vue'
export default {
  components: { TopLine }
}
</script>

<style>

* {
    font-family: 'Fira Sans', sans-serif;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
</style>
