<template>
    <div id="form">
        <Input
                v-for="item in list"
                :placeholder="item.placeholder"
                :property="item.key"
                :type="item.type"
                :key="item.key"
                :has-img="item.key === 'verifyCode'"
                :logo="item.img"
                :store-name="storeName"
                :status="storeStatus[item.key]"
                :mutation="mutation"
                :set-status="setStatus"
        />
    </div>
</template>

<script>
    import Input from './Input';

    export default {
        name: 'Form',
        components: {
            Input
        },
        props: {
            list: {
                type: Array,
                required: true
            },
            storeName: {
                type: String,
                required: true
            },
            storeStatus: {
                type: Object,
                required: true
            },
            mutation: {
                type: String,
                required: true
            },
            setStatus: {
                type: Function,
                require: true
            }
        }
    };
</script>

<style scoped>

</style>
