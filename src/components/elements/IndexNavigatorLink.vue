<template>
    <div id="index_navigator_link">
        <ul>
            <li
                    v-for="(item, index) in indexNavigatorList"
                    :key="item.key"
                    :class="click === index ? 'here' : ''"
                    @click="() => {clickHandler(index);}"
                    >
                <router-link :to="item.to">
                    <img
                            :src="item.logo"
                            alt=""
                    >
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    import { indexNavigatorList } from '../../config/list.config';
    export default {
        name: 'IndexNavigatorLink',
        data: function () {
            return {
                indexNavigatorList,
                click: 0
            };
        },
        methods: {
            clickHandler (index) {
                this.click = index;
            }
        }
    };
</script>

<style lang="scss">
    #index_navigator_link {
        ul {
            li {
                display: inline-block;
                margin-right: 46px;
                opacity: 0.75;
                transition: opacity 0.5s ease;
                &:last-child {
                    margin-right: 0;
                }
            }
            .here {
                opacity: 1;
            }
        }
    }
</style>
