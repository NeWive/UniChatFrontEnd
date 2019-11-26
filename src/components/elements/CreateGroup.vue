<template>
    <div id="create_group">
        <div class="WindowControlBox">
            <WindowControl
                :has-minimal="false"
                :close-handler="closePortal"/>
        </div>
        <div class="select_user_list_panel">
            <div class="left">
                <div class="search_panel">
                    <img src="../../assets/svg/search.png" alt="">
                    <input type="text">
                </div>
                <div class="to_be_selected">
                    <ul class="friends_list_container">
                        <!--            分组-->
                        <li
                                v-for="(item, index) in groupList"
                                :key="index"
                                class="friends_group_list"
                        >
                            <a
                                    href=""
                                    @click.prevent="expandGroup(index)"
                                    class="friends_group_sel"
                                    :class="selectedGroupIndex === index ? 'selected' : ''">
                                <div class="arrow_box">
                                    <div class="arrow">

                                    </div>
                                </div>
                                <div class="group_name">
                                    <span>
                                        {{
                                            item.name
                                        }}
                                    </span>
                                </div>
                            </a>
                            <div
                                    class="temp_container"
                                    :style="{
                                height: `${selectedGroupIndex === index ? targetHeight : 0}px`
                            }">
                                <transition name="fade">
                                    <ul
                                            v-if="selectedGroupIndex === index"
                                            class="selected_friends_list"
                                    >
                                        <li
                                                v-for="(item, index) in groupList[selectedGroupIndex].children"
                                                :key="`child${index}`"
                                                @click="selectFriend(item)"
                                                :class="selectedFriendsKey.indexOf(item.key) >= 0 ? 'selected' : ''"
                                        >
                                            <img src="../../assets/temp.jpg" alt="">
                                            <div class="span">
                                                <span>
                                                            {{
                                                                item.username
                                                            }}
                                                </span>
                                            </div>
                                            <transition name="fade">
                                                <img src="../../assets/check.png" alt="" class="check"
                                                     v-if="selectedFriendsKey.indexOf(item.key) >= 0">
                                            </transition>
                                        </li>
                                    </ul>
                                </transition>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="right">
                <div class="input">
                    <img src="../../assets/default_portrait.png" alt="">
                    <input
                            type="text"
                            placeholder="请输入群聊名称.."
                            v-model="groupName">
                </div>
                <div class="title">
                    已选择
                </div>
                <ul class="selected_list">
                    <transition-group name="list">
                        <li
                                v-for="item in selectedFriends"
                                :key="item.key">
                            <img src="../../assets/temp.jpg" alt="">
                            <div class="span">
                                <span>
                                    {{
                                        item.username
                                    }}
                                </span>
                            </div>
                            <div
                                    class="delete_button"
                                    @click="selectFriend(item)">
                                <div class="edge"></div>
                            </div>
                        </li>
                    </transition-group>
                </ul>
            </div>
            <div class="bottom">
                <div
                        class="button cancel"
                        @click="cancel">
                    取消
                </div>
                <div
                        class="button confirm"
                        @click="addGroup">
                    确认
                </div>
            </div>
        </div>
        <transition name="fade">
            <AlertWindow
                    :cancel-handler="confirmHandler"
                    message="选中的好友不能为空"
                    v-if="isAlertWindowOn"
                    :confirm-handler="confirmHandler"/>
        </transition>
    </div>
</template>

