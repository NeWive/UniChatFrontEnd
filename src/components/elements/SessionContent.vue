<template>
    <div id="session_content">
        <template v-if="selectedType === 'group'">
            <transition name="expand">
                <SessionInfo v-if="selectedGroupKey > -1"/>
            </transition>
            <transition name="expand">
                <SessionMessage v-if="selectedChannelId > -1"/>
            </transition>
        </template>
        <template v-else-if="selectedType === 'person'">
            <transition name="expand">
                <SessionMessage/>
            </transition>
        </template>
    </div>
</template>

<script>
    import SessionInfo from './SessionInfo';
    import SessionMessage from './SessionMessage';
    export default {
        name: 'SessionContent',
        components: {
            SessionInfo,
            SessionMessage
        },
        computed: {
            selectedGroupKey: {
                get () {
                    return this.$store.state.selectedGroupKey;
                }
            },
            selectedChannelId: {
                get () {
                    return this.$store.state.selectedChannelId;
                }
            },
            selectedType: {
                get () {
                    return this.$store.state.selectedGroup.type || this.$store.state.selectedFriend.type;
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
        }
        .expand-enter-to {
            transform: translate(0);
            opacity: 1;
        }
        .expand-enter-active {
            transition: transform 0.5s ease, opacity 0.5s ease-in;
        }
    }
</style>
