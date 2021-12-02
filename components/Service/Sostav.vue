<template>
  <section v-if="sostav.length > 0" class="sostav">
    <h2 class="title">
      Состав системы
    </h2>
    <div class="container">
      <div v-for="item in sostav" :key="item.name" class="sostav-item">
        <div class="image-wrapper">
          <img class="sostav-img" :src="item.image.sizes.medium" :alt="item.name">
        </div>
        <h5 class="task-header">
          {{ item.name }}
        </h5>
        <p class="task-description">
          {{ item.description }}
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    sostav: Array
  }
}
</script>

<style>
.sostav .title {
    width: 100%;
    text-align: center;
    box-sizing: border-box;
}
.sostav{
    padding: 50px 0;
    margin-bottom: 50px;
}
.sostav .container{
    align-items: flex-start;
}
.sostav-item {
    margin-top: 30px;
    margin-right: 10px;
    margin-left: 10px;
    flex: 1 1 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.image-wrapper {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    overflow: hidden;
    border: 5px solid #E3C64A;
    margin-bottom: 20px;
}

.sostav-img {
    height: 100%;
    width: 100%;
    object-fit: contain;

}
</style>
