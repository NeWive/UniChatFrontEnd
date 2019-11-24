<template>
    <div id="add_portal">
        <div class="WindowControlBox">
            <WindowControl
                    :has-minimal="false"
                    :close-handler="closePortal"/>
        </div>
        <div class="add_panel_container">
            <div class="add_panel_navigator">
                <div
                        class="item"
                        v-for="(item, index) in addPanelNavList"
                        :key="item.key"
                        :class="index === currentIndex ? 'selected' : ''"
                        @click="setCurrentIndex(index)">
                    {{
                        item.name
                    }}
                </div>
            </div>
            <div class="input">
                <img src="../../assets/search_larger.png" alt="">
                <input
                        type="text"
                        :placeholder="addPanelNavList[currentIndex].placeholder"
                >
            </div>
            <div class="result_list">
                <ul v-if="result.length > 0">
                    <li
                            v-for="(item, index) in result"
                            :key="index">
                        <img src="../../assets/temp.jpg" alt="" class="portrait">
                        <div class="info">
                            <div class="username">
                                {{
                                    item.username
                                }}
                            </div>
                            <div class="desc">
                                {{
                                    item.desc
                                }}
                            </div>
                        </div>
                        <img
                                src="../../assets/add_friend_button.png"
                                alt=""
                                class="add_friend_button"
                                @click="addFriend(item)">
                    </li>
                </ul>
                <div class="none" v-else>
                    您来到了知识的荒原
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import WindowControl from './WindowControl';
    import { addPanelNavList } from '../../config/list.config';
    export default {
        name: 'AddPortal',
        components: {
            WindowControl
        },
        methods: {
            closePortal () {
                this.$store.commit('handlePortal', {
                    isPortalOn: false,
                    id: -1,
                });
            },
            setCurrentIndex (index) {
                this.currentIndex = index;
            },
            addFriend (item) {
                this.$store.commit('addFriend', {
                    friend: item
                });
                this.$store.commit('handlePortal', {
                    id: -1,
                    isPortalOn: false
                });
            }
        },
        data: function () {
            return {
                result: [
                    {
                        username: '灶门炭只狼',
                        id: '738767136',
                        desc: '嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧',
                        email: '738767136@qq.com',
                        portrait: '../../assets/temp.jpg',
                        key: 2333,
                        authority: 1
                    },
                    {
                        username: 'NeWive',
                        id: '738767136',
                        desc: '嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧',
                        email: '738767136@qq.com',
                        portrait: '../../assets/temp.jpg',
                        key: 2,
                        authority: 2
                    },
                    {
                        username: 'NeWive',
                        id: '738767136',
                        desc: '嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧',
                        email: '738767136@qq.com',
                        portrait: '../../assets/temp.jpg',
                        key: 3,
                        authority: 3
                    },
                ],
                addPanelNavList,
                currentIndex: 0,
            };
        }
    };
</script>

<style lang="scss">
    @import "../../sassUtils/fontMixin";
    @import "../../sassUtils/overFlow";
    #add_portal {
        width: 626px;
        height: 413px;
        background: #17BDBA;
        position: absolute;
        z-index: 999;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
        padding: 0 26px 20px 30px;
        .WindowControlBox {
            margin: 27px 0 12px;
        }
        .add_panel_container {
            padding: 36px 44px 78px 52px;
            background: #FFFFFF;
            border-radius: 9px;
            box-shadow: 2px 4px 8px -2px #060001;
            .add_panel_navigator {
                display: flex;
                justify-content: center;
                .item {
                    cursor: pointer;
                    @include fontMixin(28px, STSong, normal, 29px);
                    color: #5C555C;
                    border-bottom: 4px solid transparent;
                    transition: all 0.5s ease;
                    margin-right: 102px;
                    &:last-child {
                        margin-right: 0;
                    }
                }
                .selected {
                    color: #17BEBB;
                    border-bottom-color: #17BEBB;
                }
            }
            .input {
                margin-top: 59px;
                margin-bottom: 30px;
                position: relative;
                img {
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    right: 17px;
                    margin: auto 0;
                    cursor: pointer;
                    width: 23px;
                    height: 23px;
                }
                input {
                    width: 100%;
                    height: 35px;
                    padding-left: 21px;
                    border-radius: 10px;
                    border: 2px solid #E5E7EC;
                    transition: border-color 0.5s ease;
                    @include fontMixin(17px, STSong, normal, 17px);
                    &:focus {
                        border-color: #555555;
                    }
                }
            }
            .result_list {
                ul {
                    height: 62px;
                    overflow-y: scroll;
                    li {
                        margin-bottom: 20px;
                        position: relative;
                        &:last-child {
                            margin-bottom: 0;
                        }
                        .portrait, .info {
                            display: inline-block;
                            vertical-align: middle;
                        }
                        .portrait {
                            height: 62px;
                            width: 62px;
                            border-radius: 100%;
                            margin-right: 18px;
                        }
                        .add_friend_button {
                            width: 34px;
                            height: 34px;
                            border-radius: 100%;
                            position: absolute;
                            top: 0;
                            bottom: 0;
                            right: 17px;
                            margin: auto 0;
                            cursor: pointer;
                        }
                        .info {
                            .username {
                                @include fontMixin(17px, STSong, bold, 18px);
                                color: #000000;
                                margin-bottom: 7px;
                            }
                            .desc {
                                @include fontMixin(13px, STSong, bold, 13px);
                                color: #585C5E;
                            }
                            .username, .desc {
                                width: 370px;
                                @include overFlowOneLine;
                            }
                        }
                    }
                }
            }
        }
    }
</style>
