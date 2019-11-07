<template>
    <div id="session_content">
        <transition name="expand">
            <SessionInfo v-if="selectedGroupKey > -1"/>
        </transition>
    </div>
</template>

<script>
    import SessionInfo from './SessionInfo';
    export default {
        name: 'SessionContent',
        components: {
            SessionInfo
        },
        computed: {
            selectedGroupKey: {
                get () {
                    return this.$store.state.selectedGroupKey;
                }
            }
        }
    };
</script>

<style lang="scss">
    #session_content {
        background: #FFFFFF;
        height: 100%;
        /*float: left;*/
        box-sizing: border-box;
        border-right: 1px solid #D9DDE3;
        border-bottom: 1px solid #D9DDE3;
        .expand-enter {
            transform: translateX(-243px);
            opacity: 0;
            z-index: -1;
        }
        .expand-enter-to {
            transform: translate(0);
            opacity: 1;
            z-index: -1;
        }
        .expand-enter-active {
            transition: transform 0.5s ease, opacity 0.5s ease-in;
        }
    }
</style>
