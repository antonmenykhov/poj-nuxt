import Vue from 'vue'
import { Button, Carousel, CarouselItem } from 'element-ui'
import lang from 'element-ui/lib/locale/lang/ru-RU'
import locale from 'element-ui/lib/locale'
import './theme/index.css'

locale.use(lang)

Vue.use(Button)
Vue.use(Carousel)
Vue.use(CarouselItem)
