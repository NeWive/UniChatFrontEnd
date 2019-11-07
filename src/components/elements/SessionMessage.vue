<template>
    <div id="session_message">
        <div class="name_panel">
            <transition name="fade">
                <p>
                    {{
                        channelInfo.name
                    }}
                </p>
            </transition>
        </div>
        <div class="message_panel">
            <a href="" class="preMessage">
                查看以前消息
            </a>
            <ul class="message_content">
                <template v-for="(item, index) in messageList">
                    <transition name="fade" mode="out-in" :key="index">
                        <li :class="item.id === user.id ? 'self' : 'other'">
                            <div class="head">
                                <img src="../../assets/temp.jpg" alt="">
                            </div>
                            <div class="message">
                                <p>
                                    {{
                                        item.message
                                    }}
                                </p>
                            </div>
                        </li>
                    </transition>
                </template>
            </ul>
        </div>
        <div class="post_panel">
            <div class="module_panel">
                <div class="img_panel">
                    <a href="" @click.prevent="() => {}">
                        <img src="../../assets/emoji.png" alt="">
                    </a>
                    <a href="" @click.prevent="() => {}">
                        <img src="../../assets/pic.png" alt="">
                    </a>
                </div>
                <div class="chat_log">
                    <span>
                        聊天记录
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'SessionMessage',
        mounted () {
            let target = document.getElementsByClassName('message_panel')[0];
            console.log(target);
            console.log(target.scrollHeight);
            target.scrollTop = target.scrollHeight;
            console.log(target.scrollTop);
        },
        computed: {
            channelInfo: {
                get () {
                    return this.$store.state.selectedChannel;
                }
            },
            messageList: {
                get () {
                    return this.$store.state.channelMessage;
                },
                set (val) {
                    this.$store.commit('pushIntoChannelMessage', {
                        value: {
                            time: new Date().getTime(),
                            message: val
                        }
                    });
                }
            },
            user: {
                get () {
                    let { username, id, desc, email } = this.$store.state.userInfo;
                    return { username, id, desc, email };
                }
            },

        },
        data: function () {
            return {
                top: 0,
                mouseMoveLock: false,
                ulBottom: 0,
                windowHeight: 435,
                isScrolling: false,
                timer: null
            };
        }
    };
</script>

<style lang="scss">
    @import "../../sassUtils/fontMixin";
    @import "../../sassUtils/overFlow";
    #session_message {
        width: 722px;
        height: 100%;
        float: left;
        box-sizing: border-box;
        .name_panel {
            width: 100%;
            height: 48px;
            border-bottom: 1px solid #D9DDE3;
            padding: 16px 0 11px 19px;
            box-sizing: border-box;
            .fade-enter-active, .fade-leave-active {
                transition: opacity .5s;
            }
            .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
                opacity: 0;
            }
            p {
                @include overFlowOneLine;
                @include fontMixin(21px, FZQKBYSJW--GB1-0, bold, 21px);
                letter-spacing: 3px;
            }
        }
        .message_panel {
            height: 435px;
            box-sizing: border-box;
            border-bottom: 1px solid #D9DDE3;
            position: relative;
            overflow-y: scroll;
            .preMessage {
                display: block;
                margin-top: 5px;
                text-align: center;
                @include fontMixin(13px, Adobe Heiti Std R, bold, 19px);
                opacity: 0.5;
                color: #333333;
                transition: opacity 0.3s ease;
                &:hover {
                    opacity: 1;
                }
            }
            ul {
                width: 100%;
                /*position: absolute;*/
                /*bottom: 0;*/
                padding: 17px 28px 17px 18px;
                box-sizing: border-box;
                li {
                    display: flex;
                    align-items: flex-start;
                    margin-bottom: 43px;
                    &:last-child {
                        margin-bottom: 0;
                    }
                    .head {
                        cursor: pointer;
                        width: 41px;
                        height: 41px;
                        img {
                            width: 100%;
                            height: 100%;
                            border-radius: 100%;
                        }
                    }
                    .message {
                        max-width: 218px;
                        position: relative;
                        opacity: 0.9;
                        transition: opacity 0.5s ease;
                        &:hover {
                            opacity: 1;
                        }
                        &:after {
                            content: '';
                            display: block;
                            position: absolute;
                            border: 9px solid #FFFFFF;
                        }
                        p {
                            word-wrap: break-word;
                            @include fontMixin(17px, Adobe Heiti Std R, bold, 19px);
                            color: #333333;
                        }
                        padding: 9px 16px 14px;
                        border-radius: 5px;
                    }
                }
                .self {
                    flex-direction: row-reverse;
                    .message {
                        margin-right: 18px;
                        background: #17BEBB;
                        color: #17BEBB;
                        &:after {
                            right: -18px;
                            top: 12px;
                            border-left-color: inherit;
                        }
                    }
                }
                .other {
                    .message {
                        margin-left: 18px;
                        background: #8BDEDD;
                        color: #8BDEDD;
                        &:after {
                            left: -18px;
                            top: 12px;
                            border-right-color: inherit;
                        }
                    }
                }
            }
        }
        .post_panel {
            .module_panel {
                padding: 6px 27px 4px 18px;
                display: flex;
                justify-content: space-between;
                .img_panel {
                    a {
                        /*display: flex;*/
                        /*justify-content: center;*/
                        /*align-items: center;*/
                        transition: background-color 0.5s ease;
                        margin-right: 15px;
                        &:last-child {
                            margin-right: 0;
                        }
                        &:hover {
                            background-color: #D9DDE3;
                        }
                    }
                }
                .chat_log {
                    cursor: pointer;
                    border-bottom: 3px solid transparent;
                    transition: border-bottom-color 0.5s ease;
                    padding-bottom: 2px;
                    &:hover {
                        border-bottom-color: #17BEBB;
                    }
                    span {
                        @include fontMixin(17px, FZQKBYSJW--GB1-0, bold, 18px);
                        color: #585D68;
                    }
                }
            }
        }
    }
</style>
