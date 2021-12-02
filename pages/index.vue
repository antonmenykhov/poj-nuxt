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
