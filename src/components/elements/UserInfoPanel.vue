<template>
    <div id="user_info_element">
        <div class="portal">
            <img src="../../assets/temp.jpg" alt="">
        </div>
        <div class="user_info_content">
            <div class="container">
                <div class="username">
                    {{
                        this.userInfo.username
                    }}
                </div>
                <div class="name">
                    <span class="label">
                        id:
                    </span>
                    <span class="content">
                        {{
                            this.userInfo.id
                        }}
                    </span>
                </div>
                <div class="email">
                    <span class="label">
                        邮箱:
                    </span>
                    <span class="content">
                        {{
                            this.userInfo.email
                        }}
                    </span>
                </div>
                <div class="desc">
                    <p class="label">个人简介:</p>
                    <p class="content">
                        {{
                            this.userInfo.desc
                        }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'UserInfoPanel',
        computed: {
            userInfo: {
                get () {
                    return this.$store.state.userInfo;
                }
            }
        }
    };
</script>

<style lang="scss">
    @import "../../sassUtils/fontMixin";
    #user_info_element {
        position: relative;
        padding: 0 12px 0 15px;
        .portal {
            margin-top: 37px;
            display: flex;
            justify-content: center;
            img {
                width: 106px;
                height: 106px;
                border-radius: 100%;
            }
        }
        .user_info_content {
            padding: 75px 0 29px 0;
            background: #FFFFFF;
            border-radius: 10px;
            margin-top: -42px;
            .container {
                width: 229px;
                margin: 0 auto;
                .username {
                    text-align: center;
                    @include fontMixin(38px, ComicSansMS, bold, 42px);
                }
                .label {
                    @include fontMixin(21px, STSong, bold, 21px);
                    margin-right: 17px;
                }
                .content {
                    @include fontMixin(21px, STFangsong, bold, 21px);
                    opacity: 0.75;
                }
            }
        }
    }
</style>
