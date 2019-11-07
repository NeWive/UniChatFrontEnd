<template>
    <div id="session_member">
        <div class="title">
            <img src="../../assets/friendIcon.png" alt="">
            <span>
                群成员
            </span>
        </div>
        <div class="members" @wheel="scrollHandler">
            <ul :style="{
                marginTop: `${ulMarginTop}px`
            }">
                <li
                        v-for="item in memberList"
                        :key="item.key">
                    <a href="" @click.prevent="() => {}">
                        <div class="img">
                            <img src="../../assets/temp.jpg" alt="">
                            <AuthorityLogo v-if="item.authority === 1"  background="#F4EA2A"/>
                            <AuthorityLogo v-else-if="item.authority === 2" background="#1AFA29"/>
                        </div>
                        <p>
                            {{
                                item.username
                            }}
                        </p>
                    </a>
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
                    :is-moving="isScrolling"/>
        </div>
    </div>
</template>

<script>
    import AuthorityLogo from './AuthorityLogo';
    import Scroll from './Scroll';
    import { debounce } from '../../module/debounce';
    export default {
        name: 'SessionMember',
        computed: {
            memberList: {
                get () {
                    return this.$store.state.selectedGroup.members;
                }
            },
            length: {
                get () {
                    return this.$store.state.selectedGroup.members.length;
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

        },
        components: {
            AuthorityLogo,
            Scroll
        },
        data: function () {
            return {
                mouseMoveLock: false,
                ulMarginTop: 0,
                selHeight: 50,
                windowHeight: 325,
                isScrolling: false,
                timer: null,
                top: 0
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
        }
    };
</script>

<style lang="scss">
    @import "../../sassUtils/fontMixin";
    #session_member {
        height: 409px;
        padding: 29px 0 0 28px;
        box-sizing: border-box;
        .title {
            span {
                @include fontMixin(17px, Adobe Heiti Std R, bold, 17px);
                color: #333333;
                margin-left: 10px;
                letter-spacing: 3px;
            }
            img, span {
                vertical-align: middle;
            }
            margin-bottom: 19px;
        }
        .members {
            margin-left: 11px;
            overflow: hidden;
            height: 325px;
            position: relative;
            ul {
                li {
                    cursor: pointer;
                    margin-bottom: 21px;
                    &:hover {
                        p {
                            color: #17BEBB;
                        }
                    }
                    &:last-child {
                        margin-bottom: 21px;
                    }
                    a {
                        .img {
                            position: relative;
                            img {
                                width: 29px;
                                height: 29px;
                                border-radius: 100%;
                            }
                            .authority_logo {
                                position: absolute;
                                left: 21px;
                                bottom: -3px;
                            }
                            margin-right: 21px;
                        }
                        .img, p {
                            display: inline-block;
                            vertical-align: middle;
                        }
                        p {
                            @include fontMixin(17px, ComicSansMS, bold, 19px);
                            width: 80px;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            transition: color 0.5s ease;
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
    }
</style>
