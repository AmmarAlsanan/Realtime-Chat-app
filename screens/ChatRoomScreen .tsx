import React from 'react';
import {View , Text} from 'react-native';
import {useRoute}from '@react-navigation/native'


const chatRoomScreen =()=>{
    const route =useRoute();
    console.log(route.params)
    return (
        <View>
            <Text>
                Hellow this is ChatRoom Secreen
            </Text>
        </View>
    )
}
export default chatRoomScreen;