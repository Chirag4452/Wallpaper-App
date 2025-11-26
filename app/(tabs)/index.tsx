import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { View, Text } from 'react-native';
const Tab = createMaterialTopTabNavigator();

export default function ForYou() {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Library' component={Library} />
      <Tab.Screen name='Liked' component={Liked} />
      <Tab.Screen name='Suggested' component={Suggested} />
    </Tab.Navigator>
  );
}

function Library() {
  return <View>
    <Text>Hi there from Library screen!</Text>
  </View>
}

function Liked() {
  return <View>
    <Text>Hi there from Liked screen!</Text>
  </View>
}

function Suggested() {
  return <View>
    <Text>Hi there from suggested screen!</Text>
  </View>
}