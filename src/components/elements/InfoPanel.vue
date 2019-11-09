<template>
    <div id="info_panel">
        <div class="info_container">
            <div class="portrait">
                <img src="../../assets/temp.jpg" alt="">
            </div>
            <div class="username">
                {{
                    user.username
                }}
            </div>
            <div class="email">
                {{
                    `邮箱: ${user.email}`
                }}
            </div>
            <div class="id">
                {{
                    `账号: ${user.id}`
                }}
            </div>
            <div class="desc">
                <div class="title">
                    个人简介：
                </div>
                <div class="desc_content">
                    <p>
                        {{
                        user.desc
                        }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'InfoPanel',
        computed: {
            user: {
                get () {
                    return this.$store.state.selectedUser;
                }
            }
        }
    };
</script>

<style lang="scss">
    @import "../../sassUtils/fontMixin";
    #info_panel {
        z-index: 3;
        position: relative;
        padding: 61px 168px 0 440px;
        .info_container {
            padding: 39px 0 56px;
            background: #FFFFFF;
            border-radius: 10px;
            box-shadow:0px 4px 8px 0px rgba(6, 1, 0, 0.35);
            .portrait {
                width: 68px;
                height: 68px;
                margin: 0 auto 29px;

                img {
                    width: 100%;
                    height: 100%;
                    border-radius: 100%;
                }
            }
            .username {
                @include fontMixin(38px, FZQKBYSJW--GB1-0, bold, 37px);
                text-align: center;
                margin-bottom: 43px;
                letter-spacing: 3px;
            }
            .email, .id {
                margin-bottom: 24px;
            }
            .email, .id, .desc .title {
                margin-left: 144px;
                letter-spacing: 2px;
                @include fontMixin(21px, FZQKBYSJW--GB1-0, bold, 22px);
            }
            .desc {
                .title {
                    margin-bottom: 17px;
                }
                .desc_content {
                    p {
                        letter-spacing: 2px;
                        @include fontMixin(21px, FZQKBYSJW--GB1-0, bold, 22px);
                        line-height: 33px;
                        width: 214px;
                        margin: 0 auto;
                        max-height: 88px;
                        overflow-y: scroll;
                    }
                }
            }
        }
    }
</style>
