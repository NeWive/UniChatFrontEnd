<template>
    <div id="session_content">
        <SessionDetailed/>
    </div>
</template>

<script>
    import SessionDetailed from './SessionDetailed';
    export default {
        name: 'SessionContent',
        components: {
            SessionDetailed
        }
    };
</script>

<style lang="scss">
    #session_content {
        background: #FFFFFF;
        height: 100%;
    }
</style>
