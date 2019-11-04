<template>
    <div
            class="button"
            @click="clickHandler">
        {{
            content
        }}
    </div>
</template>

<script>
    export default {
        name: 'FormButton',
        props: {
            content: {
                required: true,
                type: String
            },
            clickHandler: {
                type: Function,
                default: () => {}
            }
        }
    };
</script>

<style lang="scss">
    @import "../../sassUtils/fontMixin";
    .button {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 6px 0 5px;
        width: 100%;
        background: #17BEBB;
        color: #FDF9FD;
        @include fontMixin(25px, Centaur, bold, 26px);
        cursor: pointer;
        border-radius: 10px;
    }
</style>
