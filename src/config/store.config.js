import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const store = {
    state: {

    },
    mutations: {

    },
    actions: {

    },
    modules: {
        logInForm: {
            state: {
                username: '',
                password: '',
                verifyCode: '',
            },
            mutations: {
                updateForm (state, payload) {
                    state[payload.key] = payload.value;
                }
            },
            actions: {

            }
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
        }
    }
};

export default new Vuex.Store(store);
