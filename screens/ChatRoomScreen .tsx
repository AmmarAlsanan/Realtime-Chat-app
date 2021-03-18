import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {useRoute}from '@react-navigation/native'
import ChatMessage from "../components/ChatMessage/index";
import ChatMessageData from '../data/Chats'


const chatRoomScreen =()=>{
    const route =useRoute();
    console.log(route.params)
    return (
        <View>
           <FlatList data={ChatMessageData.messages}
                     renderItem={({item})=> <ChatMessage message={item}/>}
                     keyExtractor={(item => item.id)}/>
        </View>
    )
}
export default chatRoomScreen;