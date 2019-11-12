<template>
    <div id="session_panel">
        <MessageLog/>
        <div class="session_list_box">
            <SessionList/>
        </div>
        <SessionContent/>
    </div>
</template>

<script>
    import temp from '../assets/friends.png';
    import SessionList from './elements/SessionList';
    import SessionContent from './elements/SessionContent';
    import MessageLog from './elements/MessageLog';
    export default {
        name: 'SessionPanel',
        components: {
            SessionList,
            SessionContent,
            MessageLog
        },
        data: function () {
            return {
                temp
            };
        },
        computed: {
            isMessageLogOn: {
                get () {
                    return this.$store.state.isMessageLogOn;
                }
            }
        }
    };
</script>

<style lang="scss">
    @import "../sassUtils/cleatFixMixin";
    #session_panel {
        position: absolute;
        overflow: hidden;
        width: 100%;
        height: 100%;
        //@include clearFix;
        .session_list_box {
            height: 100%;
            @include clearFix;
            float: left;
        }
    }
</style>
