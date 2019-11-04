<template>
    <div id="window_control">
        <WindowControlButton type="close" :click-handler="closeWindow"/>
        <WindowControlButton type="minimal" :click-handler="minimalWindow"/>
    </div>
</template>

<script>
    import WindowControlButton from './WindowControlButton';
    export default {
        name: 'WindowControl',
        components: {
            WindowControlButton
        },
        methods: {
            closeWindow: function () {
                alert('close');
            },
            minimalWindow: function () {
                alert('minimal');
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
                margin-right: 0;
            }
        }
    }
</style>
