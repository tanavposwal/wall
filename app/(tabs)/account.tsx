import { DownloadPicture } from "@/components/BottomSheet";
import { router } from "expo-router";
import { useState } from "react";
import { Button, Text, View } from "react-native";

export default function Account() {
  const [picture, setPicture] = useState(false);

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
      <Button title="Dwonload Picture" onPress={() => setPicture(true)} />
      {picture && <DownloadPicture />}
    </View>
  );
}