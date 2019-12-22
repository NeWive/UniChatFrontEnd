<template>
    <div id="log_in_panel">
        <div class="portrait_box" :class="!isLoading ? '' : 'extend'">
            <Portrait
                    :is-loading="isLoading"
                    :data="imgData"/>
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
                        :on-change-call-back="getUserAvatar"
                />
            </div>
            <LogInLink
                    :list="logInHyperLink"/>
            <div class="button_container">
                <FormButton
                        :click-handler="clickHandler"
                        content="log in"
                        :status="isLoading"
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
    import img from '../assets/temp.jpg';
    import { ipcRenderer } from 'electron';
    import { logInHyperLink, logInList, logInMethodList } from '../config/list.config';
    import { validate, validateAll } from '../module/validate';
    import { genArgs } from '../module/genPostArgs';
    import { interfaceGroup } from '../config/url.config';
    import { errList } from '../config/err.config';
    import { requestForImg } from '../module/requestForImg';
    import { mapToLogIn } from '../module/transObj';

    export default {
        name: 'LogInPanel',
        components: {
            Portrait,
            LogInForm,
            LogInLink,
            FormButton
        },
        methods: {
            clickHandler: async function () {
                // this.isLoading = !this.isLoading;
                // let ctx = this;
                // setTimeout(function () {
                //     ctx.$router.push('/index');
                // }, 1500);
                let { status, msg } = validateAll(this.$store.state.logInForm);
                if (!status) {
                    this.$store.commit('handleMainPortal', {
                        message: msg,
                        isPortalOn: true
                    });
                } else {
                    let obj = genArgs(this.$store.state.logInForm, 'login');
                    this.isLoading = true;
                    try {
                        let { data } = await this.$axios({
                             method: 'POST',
                            headers: {
                                 'Content-Type': 'application/json'
                            },
                            data: JSON.stringify(obj),
                            url: interfaceGroup.signIn.url,
                            config: {
                                 withCredentials: true
                            }
                        });
                        console.log(data);
                        if (data.status === errList.OK) {
                            await this.$router.push('/index');
                        } else {
                            this.$store.commit('handleMainPortal', {
                                message: data.msg,
                                isPortalOn: true
                            });
                            await requestForImg(interfaceGroup.captcha.url, 'verifyImg', 'verifyCodeImg', 'verifyImgContainer');
                        }
                    } catch (e) {
                        alert(e);
                    } finally {
                        this.isLoading = false;
                    }
                }
            },
            setStatus: function (key, value) {
                this.formStatus[key] = value;
            },
            getUserAvatar: function () {
                try {
                    if (validate(this.$store.state.logInForm.username, 'uid').status) {
                        let uid = Number(this.$store.state.logInForm.username);
                        this.$db.userInfo.find({ uid: uid }, function (err, docs) {
                            err && console.log(err);
                            console.log(docs);
                            let [ data ] = docs;
                            if (data) {
                                console.log(data.avatar);
                                let target = document.getElementById('portrait');
                                console.log(target);
                                target.src = data.avatar;
                            }
                        });
                    }
                } catch (e) {
                    console.log(e);
                }
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
                },
                imgData: img
            };
        },
        computed: {
            isLoading: {
                get () {
                    return this.$store.state.isLoading;
                },
                set (value) {
                    this.$store.commit('updateGlobalState', {
                        key: 'isLoading',
                        value
                    });
                }
            }
        },
        async beforeRouteLeave (to, from, next) {
            console.log(to);
            console.log(from);
            if (to.name === 'session' && from.name === 'login') {
                try {
                    let { data } = await this.$axios({
                        url: interfaceGroup.getUserInfo.url,
                        data: JSON.stringify(genArgs(this.$store.state.logInForm, 'userInfo')),
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        method: 'POST',
                        config: {
                            withCredentials: true
                        }
                    });
                    console.log(data);
                    if (data.status === errList.OK) {
                        let uid = Number(this.$store.state.logInForm.username);
                        let userInfo = data.dat;
                        let ctx = this;
                        this.$db.userInfo.find({ uid: uid }, async function (err, docs) {
                            try {
                                err && console.log(err);
                                console.log(docs);
                                let [ cachedUserInfo ] = docs;
                                if (cachedUserInfo) {
                                    console.log(data.avatar);
                                    userInfo.avatar = cachedUserInfo.avatar;
                                    userInfo.uid = cachedUserInfo.uid;
                                }
                                userInfo.email = '738767136@qq.com';
                                console.log(userInfo);
                                ctx.$store.commit('setUserInfo', {
                                    userInfo: mapToLogIn(userInfo)
                                });
                                console.log(`${userInfo.avatar}?t=${Math.random()}`);
                                ctx.$store.commit('updateGlobalState', {
                                    key: 'portrait',
                                    value: `${userInfo.avatar}?t=${Math.random()}`
                                });
                                setTimeout(function () {
                                    ipcRenderer.send('resizeWindow', { width: 1216, height: 763 });
                                    next();
                                }, 500);
                            } catch (e) {
                                console.log(e);
                                next(false);
                                ctx.isLoading = false;
                                await requestForImg(interfaceGroup.captcha.url, 'verifyImg', 'verifyCodeImg', 'verifyImgContainer');
                            }
                        });
                    } else {
                        this.$store.commit('handleMainPortal', {
                            message: data.msg,
                            isPortalOn: true
                        });
                        await requestForImg(interfaceGroup.captcha.url, 'verifyImg', 'verifyCodeImg', 'verifyImgContainer');
                    }
                } catch (e) {
                    console.log(e);
                    next(false);
                    this.isLoading = false;
                    await requestForImg(interfaceGroup.captcha.url, 'verifyImg', 'verifyCodeImg', 'verifyImgContainer');
                }
            } else {
                next();
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
