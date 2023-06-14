import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import * as Animatable from "react-native-animatable";
import { HeroImage } from "../assets/index";
import { colors } from "../shared/colors";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {/* first section  */}
      <View style={styles.header}>
        <View style={styles.logo}>
          <Text style={styles.logoText}>Go</Text>
        </View>
        <Text style={styles.headerText}>Travel</Text>
      </View>

      {/* second section  */}
      <View style={styles.momentContainer}>
        <Text style={styles.subTitle1}>Enjoy the trip with</Text>
        <Text style={styles.subTitle2}>Good Moments</Text>

        <Text style={styles.subTitle3}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae quis esse voluptatem? Ratione, natus velit.
        </Text>
      </View>

      {/* third section circle  */}
      <View style={styles.circle}></View>
      <View style={styles.circle2}></View>

      {/* image container  */}
      <View style={styles.imgContainer}>
        <Animatable.Image
          source={HeroImage}
          style={styles.image}
          animation="fadeIn"
          easing="ease-in-out"
        />
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate("Discover")}
        style={styles.btnContainer}
      >
        <Animatable.View
          animation="pulse"
          easing="ease-in-out"
          iterationCount="infinite"
          style={styles.btn}
        >
          <Text style={styles.btnText}>Go</Text>
        </Animatable.View>
      </TouchableOpacity>
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
  header: {
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
    fontSize: 23,
    fontWeight: "600",
  },
  headerText: {
    color: "#2a2b4b",
    fontSize: 32,
    fontWeight: "600",
  },
  momentContainer: {
    paddingHorizontal: 24,
    marginTop: 8,
    gap: 1,
  },
  subTitle1: {
    color: colors.primary,
    fontSize: 28,
  },
  subTitle2: {
    color: colors.secondary,
    fontSize: 20,
    fontWeight: "bold",
  },
  subTitle3: {
    color: colors.primary,
  },
  circle: {
    width: 200,
    height: 200,
    backgroundColor: colors.secondary,
    borderRadius: 100,
    position: "absolute",
    bottom: -40,
    right: -40,
  },
  circle2: {
    width: 200,
    height: 200,
    backgroundColor: colors.orange,
    borderRadius: 100,
    position: "absolute",
    bottom: 40,
    left: -40,
  },
  imgContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  image: {
    width: 500,
    height: 500,
    objectFit: "contain",
    marginTop: 80
  },
  btnContainer: {
    position: "absolute",
    bottom: 80,
    width: 96,
    height: 96,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderTopWidth: 4,
    borderColor: colors.secondary,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  btn: {
    width: 80,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    backgroundColor: colors.secondary,
  },
  btnText: {
    color: colors.gray50,
    fontSize: 36,
    fontWeight: "600",
  },
});
