<template>
    <div
            id="session_channel"
            @wheel="scrollHandler">
        <div class="window">
            <ul :style="{
                marginTop: `${ulMarginTop}px`
            }">
                <li
                        v-for="(item, index) in groupChannel"
                        :key="item.id"
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
                <li>
                    <a @click.prevent="() => {}">
                        <img src="../../assets/add.png" alt="">
                        <span class="channel_name">
                            添加频道
                        </span>
                    </a>
                </li>
            </ul>
        </div>
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
    import { debounce } from '../../module/debounce';
    export default {
        name: 'ChannelBox',
        computed: {
            groupChannel: {
                get () {
                    return this.$store.state.selectedGroup.channel;
                }
            },
            length: {
                get () {
                    return this.$store.state.selectedGroup.channel.length;
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
        components: {
            Scroll
        },
        data: function () {
            return {
                top: 0,
                mouseMoveLock: false,
                ulMarginTop: 0,
                selHeight: 43,
                windowHeight: 223,
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
            clickHandler (id, index) {
                this.selectedChannelId = id;
                this.$store.commit('updateGlobalState', {
                    key: 'selectedChannel',
                    value: index
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
        padding: 12px 24px 0 24px;
        position: relative;
        .window {
            overflow: hidden;
            height: 100%;
            border-bottom: 1px solid #D9DDE3;
            ul {
                li {
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
            }
        }
        .scroll {
            position: absolute;
            top: 0;
            right: -7px;
        }
    }
</style>
