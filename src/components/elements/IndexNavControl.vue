<template>
    <div id="index_nav_control">
        <div class="minimal">
            <img :src="min" alt="">
        </div>
        <div class="maximal">
            <img :src="max" alt="">
        </div>
        <div class="close">
            <img :src="close" alt="">
        </div>
    </div>
</template>

<script>
    import max from '../../assets/max.png';
    import min from '../../assets/min.png';
    import close from '../../assets/close.png';
    export default {
        name: 'IndexNavControl',
        data: function () {
            return {
                max,
                min,
                close
            };
        }
    };
</script>

<style lang="scss">
    #index_nav_control {
        padding-top: 10px;
        display: flex;
        justify-content: center;
        .minimal, .maximal, .close {
            width: 21px;
            height: 21px;
            opacity: 0.75;
            cursor: pointer;
            transition: opacity 0.5s ease;
            margin-right: 26px;
            &:last-child {
                margin-right: 0;
            }
            &:hover {
                opacity: 1;
            }
        }
        .maximal, .close {
            img {
                width: 100%;
                height: 100%;
            }
        }
    }
</style>
