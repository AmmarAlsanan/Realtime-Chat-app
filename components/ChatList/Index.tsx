import React from 'react'
import {ChatRoom} from "../../types";
import {View ,Text, Image} from "react-native";
import ChatRooms from "../../data/ChatRooms";
import { Feather } from '@expo/vector-icons';
import styles from "./style";

export type ChatListItemProps={
    chatRoom:ChatRoom;
}
const ChatListItem =(props:ChatListItemProps)=>{
    const{chatRoom}=props;

    const user =chatRoom.users[0];
    console.log(user)
    return(
        <View style={styles.contener}>
            <View style={styles.userAvatar}>
                <Feather name="user" size={30} color="black" style={styles.avatar} />
            </View>
            <View style={styles.midContener}>
                <Text style={styles.userName}>{user.name}</Text>
                <Text style={styles.lastMessage}>{chatRoom.lastMessage.content}</Text>
            </View>

            <View>
                <Text style={styles.createdAt}>YesterDay</Text>
            </View>


        </View>
    )
}

export default ChatListItem;