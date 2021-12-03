<template>
  <section class="how-works flex">
    <div class="how-works-left">
      <div class="up-header">
        О компании
      </div>
      <h3 class="title white">
        Как мы работаем
      </h3>
      <div class="description white">
        За время работы, мы выработали четкий алгоритм, по которому мы взаимодействуем с заказчиками
      </div>
      <div class="time-line">
        <div v-for="item,i in timeline" :key="i" class="time-line-item">
          <div class="time-line-num">
            0{{ i+1 }}
          </div>
          <div class="time-line-item-text">
            {{ item.name }}
          </div>
        </div>
      </div>
    </div>
    <div class="how-works-right">
      <div class="up-header brown">
        Получить услугу
      </div>
      <h3 class="title">
        Отправить запрос
      </h3>
      <div class="description">
        Нужна консультация по услугам? <br> Оставьте заявку и мы перезвоним вам в ближайшее время
      </div>
      <el-form ref="form" :model="form" label-position="top" :rules="rules">
        <div class="flex">
          <el-form-item class="input" prop="name" label="Имя">
            <el-input v-model="form.name" />
          </el-form-item>
          <el-form-item class="input" prop="phone" label="Телефон">
            <el-input v-model="form.phone" />
          </el-form-item>
        </div>

        <el-form-item class="input select" prop="service" label="Услуга">
          <el-select v-model="form.service">
            <el-option v-for="item,i in services" :key="i" :value="item" :label="item" />
          </el-select>
        </el-form-item>
        <el-button class="orange-button brown-button" :disabled="disabled" :loading="loading" @click="submitForm">
          {{ btnText }}
        </el-button>
      </el-form>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      disabled: false,
      loading: false,
      btnText: 'Отправить',
      timeline: [{
        name: 'Осмотр объекта нашими специалистами'
      },
      {
        name: 'Разработка проекта системы безопасности'
      },
      {
        name: 'Подготовка договора'
      },
      {
        name: 'Монтаж и пуско-наладка системы'
      }
      ],
      form: {
        name: '',
        phone: '',
        service: ''
      },
      rules: {
        name: [{ required: true, message: 'Введите имя', trigger: 'blur' },
          { min: 3, message: 'Имя должно быть длинее 3 символов', trigger: 'blur' }
        ],
        phone: [{ required: true, message: 'Введите телефон', trigger: 'blur' },
          { min: 6, message: 'Укажите корректный номер', trigger: 'blur' }
        ],
        service: [
          { required: true, message: 'Выберите услугу', trigger: 'change' }
        ]
      },
      services: [
        'Видеонаблюдение',
        'Пожарная сигнализация',
        'Охранная сигнализация',
        'СКУД',
        'Домофония',
        'СКС',
        'Умный дом'
      ]
    }
  },
  methods: {
    submitForm () {
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.loading = true
          this.sendData()
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    async sendData () {
      try {
        const response = await fetch('/mailer/mailer.php', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.form)
        })
        if (await response.ok) {
          this.loading = false
          this.disabled = true
          this.btnText = 'Отправлено'
        }
      } catch (err) { console.log(err) }
    }
  }
}
</script>

<style>
.el-form--label-top .el-form-item__label {
    font-size: 16px;
    font-weight: 600;
    color: #333;
}

.select .el-select,
.select {
    width: 100%;
}

.el-select-dropdown__item span {
    color: #333
}

.el-button.brown-button {
    height: 60px;
    border-radius: 36px;
    padding: 10px 40px;
    border: 0;
    margin-top: 20px;
}

.el-button.brown-button span {
    color: white;
    margin-left: 0;
    font-size: 18px;
}

.how-works-left,
.how-works-right {
    flex: 1 1 300px;
    padding-top: 100px;
    padding-bottom: 100px;
}

.how-works-left {
    padding-left: calc(50vw - 585px);
    padding-right: 50px;
    background: url('/img/form-left.jpg') no-repeat center center / cover;
}

.how-works-right {
    padding-right: calc(50vw - 585px);
    padding-left: 50px;
    background: url('/img/form-right.jpg') no-repeat center center / cover;
}

.white {
    color: white !important;
}

.brown {
    color: #ae4c1c!important;
}

.brown-button {
    background: #ae4c1c !important;
    color: white !important;
    padding: 0 50px;
    font-size: 18px;
    font-weight: 600;
}

.brown-button:hover {
    background: #ae4d1cb0 !important;
}

.time-line-item {
    display: flex;
    align-items: center;
    min-height: 100px;
    position: relative;
    padding-left: 15px;
}

.time-line-item:last-child {
    margin-bottom: 0;
}

.time-line-item::after {
    content: '';
    background: rgb(226, 196, 69);
    width: 2px;
    height: 25px;
    bottom: 85px;
    left: 27px;
    position: absolute;
}

.time-line-item:first-child::after {
    display: none;
}

.time-line-num {
    background: rgb(226, 196, 69);
    height: 26px;
    width: 26px;
    font-weight: 800;
    color: #333;
    font-size: 16px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 2;
}

.time-line-num::before {
    background: rgb(226, 196, 69);
    content: '';
    position: absolute;
    height: 30px;
    width: 30px;
    border-radius: 50%;
    z-index: -1;
}

.time-line-num::after {
    background: white;
    content: '';
    position: absolute;
    height: 48px;
    width: 48px;
    border-radius: 50%;
    z-index: -2;
}

.time-line-item-text {
    color: rgb(226, 196, 69);
    font-size: 18px;
    font-weight: 800;
    margin-left: 40px;
}

.input {
    flex: 1 1 150px;
    margin-right: 30px;
}

.input:last-child {
    margin-right: 0;
}

.input input,
.input select {
    width: 100%;
    padding: 15px 30px;
    border-radius: 36px;
    border: none;
    font-size: 18px;
    font-weight: 700;
    color: #333;
    height: 60px;
}

.input select {
    color: rgba(0, 0, 0, 0.5);
    -webkit-appearance: none;
    -moz-appearance: none;
    position: relative;
    z-index: 1;
}

.input-service {
    position: relative;
    z-index: 1;
}

.input-service::after {
    content: "";
    background: url('/img/icons/down.svg') no-repeat center center / contain;
    font-size: inherit;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    display: block;
    text-align: center;
    position: absolute;
    width: 20px;
    top: 42px;
    height: 20px;
    right: 20px;
    z-index: 2;
    pointer-events: none;
    cursor: pointer;
}

.line {
    margin-bottom: 30px;
}

.label-input {
    color: #333;
    margin-bottom: 5px;
    font-weight: 700;
}

.input input:active,
.input select:active,
.input input:focus,
.input select:focus {
    outline: none;
    box-shadow: 0 0 2px 1px rgb(207, 207, 207);
}

@media (max-width: 1200px) {

    .how-works-left,
    .how-works-right {
        padding: 50px 40px;
    }
}

@media (max-width:890px) {
    .how-works {
        flex-direction: column;
    }
}

@media (max-width:890px) {

    .how-works-left,
    .how-works-right {
        padding: 50px 20px;
    }
}

@media (max-width: 600px) {
    .contacts .how-works-left {
        display: none;
    }
}
</style>
