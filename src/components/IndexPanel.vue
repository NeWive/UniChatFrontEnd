<template>
    <div id="index_panel">
        <IndexNavigator/>
        <SessionIndexPanel/>
    </div>
</template>

<script>
    import SessionIndexPanel from './IndexMainPanel';
    import IndexNavigator from './elements/IndexNavigator';
    export default {
        name: 'IndexPanel',
        components: {
            IndexNavigator,
            SessionIndexPanel
        }
    };
</script>

<style lang="scss">
    #index_panel {
        width: 1200px;
        height: 700px;
    }
</style>
