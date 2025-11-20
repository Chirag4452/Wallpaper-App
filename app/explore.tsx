
import { Button } from "@react-navigation/elements";
import { View, Text } from "react-native";

export default function explore() {
    return <View>
        <Text>Explore Page</Text>
        <Button title="Take me to accounts page"></Button>
        <Button title="Take me to explore page"></Button>
        <Button title="Take me to for you page"></Button>
    </View>
}