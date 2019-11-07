<template>
    <div id="channel_box">
        <div class="split_line"></div>
    </div>
</template>

<script>
    export default {
        name: 'ChannelBox'
    };
</script>

<style lang="scss">
    #channel_box {
        height: 223px;
        .split_line {
            width: 240px;
            height: 1px;
            box-sizing: border-box;
            background: #D9DDE3;
            padding: 0 24px;
        }
    }
</style>
