import {StyleSheet} from 'react-native'

const styles=StyleSheet.create({
    avatar:{
       alignItems:'center'
    },
    contener:{
        borderWidth:1,
        borderColor:'red',
        flexDirection:'row',
        justifyContent:'space-around',
        width:'100%',
        height:70,
        alignItems:'center'
    },
    userAvatar:{


        backgroundColor:'#f5f5f5',
        borderRadius:'50%',
    },
    midContener:{
        justifyContent:'space-around'
    },
    userName:{
        fontSize:16,
        fontWeight:'bold',
    },
    lastMessage:{
        fontSize:16,
        color:'#B3B1B1'
    },
    createdAt:{
        fontSize:16,
        color:'#b3b1b1'
    }

})

export default styles;