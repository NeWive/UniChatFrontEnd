<template>
    <div class="portrait_container">
        <div class="portrait">
            <img src="../../assets/username.png" alt="">
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Portrait'
    };
</script>

<style lang="scss">
    .portrait_container {
        .portrait {
            width: 62px;
            height: 62px;
            border-radius: 100%;
            background: #17BEBB;
            margin: 0 auto 26px;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            overflow: hidden;
            img {
                width: 100%;
                height: 100%;
                border-radius: 100%;
            }
        }
    }
</style>
