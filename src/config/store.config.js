import Vue from 'vue';
import Vuex from 'vuex';
// import axios from 'axios';

Vue.use(Vuex);

const store = {
    // selectedChannelId 为Index selectedGroupId 为 Index
    state: {
        isLoading: false,
        selectedGroupKey: -1,
        selectedGroup: {}, // 选中的选项 群组
        selectedChannelId: -1,
        selectedChannel: {},
        selectedFriend: {}, // 选中的选项 好友
        messageList: [],
        preMessage: [],
        currentFriendsListStatus: 1, // 1 好友 2 群聊
        selectedGroupIndex: -1, // 好友分组
        selectedChatGroupIndex: {},
        isEditFormLoading: false,
        friendsList: [
            {
                name: '我的好友分组11111111111111111111111',
                children: [
                    {
                        username: 'NeWive',
                        id: '738767136',
                        desc: '嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧',
                        email: '738767136@qq.com',
                        portrait: '../../assets/temp.jpg',
                        key: 1,
                        authority: 1
                    },
                    {
                        username: 'NeWive',
                        id: '738767136',
                        desc: '嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧',
                        email: '738767136@qq.com',
                        portrait: '../../assets/temp.jpg',
                        key: 2,
                        authority: 2
                    },
                    {
                        username: 'NeWive',
                        id: '738767136',
                        desc: '嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧',
                        email: '738767136@qq.com',
                        portrait: '../../assets/temp.jpg',
                        key: 3,
                        authority: 3
                    },
                    {
                        username: 'NeWive',
                        id: '738767136',
                        desc: '嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧',
                        email: '738767136@qq.com',
                        portrait: '../../assets/temp.jpg',
                        key: 4,
                        authority: 3
                    },
                    {
                        username: 'NeWive',
                        id: '738767136',
                        desc: '嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧',
                        email: '738767136@qq.com',
                        portrait: '../../assets/temp.jpg',
                        key: 5,
                        authority: 3
                    },
                    {
                        username: 'NeWive',
                        id: '738767136',
                        desc: '嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧',
                        email: '738767136@qq.com',
                        portrait: '../../assets/temp.jpg',
                        key: 6,
                        authority: 3
                    },
                    {
                        username: 'NeWive',
                        id: '738767136',
                        desc: '嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧',
                        email: '738767136@qq.com',
                        portrait: '../../assets/temp.jpg',
                        key: 7,
                        authority: 3
                    },
                    {
                        username: 'NeWive',
                        id: '738767136',
                        desc: '嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧',
                        email: '738767136@qq.com',
                        portrait: '../../assets/temp.jpg',
                        key: 8,
                        authority: 1
                    },
                    {
                        username: 'NeWive',
                        id: '738767136',
                        desc: '嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧',
                        email: '738767136@qq.com',
                        portrait: '../../assets/temp.jpg',
                        key: 9,
                        authority: 2
                    },
                    {
                        username: 'NeWive',
                        id: '738767136',
                        desc: '嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧',
                        email: '738767136@qq.com',
                        portrait: '../../assets/temp.jpg',
                        key: 10,
                        authority: 3
                    },
                    {
                        username: 'NeWive',
                        id: '738767136',
                        desc: '嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧',
                        email: '738767136@qq.com',
                        portrait: '../../assets/temp.jpg',
                        key: 11,
                        authority: 3
                    },
                    {
                        username: 'NeWive',
                        id: '738767136',
                        desc: '嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧',
                        email: '738767136@qq.com',
                        portrait: '../../assets/temp.jpg',
                        key: 12,
                        authority: 3
                    },
                    {
                        username: 'NeWive',
                        id: '738767136',
                        desc: '嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧',
                        email: '738767136@qq.com',
                        portrait: '../../assets/temp.jpg',
                        key: 13,
                        authority: 3
                    },
                    {
                        username: 'NeWive',
                        id: '738767136',
                        desc: '嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧',
                        email: '738767136@qq.com',
                        portrait: '../../assets/temp.jpg',
                        key: 14,
                        authority: 3
                    }
                ]
            },
            {
                name: '我的好友分组11111111111111111111111',
                children: [
                    {
                        username: 'NeWive',
                        id: '738767136',
                        desc: '嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧',
                        email: '738767136@qq.com',
                        portrait: '../../assets/temp.jpg',
                        key: 1,
                        authority: 1
                    },
                    {
                        username: 'NeWive',
                        id: '738767136',
                        desc: '嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧',
                        email: '738767136@qq.com',
                        portrait: '../../assets/temp.jpg',
                        key: 2,
                        authority: 2
                    },
                    {
                        username: 'NeWive',
                        id: '738767136',
                        desc: '嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧',
                        email: '738767136@qq.com',
                        portrait: '../../assets/temp.jpg',
                        key: 3,
                        authority: 3
                    },
                    {
                        username: 'NeWive',
                        id: '738767136',
                        desc: '嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧',
                        email: '738767136@qq.com',
                        portrait: '../../assets/temp.jpg',
                        key: 4,
                        authority: 3
                    },
                    {
                        username: 'NeWive',
                        id: '738767136',
                        desc: '嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧',
                        email: '738767136@qq.com',
                        portrait: '../../assets/temp.jpg',
                        key: 5,
                        authority: 3
                    },
                    {
                        username: 'NeWive',
                        id: '738767136',
                        desc: '嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧',
                        email: '738767136@qq.com',
                        portrait: '../../assets/temp.jpg',
                        key: 6,
                        authority: 3
                    },
                    {
                        username: 'NeWive',
                        id: '738767136',
                        desc: '嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧',
                        email: '738767136@qq.com',
                        portrait: '../../assets/temp.jpg',
                        key: 7,
                        authority: 3
                    },
                    {
                        username: 'NeWive',
                        id: '738767136',
                        desc: '嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧',
                        email: '738767136@qq.com',
                        portrait: '../../assets/temp.jpg',
                        key: 8,
                        authority: 1
                    },
                    {
                        username: 'NeWive',
                        id: '738767136',
                        desc: '嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧',
                        email: '738767136@qq.com',
                        portrait: '../../assets/temp.jpg',
                        key: 9,
                        authority: 2
                    },
                    {
                        username: 'NeWive',
                        id: '738767136',
                        desc: '嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧',
                        email: '738767136@qq.com',
                        portrait: '../../assets/temp.jpg',
                        key: 10,
                        authority: 3
                    },
                    {
                        username: 'NeWive',
                        id: '738767136',
                        desc: '嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧',
                        email: '738767136@qq.com',
                        portrait: '../../assets/temp.jpg',
                        key: 11,
                        authority: 3
                    },
                    {
                        username: 'NeWive',
                        id: '738767136',
                        desc: '嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧',
                        email: '738767136@qq.com',
                        portrait: '../../assets/temp.jpg',
                        key: 12,
                        authority: 3
                    },
                    {
                        username: 'NeWive',
                        id: '738767136',
                        desc: '嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧',
                        email: '738767136@qq.com',
                        portrait: '../../assets/temp.jpg',
                        key: 13,
                        authority: 3
                    },
                    {
                        username: 'NeWive',
                        id: '738767136',
                        desc: '嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧',
                        email: '738767136@qq.com',
                        portrait: '../../assets/temp.jpg',
                        key: 14,
                        authority: 3
                    }
                ]
            },
            {
                name: '我的好友分组11111111111111111111111',
                children: [
                    {
                        username: 'NeWive',
                        id: '738767136',
                        desc: '嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧',
                        email: '738767136@qq.com',
                        portrait: '../../assets/temp.jpg',
                        key: 1,
                        authority: 1
                    },
                    {
                        username: 'NeWive',
                        id: '738767136',
                        desc: '嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧',
                        email: '738767136@qq.com',
                        portrait: '../../assets/temp.jpg',
                        key: 2,
                        authority: 2
                    },
                    {
                        username: 'NeWive',
                        id: '738767136',
                        desc: '嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧',
                        email: '738767136@qq.com',
                        portrait: '../../assets/temp.jpg',
                        key: 3,
                        authority: 3
                    },
                    {
                        username: 'NeWive',
                        id: '738767136',
                        desc: '嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧',
                        email: '738767136@qq.com',
                        portrait: '../../assets/temp.jpg',
                        key: 4,
                        authority: 3
                    },
                    {
                        username: 'NeWive',
                        id: '738767136',
                        desc: '嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧',
                        email: '738767136@qq.com',
                        portrait: '../../assets/temp.jpg',
                        key: 5,
                        authority: 3
                    },
                    {
                        username: 'NeWive',
                        id: '738767136',
                        desc: '嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧',
                        email: '738767136@qq.com',
                        portrait: '../../assets/temp.jpg',
                        key: 6,
                        authority: 3
                    },
                    {
                        username: 'NeWive',
                        id: '738767136',
                        desc: '嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧',
                        email: '738767136@qq.com',
                        portrait: '../../assets/temp.jpg',
                        key: 7,
                        authority: 3
                    },
                    {
                        username: 'NeWive',
                        id: '738767136',
                        desc: '嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧',
                        email: '738767136@qq.com',
                        portrait: '../../assets/temp.jpg',
                        key: 8,
                        authority: 1
                    },
                    {
                        username: 'NeWive',
                        id: '738767136',
                        desc: '嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧',
                        email: '738767136@qq.com',
                        portrait: '../../assets/temp.jpg',
                        key: 9,
                        authority: 2
                    },
                    {
                        username: 'NeWive',
                        id: '738767136',
                        desc: '嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧',
                        email: '738767136@qq.com',
                        portrait: '../../assets/temp.jpg',
                        key: 10,
                        authority: 3
                    },
                    {
                        username: 'NeWive',
                        id: '738767136',
                        desc: '嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧',
                        email: '738767136@qq.com',
                        portrait: '../../assets/temp.jpg',
                        key: 11,
                        authority: 3
                    },
                    {
                        username: 'NeWive',
                        id: '738767136',
                        desc: '嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧',
                        email: '738767136@qq.com',
                        portrait: '../../assets/temp.jpg',
                        key: 12,
                        authority: 3
                    },
                    {
                        username: 'NeWive',
                        id: '738767136',
                        desc: '嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧',
                        email: '738767136@qq.com',
                        portrait: '../../assets/temp.jpg',
                        key: 13,
                        authority: 3
                    },
                    {
                        username: 'NeWive',
                        id: '738767136',
                        desc: '嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧',
                        email: '738767136@qq.com',
                        portrait: '../../assets/temp.jpg',
                        key: 14,
                        authority: 3
                    }
                ]
            },
            {
                name: '我的好友分组11111111111111111111111',
                children: [
                    {
                        username: 'NeWive',
                        id: '738767136',
                        desc: '嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧',
                        email: '738767136@qq.com',
                        portrait: '../../assets/temp.jpg',
                        key: 1,
                        authority: 1
                    },
                    {
                        username: 'NeWive',
                        id: '738767136',
                        desc: '嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧',
                        email: '738767136@qq.com',
                        portrait: '../../assets/temp.jpg',
                        key: 2,
                        authority: 2
                    },
                    {
                        username: 'NeWive',
                        id: '738767136',
                        desc: '嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧',
                        email: '738767136@qq.com',
                        portrait: '../../assets/temp.jpg',
                        key: 3,
                        authority: 3
                    },
                    {
                        username: 'NeWive',
                        id: '738767136',
                        desc: '嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧',
                        email: '738767136@qq.com',
                        portrait: '../../assets/temp.jpg',
                        key: 4,
                        authority: 3
                    },
                    {
                        username: 'NeWive',
                        id: '738767136',
                        desc: '嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧',
                        email: '738767136@qq.com',
                        portrait: '../../assets/temp.jpg',
                        key: 5,
                        authority: 3
                    },
                    {
                        username: 'NeWive',
                        id: '738767136',
                        desc: '嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧',
                        email: '738767136@qq.com',
                        portrait: '../../assets/temp.jpg',
                        key: 6,
                        authority: 3
                    },
                    {
                        username: 'NeWive',
                        id: '738767136',
                        desc: '嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧',
                        email: '738767136@qq.com',
                        portrait: '../../assets/temp.jpg',
                        key: 7,
                        authority: 3
                    },
                    {
                        username: 'NeWive',
                        id: '738767136',
                        desc: '嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧',
                        email: '738767136@qq.com',
                        portrait: '../../assets/temp.jpg',
                        key: 8,
                        authority: 1
                    },
                    {
                        username: 'NeWive',
                        id: '738767136',
                        desc: '嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧',
                        email: '738767136@qq.com',
                        portrait: '../../assets/temp.jpg',
                        key: 9,
                        authority: 2
                    },
                    {
                        username: 'NeWive',
                        id: '738767136',
                        desc: '嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧',
                        email: '738767136@qq.com',
                        portrait: '../../assets/temp.jpg',
                        key: 10,
                        authority: 3
                    },
                    {
                        username: 'NeWive',
                        id: '738767136',
                        desc: '嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧',
                        email: '738767136@qq.com',
                        portrait: '../../assets/temp.jpg',
                        key: 11,
                        authority: 3
                    },
                    {
                        username: 'NeWive',
                        id: '738767136',
                        desc: '嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧',
                        email: '738767136@qq.com',
                        portrait: '../../assets/temp.jpg',
                        key: 12,
                        authority: 3
                    },
                    {
                        username: 'NeWive',
                        id: '738767136',
                        desc: '嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧',
                        email: '738767136@qq.com',
                        portrait: '../../assets/temp.jpg',
                        key: 13,
                        authority: 3
                    },
                    {
                        username: 'NeWive',
                        id: '738767136',
                        desc: '嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧',
                        email: '738767136@qq.com',
                        portrait: '../../assets/temp.jpg',
                        key: 14,
                        authority: 3
                    }
                ]
            },
            {
                name: '我的好友分组11111111111111111111111',
                children: [
                    {
                        username: 'NeWive',
                        id: '738767136',
                        desc: '嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧',
                        email: '738767136@qq.com',
                        portrait: '../../assets/temp.jpg',
                        key: 1,
                        authority: 1
                    },
                    {
                        username: 'NeWive',
                        id: '738767136',
                        desc: '嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧',
                        email: '738767136@qq.com',
                        portrait: '../../assets/temp.jpg',
                        key: 2,
                        authority: 2
                    },
                    {
                        username: 'NeWive',
                        id: '738767136',
                        desc: '嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧',
                        email: '738767136@qq.com',
                        portrait: '../../assets/temp.jpg',
                        key: 3,
                        authority: 3
                    },
                    {
                        username: 'NeWive',
                        id: '738767136',
                        desc: '嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧',
                        email: '738767136@qq.com',
                        portrait: '../../assets/temp.jpg',
                        key: 4,
                        authority: 3
                    },
                    {
                        username: 'NeWive',
                        id: '738767136',
                        desc: '嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧',
                        email: '738767136@qq.com',
                        portrait: '../../assets/temp.jpg',
                        key: 5,
                        authority: 3
                    },
                    {
                        username: 'NeWive',
                        id: '738767136',
                        desc: '嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧',
                        email: '738767136@qq.com',
                        portrait: '../../assets/temp.jpg',
                        key: 6,
                        authority: 3
                    },
                    {
                        username: 'NeWive',
                        id: '738767136',
                        desc: '嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧',
                        email: '738767136@qq.com',
                        portrait: '../../assets/temp.jpg',
                        key: 7,
                        authority: 3
                    },
                    {
                        username: 'NeWive',
                        id: '738767136',
                        desc: '嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧',
                        email: '738767136@qq.com',
                        portrait: '../../assets/temp.jpg',
                        key: 8,
                        authority: 1
                    },
                    {
                        username: 'NeWive',
                        id: '738767136',
                        desc: '嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧',
                        email: '738767136@qq.com',
                        portrait: '../../assets/temp.jpg',
                        key: 9,
                        authority: 2
                    },
                    {
                        username: 'NeWive',
                        id: '738767136',
                        desc: '嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧',
                        email: '738767136@qq.com',
                        portrait: '../../assets/temp.jpg',
                        key: 10,
                        authority: 3
                    },
                    {
                        username: 'NeWive',
                        id: '738767136',
                        desc: '嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧',
                        email: '738767136@qq.com',
                        portrait: '../../assets/temp.jpg',
                        key: 11,
                        authority: 3
                    },
                    {
                        username: 'NeWive',
                        id: '738767136',
                        desc: '嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧',
                        email: '738767136@qq.com',
                        portrait: '../../assets/temp.jpg',
                        key: 12,
                        authority: 3
                    },
                    {
                        username: 'NeWive',
                        id: '738767136',
                        desc: '嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧',
                        email: '738767136@qq.com',
                        portrait: '../../assets/temp.jpg',
                        key: 13,
                        authority: 3
                    },
                    {
                        username: 'NeWive',
                        id: '738767136',
                        desc: '嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧',
                        email: '738767136@qq.com',
                        portrait: '../../assets/temp.jpg',
                        key: 14,
                        authority: 3
                    }
                ]
            },
            {
                name: '我的好友分组11111111111111111111111',
                children: [
                    {
                        username: 'NeWive',
                        id: '738767136',
                        desc: '嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧',
                        email: '738767136@qq.com',
                        portrait: '../../assets/temp.jpg',
                        key: 1,
                        authority: 1
                    },
                    {
                        username: 'NeWive',
                        id: '738767136',
                        desc: '嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧',
                        email: '738767136@qq.com',
                        portrait: '../../assets/temp.jpg',
                        key: 2,
                        authority: 2
                    },
                    {
                        username: 'NeWive',
                        id: '738767136',
                        desc: '嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧',
                        email: '738767136@qq.com',
                        portrait: '../../assets/temp.jpg',
                        key: 3,
                        authority: 3
                    },
                    {
                        username: 'NeWive',
                        id: '738767136',
                        desc: '嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧',
                        email: '738767136@qq.com',
                        portrait: '../../assets/temp.jpg',
                        key: 4,
                        authority: 3
                    },
                    {
                        username: 'NeWive',
                        id: '738767136',
                        desc: '嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧',
                        email: '738767136@qq.com',
                        portrait: '../../assets/temp.jpg',
                        key: 5,
                        authority: 3
                    },
                    {
                        username: 'NeWive',
                        id: '738767136',
                        desc: '嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧',
                        email: '738767136@qq.com',
                        portrait: '../../assets/temp.jpg',
                        key: 6,
                        authority: 3
                    },
                    {
                        username: 'NeWive',
                        id: '738767136',
                        desc: '嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧',
                        email: '738767136@qq.com',
                        portrait: '../../assets/temp.jpg',
                        key: 7,
                        authority: 3
                    },
                    {
                        username: 'NeWive',
                        id: '738767136',
                        desc: '嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧',
                        email: '738767136@qq.com',
                        portrait: '../../assets/temp.jpg',
                        key: 8,
                        authority: 1
                    },
                    {
                        username: 'NeWive',
                        id: '738767136',
                        desc: '嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧',
                        email: '738767136@qq.com',
                        portrait: '../../assets/temp.jpg',
                        key: 9,
                        authority: 2
                    },
                    {
                        username: 'NeWive',
                        id: '738767136',
                        desc: '嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧',
                        email: '738767136@qq.com',
                        portrait: '../../assets/temp.jpg',
                        key: 10,
                        authority: 3
                    },
                    {
                        username: 'NeWive',
                        id: '738767136',
                        desc: '嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧',
                        email: '738767136@qq.com',
                        portrait: '../../assets/temp.jpg',
                        key: 11,
                        authority: 3
                    },
                    {
                        username: 'NeWive',
                        id: '738767136',
                        desc: '嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧',
                        email: '738767136@qq.com',
                        portrait: '../../assets/temp.jpg',
                        key: 12,
                        authority: 3
                    },
                    {
                        username: 'NeWive',
                        id: '738767136',
                        desc: '嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧',
                        email: '738767136@qq.com',
                        portrait: '../../assets/temp.jpg',
                        key: 13,
                        authority: 3
                    },
                    {
                        username: 'NeWive',
                        id: '738767136',
                        desc: '嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧',
                        email: '738767136@qq.com',
                        portrait: '../../assets/temp.jpg',
                        key: 14,
                        authority: 3
                    }
                ]
            },
            {
                name: '我的好友分组11111111111111111111111',
                children: [
                    {
                        username: 'NeWive',
                        id: '738767136',
                        desc: '嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧',
                        email: '738767136@qq.com',
                        portrait: '../../assets/temp.jpg',
                        key: 1,
                        authority: 1
                    },
                    {
                        username: 'NeWive',
                        id: '738767136',
                        desc: '嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧',
                        email: '738767136@qq.com',
                        portrait: '../../assets/temp.jpg',
                        key: 2,
                        authority: 2
                    },
                    {
                        username: 'NeWive',
                        id: '738767136',
                        desc: '嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧',
                        email: '738767136@qq.com',
                        portrait: '../../assets/temp.jpg',
                        key: 3,
                        authority: 3
                    },
                    {
                        username: 'NeWive',
                        id: '738767136',
                        desc: '嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧',
                        email: '738767136@qq.com',
                        portrait: '../../assets/temp.jpg',
                        key: 4,
                        authority: 3
                    },
                    {
                        username: 'NeWive',
                        id: '738767136',
                        desc: '嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧',
                        email: '738767136@qq.com',
                        portrait: '../../assets/temp.jpg',
                        key: 5,
                        authority: 3
                    },
                    {
                        username: 'NeWive',
                        id: '738767136',
                        desc: '嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧',
                        email: '738767136@qq.com',
                        portrait: '../../assets/temp.jpg',
                        key: 6,
                        authority: 3
                    },
                    {
                        username: 'NeWive',
                        id: '738767136',
                        desc: '嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧',
                        email: '738767136@qq.com',
                        portrait: '../../assets/temp.jpg',
                        key: 7,
                        authority: 3
                    },
                    {
                        username: 'NeWive',
                        id: '738767136',
                        desc: '嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧',
                        email: '738767136@qq.com',
                        portrait: '../../assets/temp.jpg',
                        key: 8,
                        authority: 1
                    },
                    {
                        username: 'NeWive',
                        id: '738767136',
                        desc: '嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧',
                        email: '738767136@qq.com',
                        portrait: '../../assets/temp.jpg',
                        key: 9,
                        authority: 2
                    },
                    {
                        username: 'NeWive',
                        id: '738767136',
                        desc: '嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧',
                        email: '738767136@qq.com',
                        portrait: '../../assets/temp.jpg',
                        key: 10,
                        authority: 3
                    },
                    {
                        username: 'NeWive',
                        id: '738767136',
                        desc: '嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧',
                        email: '738767136@qq.com',
                        portrait: '../../assets/temp.jpg',
                        key: 11,
                        authority: 3
                    },
                    {
                        username: 'NeWive',
                        id: '738767136',
                        desc: '嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧',
                        email: '738767136@qq.com',
                        portrait: '../../assets/temp.jpg',
                        key: 12,
                        authority: 3
                    },
                    {
                        username: 'NeWive',
                        id: '738767136',
                        desc: '嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧',
                        email: '738767136@qq.com',
                        portrait: '../../assets/temp.jpg',
                        key: 13,
                        authority: 3
                    },
                    {
                        username: 'NeWive',
                        id: '738767136',
                        desc: '嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧',
                        email: '738767136@qq.com',
                        portrait: '../../assets/temp.jpg',
                        key: 14,
                        authority: 3
                    }
                ]
            }
        ],
        groupsList: [
            {
                name: '你是我鹅子',
                key: 2,
                type: 'group',
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
                members: [
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
                name: '你是我鹅子啊',
                key: 99,
                type: 'group',
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
                members: [
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
                type: 'group',
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
                members: [
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
                key: 4,
                type: 'group',
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
                members: [
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
                type: 'group',
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
                members: [
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
                type: 'group',
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
                members: [
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
                type: 'group',
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
                members: [
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
                type: 'group',
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
                members: [
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
                type: 'group',
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
                members: [
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
        ],
        selectedUser: '',
        isMessageLogOn: false,
        messageLogWidth: 0,
        currentIndex: 0, // Index 页面顶部导航栏
        portrait: ''
    },
    mutations: {
        updateGlobalState (state, payload) {
            state[payload.key] = payload.value;
        },
        pushIntoChannelMessage (state, payload) {
            let message = {
                time: new Date().getTime(),
                id: payload.id,
                message: payload.message
            };
            state.messageList.push(message);
        },
        addGroup (state, payload) {
            state.groupsList.push(payload.group);
        },
        clearAll (state) {
            state.selectedChannelId = -1;
            state.selectedChannel = {};
            state.selectedGroupKey = -1;
            state.selectedGroup = {};
            state.selectedFriend = {};
            state.isMessageLogOn = false;
            state.messageLogWidth = 0;
        },
        handleMessageLog (state, payload) {
            state.isMessageLogOn = payload.isMessageLogOn;
            state.messageLogWidth = payload.width;
        },
        jumpToSession (state, payload) {
            state[payload.type] = payload.value;
            state.selectedGroupKey = payload.selectedGroupKey;
        },
        addFriend (state, payload) {
            state.friendsList[0].children.push(payload.friend);
        },
        addChannel (state, payload) {
            let index = state.sessionList.list.indexOf(state.selectedGroup);
            let id = new Date().getTime();
            state.sessionList.list[index].channel.push({
                name: payload.channelName,
                id: id
            });
        }
    },
    actions: {
        requestForValidateImg (dom, fn) {
            console.log(dom);
            console.log(fn);
        }
    },
    modules: {
        mainPortal: {
            state: {
                message: '',
                isPortalOn: false,
                callback: null
            },
            mutations: {
                handleMainPortal (state, payload) {
                    state.message = payload.message;
                    state.isPortalOn = payload.isPortalOn;
                    if (payload.callback) {
                        state.callback = payload.callback;
                    }
                }
            }
        },
        portal: {
            state: {
                isPortalOn: false, // 弹出层控制
                portalElement: {}, // 弹出层内容(好友内容)
                isChangingInfo: false, // 是否进入修改个人信息
                allowEdit: false, // 是否允许修改信息
                isConfirmWindowOn: false, // 自定义确认窗口是否打开
                confirmHandler: null, // 自定义确认窗口确认函数
                cancelHandler: null, // 自定义确认窗口取消函数
                confirmWindowMessage: '', // 自定义确认窗口提示消息
                currentIndex: 0, // 当前主界面的位置
                portalPanelId: -1, // 对应弹出层的ID，查看好友信息为0,
                selectedFriends: [], // 选中的好友
                portrait: ''
            },
            mutations: {
                handlePortal (state, payload) {
                    state.isPortalOn = payload.isPortalOn;
                    state.id = payload.id;
                    if (payload.id === 0) {
                        state.portalElement = payload.portalElement;
                        state.allowEdit = payload.allowEdit;
                    }
                },
                handleConfirmWindow (state, payload) {
                    state.confirmHandler = payload.confirmHandler;
                    state.cancelHandler = payload.cancelHandler;
                    state.confirmWindowMessage = payload.confirmWindowMessage;
                    state.isConfirmWindowOn = payload.isConfirmWindowOn;
                },
                updateStatus (state, payload) {
                    state[payload.key] = payload.value;
                }
            },
        },
        sessionList: {
            state: {
                list: [
                    {
                        username: '我是你亲爱的霸霸啊',
                        key: 100,
                        type: 'person',
                        id: '1045442846',
                        desc: '嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧',
                        email: '738767136@qq.com',
                        portrait: '../../assets/temp.jpg',
                    },
                    {
                        name: '你是我鹅子',
                        key: 2,
                        type: 'group',
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
                        members: [
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
                        username: '你是我可爱的鹅子啊我是你霸霸,',
                        key: 1,
                        type: 'person',
                        id: '1485757155',
                        desc: '嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧嘤嘤嘤吧',
                        email: '738767136@qq.com',
                        portrait: '../../assets/temp.jpg',
                    },
                    {
                        name: '你是我鹅子啊',
                        key: 99,
                        type: 'group',
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
                        members: [
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
                        type: 'group',
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
                        members: [
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
                        key: 4,
                        type: 'group',
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
                        members: [
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
                        type: 'group',
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
                        members: [
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
                        type: 'group',
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
                        members: [
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
                        type: 'group',
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
                        members: [
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
                        type: 'group',
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
                        members: [
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
                        type: 'group',
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
                        members: [
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
                },
                unshiftListItem (state, payload) {
                    state.list = [
                        payload.item,
                        ...state.list
                    ];
                }
            }
        },
        userInfo: {
            state: {

            },
            mutations: {
                updateUserInfo (state, payload) {
                    if (payload.key === 'portrait') {
                        let random = `${payload.value}?t=${Math.random()}`;
                        console.log(random);
                        state['portrait'] = random;
                    } else {
                        state[payload.key] = payload.value;
                    }
                },
                setUserInfo (state, payload) {
                    let userInfo = payload.userInfo;
                    for (let item in userInfo) {
                        if (userInfo.hasOwnProperty(item)) {
                            state[item] = userInfo[item];
                        }
                    }
                    console.log(state);
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
                updateLogInForm (state, payload) {
                    state[payload.key] = payload.value;
                },
                clearLogInForm (state) {
                    state = {
                        username: '',
                        password: '',
                        verifyCode: '',
                    };
                }
            },
            actions: {}
        },
        registerForm: {
            state: {
                username: '',
                password: '',
                email: '',
                verifyCode: '',
            },
            mutations: {
                updateRegisterForm (state, payload) {
                    state[payload.key] = payload.value;
                },
                clearRegisterForm (state) {
                    state = {
                        username: '',
                        password: '',
                        verifyCode: '',
                        email: ''
                    };
                }
            },
            actions: {

            }
        },
        findBackForm: {
            state: {
                repeat_password: '',
                password: '',
                email: ''
            },
            mutations: {
                updateFindBackForm (state, payload) {
                    state[payload.key] = payload.value;
                },
                clearFindBackForm (state) {
                    state = {
                        repeat_password: '',
                        password: '',
                        email: ''
                    };
                }
            },
            actions: {}
        },
        editUserInfoForm: {
            state: {
                username: '',
                email: '',
                desc: ''
            },
            mutations: {
                editUserInfoForm (state, payload) {
                    state[payload.key] = payload.value;
                }
            },
        }
    }
};

export default new Vuex.Store(store);
