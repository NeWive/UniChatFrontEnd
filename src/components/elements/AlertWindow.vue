<template>
    <div id="alert_window">
        <div
                class="alert_window_layer"
                @click="cancelHandler"></div>
        <div class="alert_window_container">
            <div class="top_panel">
                <WindowControl :close-handler="cancelHandler" :has-minimal="false"/>
            </div>
            <div class="message">
                {{
                    this.message
                }}
            </div>
            <div class="button_box">
                <div
                        id="confirm_button"
                        @click="confirmHandler">
                    确定
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import WindowControl from './WindowControl';
    export default {
        name: 'AlertWindow',
        components: {
            WindowControl
        },
        props: {
            cancelHandler: {
                required: true,
                type: Function
            },
            confirmHandler: {
                required: true,
                type: Function
            },
            message: {
                type: String,
                required: true
            }
        }
    };
</script>

<style lang="scss">
    #alert_window {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        .alert_window_layer {
            position: absolute;
            width: 100%;
            height: 100%;
            background: #000000;
            opacity: 0.4;
        }
        .alert_window_container {
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            margin: auto;
            width: 250px;
            height: 140px;
            background: #FFFFFF;
            .top_panel {
                background: #17BEBB;
                #window_control {
                    padding: 10px 8px;
                }
            }
            .message {
                margin-top: 15px;
                text-align: center;
            }
            .button_box {
                display: flex;
                justify-content: center;
                margin-top: 16px;
                #confirm_button, #cancel_button {
                    cursor: pointer;
                    width: 60px;
                    background: #17BEBB;
                    color: #FFFFFF;
                    text-align: center;
                    padding: 6px 0;
                }
            }
        }
    }
</style>
