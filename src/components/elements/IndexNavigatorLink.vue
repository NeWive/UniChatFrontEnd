<template>
    <div id="index_navigator_link">
        <ul>
            <li
                    v-for="(item, index) in indexNavigatorList"
                    :key="item.key"
                    :class="currentIndex === index ? 'here' : ''"
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
                indexNavigatorList
            };
        },
        methods: {
            clickHandler (index) {
                console.log(index);
                this.currentIndex = index;
            }
        },
        computed: {
            currentIndex: {
                get () {
                    return this.$store.state.currentIndex;
                },
                set (value) {
                    console.log(value);
                    return this.$store.commit('updateGlobalState', {
                        key: 'currentIndex',
                        value: value
                    });
                }
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
