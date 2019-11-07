<template>
    <div
            id="session_list"
            @wheel="scrollHandler">
        <ul :style="{
            marginTop: `${ulMarginTop}px`
        }">
            <li
                    v-for="(item, index) in sessionList"
                    :key="index"
                    :class="selectedGroupKey === item.key ? 'selected' : ''"
                    @click.prevent.stop="setSelectedGroupId(item.key, index)">
                <div class="left">
                    <img :src="temp" alt="">
                </div>
                <div class="name">
                    <p>
                        {{
                            item.name
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
                        @click="delHandler(index)">
                    <div class="edge">

                    </div>
                </div>
            </li>
        </ul>
        <Scroll
                :top="top"
                :list-length="length"
                :sel-height="selHeight"
                :window-height="windowHeight"
                :mouse-move-lock="mouseMoveLock"
                :set-mouse-lock="setMouseMoveLock"
                :set-top="setTop"
                :set-ul-margin-top="setUlMarginTop"
                :ul-margin-top="ulMarginTop"
                :container-height="notShownHeight"
                :scroll-block-height="scrollBlockHeight"
                :is-moving="isScrolling"
                />
    </div>
</template>

<script>
    import Scroll from './Scroll';
    import temp from '../../assets/temp.jpg';
    import { debounce } from '../../module/debounce';
    // height: 107px
    export default {
        name: 'SessionList',
        data: function () {
            return {
                temp,
                top: 0,
                mouseMoveLock: false,
                ulMarginTop: 0,
                selHeight: 107,
                windowHeight: 633,
                isScrolling: false,
                timer: null
            };
        },
        methods: {
            setMouseMoveLock (val) {
                this.mouseMoveLock = val;
            },
            setTop (val) {
                this.top = val;
            },
            setUlMarginTop (val) {
                this.ulMarginTop = val;
            },
            scrollHandler (e) {
                if (!this.isScrolling) {
                    this.showScrollBlock();
                }
                let currentY = this.top;
                let { deltaY } = e;
                let y = deltaY > 0 ? 10 : -10;
                if (currentY + y > 0 && currentY + y < this.windowHeight - this.scrollBlockHeight) {
                   this.top = this.top + y;
                   this.ulMarginTop = -(this.top + y) * this.notShownHeight / this.windowHeight;
                }
                debounce(this.hideScrollBlock, 2000, this);
            },
            showScrollBlock () {
                this.isScrolling = true;
            },
            hideScrollBlock () {
                this.isScrolling = false;
            },
            setSelectedGroupId (id, index) {
                this.selectedGroupKey = id;
                this.$store.commit('updateGlobalState', {
                    key: 'selectedGroup',
                    value: this.sessionList[index]
                });
            },
            delHandler (index) {
                this.$store.commit('spliceListItem', {
                    index: index
                });
            }
        },
        computed: {
            sessionList: {
                get () {
                    return this.$store.state.sessionList.list;
                }
            },
            length: {
                get () {
                    return this.$store.state.sessionList.list.length;
                }
            },
            notShownHeight: {
                get () {
                    return (this.length - (this.windowHeight / this.selHeight)) * this.selHeight + 36;
                }
            },
            containerHeight: {
                get () {
                    return this.length * this.selHeight;
                }
            },
            scrollBlockHeight: {
                get () {
                    return this.windowHeight / this.length;
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

        },
        components: {
            Scroll
        }
    };
</script>

<style lang="scss">
    @import "../../sassUtils/fontMixin";
    @import "../../sassUtils/overFlow";
    #session_list {
        height: 100%;
        overflow: hidden;
        position: relative;
        background: #FFFFFF;
        border: 1px solid #D9DDE3;
        border-top: 0;
        box-sizing: border-box;
        ul {
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
                transition: border-left-color 0.5s ease;
                padding: 26px 21px 28px 15px;
                display: flex;
                align-items: center;
                box-sizing: border-box;
                border-left: 6px solid transparent;
                cursor: pointer;
                border-bottom: 1px solid #D9DDE3;
                position: relative;
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
