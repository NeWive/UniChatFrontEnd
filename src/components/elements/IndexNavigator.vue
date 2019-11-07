<template>
    <div id="index_navigator">
        <div class="user_box">
            <UserInfo/>
        </div>
        <div class="link_box">
            <IndexNavigatorLink/>
        </div>
        <div class="control_box">
            <IndexNavControl/>
        </div>
    </div>
</template>

<script>
    import UserInfo from './UserInfo';
    import IndexNavigatorLink from './IndexNavigatorLink';
    import IndexNavControl from './IndexNavControl';
    export default {
        name: 'IndexNavigator',
        components: {
            UserInfo,
            IndexNavigatorLink,
            IndexNavControl
        }
    };
</script>

<style scoped>
    #index_navigator {
        background: #17BEBB;
        padding: 11px 38px 6px 22px;
        display: flex;
        justify-content: space-between;
        position: relative;
    }
    .link_box {
        width: 125px;
        display: inline-block;
        position: absolute;
        left: 0;
        right: 0;
        margin: 0 auto;
    }
</style>
