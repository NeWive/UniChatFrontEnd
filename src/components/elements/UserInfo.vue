<template>
    <div class="user_info">
        <div class="left" @click="openPortal">
            <img src="../../assets/temp.jpg" alt="">
        </div>
        <div class="right">
            <div class="username">
                <span>
                    {{
                        userInfo.username
                    }}
                </span>
            </div>
            <p class="desc">
                {{
                    userInfo.desc
                }}
            </p>
        </div>
        <div class="search">
            <div class="search_button" @click="setInputVisible">
                <img src="../../assets/svg/search.png" alt="">
            </div>
            <transition name="input">
                <input type="text" v-if="isInputShown"/>
            </transition>
        </div>
    </div>
</template>

<script>
    import temp from '../../assets/temp.jpg';
    export default {
        name: 'UserInfo',
        data: function () {
            return {
                temp,
                isInputShown: true
            };
        },
        methods: {
            setInputVisible: function () {
                this.isInputShown = !this.isInputShown;
            },
            openPortal () {
                this.$store.commit('handlePortal', {
                    isPortalOn: true,
                    portalElement: this.$store.state.userInfo,
                    allowEdit: true
                });
            }
        },
        computed: {
            userInfo: {
                get: function () {
                    let { username, desc, portrait } = this.$store.state.userInfo;
                    return {
                        username,
                        desc,
                        portrait
                    };
                }
            }
        }
    };
</script>

<style lang="scss">
    @import "../../sassUtils/fontMixin";
    @import "../../sassUtils/overFlow";
    .user_info {
        .left, .right, .search {
            display: inline-block;
            vertical-align: middle;
        }
        .left {
            width: 52px;
            height: 52px;
            border-radius: 100%;
            img {
                width: 100%;
                height: 100%;
                border-radius: 100%;
                cursor: pointer;
            }
        }
        .right {
            margin-left: 15px;
            .username {
                span {
                    display: block;
                    @include fontMixin(25px, Centaur, bold, 25px);
                    color: #F3E8F3;
                    width: 116px;
                    @include overFlowOneLine;
                }
            }
            .desc {
                width: 116px;
                @include fontMixin(11px, Centaur, bold, 17px);
                color: #5C555C;
                @include overFlowOneLine;
            }
        }
        .search {
            margin-left: 18px;
            width: 154px;
            height: 27px;
            position: relative;
            .search_button {
                position: absolute;
                left: 12px;
                top: 0;
                bottom: 0;
                margin: auto 0;
                cursor: pointer;
            }
            input {
                width: 100%;
                box-sizing: border-box;
                height: 100%;
                border-radius: 10px;
                border: 1px solid #5C555C;
                background: transparent;
                /*opacity: 1;*/
                padding-left: 28px;
                /*transition: width 0.5s ease, border-color 0.5s ease;*/
            }
            .input-enter-active, .input-leave-active {
                transition: all 0.5s ease;
            }
            .input-enter {
                width: 0;
                padding-left: 0;
                border-color: transparent;
                opacity: 0;
            }
            .input-enter-to {
                opacity: 1;
                width: 100%;
                padding-left: 28px;
                border-color: #5C555C;
            }
            .input-leave {
                opacity: 1;
                width: 100%;
                padding-left: 28px;
                border-color: #5C555C;
            }
            .input-leave-to {
                opacity: 0;
                width: 0;
                padding-left: 0;
                border-color: transparent;
            }
        }
    }
</style>
