import { Component } from 'react';
import Taro from '@tarojs/taro';
import { View, Text, Button, } from '@tarojs/components';
import './BlackCattle.scss'

export default class BlackCattle extends Component {

    componentWillMount() { }

    componentDidMount() { }

    componentWillUnmount() { }

    componentDidShow() { }

    componentDidHide() { }

    render() {
        return (
            <View className='index'>
                <View>小黑永远是小黑，咋滴也变不成姜汁</View>
                小黑专属页面
            </View>
        )
    }
}
