
import { Button, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import { DownloadPicture } from "@/components/BottomSheet";

export default function account() {
    const [pictureOpen, setPictureOPen] = useState(false);
    
    return <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
            <Text>Account Page</Text>
            <Button title="Download" onPress={() => { 
                setPictureOPen(true);
            }} />
            {pictureOpen && <DownloadPicture onClose={() => { setPictureOPen(false); }} />}
        </View>
    </SafeAreaView>
}