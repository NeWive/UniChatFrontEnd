<template>
    <div class="input_container" :class="status">
        <div class="input_sel" :class="!hasImg ? 'hasImg' : ' '">
            <div class="img">
                <img :src="logo" alt="">
            </div>
            <input
                    :type="type"
                    :placeholder="placeholder"
                    v-model="message"
                    @focus="focusHandler"
                    @blur="blueHandler"
                    />
        </div>
        <img v-if="hasImg" src="../../assets/temp.jpg" alt="" class="verifyCodeImg">
    </div>
</template>

<script>
    export default {
        name: 'Input',
        props: {
            type: {
                type: String,
                default: 'text'
            },
            property: {
                type: String,
                required: true
            },
            placeholder: {
                type: String,
                default: ''
            },
            hasImg: {
                type: Boolean,
                default: false
            },
            logo: {
                type: String,
                required: true
            }
        },
        methods: {
            focusHandler: function () {
                this.status = 'focus';
            },
            blueHandler: function () {
                this.status = 'init';
            }
        },
        computed: {
            message: {
                get: function () {
                    return this.$store.state.logInForm[this.property];
                },
                set: function (value) {
                    this.$store.commit('updateForm', {
                        key: this.property,
                        value: value
                    });
                }
            },
            status: {
                get: function () {
                    return this.$store.state.logInFormStatus[this.property];
                },
                set: function (value) {
                    this.$store.commit('updateFormStatus', {
                        key: this.property,
                        value: value
                    });
                }
            }
        }
    };
</script>

<style lang="scss">
    @import "../../sassUtils/fontMixin";
    .input_container {
        display: flex;
        align-items: center;
        position: relative;
        margin-bottom: 29px;
        &:last-child {
            margin-bottom: 17px;
        }
        /*justify-content: center;*/
        .input_sel {
            border-bottom: 2px solid #5C555C;
            display: flex;
            align-items: center;
            position: relative;
            transition: border-bottom-color 0.8s ease;
            .img {
                position: absolute;
                width: 23px;
                height: 27px;
                display: flex;
                justify-content: center;
                align-items: center;
                bottom: 3px;
            }
            input {
                width: 219px;
                padding-left: 29px;
                border: 0;
                @include fontMixin(25px, Centaur, bold, 12px);
                color: #5C555C;
                opacity: 0.72;
                background: transparent;
            }
        }
        .hasImg {
            width: 332px;
            input {
                width: 100%;
            }
        }
        .verifyCodeImg {
            margin-top: -6px;
            margin-left: 17px;
            width: 96px;
            height: 36px;
            cursor: pointer;
        }
    }
    .focus {
        .input_sel {
            border-bottom-color: #17BEBB;
        }
    }
    .init {

    }
</style>
