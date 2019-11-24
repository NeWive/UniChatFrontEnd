<template>
    <div id="add_portal">
        <div class="WindowControlBox">
            <WindowControl
                    :has-minimal="false"
                    :close-handler="closePortal"/>
        </div>
        <div class="add_panel_container">
            <div class="add_panel_navigator">
                <div class="item">
                    添加好友
                </div>
                <div class="right">
                    添加群里
                </div>
            </div>
            <div class="input">
                <img src="../../assets/svg/search.png" alt="">
                <input type="text">
            </div>
            <div class="result_list">

            </div>
        </div>
    </div>
</template>

<script>
    import WindowControl from './WindowControl';
    export default {
        name: 'AddPortal',
        components: {
            WindowControl
        },
        methods: {
            closePortal () {
                this.$store.commit('handlePortal', {
                    isPortalOn: false,
                    id: -1,
                });
            },
        },
        data: function () {
            return {
                result: []
            };
        }
    };
</script>

<style lang="scss">
    #add_portal {
        width: 626px;
        height: 413px;
        background: #17BDBA;
        position: absolute;
        z-index: 999;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
        padding: 0 26px 20px 30px;
        .WindowControlBox {
            margin: 27px 0 12px;
        }
        .add_panel_container {
            padding: 36px 44px 78px 52px;
            background: #FFFFFF;
            border-radius: 9px;
            box-shadow: 2px 4px 8px -2px #060001;
        }
    }
</style>
