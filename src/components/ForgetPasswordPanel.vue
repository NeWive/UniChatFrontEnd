<template>
    <div id="forget_password_panel">
        <div id="register_panel_form">
            <FindBackForm
                    :list="findBackPassword"
                    store-name="findBackForm"
                    :store-status="formStatus"
                    :set-status="setStatus"
                    mutation="updateFindBackForm"
            />
        </div>
        <HyperLink :list="forgetInHyperLink"/>
        <div class="button_container">
            <FormButton
                    :click-handler="clickHandler"
                    content="find back"
                    :status="isLoading"/>
        </div>
    </div>
</template>

<script>
    import HyperLink from './elements/HyperLink';
    import FormButton from './elements/FormButton';
    import FindBackForm from './elements/Form';
    import axios from 'axios';
    import { forgetInHyperLink, findBackPassword } from '../config/list.config';
    import { interfaceGroup } from '../config/url.config';
    import { validateAll } from '../module/validate';
    import { genFindBackArgs } from '../module/genPostArgs';
    export default {
        name: 'ForgetPasswordPanel',
        data: function () {
            return {
                forgetInHyperLink,
                findBackPassword,
                formStatus: {
                    repeat_password: 'init',
                    password: 'init',
                    email: 'init'
                }
            };
        },
        components: {
            HyperLink,
            FindBackForm,
            FormButton
        },
        methods: {
            clickHandler: async function () {
                let { status, msg } = validateAll(this.$store.state.findBackForm);
                if (!status) {
                    this.$store.commit('handleMainPortal', {
                        message: msg,
                        isPortalOn: true
                    });
                } else {
                    let obj = genFindBackArgs(this.$store.state.findBackForm);
                    console.log(JSON.stringify(obj));
                    try {
                        let response = await axios({
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            data: JSON.stringify(obj),
                            // url: interfaceGroup..url
                        });
                    } catch (e) {
                        console.log(e);
                    }
                }
                // this.isLoading = true;
            },
            setStatus: function (key, value) {
                this.formStatus[key] = value;
            }
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
    #forget_password_panel {
        #register_panel_form {
            display: flex;
            justify-content: center;
        }
        .button_container {
            padding: 0 126px 0 121px;
        }
    }
</style>
