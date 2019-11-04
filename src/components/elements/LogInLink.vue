<template>
    <div id="log_in_link">
        <ul>
            <li
                    v-for="item in logInHyperLink"
                    :key="item.key">
                <router-link
                            :to="item.to">
                    {{
                        item.name
                    }}
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    import { logInHyperLink } from '../../config/list.config';
    export default {
        name: 'LogInLink',
        data: function () {
            return {
                logInHyperLink
            };
        }
    };
</script>

<style lang="scss">
    @import "../../sassUtils/fontMixin";
    #log_in_link {
        padding: 0 84px 0 83px;
        margin-bottom: 20px;
        ul {
            display: flex;
            justify-content: space-between;
            li {
                a {
                    @include fontMixin(17px, FZQTJW--GB1-0, bold, 17px);
                    color: #5C555C;
                    opacity: 0.72;
                    transition: color 0.5s ease;
                    &:hover {
                        color: #17BEBB;
                    }
                }
            }
        }
    }
</style>
