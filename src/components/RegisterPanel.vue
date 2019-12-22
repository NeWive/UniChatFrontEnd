<template>
    <div id="register_panel">
        <div id="register_panel_form">
            <RegisterForm
                    :list="registerList"
                    store-name="registerForm"
                    :store-status="formStatus"
                    mutation="updateRegisterForm"
                    :set-status="setStatus"
            />
        </div>
        <HyperLink :list="registerInHyperLink"/>
        <div class="button_container">
            <FormButton
                    :click-handler="clickHandler"
                    content="sign up"
                    :status="isLoading"/>
        </div>
    </div>
</template>

<script>
    import { registerList, registerInHyperLink } from '../config/list.config';
    import { interfaceGroup } from '../config/url.config';
    import { genArgs } from '../module/genPostArgs';
    import RegisterForm from './elements/Form';
    import HyperLink from './elements/HyperLink';
    import FormButton from './elements/FormButton';
    import { validateAll } from '../module/validate';
    import { requestForImg } from '../module/requestForImg';
    import { errList } from '../config/err.config';
    import { cacheUserInfo } from '../module/dbHandler';

    export default {
        name: 'RegisterPanel',
        data: function () {
            return {
                registerList,
                registerInHyperLink,
                formStatus: {
                    username: 'init',
                    password: 'init',
                    verifyCode: 'init',
                    email: 'init',
                },
                isLoading: false
            };
        },
        components: {
            RegisterForm,
            HyperLink,
            FormButton
        },
        methods: {
            clickHandler: async function () {
                let { status, msg } = validateAll(this.$store.state.registerForm);
                if (!status) {
                    this.$store.commit('handleMainPortal', {
                        message: msg,
                        isPortalOn: true
                    });
                } else {
                    let obj = genArgs(this.$store.state.registerForm, 'register');
                    this.isLoading = true;
                    try {
                        let response = await this.$axios({
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            data: JSON.stringify(obj),
                            url: interfaceGroup.signUp.url,
                            config: {
                                withCredentials: true
                            }
                        });
                        if (response.data.status === errList.OK) {
                            let { avatar, nickname, uid } = response.data.dat;
                            let data = await cacheUserInfo(avatar, nickname, uid);
                            this.$db.userInfo.insert(data, function (err, newDoc) {
                                err && console.log(err);
                                console.log(newDoc);
                            });
                            const callback = (function (ctx) {
                                return async function () {
                                    await ctx.$router.push('/main/login');
                                    ctx.$store.commit('clearRegisterForm');
                                };
                            })(this);
                            this.$store.commit('handleMainPortal', {
                                message: `注册成功，您的ID为：${uid}`,
                                isPortalOn: true,
                                callback: callback
                            });
                            this.isLoading = true;
                        } else {
                            this.$store.commit('handleMainPortal', {
                                message: response.data.msg,
                                isPortalOn: true
                            });
                            await requestForImg(interfaceGroup.captcha.url, 'verifyImg', 'verifyCodeImg', 'verifyImgContainer');
                        }
                    } catch (e) {
                        alert(e);
                        console.log(e);
                    } finally {
                        this.isLoading = false;
                    }
                }
            },
            setStatus: function (key, value) {
                this.formStatus[key] = value;
            }
        }
    };
</script>

<style lang="scss">
    #register_panel {
        padding: 66px 0 36px;
        #register_panel_form {
            display: flex;
            justify-content: center;
        }
        .button_container {
            padding: 0 126px 0 121px;
        }
    }
</style>
