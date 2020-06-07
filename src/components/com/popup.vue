<template>
    <div class="container">
        <div class="header"></div>

        <div class="setting_container">
            <div class="setting_box" v-for="(item,index) in settingList" :key="index">
               <p> {{ item.tit }}</p>
            </div>
        </div>

        <div class="footer_setting">
            <div>暗黑模式</div>
            <div>设置</div>
            <div>退出登录</div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        showPopup:{
            type:Boolean,
            default:false
        }
    },
    data() {
        return{
            settingList:[
                {
                    tit:'演出'
                },
                {
                    tit:'商城'
                },
                {
                    tit:'附近的人'
                },
                {
                    tit:'口袋铃彩'
                },
                {
                    tit:'我的订单'
                },
                {
                    tit:'定时停止播放'
                },
                {
                    tit:'扫一扫'
                },
                {
                    tit:'音乐闹钟'
                },
                {
                    tit:'音乐云盘'
                },
                {
                    tit:'在线听歌免流量'
                },
                {
                    tit:'游戏推荐'
                },
                {
                    tit:'优惠卷'
                },
                {
                    tit:'加入网易音乐人'
                },
                {
                    tit:'我要直播'
                }
            ]
        }
    },
    methods:{
        
    }
}
</script>

<style scoped>

.container{
    font-size: .32rem;
    height: 100%;
    color:#999;
}
.footer_setting{
    height:6%;
    border-top:1px solid #EEE9E9;
    width:100%;
    display: flex;
    position: fixed;
    bottom: 0;
    align-items: center;
    justify-content: space-around;
}
.header{
    background:forestgreen;
    width:100%;
    height:30%;
}
.setting_container{
    height:64%;
    overflow-x: auto;
}
.setting_box{
    padding:.25rem .5rem;
}
</style>