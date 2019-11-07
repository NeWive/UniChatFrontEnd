<template>
    <div id="index_main_panel">
        <transition name="fade" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
    export default {
        name: 'SessionIndexPanel'
    };
</script>

<style lang="scss">
    #index_main_panel {
        height: 633px;
        background: #EEF0F3;
        position: relative;
        .fade-enter-active, .fade-leave-active {
            transition: opacity .5s;
        }
        .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
            opacity: 0;
        }

    }
</style>
