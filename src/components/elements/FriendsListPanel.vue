<template>
    <div class="friends_list_panel">
        <ul class="friends_list_container">
            <!--            分组-->
            <li
                    v-for="(item, index) in groupList"
                    :key="index"
                    class="friends_group_list">
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
                                    @click="selectUser(item)">
                                <img src="../../assets/temp.jpg" alt="">
                                <div class="span">
                                    <span>
                                                {{
                                                    item.username
                                                }}
                                    </span>
                                </div>
                            </li>
                        </ul>
                    </transition>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'FriendsListPanel',
        data: function () {
            return {
                selHeight: 43
            };
        },
        computed: {
            groupList: {
                get () {
                    return this.$store.state.friendsList;
                }
            },
            selectedGroupIndex: {
                get () {
                    return this.$store.state.selectedGroupIndex;
                },
                set (val) {
                    this.$store.commit('updateGlobalState', {
                        key: 'selectedGroupIndex',
                        value: val
                    });
                }
            },
            targetHeight: {
                get () {
                    return this.selectedGroupIndex > -1 ? this.groupList[this.selectedGroupIndex].children.length * this.selHeight : 0;
                }
            }
        },
        methods: {
            expandGroup (index) {
                this.selectedGroupIndex = index === this.selectedGroupIndex ? -1 : index;
            },
            selectUser (index) {
                console.log(index);
                this.$store.commit('updateGlobalState', {
                    key: 'selectedUser',
                    value: index
                });
            }
        }
    };
</script>

<style lang="scss">
    @import "../../sassUtils/fontMixin";
    @import "../../sassUtils/overFlow";

    .friends_list_panel {
        padding-top: 24px;
        overflow-y: scroll;
        height: 100%;
        box-sizing: border-box;

        .friends_list_container {
            .friends_group_list {
                display: block;
                box-sizing: border-box;
                margin-bottom: 14px;

                &:last-child {
                    margin-bottom: 0;
                }

                &:hover {
                    .friends_group_sel {
                        border-left-color: #17BEBB;
                    }
                }

                .friends_group_sel {
                    border-left: 4px solid transparent;
                    transition: border-left-color 0.5s ease;
                    width: 100%;
                    display: flex;
                    align-items: center;
                    box-sizing: border-box;

                    .arrow_box {
                        width: 18px;
                        height: 18px;
                        display: flex;
                        justify-content: center;
                        align-items: center;

                        .arrow {
                            margin-top: -3px;
                            border-top: 2px solid #5C555C;
                            border-right: 2px solid #5C555C;
                            width: 10.54px;
                            height: 10.54px;
                            transform: rotate(45deg);
                            transition: border-color 0.5s ease, transform 0.5s ease;
                        }
                    }

                    .group_name {
                        margin-left: 10px;

                        span {
                            display: block;
                            width: 171px;
                            @include overFlowOneLine;
                            @include fontMixin(17px, FZQKBYSJW--GB1-0, 400, 17px);
                        }
                    }
                }
                .temp_container {
                    height: 0;
                    transition: height 0.5s ease;
                    overflow: hidden;
                    .selected_friends_list {
                        li {
                            display: block;
                            padding-left: 26px;
                            margin-top: 14px;
                            cursor: pointer;

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
                            &:hover {
                                .span {
                                    &:after {
                                        width: 100%;
                                    }
                                }
                            }
                            img, .span {
                                display: inline-block;
                                vertical-align: middle;
                            }
                        }
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
