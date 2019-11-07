<template>
    <div class="authority_logo" :style="{
        background: background
    }">
        <div class="edge">

        </div>
    </div>
</template>

<script>
    export default {
        name: 'AuthorityLogo',
        props: {
            background: {
                type: String,
                required: true
            }
        }
    };
</script>

<style lang="scss">
    .authority_logo {
        width: 16px;
        background: transparent;
        height: 16px;
        border-radius: 100%;
        position: relative;
        .edge {
            width: 12px;
            height: 1px;
            background: #FFFFFF;
            position: absolute;
            left: 0px;
            top: 8px;
            transform: rotate(75deg);
            &:after {
                content: '';
                display: block;
                width: 12px;
                height: 1px;
                background: #FFFFFF;
                position: absolute;
                left: 1px;
                top: -4px;
                transform: rotate(-145deg)
            }
        }
    }
</style>
