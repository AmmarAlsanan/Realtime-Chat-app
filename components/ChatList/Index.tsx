import React from 'react'
import {chatRoom} from "../../types";
import {View ,Text, TouchableWithoutFeedback} from "react-native";
import ChatRooms from "../../data/ChatRooms";
import {useNavigation} from '@react-navigation/native'
import { Feather } from '@expo/vector-icons';
import styles from "./style";
import moment from "moment";

export type ChatListItemProps={
    chatRoom:chatRoom;
}
const ChatListItem =(props:ChatListItemProps)=>{
    const{chatRoom}=props;

    const user =chatRoom.users[1];

    const navigation =useNavigation();

    const onClick=()=>{
        navigation.navigate("ChatRoom",{id:chatRoom.id ,name:user.name})
    }
    console.log(user)
    return(
        <TouchableWithoutFeedback onPress={onClick}>
            <View style={styles.contener}>
            <View style={styles.userAvatar}>
                <Feather name="user" size={30} color="black" style={styles.avatar} />
            </View>
            <View style={styles.midContener}>
                <Text style={styles.userName}>{user.name}</Text>
                <Text numberOfLines={1} style={styles.lastMessage}>{chatRoom.lastMessage.content}</Text>
            </View>

            <View>
                <Text style={styles.createdAt}>{moment(chatRoom.lastMessage.createdAt).format("MM-DD-YYYY")}</Text>
            </View>


        </View>
        </TouchableWithoutFeedback>

    )
}

export default ChatListItem;