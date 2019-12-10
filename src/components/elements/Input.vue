<!--suppress JSCheckFunctionSignatures -->
<template>
    <div class="input_container" :class="status">
        <div class="input_sel" :class="!hasImg ? 'hasImg' : ' '">
            <div class="img" v-if="logo">
                <img :src="logo" alt="">
            </div>
            <input
                    :type="type"
                    :placeholder="placeholder"
                    v-model="message"
                    @focus="focusHandler"
            />
            <transition name="fade">
                <div class="err_message" v-show="errMessage">
                    <span>
                        {{
                            errMessage
                        }}
                    </span>
                </div>
            </transition>
        </div>
        <template v-if="hasImg">
            <div id="verifyImgContainer" @click="clickHandler">
                <transition name="fade">
                    <img :src="url" alt="" class="verifyCodeImg" id="verifyImg">
                </transition>
            </div>
        </template>
    </div>
</template>

<script>
    import { validate } from '../../module/validate';
    import { requestForImg } from '../../module/requestForImg';
    import { interfaceGroup } from '../../config/url.config';

    export default {
        name: 'Input',
        data: function () {
            return {
                isFetched: false,
                errMessage: '',
                url: interfaceGroup.captcha.url
            };
        },
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
                default: ''
            },
            storeName: {
                type: String,
                required: true
            },
            status: {
                type: String,
                required: true
            },
            mutation: {
                type: String,
                required: true
            },
            setStatus: {
                type: Function,
                required: true
            }
        },
        methods: {
            focusHandler: function () {
                this.setStatus(this.property, 'focus');
            },
            clickHandler: function (e) {
                console.log(document.getElementById('verifyImg'));
                requestForImg(interfaceGroup.captcha.url, 'verifyImg', 'verifyCodeImg', 'verifyImgContainer');
            }
        },
        computed: {
            message: {
                get: function () {
                    return (this.$store.state[this.storeName])[this.property];
                },
                set: function (value) {
                    this.$store.commit(this.mutation, {
                        key: this.property,
                        value: value
                    });
                    let { status, msg } = validate(value, this.property);
                    this.setStatus(this.property, !status ? 'err' : 'init');
                    this.errMessage = msg;
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
            .err_message {
                position: absolute;
                left: 0;
                bottom: -20px;
                span {
                    font-size: 13px;
                    color: red;
                }
            }
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
        .fetch_img {
            cursor: pointer;
            margin-left: 5px;
            border: 2px solid #5C555C;
            border-radius: 5px;
            padding: 2.5px 12px;
            font-size: 14px;
            transition: border-color 0.5s ease;
            &:hover {
                border-color: #17BEBB;
            }
        }
    }
    .focus {
        .input_sel {
            border-bottom-color: #17BEBB;
        }
    }
    .init {
        .input_sel {
            border-bottom-color: #5C555C;
        }
    }
    .err {
        .input_sel {
            border-bottom-color: red;
        }
    }
</style>
