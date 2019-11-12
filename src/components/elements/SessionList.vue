<template>
    <div
            id="session_list">
        <ul>
            <transition-group name="list">
                <li
                        v-for="(item, index) in sessionList"
                        :key="item.key"
                        :class="selectedGroupKey === item.key ? 'selected' : ''"
                        @click.prevent.stop="setSelectedGroupId(item, index)">
                    <div class="left">
                        <img :src="temp" alt="">
                    </div>
                    <div class="name">
                        <p>
                            {{
                                item.type === 'group' ? item.name : item.username
                            }}
                        </p>
                    </div>
                    <div class="unread_message_count">
                        <p>
                            1111
                        </p>
                    </div>
                    <div
                            class="close_button"
                            @click.stop="delHandler(index)">
                        <div class="edge">

                        </div>
                    </div>
                </li>
            </transition-group>
        </ul>
    </div>
</template>

<script>
    import temp from '../../assets/temp.jpg';
    import { testMessage } from '../../config/list.config';
    // height: 107px
    export default {
        name: 'SessionList',
        data: function () {
            return {
                temp
            };
        },
        methods: {
            setSelectedGroupId ({ key, type, id }, index) {
                this.$store.commit('clearAll');
                // 通过key 区分是否选中
                this.selectedGroupKey = key;
                this.$store.commit('updateGlobalState', {
                    key: type === 'person' ? 'selectedFriend' : 'selectedGroup',
                    value: this.sessionList[index] // index 用于获取对应信息
                });
                if (type === 'person') {
                    this.$store.commit('updateGlobalState', {
                        key: 'messageList',
                        value: testMessage
                    });
                }
            },
            delHandler (index) {
                this.$store.commit('spliceListItem', {
                    index: index
                });
                this.$store.commit('clearGroup');
            }
        },
        computed: {
            sessionList: {
                get () {
                    return this.$store.state.sessionList.list;
                }
            },
            selectedGroupKey: {
                get () {
                    return this.$store.state.selectedGroupKey;
                },
                set (val) {
                    this.$store.commit('updateGlobalState', {
                        key: 'selectedGroupKey',
                        value: val
                    });
                }
            },

        }
    };
</script>

<style lang="scss">
    @import "../../sassUtils/fontMixin";
    @import "../../sassUtils/overFlow";

    #session_list {
        height: 100%;
        z-index: 99;
        overflow-y: scroll;
        position: relative;
        background: #FFFFFF;
        border: 1px solid #D9DDE3;
        border-top: 0;
        box-sizing: border-box;
        overflow-x: hidden;
        ul {
            width: 232px;

            .selected {
                border-left-color: #2CA0F6;

                .name {
                    p {
                        color: #2CA0F8;
                    }
                }
            }

            li {
                background: #FFFFFF;
                padding: 26px 21px 28px 15px;
                display: flex;
                align-items: center;
                box-sizing: border-box;
                border-left: 6px solid transparent;
                cursor: pointer;
                border-bottom: 1px solid #D9DDE3;
                position: relative;
                transition: all 0.5s ease;
                &:hover {
                    border-left-color: #2CA0F6;

                    .name {
                        p {
                            color: #2CA0F8;
                        }
                    }

                    .close_button {
                        opacity: 0.75;
                    }
                }

                .left {
                    width: 52px;
                    height: 52px;

                    img {
                        width: 100%;
                        height: 100%;
                        border-radius: 100%;
                    }
                }

                .name {
                    margin-left: 9px;

                    p {
                        width: 96px;
                        height: 24px;
                        overflow: hidden;
                        @include fontMixin(20px, ComicSansMS, bold, 24px);
                        color: #333333;
                        white-space: nowrap;
                        transition: color 0.5s ease;
                    }
                }

                .unread_message_count {
                    margin-left: 17px;

                    p {
                        width: 16px;
                        height: 16px;
                        border-radius: 100%;
                        background: #2CA0F8;
                        @include fontMixin(12.5px, ComicSansMS, bold, 17px);
                        text-align: center;
                        color: #FFFFFF;
                        @include overFlowOneLine;
                    }
                }

                .close_button {
                    width: 18px;
                    height: 18px;
                    border-radius: 100%;
                    background: #5C555C;
                    position: absolute;
                    top: 13px;
                    right: 13px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    opacity: 0;
                    transition: opacity 0.5s ease;

                    &:hover {
                        opacity: 1;
                    }

                    .edge {
                        transform: rotate(45deg);
                        width: 12px;
                        height: 1px;
                        background: #FFFFFF;
                        position: relative;

                        &:after {
                            transform: rotate(-90deg);
                            width: 12px;
                            height: 1px;
                            background: #FFFFFF;
                            content: '';
                            display: block;
                        }
                    }
                }
            }
        }

        .scroll {
            position: absolute;
            right: -8px;
            top: 0;
        }
    }
</style>
