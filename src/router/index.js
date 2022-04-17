import { createRouter, createWebHistory } from 'vue-router'
const routes = [
    {
        path: '/ttf_1',
        name: '鼠标点击弹出爱心',
        component: ()=>import('../views/ttf_1/index.vue'),
    },
    {
        path: '/ttf_2',
        name: '鼠标点击弹出文字',
        component: ()=>import('../views/ttf_2/index.vue'),
    },
    {
        path: '/ttf_3',
        name: '鼠标点击弹出烟花波纹',
        component: ()=>import('../views/ttf_3/index.vue'),
    },
    {
        path: '/ttf_4',
        name: '小星星跟随鼠标',
        component: ()=>import('../views/ttf_4/index.vue'),
    },
    {
        path: '/ttf_5',
        name: '鼠标粒子随心拖尾跟随',
        component: ()=>import('../views/ttf_5/index.vue'),
    },
    {
        path: '/ttf_6',
        name: '气泡泡',
        component: ()=>import('../views/ttf_6/index.vue'),
    },
    {
        path: '/ttf_7',
        name: '笑脸跟随鼠标',
        component: ()=>import('../views/ttf_7/index.vue'),
    },
    {
        path: '/ttf_8',
        name: '烟花爆炸',
        component: ()=>import('../views/ttf_8/index.vue'),
    },
    {
        path: '/ttf_9',
        name: '蜘蛛网特效',
        component: ()=>import('../views/ttf_9/index.vue'),
    },
    {
        path: '/ttf_10',
        name: '炫酷时间线10',
        component: ()=>import('../views/ttf_10/index.vue'),
    },
    {
        path: '/ttf_11',
        name: '炫酷时间线11',
        component: ()=>import('../views/ttf_11/index.vue'),
    },
    {
        path: '/ttf_12',
        name: '完美天空12',
        component: ()=>import('../views/ttf_12/index.vue'),
    },
    {
        path: '/ttf_13',
        name: '火',
        component: ()=>import('../views/ttf_13/index.vue'),
    },
    {
        path: '/ttf_14',
        name: '文字动效14',
        component: ()=>import('../views/ttf_14/index.vue'),
    },
    {
        path: '/ttf_15',
        name: 'x合并特效',
        component: ()=>import('../views/ttf_15/index.vue'),
    },
    {
        path: '/ttf_16',
        name: '日月切换',
        component: ()=>import('../views/ttf_16/index.vue'),
    },
    {
        path: '/ttf_17',
        name: '下雨特效',
        component: ()=>import('../views/ttf_17/index.vue'),
    },
    {
        path: '/ttf_18',
        name: '樱花飘落',
        component: ()=>import('../views/ttf_18/index.vue'),
    },
    {
        path: '/ttf_19',
        name: '聚光加载',
        component: ()=>import('../views/ttf_19/index.vue'),
    },
    {
        path: '/ttf_20',
        name: '波浪动画特效',
        component: ()=>import('../views/ttf_20/index.vue'),
    },
    {
        path: '/ttf_21',
        name: '跑马灯加载',
        component: ()=>import('../views/ttf_21/index.vue'),
    },
    {
        path: '/ttf_22',
        name: '霓虹灯',
        component: ()=>import('../views/ttf_22/index.vue'),
    },
    {
        path: '/ttf_23',
        name: '图片落叶飘舞',
        component: ()=>import('../views/ttf_23/index.vue'),
    },
    {
        path: '/ttf_24',
        name: '毛玻璃跟随鼠标',
        component: ()=>import('../views/ttf_24/index.vue'),
    },
    {
        path: '/ttf_25',
        name: '海盗船加载效果',
        component: ()=>import('../views/ttf_25/index.vue'),
    },
    {
        path: '/ttf_26',
        name: '苹果logo加载效果',
        component: ()=>import('../views/ttf_26/index.vue'),
    },
    {
        path: '/ttf_27',
        name: '扫描隐藏文字',
        component: ()=>import('../views/ttf_27/index.vue'),
    },
    {
        path: '/ttf_28',
        name: '电池按钮霓虹灯',
        component: ()=>import('../views/ttf_28/index.vue'),
    },
    {
        path: '/ttf_29',
        name: '聚光灯',
        component: ()=>import('../views/ttf_29/index.vue'),
    },
    {
        path: '/ttf_30',
        name: '按钮悬停发光',
        component: ()=>import('../views/ttf_30/index.vue'),
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
