import { Component } from 'react';
import Taro from '@tarojs/taro';
import { View, Button, Image } from '@tarojs/components';
import { AtNoticebar, } from 'taro-ui';
import { Swiper, SwiperItem } from '@tarojs/components';
import './index.scss'

export default class Index extends Component {

    componentWillMount() { }

    componentDidMount() { }

    componentWillUnmount() { }

    componentDidShow() { }

    componentDidHide() { }

    render() {
        return (
            <View className='index'>
                <AtNoticebar marquee icon='volume-plus' single speed={100}>和谐家庭共筑你我，由于时间紧迫，心力憔悴，作者张华专属页面还在紧张筹备中...</AtNoticebar>
                <Swiper
                    className='test-h'
                    indicatorColor='#999'
                    indicatorActiveColor='#333'
                    vertical
                    circular
                    indicatorDots
                    autoplay>
                    <SwiperItem>
                        <View className='demo-text'>
                            <Image className="img" src={require('./img/17.jpg')} />
                        </View>
                    </SwiperItem>
                    <SwiperItem>
                        <View className='demo-text'>
                            <Image className="img" src={require('./img/20.jpg')} />
                        </View>
                    </SwiperItem>
                    <SwiperItem>
                        <View className='demo-text'>
                            <Image className="img" src={require('./img/21.jpg')} />
                        </View>
                    </SwiperItem>
                </Swiper>
                <view className="line">
                    不知道写啥
                </view>
                <view className="item">
                    <Button
                        type='primary'
                        size='default'
                        plain
                        onClick={() => {
                            console.log(this.props, '123')
                            Taro.navigateTo({ url: '/pages/MsWang/MsWang' })
                        }}
                    >
                        王晗专属页面
                    </Button>
                </view>
                <view className="item">
                    <Button
                        type='primary'
                        size='default'
                        plain
                        onClick={() => {
                            console.log(this.props, '123')
                            Taro.navigateTo({ url: '/pages/GingerJuice/GingerJuice' })
                        }}
                    >
                        姜汁专属页面
                    </Button>
                </view>
                <view className="item">
                    <Button
                        type='primary'
                        size='default'
                        plain
                        onClick={() => {
                            console.log(this.props, '123')
                            Taro.navigateTo({ url: '/pages/BlackCattle/BlackCattle' })
                        }}
                    >
                        小黑专属页面
                    </Button>
                </view>
            </View>
        )
    }
}
