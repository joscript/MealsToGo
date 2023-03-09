import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Platform,
  SafeAreaView,
  Text,
  View,
  StatusBar,
} from "react-native";

const isAndroid = Platform.OS === "android";

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.searh}>
          <Text>Search</Text>
        </View>
        <View style={styles.list}>
          <Text>List</Text>
        </View>
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "column",
    paddingTop: isAndroid ? StatusBar.currentHeight : 0,
  },
  searh: {
    backgroundColor: "green",
    padding: 16,
  },
  list: {
    backgroundColor: "blue",
    flex: 1,
    padding: 16,
  },
});
