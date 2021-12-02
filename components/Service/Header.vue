<template>
  <header class="service-header">
    <div class="container service-container">
      <div class="service-header-text">
        <h4 class="service-up-header">
          Система
        </h4>
        <h1 class="white" v-html="name" />
        <p class="description white serv-description">
          {{ smallDescription }}
        </p>
        <button class="orange-button">
          Подробнее<span class="fa fa-arrow-right" />
        </button>
      </div>
      <div class="service-header-img flex">
        <div class="image-container">
          <img :src="mainImage.sizes.medium_large" :alt="name">
          <div class="orange-line" />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    name: String,
    mainImage: Object,
    smallDescription: String
  }
}
</script>

<style>
.service-header {
    background-color: #253237;
}
.service-header-img.flex{
    width: 70%;
}
.service-container{
    position: relative;
    justify-content: flex-end;
}
.image-container{
    height: 500px;
    width: 100%;
    position: relative;
    text-align: center;
}
.image-container::after{
    content:'';
    position: absolute;
    top:0;
    right: 0;
    left: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.26);
    z-index: 4;
    border-radius: 20px;
}
.image-container img{
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 20px;
}
.service-header .container{
    padding: 150px 0;
}
.service-header-text{
    width: 100%;
    position: absolute;
    left: 0;
    z-index: 5;
}
.service-header-text::before{
    position: absolute;
    content: '';
    left: 0;
    top: -25px;
    background: url('/img/icons/sheild.png') no-repeat center center / contain;
    height: 350px;
    width: 30%;
}
h1{
    font-size: 60px;
    max-width: 700px;
}

.serv-description.description{
    margin-top: 20px;
    max-width: 500px;
    color: white;
}
.service-up-header{
    font-size: 40px;
    color: rgb(227,198,74)
}
@media (max-width:1200px){
   .service-header .service-container{
        padding: 100px 20px;
    }
    .service-header-text{
        left: 20px;
    }

}
@media (max-width:800px){
    .image-container{
        height: 350px;
    }
}
@media (max-width:800px){
    .service-header-text{
        margin-top: 50px;
        position: static;
    }
    .image-container{display: none;
    }
    .service-up-header{
        font-size: 30px;
    }
    h1{
        font-size: 40px;
    }
    .serv-description{
        font-size: 16px;
    }
}
@media (max-width: 400px){
    h1{
        font-size: 25px;
    }
    .service-up-header{
        font-size: 18px;
    }
}
</style>
