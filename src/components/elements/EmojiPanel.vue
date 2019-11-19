<template>
    <div id="emoji_panel">
        <div
                class="emoji_list"
                @click.stop="() => {}">
            <div
                    class="emoji_container"
                    @click.stop="() => {}">
                <div
                        class="emoji"
                        v-for="(item, index) in emojiList[key]"
                        :key="index"
                        @click="setContent(item)">
                    {{
                        item
                    }}
                </div>
            </div>
        </div>
        <div class="selection_panel">
            <div
                    class="emoji_selection"
                    v-for="(item) in emojiKey"
                    :key="item.item"
                    :class="item.item === key ? 'selected' : ''"
                    @click.stop="setKey(item.item)">
                {{
                    item.logo
                }}
            </div>
        </div>
    </div>
</template>

<script>
    import { emojiList } from '../../config/list.config';
    export default {
        name: 'EmojiPanel',
        data: function () {
            return {
                key: 'people',
                emojiList
            };
        },
        computed: {
            emojiKey: {
                get () {
                    let arr = [];
                    for (let item in emojiList) {
                        arr.push(
                          {
                              item,
                              logo: emojiList[item][0]
                          });
                    }
                    return arr;
                }
            }
        },
        methods: {
            setKey (key) {
                if (this.key !== key) {
                    this.key = key;
                }
            },
            setContent (value) {
                this.handleContent(value);
            }
        },
        props: {
            handleContent: {
                type: Function,
                required: true
            }
        }
    };
</script>

<style lang="scss">
    #emoji_panel {
        width: 600px;
        /*height: 270px;*/
        background: #FFFFFF;
        border: 1px solid #D9DDE3;
        .emoji_list {
            height: 220px;
            overflow-y: scroll;
            .emoji_container {
                display: flex;
                flex-wrap: wrap;
                .fade-enter-active, .fade-leave-active {
                    transition: opacity .5s;
                }
                .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
                    opacity: 0;
                }
                .emoji {
                    cursor: pointer;
                    box-sizing: border-box;
                    width: 42px;
                    height: 42px;
                    padding: 10px;
                    transition: background-color 0.3s ease;
                    &:hover {
                        background: #D9DDE3;
                    }
                }
            }
        }
        .selection_panel {
            border-top: 1px solid #D9DDE3;
            /*border-bottom: 1px solid #D9DDE3;*/
            /*border-left: 0;*/
            /*border-right: 0;*/
            background: #FFFFFF;
            display: flex;
            align-items: center;
            &:after {
                transform: rotate(45deg);
                width: 20px;
                height: 20px;
                content: '';
                display: block;
                /*background: #FFFFFF;*/
                border-bottom: 1px solid #D9DDE3;
                border-right: 1px solid #D9DDE3;
                position: absolute;
                background: #FFFFFF;
                bottom: -10px;
                left: 10px;
                z-index: 3;
            }
            .emoji_selection {
                cursor: pointer;
                padding: 20px;
                background: #FFFFFF;
                transition: background-color 0.3s ease;
                position: relative;
                z-index: 10;
                &:hover {
                    background-color: #D9DDE3;
                }
            }
            .selected {
                background-color: #D9DDE3;
            }
        }
    }
</style>
