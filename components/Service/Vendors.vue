<template>
  <section class="vendors">
      <div class="container">
          <div v-for="vendor in vendors" :key="vendor.name" class="vendor">
              <img class="vendor-img" :src="vendor.image.sizes.medium" :alt="vendor.name">
          </div>
      </div>
  </section>
</template>

<script>
export default {
    props:{
        vendors: Array
    }
}
</script>

<style>
.vendors{
    padding: 50px 0;
}
.vendor{
    flex: 1 1 150px;
    align-items: center;
    display: flex;
    justify-content: center;
}
.vendor-img{
    max-height: 50px;
    max-width: 100%;
}
@media (max-width: 500px){
    .vendor-img{
        max-height: 30px;
    }
}
</style>