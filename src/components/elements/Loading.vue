<template>
    <div class="loading">

    </div>
</template>

<script>
    export default {
        name: 'Loading'
    };
</script>

<style lang="scss">
    @keyframes loading {
        0% {
            transform: rotate(0);
        }
        100% {
            transform: rotate(360deg);
        }
    }
    .loading {
        border-radius: 100%;
        width: 21px;
        height: 21px;
        border: 2px solid #17BEBB;
        border-top-color: #FFFFFF;
        animation: loading 1s infinite;
    }
</style>
