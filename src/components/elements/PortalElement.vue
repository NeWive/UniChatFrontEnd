<template>
    <div id="portal_element">
        <WindowControl :close-handler="closePortal" :has-minimal="false"/>
        <UserInfoPanel/>
        <transition name="fade">
            <ConfirmWindow v-if="isConfirmWindowOn"/>
        </transition>
        <transition name="fade">
            <div id="user_info_loading_container" v-if="isEditFormLoading">
                <div id="user_info_loading_container_layer"></div>
                <div id="user_info_loading_container_loading"></div>
            </div>
        </transition>
    </div>
</template>

<script>
    import WindowControl from './WindowControl';
    import UserInfoPanel from './UserInfoPanel';
    import ConfirmWindow from './ConfirmWindow';
    export default {
        name: 'PortalElement',
        components: {
            WindowControl,
            UserInfoPanel,
            ConfirmWindow
        },
        methods: {
            closePortal () {
                this.$store.commit('handlePortal', {
                    isPortalOn: false,
                    portalElement: {},
                    id: -1,
                });
            }
        },
        computed: {
            isConfirmWindowOn: {
                get () {
                    return this.$store.state.portal.isConfirmWindowOn;
                }
            },
            isEditFormLoading: {
                get () {
                    return this.$store.state.isEditFormLoading;
                }
            }
        }
    };
</script>

<style lang="scss">
    #portal_element {
        width: 500px;
        height: 600px;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
        background: #17BEBB;
        #window_control {
            padding: 18px 12px 0 0;
        }
        #user_info_loading_container {
            width: 100%;
            height: 100%;
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            margin: auto;
            #user_info_loading_container_layer {
                width: 100%;
                height: 100%;
                position: absolute;
                left: 0;
                right: 0;
                top: 0;
                bottom: 0;
                margin: auto;
                background: #000000;
                opacity: 0.5;
            }
            #user_info_loading_container_loading {
                position: absolute;
                left: 0;
                right: 0;
                top: 0;
                bottom: 0;
                margin: auto;
                width: 50px;
                height: 50px;
                border-radius: 100%;
                border: 6px solid #17BDBA;
                border-top-color: transparent;
                animation: loading infinite 1s;
            }
        }
    }
    @keyframes loading {
        0% {
            transform: rotate(0);
        }
        100% {
            transform: rotate(360deg);
        }
    }
</style>
