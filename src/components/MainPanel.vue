<template>
    <div id="main_panel">
        <WindowControl/>
        <div class="title">
            <img src="../assets/title.png" alt="">
        </div>
        <div id="form_container">
            <transition name="fade" mode="out-in">
                <router-view class="view"/>
            </transition>
        </div>
    </div>
</template>

<script>
    import WindowControl from './elements/WindowControl';
    export default {
        name: 'MainPanel',
        components: {
            WindowControl
        }
    };
</script>

<style lang="scss">
    @import '../sassConfig/indexPanel';
    #main_panel {
        padding: 18px 12px 21px 15px;
        @include IndexBackgroundConfig;
        width: 500px;
        height: 600px;
        .title {
            display: flex;
            justify-content: center;
            margin: 4px -20px 29px 0;
        }
        #form_container {
            padding: 15px 0 28px;
            background: #FFFFFF;
            border-radius: 10px;
            /*border: 1px solid #286867;*/
            box-shadow: 2px 4px 8px -2px #060001;
            /*.fade-enter-to, .fade-leave {*/
            /*    position: absolute;*/
            /*}*/
            position: relative;
            .fade-enter-active, .fade-leave-active {
                transition: opacity .5s;
            }
            .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
                opacity: 0;
            }
        }
    }
</style>
