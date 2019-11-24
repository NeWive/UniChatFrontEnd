<template>
    <div id="session_member">
        <div class="title">
            <img src="../../assets/friendIcon.png" alt="">
            <span>
                群成员
            </span>
        </div>
        <div class="members">
            <ul >
                <li
                        v-for="item in memberList"
                        :key="item.key">
                    <a href="" @click.prevent="openPortal(item)">
                        <div class="img">
                            <img src="../../assets/temp.jpg" alt="">
                            <AuthorityLogo v-if="item.authority === 1"  background="#F4EA2A"/>
                            <AuthorityLogo v-else-if="item.authority === 2" background="#1AFA29"/>
                        </div>
                        <p>
                            {{
                                item.username
                            }}
                        </p>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import AuthorityLogo from './AuthorityLogo';
    export default {
        name: 'SessionMember',
        computed: {
            memberList: {
                get () {
                    return this.$store.state.selectedGroup.members;
                }
            }
        },
        components: {
            AuthorityLogo
        },
        data: function () {
            return {

            };
        },
        methods: {
            openPortal (target) {
                this.$store.commit('handlePortal', {
                    isPortalOn: true,
                    portalElement: target,
                    allowEdit: false,
                    id: 0,
                });
            }
        }
    };
</script>

<style lang="scss">
    @import "../../sassUtils/fontMixin";
    #session_member {
        height: 409px;
        padding: 29px 0 0 28px;
        box-sizing: border-box;
        .title {
            span {
                @include fontMixin(17px, Adobe Heiti Std R, bold, 17px);
                color: #333333;
                margin-left: 10px;
                letter-spacing: 3px;
            }
            img, span {
                vertical-align: middle;
            }
            margin-bottom: 19px;
        }
        .members {
            margin-left: 11px;
            overflow-y: scroll;
            height: 325px;
            position: relative;
            ul {
                li {
                    cursor: pointer;
                    margin-bottom: 21px;
                    &:hover {
                        p {
                            color: #17BEBB;
                        }
                    }
                    &:last-child {
                        margin-bottom: 21px;
                    }
                    a {
                        .img {
                            position: relative;
                            img {
                                width: 29px;
                                height: 29px;
                                border-radius: 100%;
                            }
                            .authority_logo {
                                position: absolute;
                                left: 21px;
                                bottom: -3px;
                            }
                            margin-right: 21px;
                        }
                        .img, p {
                            display: inline-block;
                            vertical-align: middle;
                        }
                        p {
                            @include fontMixin(17px, ComicSansMS, bold, 19px);
                            width: 80px;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            transition: color 0.5s ease;
                        }
                    }
                }
            }
            .scroll {
                position: absolute;
                right: -8px;
                top: 0;
            }
        }
    }
</style>
