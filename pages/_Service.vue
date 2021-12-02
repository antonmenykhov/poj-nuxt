<template>
  <div class="service">
    <ServiceHeader :name="service.acf.name" :main-image="service.acf.mainImage" :small-description="service.acf.smallDescription" />
    <ServiceVendors :vendors="service.acf.brands" />
    <ServiceMainInfo :name="service.acf.name" :images="service.acf.images" :description="service.acf.description" />
    <ServiceTasks :tasks="service.acf.tasks" />
    <ServiceSostav :sostav="service.acf.sostav" />
    <GeneralHowWorks />
    <GeneralPhoneCons />
  </div>
</template>

<script>
export default {
  validate ({ params, store }) {
    if (store.state.services.find(elem => elem.slug === params.Service)) {
      return true
    } else {
      return false
    }
  },
  async asyncData ({ params, store }) {
    const service = await store.state.services.find(elem => elem.slug === params.Service)
    return { service }
  },
  scrollTop: true,
  head () {
    return {
      title: this.service.acf.name + ' в Тюмени | ReGuard',
      meta: [
        { hid: 'description', name: 'description', content: this.service.acf.smallDescription }
      ]
    }
  }

}
</script>

<style>
.service .container {
    flex-wrap: wrap;
}
</style>
