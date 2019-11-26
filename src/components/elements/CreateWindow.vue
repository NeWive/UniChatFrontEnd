<template>
    <div id="create_window">
        <div class="create_window_layer">

        </div>
        <div class="create_window_container">
            <div class="top_panel">
                <WindowControl :close-handler="closeWindow" :has-minimal="false"/>
            </div>
            <div class="message">
                新建频道
            </div>
            <div class="input">
                <input
                        type="text"
                        v-model="channelName"
                        placeholder="请输入频道名"
                        id="add_channel_input">
            </div>
            <div class="button_box">
                <div
                        id="confirm_button"
                        @click="addChannel">
                    确定
                </div>
                <div
                        id="cancel_button"
                        @click="closeWindow">
                    取消
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import WindowControl from './WindowControl';
    export default {
        name: 'CreateWindow',
        components: {
            WindowControl
        },
        methods: {
            closeWindow () {
                this.$store.commit('handlePortal', {
                    isPortalOn: false,
                    id: -1
                });
            },
            addChannel () {
                if (!this.channelName) {
                    let input = document.getElementById('add_channel_input');
                    input.placeholder = '不能为空';
                    setTimeout(() => {
                        input.placeholder = '请输入频道名';
                    }, 500);
                } else {
                    this.$store.commit('addChannel', {
                        channelName: this.channelName
                    });
                    this.$store.commit('handlePortal', {
                        isPortalOn: false,
                        id: -1
                    });
                }
            }
        },
        data: function () {
            return {
                channelName: ''
            };
        }
    };
</script>

<style lang="scss">
    #create_window {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;

        .create_window_layer {
            position: absolute;
            width: 100%;
            height: 100%;
            background: #000000;
            opacity: 0.4;
        }

        .create_window_container {
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            margin: auto;
            width: 270px;
            height: 170px;
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
            .input {
                margin-top: 10px;
                display: flex;
                justify-content: center;
                input {
                    width: 80%;
                    padding-left: 5px;
                    border: 0;
                    padding-bottom: 5px;
                    border-bottom: 1px solid #D9DDE3;
                    transition: border-bottom-color 0.5s ease;
                    &:focus {
                        border-color: #17BEBB;
                    }
                }
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

                #confirm_button {
                    margin-right: 10px;
                }
            }
        }
    }
</style>
