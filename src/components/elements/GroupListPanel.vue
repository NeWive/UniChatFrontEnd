<template>
    <div class="group_list_panel">
        <ul class="friends_list_container">
            <!--            分组-->
            <li
                    v-for="(item, index) in groupList"
                    :key="index"
                    class="friends_group_list"
                    @dblclick="jumpToSession(item)">
                <a
                        href=""
                        @click.prevent="setSelectedGroupIndex(index)"
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
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'GroupListPanel',
        data: function () {
            return {

            };
        },
        computed: {
            groupList: {
                get () {
                    return this.$store.state.groupsList;
                }
            },
            selectedGroupIndex: {
                get () {
                    return this.$store.state.selectedChatGroupIndex;
                },
                set (val) {
                    this.$store.commit('updateGlobalState', {
                        key: 'selectedChatGroupIndex',
                        value: val
                    });
                }
            }

        },
        methods: {
            setSelectedGroupIndex (index) {
                this.selectedGroupIndex = index;
            },
            jumpToSession (item) {
                let key = this.$store.state.sessionList.list.length + 50;
                let tempObj = JSON.parse(JSON.stringify(item));
                // console.log(tempObj);
                tempObj.key = key;
                tempObj.type = 'group';
                this.$store.commit('clearAll');
                this.$store.commit('jumpToSession', {
                    type: 'selectedGroup',
                    value: tempObj,
                    selectedGroupKey: key
                });
                this.$store.commit('updateGlobalState', {
                    key: 'currentIndex',
                    value: 0
                });
                this.$store.commit('unshiftListItem', {
                    item: tempObj
                });
                this.$router.push('/index/session');
            }
        }
    };
</script>

<style lang="scss">
    @import "../../sassUtils/fontMixin";
    @import "../../sassUtils/overFlow";

    .group_list_panel {
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
                        position: relative;
                        .arrow {
                            margin-top: -3px;
                            border-top: 2px solid #5C555C;
                            border-right: 2px solid #5C555C;
                            width: 10.54px;
                            height: 10.54px;
                            transform: rotate(45deg);
                            transition: border-color 0.5s ease;
                            position: absolute;
                            top: 6px;
                        }
                    }

                    .group_name {
                        margin-left: 10px;
                        position: relative;
                        max-width: 171px;
                        &:after {
                            position: absolute;
                            height: 3px;
                            width: 0;
                            transition: width 0.2s ease-in;
                            background: #17BEBB;
                            content: '';
                            display: block;
                            z-index: 9999;
                            bottom: -5px;
                        }
                        span {
                            display: block;
                            max-width: 171px;
                            @include overFlowOneLine;
                            @include fontMixin(17px, FZQKBYSJW--GB1-0, 400, 17px);
                        }
                    }
                }
                .selected {
                    border-left-color: #17BEBB;

                    .arrow_box {
                        .arrow {
                            border-top-color: #17BEBB;
                            border-right-color: #17BEBB;
                            position: absolute;
                        }
                    }
                    .group_name {
                        &:after {
                            width: 100%;
                        }
                    }
                }
            }
        }
    }
</style>