<script>
    import WindowControl from './WindowControl';
    import AlertWindow from './AlertWindow';
    export default {
        name: 'CreateGroup',
        components: {
            WindowControl,
            AlertWindow
        },
        methods: {
            closePortal () {
                this.$store.commit('handlePortal', {
                    isPortalOn: false,
                    id: -1,
                });
            },
            expandGroup (index) {
                this.selectedGroupIndex = index === this.selectedGroupIndex ? -1 : index;
            },
            selectFriend (item) {
                if (this.selectedFriendsKey.indexOf(item.key) === -1) {
                    this.selectedFriends.push(item);
                    this.selectedFriendsKey.push(item.key);
                } else {
                    let index = this.selectedFriendsKey.indexOf(item.key);
                    this.selectedFriends.splice(index, 1);
                    this.selectedFriendsKey.splice(index, 1);
                }
            },
            cancel () {
                this.$store.commit('handlePortal', {
                    isPortalOn: false,
                    id: -1,
                });
            },
            addGroup () {
                if (this.selectedFriends.length > 0) {
                    let tempKey = new Date().getTime();
                    let group = {
                        name: this.groupName,
                        key: tempKey,
                        channel: [],
                        members: this.selectedFriends
                    };
                    this.$store.commit('addGroup', {
                        group
                    });
                    this.$store.commit('handlePortal', {
                        isPortalOn: false,
                        id: -1
                    });
                } else {
                    this.isAlertWindowOn = true;
                }
            },
            confirmHandler () {
                this.isAlertWindowOn = false;
            }
        },
        computed: {
            groupList: {
                get () {
                    return this.$store.state.friendsList;
                }
            },
            targetHeight: {
                get () {
                    return this.selectedGroupIndex > -1 ? this.groupList[this.selectedGroupIndex].children.length * this.selHeight : 0;
                }
            }
        },
        data: function () {
            return {
                selectedGroupIndex: -1,
                selHeight: 43,
                selectedFriends: [], // 保存引用
                selectedFriendsKey: [], // 保存key用来判定
                isAlertWindowOn: false,
                groupName: '',
            };
        }
    };
</script>

