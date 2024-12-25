import { router } from "expo-router";
import { Button, Text, View } from "react-native";

export default function Account() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Account</Text>
      <Button title="Go to Account Info" onPress={() => router.push("/accountinfo")} />
    </View>
  );
}