<template>
    <div id="log_in_panel">
        <Portrait/>
        <div id="log_in_form_container">
            <LogInForm/>
        </div>
        <LogInLink/>
        <div class="button_container">
            <FormButton
                        click-handler=""
                        content="log in"/>
        </div>
    </div>
</template>

<script>
    import Portrait from './elements/Portrait';
    import LogInForm from './elements/LogInForm';
    import LogInLink from './elements/LogInLink';
    import FormButton from './elements/FormButton';
    export default {
        name: 'LogInPanel',
        components: {
            Portrait,
            LogInForm,
            LogInLink,
            FormButton
        }
    };
</script>

<style lang="scss">
    #log_in_panel {
        padding: 15px 0 28px;
        background: #FFFFFF;
        border-radius: 10px;
        /*border: 1px solid #286867;*/
        box-shadow: 2px 4px 8px -2px #060001;
        #log_in_form_container {
            display: flex;
            justify-content: center;
        }
        .button_container {
            padding: 0 126px 0 121px;
        }
    }
</style>
