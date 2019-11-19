<template>
    <div id="portal_element">
        <WindowControl :close-handler="closePortal" :has-minimal="false"/>
        <UserInfoPanel/>
    </div>
</template>

<script>
    import WindowControl from './WindowControl';
    import UserInfoPanel from './UserInfoPanel';
    export default {
        name: 'PortalElement',
        components: {
            WindowControl,
            UserInfoPanel
        },
        methods: {
            closePortal () {
                this.$store.commit('handlePortal', {
                    isPortalOn: false,
                    portalElement: {}
                });
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
