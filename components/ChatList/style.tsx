import {StyleSheet} from 'react-native'

const styles=StyleSheet.create({
    avatar:{
       alignItems:'center'
    },
    contener:{
        borderBottomWidth:1,
        display:"flex",
        borderBottomColor:'red',
        flexDirection:'row',
        justifyContent:'space-between',
        width:'100%',
        height:70,
        alignItems:'center'
    },
    userAvatar:{
        alignSelf:'center',
        left:10,
        backgroundColor:'#f5f5f5',
        borderRadius:'50%',
    },
    midContener:{
        right:30,
        margin:10,
        alignContent:'center',

    },
    userName:{
        fontSize:16,
        fontWeight:'bold',
    },
    lastMessage:{

        fontSize:16,
        color:'#B3B1B1',
        width:150,
    },
    createdAt:{
        marginRight:10,
        justifyContent:'flex-end',
        fontSize:13,
        color:'#b3b1b1'
    }

})

export default styles;