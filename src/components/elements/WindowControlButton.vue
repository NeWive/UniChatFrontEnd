<template>
    <div class="window_control_button" @click="clickHandler">
        <div class="minimal" v-if="type === 'minimal'">

        </div>
        <div class="close" v-if="type === 'close'">

        </div>
    </div>
</template>

<script>
    export default {
        name: 'WindowControlButton',
        props: {
            type: {
                type: String,
                required: true
            },
            clickHandler: {
                type: Function,
                default: () => {
                    console.log('default');
                }
            }
        }
    };
</script>

<style lang="scss">
    .window_control_button {
        width: 17px;
        height: 17px;
        border-radius: 100%;
        border: 1px solid #46767A;
        transition: border-color 0.5s ease;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        .minimal {
            width: 10px;
            height: 1px;
            background: #46767A;
        }
        .close {
            width: 12px;
            height: 1px;
            background: #46767A;
            position: relative;
            transform: rotate(45deg);
            &:after {
                background: inherit;
                position: absolute;
                height: 1px;
                width: 100%;
                transform: rotate(90deg);
                content: '';
                display: inline-block;
            }
        }
        .minimal, .close {
            transition: background-color 0.5s ease;
        }
        &:hover {
            border-color: #FFFFFF;
            .minimal, .close {
                background: #FFFFFF;
            }
        }
    }
</style>
