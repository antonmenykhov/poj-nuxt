<template>
  <div class="top-line">
    <div class="container">
      <div class="logo" @click="$router.push({path:'/'})">
        <div class="logo-img" />
        <div class="logo-text">
          <h2>ReGuard</h2><span>CCTV and security</span>
        </div>
      </div>
      <div class="menu">
        <ul class="main-menu" :class="{'active':active}">
          <li v-for="item,i in menu" :key="i" class="menu-item">
            <nuxt-link v-if="item.link" :to="item.link">
              {{ item.name }}
            </nuxt-link>
            <a v-if="!item.link" @click="openSub('sub'+i)">{{ item.name }}</a>
            <ul v-if="item.submenu" :id="'sub'+i" class="sub-menu">
              <li v-for="subitem,j in item.submenu" :key="j" class="menu-item">
                <nuxt-link :to="subitem.slug">
                  {{ subitem.acf.name }}
                </nuxt-link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <button class="burger" :class="{'active':active}" @click="active = !active">
        <font-awesome-icon :icon="['fas', 'bars']" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      active: false
    }
  },
  computed: {
    menu () {
      return this.$store.state.menu
    }
  },
  methods: {
    openSub (id) {
      if (document.body.clientWidth <= 700) {
        if (document.getElementById(id).offsetHeight === 0) {
          document.getElementById(id).style.height = `${document.getElementById(id).scrollHeight}px`
        } else {
          document.getElementById(id).style.height = '0px'
        }
      }
    }
  }
}
</script>

<style>
.logo {
    display: flex;
    align-items: center;
    padding: 30px 0;
}

.logo-img {
    height: 60px;
    width: 60px;
    background: url('/img/logo.png') no-repeat left center / contain;
}

.logo-text h2 {
    color: white;
    font-size: 35px;
    line-height: 35px;
}

.logo-text span {
    font-size: 14px;
}

.top-line {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    z-index: 800;

}

.container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 1170px;
    margin: 0 auto;
}

.main-menu {
    display: flex;
}

.menu-item a {
    color: white;
    font-weight: 800;
    font-size: 16px;
    text-decoration: none;
    transition: all .2s;
    text-transform: uppercase;
}

.menu-item {
    list-style: none;
    position: relative;
    padding: 20px;

}

.sub-menu {
    background: white;
    border-radius: 25px;
    display: none;
    position: absolute;
    top: 50px;
    left: -50px;
    flex-direction: column;
    padding: 10px 25px;
    transition: all .3s;

}

.menu-item a:hover {
    color: #e2c445
}

.menu-item:hover .sub-menu,
.sub-menu:hover {
    display: flex;
}

.sub-menu a {
    color: #333333
}

.sub-menu .menu-item {
    margin: 10px 0;
    padding: 0;
}

.menu-item:last-child {
    padding-right: 0;
}

.burger {
    display: none;
}

@media (max-width: 710px) {
    .top-line .container {
        position: relative;
    }

    .main-menu {
        position: fixed;
        flex-direction: column;
        height: 100vh;
        top: 0;
        right: -1px;
        width: 250px;
        background-color: white;
        padding-top: 80px;
        transform: translateX(300px);
        transition: all .3s cubic-bezier(0.165, 0.84, 0.44, 1);
    }

    .main-menu.active {
        transform: translateX(0);
    }

    .menu-item a {
        color: #333;
    }

    .burger {
        display: flex;
        font-size: 30px;
        color: white;
        background: transparent;
        border: 0;
        cursor: pointer;
        position: relative;
        z-index: 500;
        transition: all .3s;
    }

    .burger.active {
        color: #333;

    }

    .sub-menu {
        box-sizing: border-box;
        position: static;
        display: block;
        padding: 0px 10px 0px 10px;
        transition: all .3s cubic-bezier(0.165, 0.84, 0.44, 1);
        height: 0;
        overflow: hidden;
    }

    .menu-item {
        padding: 10px 20px;
    }

    .sub-menu .menu-item {
        padding: 0px;
        margin: 5px
    }

}

@media (max-width: 500px) {
    .logo {
        padding: 20px 0;
    }

    .logo-img {
        width: 60px;
    }
}
</style>
