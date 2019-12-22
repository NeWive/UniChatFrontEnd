<template>
  <div id="Init">
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'Init'
  };
</script>

<style lang="scss">
  @import './init';
  #Init {
    overflow: hidden;
    .fade-enter-active, .fade-leave-active {
      transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
      opacity: 0;
    }

    .list-enter, .list-leave-to
      /* .list-complete-leave-active for below version 2.1.8 */ {
      opacity: 0;
      transform: translateX(-30px);
    }
    /*.list-leave-active {*/
    /*  position: absolute;*/
    /*}*/
    .list-move {
      transition: transform .5s;
    }
  }
</style>
