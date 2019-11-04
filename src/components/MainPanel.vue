<template>
    <div id="main_panel">
        <WindowControl/>
        <div class="title">
            <img src="../assets/title.png" alt="">
        </div>
        <router-view/>
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
        @include IndexSizeConfig;
        margin: 20px auto;
        .title {
            display: flex;
            justify-content: center;
            margin: 4px -20px 29px 0;
        }
    }
</style>
