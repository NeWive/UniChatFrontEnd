<template>
    <div id="session_panel">
        <div class="session_list_box">
            <SessionList/>
        </div>
        <div class="session_box">
            <SessionContent/>
        </div>
    </div>
</template>

<script>
    import temp from '../assets/friends.png';
    import SessionList from './elements/SessionList';
    import SessionContent from './elements/SessionContent';
    export default {
        name: 'SessionPanel',
        components: {
            SessionList,
            SessionContent
        },
        data: function () {
            return {
                temp
            };
        }
    };
</script>

<style lang="scss">
    @import "../sassUtils/cleatFixMixin";
    #session_panel {
        height: 100%;
        @include clearFix;
        .session_list_box {
            height: 100%;
            @include clearFix;
            overflow: hidden;
            float: left;
        }
    }
</style>
