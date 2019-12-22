<template>
    <div class="portrait_container">
        <div class="portrait" id="" :class="isLoading ? 'start_por' : ''">
            <img src="../../assets/temp.jpg" alt="" id="portrait">
        </div>
        <div class="animation" :class="isLoading ? 'start' : ''">

        </div>
        <div class="animation" :class="isLoading ? 'start' : ''">

        </div>
        <div class="animation" :class="isLoading ? 'start' : ''">

        </div>
        <div class="animation" :class="isLoading ? 'start' : ''">

        </div>
        <div class="animation" :class="isLoading ? 'start' : ''">

        </div>
        <div class="animation" :class="isLoading ? 'start' : ''">

        </div>
    </div>
</template>

<script>
    export default {
        name: 'Portrait',
        props: {
            isLoading: {
                type: Boolean,
                default: false
            },
            data: {
                required: true
            }
        }
    };
</script>

<style lang="scss">
    .portrait_container {
        position: relative;
        .portrait {
            //animation
            transition: all 0.5s ease;
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
        .animation {
            width: 61px;
            height: 61px;
            border-radius: 100%;
            border: 1px solid transparent;
            position: absolute;
            background: transparent;
            left: 0;
            right: 0;
            top: 0;
            margin: 0 auto;
            transition: transform 0.5s ease;
            transform: rotate(-45deg);
            &:nth-child(odd) {
                border-top: 1px solid transparent;
                border-left: 1px solid transparent;
            }
            &:nth-child(even) {
                border-right: 1px solid transparent;
                border-bottom: 1px solid transparent;
            }
        }
        .start {
            &:nth-child(odd) {
                animation: toLeft 1s infinite;
                animation-delay: 0.5s;
                border-top: 1px solid #5C555C;
                border-left: 1px solid #5C555C;
            }
            &:nth-child(even) {
                animation: toRight 1s infinite;
                animation-delay: 0.5s;
                border-right: 1px solid #5C555C;
                border-bottom: 1px solid #5C555C;
            }
            transform: scale(2.5) translate(0, 50px) rotate(-45deg);
        }
    }
    @keyframes toLeft {
        0% {
            left: 0;
            opacity: 1;
        }
        100% {
            left: -50px;
            opacity: 0;
        }
    }
    @keyframes toRight {
        0% {
            right: 0;
            opacity: 1;
        }
        100% {
            right: -50px;
            opacity: 0;
        }
    }
</style>
