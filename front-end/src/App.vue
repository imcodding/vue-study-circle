<template>
  <div>
    <study-menu></study-menu>
    <router-view></router-view>
  </div>
</template>

<script>
import StudyMenu from './components/Menu.vue'
import HomeView from './views/HomeView.vue'
import MyPageView from './views/MyPageView.vue'

export default {
  name: 'App',
  components: {
    StudyMenu,
    HomeView,
    MyPageView
  }
}
</script>

<style>

</style>
