import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { colors } from "../shared/colors";
import { Attractions, Avatar, Hotels, Restaurants } from "../assets";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import MenuContainer from "../components/MenuContainer";

const Discover = () => {
  const navigation = useNavigation();
  const [type, setType] = useState("restaurants");

  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <View>
          <Text style={styles.headerTitle1}>Discover</Text>
          <Text style={styles.headerTitle2}>the beauty today</Text>
        </View>
        <View style={styles.avatarContainer}>
          <Image source={Avatar} style={styles.avatar} />
        </View>
      </View>

      <View style={styles.searchContainer}>
        <GooglePlacesAutocomplete
          GooglePlacesDetailsQuery={{ fields: "geometry" }}
          placeholder="Search"
          fetchDetails={true}
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log(details?.geometry?.viewport);
          }}
          query={{
            key: "AIzaSyD9uxeMUupwmBDHqXV8Wfg2VSTVmdzYMfA",
            language: "en",
          }}
        />
      </View>

      {/* menu container  */}
      <ScrollView>
        <View style={styles.menuContainer}>
          <MenuContainer
            key={"hotels"}
            title="Hotels"
            imageSrc={Hotels}
            type={type}
            setType={setType}
          />
          <MenuContainer
            key={"attractions"}
            title="Attractions"
            imageSrc={Attractions}
            type={type}
            setType={setType}
          />
          <MenuContainer
            key={"restaurants"}
            title="Restaurants"
            imageSrc={Restaurants}
            type={type}
            setType={setType}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Discover;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    position: "relative",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 32,
    marginTop: 20,
  },
  headerTitle1: {
    fontSize: 28,
    color: colors.green,
    fontWeight: "bold",
  },
  headerTitle2: {
    color: colors.darkGray,
    fontSize: 20,
  },
  avatarContainer: {
    width: 50,
    height: 50,
    borderRadius: 10,
    backgroundColor: colors.gray400,
    alignItems: "center",
    justifyContent: "center",
  },
  avatar: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.white,
    marginHorizontal: 4,
    paddingHorizontal: 4,
    paddingVertical: 1,
    borderRadius: 10,
    elevation: 10,
    marginTop: 40,
  },
  menuContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 8,
    marginTop: 8,
  },
  menu: {},
});
