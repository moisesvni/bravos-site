<template>
 <v-app>
    <v-toolbar app height="90" color="black">
      <span class="hidden-sm-and-up mr-2">
        <v-toolbar-side-icon @click="sidebar = !sidebar" dark>
        </v-toolbar-side-icon>
      </span>
      <img src="./assets/logo.png"  height="80">
      <v-toolbar-items class="ml-4 hidden-xs-only" style="height:45px;font-family: 'BenchNine',sans-serif;">
        <v-btn
          color="white"
          flat
          v-for="item in menuItems"
          :key="item.title"
          :to="item.path">
          <span style="font-size:20px">{{ item.title }}</span>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'app',
   computed: {
    ...mapState('menu', ['menuItems'])
  },
  data () {
    return {
      appTitle: 'Bravos',
      sidebar: false
    }
  }
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    max-width: 2000px !important;
  }

 .font-ibm-normal {
    font-weight: 400;
    font-style: normal;
    font-family: 'IBM Plex Sans', sans-serif;
    color: #7d7670;
    font-size: 16px;
    line-height: 1.5;
    letter-spacing: 0px;
  }

  .font-titles {
    font-family: 'IBM Plex Sans', sans-serif !important;
    font-weight: 500 !important;
    font-size: 13px;
    letter-spacing: 2px;
    color: #FFF;
  }

</style>
