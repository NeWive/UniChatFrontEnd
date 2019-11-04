<template>
    <div id="log_in_form">
        <Input
                v-for="item in logInList"
                :placeholder="item.placeholder"
                :property="item.key"
                :type="item.type"
                :key="item.key"
                :has-img="item.key === 'verifyCode'"
                :logo="item.img"
        />
    </div>
</template>

<script>
    import { logInList } from '../../config/list.config';
    import Input from './Input';
    export default {
        name: 'LogInForm',
        components: {
            Input
        },
        data: function () {
            return {
                logInList
            };
        }
    };
</script>

<style scoped>

</style>
