import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Tab = createMaterialTopTabNavigator();

export default function ForYou() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Tab.Navigator>
        <Tab.Screen name='Library' component={Library} />
        <Tab.Screen name='Liked' component={Liked} />
        <Tab.Screen name='Suggested' component={Suggested} />
      </Tab.Navigator>
    </SafeAreaView>
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