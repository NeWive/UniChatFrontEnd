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
    import { genRegisterArgs } from '../module/genPostArgs';
    import RegisterForm from './elements/Form';
    import HyperLink from './elements/HyperLink';
    import FormButton from './elements/FormButton';
    import { validateAll } from '../module/validate';
    import { requestForImg } from '../module/requestForImg';
    import { errList } from '../config/err.config';
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
                    let obj = genRegisterArgs(this.$store.state.registerForm);
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
                            this.$store.commit('handleMainPortal', {
                                message: `注册成功，您的ID为：${uid}`,
                                isPortalOn: true
                            });
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
