export default {
    pages: [
        'pages/index/index',
        'pages/spuulier/spuulier',
        'pages/MsWang/MsWang',
        'pages/GingerJuice/GingerJuice',
        'pages/BlackCattle/BlackCattle',
    ],
    tabBar: {
        color: '#2c2c2c',
        selectedColor: '#1296db',
        list: [
            {
                pagePath: 'pages/index/index',
                text: "姜汁",
                iconPath: 'assets/public/img/home.jpg',
                selectedIconPath: "assets/public/img/home2.jpg"
            },
            {
                pagePath: 'pages/spuulier/spuulier',
                text: "小黑",
                iconPath: 'assets/public/img/my.jpg',
                selectedIconPath: "assets/public/img/my2.jpg"
            },
        ]
    },
    window: {
        backgroundTextStyle: 'light',
        navigationBarBackgroundColor: '#fff',
        navigationBarTitleText: 'WeChat',
        navigationBarTextStyle: 'black'
    }
}
