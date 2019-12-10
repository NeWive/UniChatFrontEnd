<template>
    <div id="main_panel">
        <WindowControl :close-handler="closeWindow" :minimal-handler="minimalWindow"/>
        <div class="title">
            <img src="../assets/title.png" alt="">
        </div>
        <div id="form_container">
            <transition name="fade" mode="out-in">
                <router-view class="view"/>
            </transition>
        </div>
        <transition name="fade">
            <div
                    id="main_panel_portal"
                    v-if="isPortalOn">
                <div
                        id="main_panel_layer"
                        @click="closePortal">

                </div>
                <div id="main_panel_element">
                    <WindowControl
                            :close-handler="closePortal"
                            :has-minimal="false"/>
                    <div class="message_container">
                        <div class="message">
                            {{
                                message
                            }}
                        </div>
                        <div class="confirm_button_container">
                            <div
                                    class="confirm_button"
                                    @click="closePortal">
                                确认
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
    import WindowControl from './elements/WindowControl';
    export default {
        name: 'MainPanel',
        components: {
            WindowControl
        },
        methods: {
            closeWindow: function () {
                alert('close');
            },
            minimalWindow: function () {
                alert('minimal');
            },
            closePortal: function () {
                this.$store.commit('handleMainPortal', {
                    message: '',
                    isPortalOn: false
                });
            }
        },
        computed: {
            message: {
                get () {
                    return this.$store.state.mainPortal.message;
                },
                set (value) {
                    this.$store.commit('updateMainPortalStatus', {
                        key: 'message',
                        value: value
                    });
                }
            },
            isPortalOn: {
                get () {
                    return this.$store.state.mainPortal.isPortalOn;
                },
                set (value) {
                    this.$store.commit('updateMainPortalStatus', {
                        key: 'isPortalOn',
                        value: value
                    });
                }
            }
        }
    };
</script>

<style lang="scss">
    @import '../sassConfig/indexPanel';
    #main_panel {
        padding: 18px 12px 21px 15px;
        @include IndexBackgroundConfig;
        width: 500px;
        height: 600px;
        position: relative;
        .title {
            display: flex;
            justify-content: center;
            margin: 4px -20px 29px 0;
        }
        #form_container {
            padding: 15px 0 28px;
            background: #FFFFFF;
            border-radius: 10px;
            /*border: 1px solid #286867;*/
            box-shadow: 2px 4px 8px -2px #060001;
            /*.fade-enter-to, .fade-leave {*/
            /*    position: absolute;*/
            /*}*/
            position: relative;
            .fade-enter-active, .fade-leave-active {
                transition: opacity .5s;
            }
            .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
                opacity: 0;
            }
        }
        #main_panel_portal {
            position: absolute;
            width: 100%;
            height: 100%;
            left: 0;
            bottom: 0;
            top: 0;
            right: 0;
            margin: auto;
            #main_panel_layer {
                position: absolute;
                width: 100%;
                height: 100%;
                left: 0;
                bottom: 0;
                top: 0;
                right: 0;
                margin: auto;
                background: #000000;
                opacity: 0.5;
            }
            #main_panel_element {
                box-sizing: border-box;
                width: 300px;
                height: 180px;
                position: absolute;
                left: 0;
                right: 0;
                top: 0;
                bottom: 0;
                margin: auto;
                background: #FFFFFF;
                #window_control {
                    padding: 15px 20px;
                    background: #17BDBA;
                }
                .message_container {
                    text-align: center;
                    .message {
                        padding: 20px 0;
                    }
                    .confirm_button_container {
                        display: flex;
                        justify-content: center;
                        .confirm_button {
                            padding: 10px 20px;
                            background: #17BDBA;
                            color: #FFFFFF;
                            cursor: pointer;
                        }
                    }
                }
            }
        }
    }
</style>
