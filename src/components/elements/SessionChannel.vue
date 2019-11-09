<template>
    <div
            id="session_channel">
        <div class="window">
            <transition name="fade" mode="out-in">
                <ul >
                    <template v-for="(item, index) in groupChannel">
                        <transition :key="item.id" name="fade" mode="out-in">
                            <li
                                    :class="selectedChannelId === item.id ? 'selected' : ''"
                                    @click="clickHandler(item.id, index)"
                            >
                                <a
                                        href=""
                                        @click.prevent="() => {}">
                                    <img src="../../assets/channel.png" alt="">
                                    <span class="channel_name">
                                                {{
                                                    item.name
                                                }}
                                            </span>
                                </a>
                            </li>
                        </transition>
                    </template>
                    <li>
                        <a @click.prevent="() => {}">
                            <img src="../../assets/add.png" alt="">
                            <span class="channel_name">
                                添加频道
                            </span>
                        </a>
                    </li>
                </ul>
            </transition>
        </div>
    </div>
</template>

<script>
    import { testMessage } from '../../config/list.config';
    export default {
        name: 'ChannelBox',
        computed: {
            groupChannel: {
                get () {
                    return this.$store.state.selectedGroup.channel;
                }
            },
            selectedChannelId: {
                get () {
                    return this.$store.state.selectedChannelId;
                },
                set (val) {
                    this.$store.commit('updateGlobalState', {
                        key: 'selectedChannelId',
                        value: val
                    });
                }
            }
        },
        data: function () {
            return {

            };
        },
        methods: {
            clickHandler (id, index) {
                this.selectedChannelId = id;
                this.$store.commit('updateGlobalState', {
                    key: 'selectedChannel',
                    value: this.groupChannel[index]
                });
                this.$store.commit('updateGlobalState', {
                    key: 'messageList',
                    value: testMessage
                });
            }
        }
    };
</script>

<style lang="scss">
    @import "../../sassUtils/overFlow";
    @import "../../sassUtils/fontMixin";

    #session_channel {
        height: 223px;
        width: 241px;
        padding: 12px 0 0;
        position: relative;
        .window {
            box-sizing: border-box;
            overflow-y: scroll;
            overflow-x: hidden;
            height: 100%;
            border-bottom: 1px solid #D9DDE3;
            ul {
                li {
                    padding: 0 21px;
                    width: 100%;
                    margin-bottom: 18px;
                    cursor: pointer;

                    &:last-child {
                        margin-bottom: 0;
                    }

                    &:hover {
                        a {
                            span {
                                color: #17BEBB;
                            }
                        }
                    }

                    a {
                        img, span {
                            display: inline-block;
                            vertical-align: middle;
                        }

                        img {
                            margin-right: 13px;
                        }

                        span {
                            transition: color 0.5s ease;
                            color: #333333;
                            letter-spacing: 3px;
                            width: 161px;
                            overflow: hidden;
                            @include overFlowOneLine;
                            @include fontMixin(17px, Adobe Heiti Std R, bold, 18px);
                        }
                    }
                }

                .selected {
                    a {
                        span {
                            color: #17BEBB;
                        }
                    }
                }

                .fade-enter-active, .fade-leave-active {
                    transition: opacity .5s;
                }

                .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
                {
                    opacity: 0;
                }
            }
        }

        .scroll {
            position: absolute;
            top: 0;
            right: -7px;
        }
    }
</style>
