<template>
     <transition name="fade" mode='out-in'>
        <router-view></router-view>
     </transition>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
  .fade-enter-active,.fade-leave-active {
      transition: opacity .2s ease;
  }
  .fade-enter,.fade-leave-active {
      opacity: 0;
  }
</style>
