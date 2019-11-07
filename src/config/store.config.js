import Vue from 'vue';
import Vuex from 'vuex';
// import axios from 'axios';

Vue.use(Vuex);

const store = {
    state: {
        isLoading: false,
        selectedGroupKey: -1
    },
    mutations: {
        updateGlobalState (state, payload) {
            state[payload.key] = payload.value;
        }
    },
    actions: {},
    modules: {
        sessionList: {
            state: {
                list: [
                    {
                        name: '我是你霸霸',
                        key: 1,
                        channel: [
                            {
                                name: '睡裙频道',
                                id: 1
                            },
                            {
                                name: '睡裙频道',
                                id: 2
                            },
                            {
                                name: '睡裙频道',
                                id: 3
                            },
                            {
                                name: '睡裙频道',
                                id: 4
                            },
                            {
                                name: '睡裙频道',
                                id: 5
                            },
                            {
                                name: '睡裙频道',
                                id: 6
                            },
                            {
                                name: '睡裙频道',
                                id: 7
                            },
                            {
                                name: '睡裙频道',
                                id: 8
                            }
                        ],
                        content: [
                            {
                                username: 'NeWive',
                                id: '738767136',
                                desc: '嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧',
                                email: '738767136@qq.com',
                                portrait: '../../assets/temp.jpg',
                                key: 1
                            },
                            {
                                username: 'NeWive',
                                id: '738767136',
                                desc: '嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧',
                                email: '738767136@qq.com',
                                portrait: '../../assets/temp.jpg',
                                key: 2
                            },
                            {
                                username: 'NeWive',
                                id: '738767136',
                                desc: '嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧',
                                email: '738767136@qq.com',
                                portrait: '../../assets/temp.jpg',
                                key: 3
                            },
                            {
                                username: 'NeWive',
                                id: '738767136',
                                desc: '嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧',
                                email: '738767136@qq.com',
                                portrait: '../../assets/temp.jpg',
                                key: 4
                            },
                            {
                                username: 'NeWive',
                                id: '738767136',
                                desc: '嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧',
                                email: '738767136@qq.com',
                                portrait: '../../assets/temp.jpg',
                                key: 5
                            },
                            {
                                username: 'NeWive',
                                id: '738767136',
                                desc: '嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧',
                                email: '738767136@qq.com',
                                portrait: '../../assets/temp.jpg',
                                key: 6
                            },
                            {
                                username: 'NeWive',
                                id: '738767136',
                                desc: '嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧',
                                email: '738767136@qq.com',
                                portrait: '../../assets/temp.jpg',
                                key: 7
                            }
                        ]
                    },
                    {
                        name: '你是我鹅子',
                        key: 2,
                        channel: [
                            {
                                name: '睡裙频道',
                                id: 1
                            },
                            {
                                name: '睡裙频道',
                                id: 2
                            },
                            {
                                name: '睡裙频道',
                                id: 3
                            },
                            {
                                name: '睡裙频道',
                                id: 4
                            },
                            {
                                name: '睡裙频道',
                                id: 5
                            },
                            {
                                name: '睡裙频道',
                                id: 6
                            },
                            {
                                name: '睡裙频道',
                                id: 7
                            },
                            {
                                name: '睡裙频道',
                                id: 8
                            }
                        ],
                        content: [
                            {
                                username: 'NeWive',
                                id: '738767136',
                                desc: '嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧',
                                email: '738767136@qq.com',
                                portrait: '../../assets/temp.jpg',
                                key: 1
                            },
                            {
                                username: 'NeWive',
                                id: '738767136',
                                desc: '嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧',
                                email: '738767136@qq.com',
                                portrait: '../../assets/temp.jpg',
                                key: 2
                            },
                            {
                                username: 'NeWive',
                                id: '738767136',
                                desc: '嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧',
                                email: '738767136@qq.com',
                                portrait: '../../assets/temp.jpg',
                                key: 3
                            },
                            {
                                username: 'NeWive',
                                id: '738767136',
                                desc: '嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧',
                                email: '738767136@qq.com',
                                portrait: '../../assets/temp.jpg',
                                key: 4
                            },
                            {
                                username: 'NeWive',
                                id: '738767136',
                                desc: '嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧',
                                email: '738767136@qq.com',
                                portrait: '../../assets/temp.jpg',
                                key: 5
                            },
                            {
                                username: 'NeWive',
                                id: '738767136',
                                desc: '嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧',
                                email: '738767136@qq.com',
                                portrait: '../../assets/temp.jpg',
                                key: 6
                            },
                            {
                                username: 'NeWive',
                                id: '738767136',
                                desc: '嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧',
                                email: '738767136@qq.com',
                                portrait: '../../assets/temp.jpg',
                                key: 7
                            }
                        ]
                    },
                    {
                        name: '我们是一家人',
                        key: 3,
                        channel: [
                            {
                                name: '睡裙频道',
                                id: 1
                            },
                            {
                                name: '睡裙频道',
                                id: 2
                            },
                            {
                                name: '睡裙频道',
                                id: 3
                            },
                            {
                                name: '睡裙频道',
                                id: 4
                            },
                            {
                                name: '睡裙频道',
                                id: 5
                            },
                            {
                                name: '睡裙频道',
                                id: 6
                            },
                            {
                                name: '睡裙频道',
                                id: 7
                            },
                            {
                                name: '睡裙频道',
                                id: 8
                            }
                        ],
                        content: [
                            {
                                username: 'NeWive',
                                id: '738767136',
                                desc: '嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧',
                                email: '738767136@qq.com',
                                portrait: '../../assets/temp.jpg',
                                key: 1
                            },
                            {
                                username: 'NeWive',
                                id: '738767136',
                                desc: '嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧',
                                email: '738767136@qq.com',
                                portrait: '../../assets/temp.jpg',
                                key: 2
                            },
                            {
                                username: 'NeWive',
                                id: '738767136',
                                desc: '嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧',
                                email: '738767136@qq.com',
                                portrait: '../../assets/temp.jpg',
                                key: 3
                            },
                            {
                                username: 'NeWive',
                                id: '738767136',
                                desc: '嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧',
                                email: '738767136@qq.com',
                                portrait: '../../assets/temp.jpg',
                                key: 4
                            },
                            {
                                username: 'NeWive',
                                id: '738767136',
                                desc: '嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧',
                                email: '738767136@qq.com',
                                portrait: '../../assets/temp.jpg',
                                key: 5
                            },
                            {
                                username: 'NeWive',
                                id: '738767136',
                                desc: '嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧',
                                email: '738767136@qq.com',
                                portrait: '../../assets/temp.jpg',
                                key: 6
                            },
                            {
                                username: 'NeWive',
                                id: '738767136',
                                desc: '嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧',
                                email: '738767136@qq.com',
                                portrait: '../../assets/temp.jpg',
                                key: 7
                            }
                        ]
                    },
                    {
                        name: '我是你霸霸',
                        ley: 4,
                        channel: [
                            {
                                name: '睡裙频道',
                                id: 1
                            },
                            {
                                name: '睡裙频道',
                                id: 2
                            },
                            {
                                name: '睡裙频道',
                                id: 3
                            },
                            {
                                name: '睡裙频道',
                                id: 4
                            },
                            {
                                name: '睡裙频道',
                                id: 5
                            },
                            {
                                name: '睡裙频道',
                                id: 6
                            },
                            {
                                name: '睡裙频道',
                                id: 7
                            },
                            {
                                name: '睡裙频道',
                                id: 8
                            }
                        ],
                        content: [
                            {
                                username: 'NeWive',
                                id: '738767136',
                                desc: '嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧',
                                email: '738767136@qq.com',
                                portrait: '../../assets/temp.jpg',
                                key: 1
                            },
                            {
                                username: 'NeWive',
                                id: '738767136',
                                desc: '嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧',
                                email: '738767136@qq.com',
                                portrait: '../../assets/temp.jpg',
                                key: 2
                            },
                            {
                                username: 'NeWive',
                                id: '738767136',
                                desc: '嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧',
                                email: '738767136@qq.com',
                                portrait: '../../assets/temp.jpg',
                                key: 3
                            },
                            {
                                username: 'NeWive',
                                id: '738767136',
                                desc: '嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧',
                                email: '738767136@qq.com',
                                portrait: '../../assets/temp.jpg',
                                key: 4
                            },
                            {
                                username: 'NeWive',
                                id: '738767136',
                                desc: '嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧',
                                email: '738767136@qq.com',
                                portrait: '../../assets/temp.jpg',
                                key: 5
                            },
                            {
                                username: 'NeWive',
                                id: '738767136',
                                desc: '嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧',
                                email: '738767136@qq.com',
                                portrait: '../../assets/temp.jpg',
                                key: 6
                            },
                            {
                                username: 'NeWive',
                                id: '738767136',
                                desc: '嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧',
                                email: '738767136@qq.com',
                                portrait: '../../assets/temp.jpg',
                                key: 7
                            }
                        ]
                    },
                    {
                        name: '你是我鹅子',
                        key: 5,
                        channel: [
                            {
                                name: '睡裙频道',
                                id: 1
                            },
                            {
                                name: '睡裙频道',
                                id: 2
                            },
                            {
                                name: '睡裙频道',
                                id: 3
                            },
                            {
                                name: '睡裙频道',
                                id: 4
                            },
                            {
                                name: '睡裙频道',
                                id: 5
                            },
                            {
                                name: '睡裙频道',
                                id: 6
                            },
                            {
                                name: '睡裙频道',
                                id: 7
                            },
                            {
                                name: '睡裙频道',
                                id: 8
                            }
                        ],
                        content: [
                            {
                                username: 'NeWive',
                                id: '738767136',
                                desc: '嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧',
                                email: '738767136@qq.com',
                                portrait: '../../assets/temp.jpg',
                                key: 1
                            },
                            {
                                username: 'NeWive',
                                id: '738767136',
                                desc: '嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧',
                                email: '738767136@qq.com',
                                portrait: '../../assets/temp.jpg',
                                key: 2
                            },
                            {
                                username: 'NeWive',
                                id: '738767136',
                                desc: '嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧',
                                email: '738767136@qq.com',
                                portrait: '../../assets/temp.jpg',
                                key: 3
                            },
                            {
                                username: 'NeWive',
                                id: '738767136',
                                desc: '嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧',
                                email: '738767136@qq.com',
                                portrait: '../../assets/temp.jpg',
                                key: 4
                            },
                            {
                                username: 'NeWive',
                                id: '738767136',
                                desc: '嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧',
                                email: '738767136@qq.com',
                                portrait: '../../assets/temp.jpg',
                                key: 5
                            },
                            {
                                username: 'NeWive',
                                id: '738767136',
                                desc: '嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧',
                                email: '738767136@qq.com',
                                portrait: '../../assets/temp.jpg',
                                key: 6
                            },
                            {
                                username: 'NeWive',
                                id: '738767136',
                                desc: '嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧',
                                email: '738767136@qq.com',
                                portrait: '../../assets/temp.jpg',
                                key: 7
                            }
                        ]
                    },
                    {
                        name: '我们是一家人',
                        key: 8,
                        channel: [
                            {
                                name: '睡裙频道',
                                id: 1
                            },
                            {
                                name: '睡裙频道',
                                id: 2
                            },
                            {
                                name: '睡裙频道',
                                id: 3
                            },
                            {
                                name: '睡裙频道',
                                id: 4
                            },
                            {
                                name: '睡裙频道',
                                id: 5
                            },
                            {
                                name: '睡裙频道',
                                id: 6
                            },
                            {
                                name: '睡裙频道',
                                id: 7
                            },
                            {
                                name: '睡裙频道',
                                id: 8
                            }
                        ],
                        content: [
                            {
                                username: 'NeWive',
                                id: '738767136',
                                desc: '嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧',
                                email: '738767136@qq.com',
                                portrait: '../../assets/temp.jpg',
                                key: 1
                            },
                            {
                                username: 'NeWive',
                                id: '738767136',
                                desc: '嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧',
                                email: '738767136@qq.com',
                                portrait: '../../assets/temp.jpg',
                                key: 2
                            },
                            {
                                username: 'NeWive',
                                id: '738767136',
                                desc: '嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧',
                                email: '738767136@qq.com',
                                portrait: '../../assets/temp.jpg',
                                key: 3
                            },
                            {
                                username: 'NeWive',
                                id: '738767136',
                                desc: '嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧',
                                email: '738767136@qq.com',
                                portrait: '../../assets/temp.jpg',
                                key: 4
                            },
                            {
                                username: 'NeWive',
                                id: '738767136',
                                desc: '嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧',
                                email: '738767136@qq.com',
                                portrait: '../../assets/temp.jpg',
                                key: 5
                            },
                            {
                                username: 'NeWive',
                                id: '738767136',
                                desc: '嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧',
                                email: '738767136@qq.com',
                                portrait: '../../assets/temp.jpg',
                                key: 6
                            },
                            {
                                username: 'NeWive',
                                id: '738767136',
                                desc: '嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧',
                                email: '738767136@qq.com',
                                portrait: '../../assets/temp.jpg',
                                key: 7
                            }
                        ]
                    },
                    {
                        name: '我是你霸霸',
                        key: 9,
                        channel: [
                            {
                                name: '睡裙频道',
                                id: 1
                            },
                            {
                                name: '睡裙频道',
                                id: 2
                            },
                            {
                                name: '睡裙频道',
                                id: 3
                            },
                            {
                                name: '睡裙频道',
                                id: 4
                            },
                            {
                                name: '睡裙频道',
                                id: 5
                            },
                            {
                                name: '睡裙频道',
                                id: 6
                            },
                            {
                                name: '睡裙频道',
                                id: 7
                            },
                            {
                                name: '睡裙频道',
                                id: 8
                            }
                        ],
                        content: [
                            {
                                username: 'NeWive',
                                id: '738767136',
                                desc: '嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧',
                                email: '738767136@qq.com',
                                portrait: '../../assets/temp.jpg',
                                key: 1
                            },
                            {
                                username: 'NeWive',
                                id: '738767136',
                                desc: '嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧',
                                email: '738767136@qq.com',
                                portrait: '../../assets/temp.jpg',
                                key: 2
                            },
                            {
                                username: 'NeWive',
                                id: '738767136',
                                desc: '嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧',
                                email: '738767136@qq.com',
                                portrait: '../../assets/temp.jpg',
                                key: 3
                            },
                            {
                                username: 'NeWive',
                                id: '738767136',
                                desc: '嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧',
                                email: '738767136@qq.com',
                                portrait: '../../assets/temp.jpg',
                                key: 4
                            },
                            {
                                username: 'NeWive',
                                id: '738767136',
                                desc: '嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧',
                                email: '738767136@qq.com',
                                portrait: '../../assets/temp.jpg',
                                key: 5
                            },
                            {
                                username: 'NeWive',
                                id: '738767136',
                                desc: '嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧',
                                email: '738767136@qq.com',
                                portrait: '../../assets/temp.jpg',
                                key: 6
                            },
                            {
                                username: 'NeWive',
                                id: '738767136',
                                desc: '嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧',
                                email: '738767136@qq.com',
                                portrait: '../../assets/temp.jpg',
                                key: 7
                            }
                        ]
                    },
                    {
                        name: '你是我鹅子',
                        key: 10,
                        channel: [
                            {
                                name: '睡裙频道',
                                id: 1
                            },
                            {
                                name: '睡裙频道',
                                id: 2
                            },
                            {
                                name: '睡裙频道',
                                id: 3
                            },
                            {
                                name: '睡裙频道',
                                id: 4
                            },
                            {
                                name: '睡裙频道',
                                id: 5
                            },
                            {
                                name: '睡裙频道',
                                id: 6
                            },
                            {
                                name: '睡裙频道',
                                id: 7
                            },
                            {
                                name: '睡裙频道',
                                id: 8
                            }
                        ],
                        content: [
                            {
                                username: 'NeWive',
                                id: '738767136',
                                desc: '嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧',
                                email: '738767136@qq.com',
                                portrait: '../../assets/temp.jpg',
                                key: 1
                            },
                            {
                                username: 'NeWive',
                                id: '738767136',
                                desc: '嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧',
                                email: '738767136@qq.com',
                                portrait: '../../assets/temp.jpg',
                                key: 2
                            },
                            {
                                username: 'NeWive',
                                id: '738767136',
                                desc: '嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧',
                                email: '738767136@qq.com',
                                portrait: '../../assets/temp.jpg',
                                key: 3
                            },
                            {
                                username: 'NeWive',
                                id: '738767136',
                                desc: '嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧',
                                email: '738767136@qq.com',
                                portrait: '../../assets/temp.jpg',
                                key: 4
                            },
                            {
                                username: 'NeWive',
                                id: '738767136',
                                desc: '嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧',
                                email: '738767136@qq.com',
                                portrait: '../../assets/temp.jpg',
                                key: 5
                            },
                            {
                                username: 'NeWive',
                                id: '738767136',
                                desc: '嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧',
                                email: '738767136@qq.com',
                                portrait: '../../assets/temp.jpg',
                                key: 6
                            },
                            {
                                username: 'NeWive',
                                id: '738767136',
                                desc: '嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧',
                                email: '738767136@qq.com',
                                portrait: '../../assets/temp.jpg',
                                key: 7
                            }
                        ]
                    },
                    {
                        name: '我们是一家人',
                        key: 11,
                        channel: [
                            {
                                name: '睡裙频道',
                                id: 1
                            },
                            {
                                name: '睡裙频道',
                                id: 2
                            },
                            {
                                name: '睡裙频道',
                                id: 3
                            },
                            {
                                name: '睡裙频道',
                                id: 4
                            },
                            {
                                name: '睡裙频道',
                                id: 5
                            },
                            {
                                name: '睡裙频道',
                                id: 6
                            },
                            {
                                name: '睡裙频道',
                                id: 7
                            },
                            {
                                name: '睡裙频道',
                                id: 8
                            }
                        ],
                        content: [
                            {
                                username: 'NeWive',
                                id: '738767136',
                                desc: '嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧',
                                email: '738767136@qq.com',
                                portrait: '../../assets/temp.jpg',
                                key: 1
                            },
                            {
                                username: 'NeWive',
                                id: '738767136',
                                desc: '嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧',
                                email: '738767136@qq.com',
                                portrait: '../../assets/temp.jpg',
                                key: 2
                            },
                            {
                                username: 'NeWive',
                                id: '738767136',
                                desc: '嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧',
                                email: '738767136@qq.com',
                                portrait: '../../assets/temp.jpg',
                                key: 3
                            },
                            {
                                username: 'NeWive',
                                id: '738767136',
                                desc: '嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧',
                                email: '738767136@qq.com',
                                portrait: '../../assets/temp.jpg',
                                key: 4
                            },
                            {
                                username: 'NeWive',
                                id: '738767136',
                                desc: '嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧',
                                email: '738767136@qq.com',
                                portrait: '../../assets/temp.jpg',
                                key: 5
                            },
                            {
                                username: 'NeWive',
                                id: '738767136',
                                desc: '嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧',
                                email: '738767136@qq.com',
                                portrait: '../../assets/temp.jpg',
                                key: 6
                            },
                            {
                                username: 'NeWive',
                                id: '738767136',
                                desc: '嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧',
                                email: '738767136@qq.com',
                                portrait: '../../assets/temp.jpg',
                                key: 7
                            }
                        ]
                    }
                ]
            },
            mutations: {
                spliceListItem (state, payload) {
                    let newArr = [
                      ...state.list
                    ];
                    newArr.splice(payload.index, 1);
                    state.list = newArr;
                }
            }
        },
        userInfo: {
            state: {
                username: 'NeWive',
                id: '738767136',
                desc: '嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧',
                email: '738767136@qq.com',
                portrait: '../../assets/temp.jpg'
            },
            mutations: {
                updateUserInfo (state, payload) {
                    state[payload.key] = payload.value;
                }
            }
        },
        logInForm: {
            state: {
                username: '',
                password: '',
                verifyCode: '',
            },
            mutations: {
                updateState (state, payload) {
                    state[payload.key] = payload.value;
                }
            },
            actions: {}
        },
        logInFormStatus: {
            // 0 初始状态，focus，wrong，right
            state: {
                username: 'init',
                password: 'init',
                verifyCode: 'init',
            },
            mutations: {
                updateFormStatus (state, payload) {
                    state[payload.key] = payload.value;
                }
            },
        },
        registerForm: {
            state: {
                username: '',
                password: '',
                verifyCode: '',
                email: ''
            },
            mutations: {
                updateForm (state, payload) {
                    state[payload.key] = payload.value;
                }
            },
            actions: {}
        },
        registerFormStatus: {
            // 0 初始状态，focus，wrong，right,fetched
            state: {
                username: 'init',
                password: 'init',
                verifyCode: 'init',
                email: 'init'
            },
            mutations: {
                updateFormStatus (state, payload) {
                    state[payload.key] = payload.value;
                }
            },
        }
    }
};

export default new Vuex.Store(store);
