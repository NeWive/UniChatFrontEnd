<template>
    <div id="portal_element">
        <WindowControl :close-handler="closePortal" :has-minimal="false"/>
        <UserInfoPanel/>
        <transition name="fade">
            <ConfirmWindow v-if="isConfirmWindowOn"/>
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
                    portalElement: {}
                });
            }
        },
        computed: {
            isConfirmWindowOn: {
                get () {
                    return this.$store.state.isConfirmWindowOn;
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
    }
</style>
