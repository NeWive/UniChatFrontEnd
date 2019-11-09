<template>
    <div class="friends_control_panel">
        <ul>
            <li
                    v-for="(item) in listGroup"
                    :key="item.key">
                <a
                        href=""
                        @click.prevent="setSelectedModule(item.index)">
                    <div class="logo">
                        <img :src="item.logo" alt="">
                    </div>
                    <div class="name">
                        <span>
                            {{
                                item.name
                            }}
                        </span>
                    </div>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
    import { listGroup } from '../../config/list.config';
    export default {
        name: 'FriendsControlPanel',
        data: function () {
            return {
                listGroup
            };
        },
        methods: {
            setSelectedModule (val) {
                this.$store.commit('updateGlobalState', {
                    key: 'currentFriendsListStatus',
                    value: val
                });
            }
        }
    };
</script>

<style lang="scss">
    @import "../../sassUtils/fontMixin";
    .friends_control_panel {
        padding: 16px 51px 7px;
        border-bottom: 1px solid #D9DDE3;
        box-sizing: border-box;
        ul {
            display: flex;
            justify-content: center;
            li {
                margin-right: 47px;
                a {
                    .logo {
                        margin: 0 auto 11px;
                        width: 31px;
                        height: 25px;
                        img {
                            width: 100%;
                            height: 100%;
                        }
                    }
                    .name {
                        span {
                            color: #333333;
                            @include fontMixin(17px, Fixedsys, bold, 16px);
                            letter-spacing: 2px;
                            transition: color 0.3s ease;
                        }
                    }
                }
                &:last-child {
                    margin-right: 0;
                    a {
                        .logo {
                            width: 26px;
                            height: 26px;
                        }
                    }
                }
                &:hover {
                    a {
                        .name {
                            span {
                                color: #17BEBB;
                            }
                        }
                    }
                }
            }
        }
    }
</style>
