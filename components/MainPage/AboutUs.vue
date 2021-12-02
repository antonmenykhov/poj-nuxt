<template>
  <section class="about-us">
    <div class="container">
      <div class="flex about-card">
        <div class="about-text">
          <div class="up-header">
            О компании
          </div>
          <h3 class="title">
            Все для Вашей <span>Безопасности</span>
          </h3>
          <div class="sub-header">
            Предлагаем решения для обеспечения безопасности любого обьекта, от квартиры до предприятия
          </div>
          <div class="description">
            Наша компания более 5 лет занимается системами безопасности. <br> Мы предоставляем широкий комплекс услуг: проектирование, поставка, монтаж, пуско-наладка, а так же модернизация существующих систем безопасности
          </div>
          <button class="orange-button">
            Узнать больше <span> <font-awesome-icon :icon="['fas', 'arrow-right']" /></span>
          </button>
        </div>
        <div class="about-image">
          <img src="/img/about-photo.png" alt="">
        </div>
      </div>
      <div class="flex">
        <div v-for="counter in counters" :key="counter.name" class="counter">
          <span class="counter-num">{{ counter.num }}</span>
          <div class="counter-name">
            {{ counter.name }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      counters: [{
        name: 'Обьектов защищено',
        num: 50
      },
      {
        name: 'Лет опыта',
        num: 5
      },
      {
        name: 'Профессионалов',
        num: 10
      }
      ]
    }
  }
}
</script>

<style>
.about-us .container {
    flex-direction: column;
}

.flex {
    display: flex;
    width: 100%;
    justify-content: space-between;
    flex-wrap: wrap;
}

.up-header {
    color: #e2c445;
    font-size: 18px;
    margin-bottom: 12px;
    text-transform: uppercase;
    font-weight: 700;
}

.title {
    font-size: 48px;
    font-weight: 900;
    color: #333;
    margin-bottom: 16px;
}

.sub-header {
    font-size: 18px;
    line-height: 28px;
    color: #333;
    font-weight: 600;
    margin-bottom: 32px;
}

.description {
    line-height: 28px;
    font-size: 16px;
    color: #333;
    margin-bottom: 50px;
}

.orange-button {
    height: 50px;
    background: #e2c445;
    border: 0;
    border-radius: 36px;
    padding: 0 30px;
    font-weight: 800;
    color: #333;
    cursor: pointer;
    transition: all 2s cubic-bezier(0.165, 0.84, 0.44, 1);
}
.line{
    align-items: flex-end;
}

.orange-button:hover {
    background: #e2c545a6;
}

.orange-button span {
    color: #333;
    margin-left: 10px;
}

.about-text {
    flex: 1 1 300px;
    padding-right: 10px;
}

.about-image {
    box-sizing: border-box;
    flex: 1 1 300px;
    text-align: right;
    padding: 50px 0 0;
    position: relative;
}

.about-image img {
    box-sizing: border-box;
    object-fit: cover;
}

.about-card {
    margin: 100px 0;
}

.counter {
    padding: 30px;
    text-align: center;
    background: rgb(244, 245, 245);
    flex: 1 1 250px;
    margin-right: 40px;
    margin-bottom: 100px;
    border-radius: 15px;
}

.counter:last-child {
    margin-right: 0;
}

.counter-num {
    font-size: 72px;
    font-weight: 800;
    line-height: 72px;
}

.counter-name {
    font-size: 16px;
    color: #333;
    font-weight: 800;
}

@media (max-width: 980px) {
    .about-image {
        overflow: hidden;
        border-radius: 20px;
    }

    .about-image img {
        border-radius: 20px;
        width: 100%;
    }
}
@media (max-width: 880px){
    .counter{
        margin: 20px 0px!important
    }
}
@media (max-width: 800px) {
    .about-image {
        display: none;
    }
}
@media (max-width :600px){
    .up-header{
        font-size: 16px;
    }
    .title{
        font-size: 30px;
        line-height: 34px;
    }
    .sub-header{
        font-size: 16px;
        line-height: 20px;
        margin-bottom: 20px;
    }
    .description{
    font-size: 16px;
    line-height: 20px;
    margin-bottom: 20px;
    }
}
@media (max-width: 375px) {
    .line .input{
        margin-right: 0!important;
    }
}
</style>
