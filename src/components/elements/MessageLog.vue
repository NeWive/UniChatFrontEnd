<template>
    <div
            id="message_log"
            :class="{openedMessageLog: isMessageLogOn}"
            :style="{
                width: `${messageLogWidth}px`
            }">
        <div class="message_panel">
            <ul class="message_content" v-if="isMessageLogOn">
                <template v-for="(item, index) in messageList">
                    <transition :key="index" mode="out-in" name="fade">
                        <li :class="item.id === user.id ? 'self' : 'other'">
                            <div class="head">
                                <img alt="" src="../../assets/temp.jpg">
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
    </div>
</template>

<script>
    export default {
        name: 'MessageLog',
        computed: {
            isMessageLogOn: {
                get () {
                    return this.$store.state.isMessageLogOn;
                }
            },
            messageLogWidth: {
                get () {
                    return this.$store.state.messageLogWidth;
                }
            },
            messageList: {
                get () {
                    return this.$store.state.messageList;
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
            }
        }
    };
</script>

<style lang="scss">
    @import "../../sassUtils/fontMixin";
    @import "../../sassUtils/overFlow";

    #message_log {
        float: right;
        height: 100%;
        position: relative;
        z-index: 99;
        background: #FFFFFF;
        opacity: 0;
        width: 0;
        transition: all 0.5s ease;
        overflow: hidden;
        .message_panel {
            height: 100%;
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
    }
    .openedMessageLog {
        opacity: 1 !important;
    }
</style>
