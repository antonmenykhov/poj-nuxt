<template>
  <section class="consultation">
    <div class="consultation-tab">
      <div class="big-upheader">
        Бесплатная консультация
      </div>
      <a class="big-tel" :href="`tel:${phone}`">{{ phone }}</a>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    phone () {
      return this.$store.state.phone
    }
  }
}
</script>

<style>
.consultation {
    background: rgb(37, 50, 55);
    padding: 50px 0;
    display: flex;
    justify-content: center;
    align-items: center;
}

.consultation-tab {
    border: 4px solid rgb(226, 196, 69);
    max-width: 800px;
    width: 100%;
    text-align: center;
    padding: 30px 0;
    position: relative;
    z-index: 1;
}

.big-upheader {
    color: rgb(226, 196, 69);
    font-size: 30px;
    font-weight: 800;
    position: relative;
    z-index: 5;
}

.big-tel {
    font-size: 60px;
    font-weight: 800;
    color: white;
    text-decoration: none;
    position: relative;
    z-index: 5;
}

.consultation-tab::after {
    content: '';
    background: url('/img/phone-bg.png') no-repeat center center / contain;
    height: 110%;
    width: calc(100% - 80px);
    position: absolute;
    top: -5%;
    left: 40px;
    z-index: 3;
    background-color: rgb(37, 50, 55);
}

.consultation-tab::before {
    content: '';
    height: calc(100% - 80px);
    width: 110%;
    position: absolute;
    top: 40px;
    left: -5%;
    z-index: 2;
    background-color: rgb(37, 50, 55);
}

@media (max-width:900px) {
    .consultation {
        padding: 40px;
    }
}
@media (max-width: 630px) {
    .big-upheader{
        font-size: 20px;
    }
    .big-tel{
        font-size: 30px;
    }
}
</style>
