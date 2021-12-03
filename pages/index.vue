<template>
  <div class="home">
    <MainPageSlider :slides="info" />
    <MainPageIcons />
    <MainPageAboutUs />
    <GeneralHowWorks />
    <MainPageServices :services="info" />
    <GeneralPhoneCons />
  </div>
</template>

<script>

// @ is an alias to /src

export default {
  transition: 'slide-left',
  async asyncData ({ store }) {
    const info = await store.state.services
    return { info }
  },
  scrollTop: true,
  head: {
    title: 'Системы безопасности в Тюмени | ReGuard',
    meta: [
      { hid: 'description', name: 'description', content: 'Компания Reguard более 5 лет занимается монтажем, наладкой и проектированием различных систем безопасности' }
    ]
  }

}
</script>
<style lang="css">

.slide-left-enter-active {
    animation-name: slide-left-in;
    animation-duration: .5s;
}

@keyframes slide-left-in {
    0% {
        transform: translate3d(0, -100%, 0);
        opacity: 0;
    }
    100% {
        transform: translate3d(0, 0, 0);
        opacity: 1;
    }
}

</style>
