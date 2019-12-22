<template>
    <div id="index_panel">
        <IndexNavigator/>
        <SessionIndexPanel/>
        <transition name="fade" mode="out-in">
            <Portal v-if="isPortalOn"/>
        </transition>
    </div>
</template>

<script>
    import SessionIndexPanel from './IndexMainPanel';
    import IndexNavigator from './elements/IndexNavigator';
    import Portal from './Portal';
    export default {
        name: 'IndexPanel',
        components: {
            IndexNavigator,
            SessionIndexPanel,
            Portal
        },
        computed: {
            isPortalOn: {
                get () {
                    return this.$store.state.portal.isPortalOn;
                }
            }
        },
        mounted () {
            console.log(this.$store.state.userInfo);
        }
    };
</script>

<style lang="scss">
    #index_panel {
        width: 1200px;
        height: 700px;
        position: relative;
    }
</style>
