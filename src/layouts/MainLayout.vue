<template>
  <q-layout view="lHh Lpr lFf">
  <div>
    <q-layout view="hHh Lpr lff" container style="height: 100vh" >
      <q-header  class="Header">
        <q-toolbar>
          <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
          <q-toolbar-title class="Title">MultInfo</q-toolbar-title>
        </q-toolbar>
      </q-header>

      <q-drawer
        v-model="drawer"
        show-if-above
        :mini="miniState"
        @mouseover="miniState = false"
        @mouseout="miniState = true"
        :width="300"
        :breakpoint="500" class="Header">

        <q-scroll-area class="fit">
                <q-list>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
        </q-scroll-area>
      </q-drawer>
      <q-page-container>
              <router-view />
      </q-page-container>
    </q-layout>
  </div>
  </q-layout>
</template>
<script>
import { defineComponent, ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'
const linksList = [
  {
    title: 'Home',
    icon: 'home',
    link: ''
  },
  {
    title: 'Adicionar',
    icon: 'add',
    link: 'MyApi'
  },
  {
    title: 'Portfolio',
    icon: 'people',
    link: 'Portfolio'
  },
  {
    title: 'Sobre nós',
    icon: 'book',
    link: 'Sobre'
  },
  {
    title: 'Relógio',
    icon: 'watch',
    link: 'Relogio'
  },
    {
    title: 'Therion',
    caption: '@ju.liano',
  }
]
export default defineComponent({
  name: 'MainLayout',
  components: {
    EssentialLink,
  },
  setup () {
    const leftDrawerOpen = ref(false)
    return {
      essentialLinks: linksList,
      drawer:ref(false),
      miniState:ref(true),
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      },
    }
  }
})
</script>
