<template>
    <div id="user_info_element">
        <div class="portal">
            <img src="../../assets/temp.jpg" alt="">
        </div>
        <div class="user_info_content">
            <transition name="fade" mode="out-in">
                <div class="display_container" v-if="!isChangingInfo">
                    <div class="username">
                        {{
                            this.userInfo.username
                        }}
                    </div>
                    <div class="name">
                        <span class="label">
                            id:
                        </span>
                        <span class="content">
                            {{
                                this.userInfo.id
                            }}
                        </span>
                    </div>
                    <div class="email">
                        <span class="label">
                            邮箱:
                        </span>
                        <span class="content">
                            {{
                                this.userInfo.email
                            }}
                        </span>
                    </div>
                    <div class="desc">
                        <p class="label">个人简介:</p>
                        <p class="content">
                            {{
                                this.userInfo.desc
                            }}
                        </p>
                    </div>
                </div>
                <div class="edit_container" v-else>
                    <div class="container">
                        <div class="username">
                            <Input
                                    property="username"
                                    :placeholder="this.userInfo.username"
                                    store-name="editUserInfoForm"
                                    store-status-name="editUserInfoFormStatus"
                            />
                        </div>
                        <div class="name">
                            <span class="label">
                                id:
                            </span>
                            <span class="content">
                                {{
                                    this.userInfo.id
                                }}
                            </span>
                        </div>
                        <div class="email">
                            <span class="label">
                                邮箱:
                            </span>
                            <Input
                                    property="email"
                                    :placeholder="this.userInfo.email"
                                    store-name="editUserInfoForm"
                                    store-status-name="editUserInfoFormStatus"
                            />
                        </div>
                        <div class="desc">
                            <p class="label">个人简介:</p>
                            <textarea :placeholder="this.userInfo.desc"></textarea>
                        </div>
                    </div>
                </div>
            </transition>
            <div class="edit_button_box" v-if="allowEdit">
                <img
                        src="../../assets/change.png"
                        alt=""
                        @click="openEditForm"
                        :class="{isChangingInfo}">
            </div>
        </div>
    </div>
</template>

<script>
    import Input from './Input';
    export default {
        name: 'UserInfoPanel',
        components: {
            Input
        },
        computed: {
            userInfo: {
                get () {
                    return this.$store.state.userInfo;
                }
            },
            isChangingInfo: {
                get () {
                    return this.$store.state.portal.isChangingInfo;
                },
                set (value) {
                    this.$store.commit('updateStatus', {
                        key: 'isChangingInfo',
                        value: value
                    });
                }
            },
            allowEdit: {
                get () {
                    return this.$store.state.portal.allowEdit;
                }
            }
        },
        methods: {
            openEditForm () {
                console.log(this.isChangingInfo);
                if (this.isChangingInfo) {
                    // if (confirm('确定提交吗')) {
                    //     this.isChangingInfo = false;
                    //     // this.openEditForm(false);
                    // }
                    this.confirmHandler = (function (ctx) {
                          let context = ctx;
                          return function () {
                              console.log('确定');
                              context.isChangingInfo = false;
                              context.cancelHandler = null;
                              context.confirmHandler = null;
                              context.$store.commit('handleConfirmWindow', {
                                  confirmHandler: null,
                                  cancelHandler: null,
                                  confirmWindowMessage: '',
                                  isConfirmWindowOn: false
                              });
                              console.log(context.confirmHandler);
                          };
                    })(this);
                    this.cancelHandler = (function (ctx) {
                        let context = ctx;
                        return function () {
                            console.log('取消');
                            context.cancelHandler = null;
                            context.confirmHandler = null;
                            context.$store.commit('handleConfirmWindow', {
                                confirmHandler: null,
                                cancelHandler: null,
                                confirmWindowMessage: '',
                                isConfirmWindowOn: false
                            });
                        };
                    })(this);
                    this.$store.commit('handleConfirmWindow', {
                        confirmHandler: this.confirmHandler,
                        cancelHandler: this.cancelHandler,
                        confirmWindowMessage: '确定修改吗',
                        isConfirmWindowOn: true
                    });
                } else {
                    this.isChangingInfo = true;
                }
            }
        }
    };
</script>

<style lang="scss">
    @import "../../sassUtils/fontMixin";
    @import "../../sassUtils/cleatFixMixin";
    #user_info_element {
        position: relative;
        padding: 0 12px 0 15px;
        .portal {
            margin-top: 37px;
            display: flex;
            justify-content: center;
            img {
                width: 106px;
                height: 106px;
                border-radius: 100%;
            }
        }
        .user_info_content {
            padding: 75px 0 29px 0;
            background: #FFFFFF;
            border-radius: 10px;
            margin-top: -42px;
            /*display: flex;*/
            /*justify-content: center;*/
            .display_container {
                .username {
                    text-align: center;
                    @include fontMixin(38px, ComicSansMS, bold, 42px);
                    letter-spacing: 3px;
                    margin-bottom: 31px;
                }
                .label {
                    @include fontMixin(21px, STSong, bold, 21px);
                    margin-right: 5px;
                }
                .content {
                    @include fontMixin(21px, STFangsong, bold, 21px);
                    opacity: 0.75;
                }
                .name, .email, .desc {
                    margin-left: 125px;
                }
                .name, .email {
                    margin-bottom: 20px;
                }
                .name {
                    .label {
                        margin-right: 32px;
                    }
                }
                .desc {
                    .content {
                        margin-top: 20px;
                        margin-left: 27px;
                        width: 163px;
                        height: 88px;
                        overflow-y: scroll;
                        overflow-x: hidden;
                    }
                }
            }
            .edit_container {
                display: flex;
                justify-content: center;
                .container {
                    display: inline-block;
                    .username {
                        text-align: center;
                        @include fontMixin(38px, ComicSansMS, bold, 42px);
                        letter-spacing: 3px;
                        margin-bottom: 31px;
                    }
                    .label {
                        @include fontMixin(21px, STSong, bold, 21px);
                        margin-right: 5px;
                    }
                    .content {
                        @include fontMixin(21px, STFangsong, bold, 21px);
                        opacity: 0.75;
                    }
                    .username {
                        margin: 0 auto;
                        width: 213px;
                        input {
                            text-align: center;
                            padding: 0;
                        }
                    }
                    .name {
                        margin-bottom: 20px;
                    }
                    .email {
                        /*width: 200px;*/
                        .input_container {
                            display: inline-block;
                            width: 156px;
                            .hasImg {
                                width: 100%;
                            }
                            input {
                                font-size: 18px;
                                padding: 0;
                                text-align: center;
                            }
                        }
                    }
                    textarea {
                        margin-left: 30px;
                        margin-top: 20px;
                        width: 163px;
                        height: 88px;
                        border-color: #000000;
                        transition: border-color 0.5s ease;
                        &:focus {
                            border-color: #17BEBB;
                        }
                    }
                }
            }
            .edit_button_box {
                @include clearFix;
                img {
                    width: 36px;
                    height: 37px;
                    float: right;
                    margin-right: 44px;
                    cursor: pointer;
                    border: 1px solid transparent;
                    transition: border-color 0.5s ease;
                }
                .isChangingInfo {
                    border-color: #17BEBB;
                }
            }
        }
    }
</style>
