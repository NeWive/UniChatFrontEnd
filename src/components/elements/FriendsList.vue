<template>
    <div class="friends_list">
        <FriendsControlPanel/>
        <div class="module_container">
            <transition name="fade" mode="out-in">
                <FriendsListPanel v-if="selectedModule === 1"/>
                <GroupListPanel v-else/>
            </transition>
        </div>
        <div class="add_modules">
            <div
                    class="add_friend"
                    @click="openPortal(2)">
                <img src="../../assets/add_friend.png" alt="">
            </div>
            <div
                    class="create_group"
                    @click="openPortal(1)">
                <img src="../../assets/create_group.png" alt="">
            </div>
        </div>
    </div>
</template>

<script>
    import FriendsControlPanel from './FriendsControlPanel';
    import FriendsListPanel from './FriendsListPanel';
    import GroupListPanel from './GroupListPanel';
    export default {
        name: 'FriendsList',
        components: {
            FriendsControlPanel,
            FriendsListPanel,
            GroupListPanel
        },
        computed: {
            selectedModule: {
                get () {
                    return this.$store.state.currentFriendsListStatus;
                }
            }
        },
        methods: {
            openPortal (id) {
                console.log(id);
                this.$store.commit('handlePortal', {
                    isPortalOn: true,
                    id: id
                });
            }
        }
    };
</script>

<style lang="scss">
    .friends_list {
        position: relative;
        z-index: 5;
        border-right: 1px solid #D9DDE3;
        height: 100%;
        float: left;
        background: #FFFFFF;
        .module_container {
            box-sizing: border-box;
            height: 510px;
            max-width: 225px;
            border-bottom: 1px solid #D9DDE3;
            .fade-enter-active, .fade-leave-active {
                transition: opacity .3s, transform .3s ease;
            }
            .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
                opacity: 0;
                transform: scale(0);
            }
        }
        .add_modules {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 7.5px 0 0;
            .add_friend {
                margin-right: 63px;
            }
            .add_friend, .create_group {
                cursor: pointer;
            }
        }
    }
</style>
