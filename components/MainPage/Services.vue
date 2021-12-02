<template>
  <section class="services">
    <div class="container column">
      <div class="up-header">
        что мы предлагаем
      </div>
      <div class="title">
        Наши услуги
      </div>
      <div class="description">
        Здесь вы можете ознакомиться с широким перечнем услуг, которые предлагает наша компания
      </div>
      <div class="services-holder flex">
        <nuxt-link v-for="service in services" :key="service.name" :to="service.slug" class="service-wrapper">
          <img :src="service.acf.mainImage.sizes.medium_large" :alt="service.acf.name" class="service-img">
          <h4 class="service-title">
            {{ service.acf.name }}
          </h4>
          <p class="service-description">
            {{ service.acf.smallDescription }}
          </p>
          <button class="orange-button service-button">
            Узнать больше <span class="fa fa-arrow-right" />
          </button>
          <div class="orange-line" />
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    services: Array
  }
}
</script>

<style>
.column {
    flex-direction: column;
}

.services {
    padding: 100px 0;
}

.column .description {
    max-width: 550px;
    text-align: center;
}

.service-wrapper {
    flex: 1 1 300px;
    position: relative;
    min-height: 280px;
    margin-right: 30px;
    margin-bottom: 30px;
    border-radius: 20px;
    z-index: 1;
    padding: 40px 30px;
    cursor: pointer;
    text-decoration: none;
}

.service-wrapper:nth-child(3n) {
    margin-right: 0;
}

.service-wrapper::before {
    position: absolute;
    content: '';
    background: rgba(37, 37, 37, 0.405);
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 1;
    border-radius: 20px;
}

.service-wrapper::after {
    position: absolute;
    content: '';
    background: rgba(37, 37, 37, 0.87);
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 1;
    transform: scaleX(0);
    opacity: 0;
    transition: all .4s cubic-bezier(0.165, 0.84, 0.44, 1);
    border-radius: 20px;
}

.service-img {
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    border-radius: 20px;
    position: absolute;
    object-fit: cover;
}
.service-title{
    height: 70px;
    z-index: 5;
    position: relative;
    font-size: 24px;
    font-weight: 700;
    color: white;

    width: 70%;
    transition: all .4s cubic-bezier(0.075, 0.42, 0.165, 1);
}
.service-description{
    position: relative;
    z-index: 3;
    color: white;
    font-size: 14px;
    opacity: 0;
    transition: all .4s;
}
.service-button{
    margin-top: 40px;
    z-index: 3;
    height: 30px;
    padding: 0 14px;
    font-size: 12px;
    transition: all .2s;
    position: absolute;
    bottom: 30px;
    left: 30px;
}
.orange-line{
    left: 10%;
    position: absolute;
    width: 80%;
    bottom: -3px;
    height: 3px;
    background: rgb(226, 196, 69);
}
.service-wrapper:hover.service-wrapper::after{
    opacity: 1;
    transform: scaleX(1);
}
.service-wrapper:hover .service-title{
    transform: translateX(15%);
}
.service-wrapper:hover .service-description{
    opacity: 1;
}
.service-wrapper:hover .service-button{
    opacity: 0;
}
@media (max-width: 1000px) {
    .service-wrapper{
        margin: 20px!important;
    }
}
</style>
