<template>
    <div id="message_log">

    </div>
</template>

<script>
    export default {
        name: 'MessageLog'
    };
</script>

<style lang="scss">
    #message_log {
        float: right;
        width: 100px;
        height: 100%;
        background: red;
        position: relative;
        z-index: 9999;
    }
</style>
