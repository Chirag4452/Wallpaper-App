import { useEffect, useState } from "react";
import { Button, Text, View } from "react-native";

export default function Home() {

    const [count, setCount] = useState(0);

    useEffect(() => {
        let interval = setInterval(() => {
            setCount(c => c + 1)
        }, 1000)
        return () => {
            clearInterval(interval)
        }
    }, [])

    return <View>
        <Text>
        </Text>
        <Button title="Sign Up" />
    </View>
}