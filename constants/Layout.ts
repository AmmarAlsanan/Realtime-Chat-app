import { Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default {
  window: {
    width,
    height,
  },
  headerTap:{
    flexDirection:'row',
    width:60,
    justifyContent:'space-between'
    ,marginRight:15,
  },
  isSmallDevice: width < 375,
};
