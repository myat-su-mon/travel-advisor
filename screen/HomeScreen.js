import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {

  const navigation = useNavigation();

  useLayoutEffect(()=> {
    navigation.setOptions({headerShown: false})
  }, []);

  return (
   <SafeAreaView style={styles.container}>

    <View style={styles.logoContainer}>
        <View style={styles.logo}>
            <Text style={styles.logoText}>Go</Text>
        </View>
        <Text style={styles.titleText}>Travel</Text>
    </View>
   </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    position: "relative",
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
    paddingHorizontal: 24,
    marginTop: 32,
  },
  logo: {
    width: 60,
    height: 60,
    backgroundColor: "black",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  logoText: {
    color: "#00bcc9",
    fontSize: "1.5rem",
    fontWeight: "600",
  },
  titleText: {
    color: "#2a2b4b",
    fontSize: "2rem",
    fontWeight: "600",
  },
});
