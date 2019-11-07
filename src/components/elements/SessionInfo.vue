<template>
    <div id="session_info">
        <SessionChannel/>
        <SessionMember/>
    </div>
</template>

<script>
    import SessionChannel from './SessionChannel';
    import SessionMember from './SessionMember';
    export default {
        name: 'SessionInfo',
        components: {
            SessionChannel,
            SessionMember
        }
    };
</script>

<style lang="scss">
    #session_info {
        border-right: 1px solid #D9DDE3;
        display: inline-block;
        height: 100%;
        box-sizing: border-box;
    }
</style>
