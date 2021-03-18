import { Ionicons } from '@expo/vector-icons';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { FontAwesome } from '@expo/vector-icons';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ChatScreen from '../screens/ChatScreen';
import  chatRoomScreen from '../screens/ChatRoomScreen '
import TabTwoScreen from '../screens/TabTwoScreen';
import { MainTabParamList, TabOneParamList, TabTwoParamList } from '../types';

const MainTab = createMaterialTopTabNavigator<MainTabParamList>();

export default function MainTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <MainTab.Navigator
      initialRouteName="ChatScreen"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].background, style:{backgroundColor:Colors[colorScheme].tint},
          indicatorStyle:{
          backgroundColor: Colors[colorScheme].background, height:3,
          },
          labelStyle:{
          fontWeight:'bold'
          },showIcon:true,
      }}>

        <MainTab.Screen
            name="Camera"
            component={TabOneNavigator}
            options={{
                tabBarIcon: ({ color }) => <FontAwesome name="camera" size={20} color="#fff" />,
                tabBarLabel:()=>null
            }}
        />
        <MainTab.Screen
            name="ChatScreen"
            component={ChatScreen}

        />
        <MainTab.Screen
            name="Status"
            component={TabOneNavigator}

        />
        <MainTab.Screen
            name="Calls"
            component={TabOneNavigator}

        />
    </MainTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const Stack = createStackNavigator<TabOneParamList>();

function TabOneNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Chat"
        component={ChatScreen}
      />
    </Stack.Navigator>
  );
}



const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
        options={{ headerTitle: 'Tab Two Title' }}
      />
    </TabTwoStack.Navigator>
  );
}