<style lang="scss">
    @import "../../sassUtils/overFlow";
    @import "../../sassUtils/fontMixin";

    #create_group {
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
        .bottom {
            margin-top: 20px;
            display: flex;
            flex-direction: row-reverse;
            .confirm {
                margin-right: 30px;
            }
            .cancel {
                margin-right: 10px;
            }
            .button {
                cursor: pointer;
                padding: 6px 0 5px;
                background: #17BEBB;
                color: #FFFFFF;
                border-radius: 10px;
                width: 60px;
                display: flex;
                justify-content: center;
                align-content: center;
            }
        }
        .select_user_list_panel {
            padding: 15px 22px 10px;
            background: #E5E7EC;
            border-radius: 9px;
            box-shadow: 2px 4px 8px -2px #060001;

            .left, .right {
                display: inline-block;
                vertical-align: middle;
            }
            /*.left {*/
            /*    float: left;*/
            /*    margin-right: 10px;*/
            /*}*/
            .right {
                margin-left: 16px;
                height: 289px;
                width: 305px;
                .input {
                    input, img {
                        vertical-align: middle;
                        display: inline-block;
                    }
                    img {
                        margin-right: 10px;
                        cursor: pointer;
                    }
                    input {
                        width: 70%;
                        border: 0;
                        border-bottom: 1px solid #5C555C;
                        background: transparent;
                        padding-left: 3px;
                        padding-bottom: 3px;
                    }
                }
                .title {
                    @include fontMixin(17px, Microsfot YaHei, normal, 17px);
                    padding: 5px 0 4px 10px;
                }
                .selected_list {
                    height: 257px;
                    overflow-y: scroll;
                    li {
                        display: block;
                        margin-top: 14px;
                        cursor: pointer;
                        border-left: 4px solid transparent;
                        transition: all 0.5s ease;
                        position: relative;
                        &:hover {
                            border-left-color: #17BEBB;
                            .delete_button {
                                opacity: 0.6;
                            }
                        }

                        img {
                            width: 29px;
                            height: 29px;
                            border-radius: 100%;
                            display: inline-block;
                            margin-right: 12px;
                            margin-left: 5px;
                        }

                        .span {
                            position: relative;

                            span {
                                display: block;
                                @include fontMixin(17px, FZQKBYSJW--GB1-0, 400, 16px);
                                max-width: 114px;
                                @include overFlowOneLine;
                                position: relative;
                            }

                            &:after {
                                position: absolute;
                                height: 3px;
                                width: 0;
                                transition: width 0.5s ease-in;
                                background: #17BEBB;
                                content: '';
                                display: block;
                                z-index: 9999;
                                bottom: -5px;
                            }
                        }

                        img, .span {
                            display: inline-block;
                            vertical-align: middle;
                        }
                        .delete_button {
                            width: 18px;
                            height: 18px;
                            border-radius: 100%;
                            background: #5C555C;
                            position: absolute;
                            top: 0;
                            bottom: 0;
                            right: 5px;
                            margin: auto 0;
                            transition: opacity 0.5s ease;
                            opacity: 0;
                            &:hover {
                                opacity: 1;
                            }
                            .edge {
                                position: absolute;
                                left: 0;
                                right: 0;
                                top: 0;
                                bottom: 0;
                                margin: auto;
                                width: 12px;
                                height: 1px;
                                background: #FFFFFF;
                                transform: rotate(45deg);
                                &:after {
                                    width: 12px;
                                    height: 1px;
                                    background: #FFFFFF;
                                    content: '';
                                    display: block;
                                    transform: rotate(-90deg);
                                }
                            }
                        }
                    }
                }
            }
            .left {
                padding-right: 4px;
                border-right: 1px solid #7D7D7D;

                .to_be_selected {
                    .friends_list_container {
                        height: 257px;
                        overflow-y: scroll;
                        margin-top: 8px;

                        .friends_group_list {
                            margin-bottom: 5px;

                            .friends_group_sel {
                                .arrow_box, .group_name {
                                    display: inline-block;
                                    vertical-align: middle;
                                }

                                .group_name {
                                    width: 230px;
                                    @include overFlowOneLine;
                                }
                            }

                            .temp_container {
                                height: 0;
                                transition: height 0.5s ease;
                                overflow: hidden;

                                .selected_friends_list {
                                    li {
                                        display: block;
                                        padding-left: 5px;
                                        margin-top: 14px;
                                        cursor: pointer;
                                        border-left: 4px solid transparent;
                                        transition: all 0.5s ease;
                                        position: relative;

                                        img {
                                            width: 29px;
                                            height: 29px;
                                            border-radius: 100%;
                                            display: inline-block;
                                            margin-right: 12px;
                                        }

                                        .span {
                                            position: relative;

                                            span {
                                                display: block;
                                                @include fontMixin(17px, FZQKBYSJW--GB1-0, 400, 16px);
                                                max-width: 114px;
                                                @include overFlowOneLine;
                                                position: relative;
                                            }

                                            &:after {
                                                position: absolute;
                                                height: 3px;
                                                width: 0;
                                                transition: width 0.5s ease-in;
                                                background: #17BEBB;
                                                content: '';
                                                display: block;
                                                z-index: 9999;
                                                bottom: -5px;
                                            }
                                        }

                                        img, .span {
                                            display: inline-block;
                                            vertical-align: middle;
                                        }

                                        .check {
                                            position: absolute;
                                            right: 12px;
                                            top: 0;
                                            bottom: 0;
                                            margin: auto 0;
                                            width: 25px;
                                            height: 17px;
                                        }
                                    }

                                    .selected {
                                        border-left-color: #17BEBB;
                                    }
                                }
                            }
                        }
                    }
                }

                .search_panel {
                    width: 237px;
                    height: 24px;
                    position: relative;

                    img {
                        position: absolute;
                        top: 2px;
                        bottom: 0;
                        margin: auto 0;
                        left: 10px;
                    }

                    input {
                        width: 100%;
                        height: 100%;
                        background: transparent;
                        border: 1px solid #5C555C;
                        border-radius: 9px;
                        font-size: 14px;
                        padding-left: 30px;
                    }
                }

                .arrow_box {
                    width: 18px;
                    height: 18px;
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    .arrow {
                        margin-top: 1px;
                        border-top: 2px solid #5C555C;
                        border-right: 2px solid #5C555C;
                        width: 10.54px;
                        height: 10.54px;
                        transform: rotate(45deg);
                        transition: border-color 0.5s ease, transform 0.5s ease;
                    }
                }

                .selected {
                    border-left-color: #17BEBB;

                    .arrow_box {
                        .arrow {
                            border-top-color: #17BEBB;
                            border-right-color: #17BEBB;
                            transform: rotate(135deg);
                        }
                    }
                }
            }
        }
    }
</style>
