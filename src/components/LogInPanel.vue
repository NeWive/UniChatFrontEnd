<template>
    <div id="log_in_panel">
        <div class="portrait_box" :class="!isLoading ? '' : 'extend'">
            <Portrait :is-loading="isLoading"/>
            <div class="button_container" v-if="isLoading">
                <transition name="fade">
                    <FormButton
                            :click-handler="clickHandler"
                            content="cancel"
                    />
                </transition>
            </div>
        </div>
        <div class="outer" :class="!isLoading ? 'notLoading' : 'isloading'" >
            <div id="log_in_form_container">
                <LogInForm
                        :list="logInList"
                        store-name="logInForm"
                        :store-status="formStatus"
                        mutation="updateLogInForm"
                        :set-status="setStatus"
                />
            </div>
            <LogInLink
                    :list="logInHyperLink"/>
            <div class="button_container">
                <FormButton
                        :click-handler="clickHandler"
                        content="log in"
                />
            </div>
            <div class="other_way">
                <a
                        href=""
                        @click.prevent="clickHandler"
                        v-for="item in logInMethodList"
                        :key="item.key"
                        :class="item.key">
                    <img :src="item.img" alt="">
                </a>
            </div>
        </div>
    </div>
</template>

<script>
    import Portrait from './elements/Portrait';
    import LogInForm from './elements/Form';
    import LogInLink from './elements/HyperLink';
    import FormButton from './elements/FormButton';
    import { logInList, logInMethodList, logInHyperLink } from '../config/list.config';
    export default {
        name: 'LogInPanel',
        components: {
            Portrait,
            LogInForm,
            LogInLink,
            FormButton
        },
        methods: {
            clickHandler: function () {
                this.isLoading = !this.isLoading;
                let ctx = this;
                setTimeout(function () {
                    ctx.$router.push('/index');
                }, 1500);
            },
            setStatus: function (key, value) {
                this.formStatus[key] = value;
            }
        },
        data: function () {
            return {
                logInList,
                logInMethodList,
                logInHyperLink,
                formStatus: {
                    username: 'init',
                    password: 'init',
                    verifyCode: 'init',
                }
            };
        },
        computed: {
            isLoading: {
                get: function () {
                    return this.$store.state.isLoading;
                },
                set: function (value) {
                    this.$store.commit('updateGlobalState', {
                        key: 'isLoading',
                        value: value
                    });
                }
            }
        }
    };
</script>

<style lang="scss">
    #log_in_panel {
        padding-top: 83px;
        position: relative;
        .portrait_box {
            z-index: 999;
            background: #FFFFFF;
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            margin: 0 auto;
            height: 62px;
            transition: all 0.5s ease;
        }
        #log_in_form_container {
            display: flex;
            justify-content: center;
        }
        .button_container {
            padding: 0 126px 0 121px;
        }
        .other_way {
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 25px 0 0;
            a{
                cursor: pointer;
                margin-right: 37px;
                &:last-child {
                    margin-right: 0;
                }
                img {
                    width: 45px;
                    height: 45px;
                }
            }
            .logWithWeChat {
                img {
                    width: 51px;
                    height: 41px;
                }
            }
        }
        /*
            animation
            cancel 取消按钮
        */
        .extend {
            height: 400px;
            .button_container {
                width: 253px;
                height: 37px;
                position: absolute;
                bottom: 65px;
                .fade-enter-active, .fade-leave-active {
                    transition: opacity .5s;
                }
                .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
                    opacity: 0;
                }
            }
            .portrait {
                transform: scale(2.5) translate(0, 50px);
            }
        }
    }
</style>
