<template>
    <div id="forget_password_panel">
        <div id="register_panel_form">
            <FindBackForm
                    :list="findBackPassword"
                    store-name="findBackForm"
                    store-status-name="registerFormStatus"/>
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
    import { forgetInHyperLink, findBackPassword } from '../config/list.config';
    export default {
        name: 'ForgetPasswordPanel',
        data: function () {
            return {
                forgetInHyperLink,
                findBackPassword
            };
        },
        components: {
            HyperLink,
            FindBackForm,
            FormButton
        },
        methods: {
            clickHandler: function () {
                this.isLoading = true;
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
