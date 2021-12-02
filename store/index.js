const phone = '+7-999-547-78-80'
const url = 'https://test.top-it72.ru/'
const servicesUrl = url + 'wp-json/wp/v2/posts/?categories=2'

export const state = () => ({
  phone,
  url,
  services: '',
  menu: []
})

export const mutations = {
  SET_SERVICES (state, servicesData) {
    state.services = servicesData
  },
  SET_MENU (state, menu) {
    state.menu = menu
  }
}

export const actions = {
  async nuxtServerInit ({ commit }) {
    try {
      const response = await fetch(servicesUrl)
      const responseData = await response.json()
      await commit('SET_SERVICES', responseData)
      const menu = [{
        name: 'Главная',
        link: '/'
      },
      {
        name: 'Услуги',
        link: '',
        submenu: responseData
      },
      {
        name: 'Контакты',
        link: '/contacts'
      }
      ]
      await commit('SET_MENU', menu)
    } catch (err) {
      return err
    }
  }
}
