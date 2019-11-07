<template>
    <div
            class="button"
            @click="clickHandler">
        <template v-if="status">
            <Loading/>
        </template>
        <template v-else>
            {{
                content
            }}
        </template>
    </div>
</template>

<script>
    import Loading from './Loading';
    export default {
        name: 'FormButton',
        components: {
            Loading
        },
        props: {
            content: {
                required: true,
                type: String
            },
            clickHandler: {
                type: Function,
                default: () => {}
            },
            status: {
                type: Boolean,
                default: false
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
