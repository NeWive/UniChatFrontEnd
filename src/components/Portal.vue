<template>
    <div id="portal">
        <div
                id="portal_layer"
                @click="closePortal">
        </div>
        <PortalElement/>
    </div>
</template>

<script>
    import PortalElement from './elements/PortalElement';
    export default {
        name: 'Portal',
        components: {
            PortalElement
        },
        methods: {
            closePortal () {
                if (this.$store.state.isConfirmWindowOn) {
                    this.$store.state.cancelHandler();
                }
                this.$store.commit('handlePortal', {
                    isPortalOn: false,
                    portalElement: {}
                });
            }
        }
    };
</script>

<style lang="scss">
    #portal {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        z-index: 99;
        #portal_layer {
            position: absolute;
            width: 100%;
            height: 100%;
            background: #000000;
            opacity: 0.4;
        }
    }
</style>
