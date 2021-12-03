import Vue from 'vue'
import { Button, Carousel, CarouselItem, Input, Select, Option, Form, FormItem } from 'element-ui'
import lang from 'element-ui/lib/locale/lang/ru-RU'
import locale from 'element-ui/lib/locale'
import './theme/index.css'

locale.use(lang)

Vue.use(Button)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(Input)
Vue.use(Select)
Vue.use(Option)
Vue.use(Form)
Vue.use(FormItem)
