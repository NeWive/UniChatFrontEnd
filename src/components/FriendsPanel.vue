<template>
    <div id="friends_panel">
        <FriendsList/>
        <transition name="fade">
            <InfoPanel v-if="isUserSelected"/>
        </transition>
    </div>
</template>

<script>
    import FriendsList from './elements/FriendsList';
    import InfoPanel from './elements/InfoPanel';
    export default {
        name: 'FriendsPanel',
        components: {
            FriendsList,
            InfoPanel
        },
        computed: {
            isUserSelected: {
                get () {
                    return this.$store.state.selectedUser;
                }
            }
        }
    };
</script>

<style lang="scss">
    #friends_panel {
        position: absolute;
        width: 100%;
        height: 100%;
        border-bottom: 1px solid #D9DDE3;
        box-sizing: border-box;
    }
</style>
