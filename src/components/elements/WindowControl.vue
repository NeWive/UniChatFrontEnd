<template>
    <div id="window_control">
        <WindowControlButton type="close" :click-handler="closeHandler"/>
        <WindowControlButton type="minimal" :click-handler="minimalHandler" v-if="hasMinimal"/>
    </div>
</template>

<script>
    import WindowControlButton from './WindowControlButton';
    export default {
        name: 'WindowControl',
        components: {
            WindowControlButton
        },
        props: {
            closeHandler: {
                type: Function,
                required: true
            },
            minimalHandler: {
                type: Function
            },
            hasMinimal: {
                type: Boolean,
                default: true
            }
        }
    };
</script>

<style lang='scss'>
    #window_control {
        display: flex;
        flex-direction: row-reverse;
        .window_control_button {
            margin-right: 19px;
            &:first-child {
                margin-right: 5px;
            }
        }
    }
</style>
