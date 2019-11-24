<template>
    <div id="portal">
        <div
                id="portal_layer"
                >
        </div>
        <PortalElement v-if="portalId === 0"/>
        <CreateGroup v-else-if="portalId === 1"/>
        <AddPortal v-else-if="2"/>
    </div>
</template>

<script>
    import CreateGroup from './elements/CreateGroup';
    import PortalElement from './elements/PortalElement';
    import AddPortal from './elements/AddPortal';
    export default {
        name: 'Portal',
        components: {
            PortalElement,
            CreateGroup,
            AddPortal
        },
        methods: {
            closePortal () {
                if (this.$store.state.portal.isConfirmWindowOn) {
                    this.$store.state.portal.cancelHandler();
                }
                this.$store.commit('handlePortal', {
                    isPortalOn: false,
                    portalElement: {},
                    id: -1,
                });
            }
        },
        computed: {
            portalId: {
                get () {
                    return this.$store.state.portal.id;
                }
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
