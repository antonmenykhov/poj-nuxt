<template>
  <section class="main-info">
    <div class="container">
      <div class="main-info__slider">
        <el-carousel height="400px" trigger="click">
          <el-carousel-item v-for="image in images" :key="image.full">
            <img :src="image.sizes.medium_large" alt="Видеонаблюдение">
          </el-carousel-item>
        </el-carousel>
        <div class="orange-line" />
      </div>
      <div class="main-info__text">
        <h3 class="title">
          {{ name }}
        </h3>
        <p class="description" v-html="description" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    images: Array,
    description: String,
    name: String
  }
}
</script>

<style>
.el-carousel__item img{
    height: 100%;
    width: 100%;
    object-fit: cover;

}
.el-carousel{
    border-radius: 20px;
    overflow: hidden;
}
.main-info__slider, .main-info__text{
    flex: 1 1 300px;

}
.main-info__text{
    padding: 50px;
}
.main-info__text .description{
    margin-bottom: 0;
}
.main-info__slider{

    position: relative;
}
@media (max-width:550px){
    .el-carousel__container{
        height: 250px!important;
    }
    .main-info__text{
        padding: 50px 0;
        flex: 1 1 150px;
    }
    .main-info .title{
        font-size: 25px;
    }
}
</style>
