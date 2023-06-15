import {
  ActivityIndicator,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { colors } from "../shared/colors";
import { Attractions, Avatar, Hotels, NotFound, Restaurants } from "../assets";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import MenuContainer from "../components/MenuContainer";
import { FontAwesome } from "@expo/vector-icons";
import ItemCardContainer from "../components/ItemCardContainer";
import { getPlacesData } from "../api";

const Discover = () => {
  const navigation = useNavigation();

  const [type, setType] = useState("restaurants");
  const [isLoading, setIsLoading] = useState(false);
  const [mainData, setMainData] = useState([]);
console.log(mainData);
  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);

  useEffect(() => {
    setIsLoading(true);
    getPlacesData().then((data) => {
      setMainData(data);
      setInterval(() => {
        setIsLoading(false);
      }, 2000);
    });
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
            // console.log(data);
            // console.log(details?.geometry?.viewport);
          }}
          query={{
            key: "AIzaSyD9uxeMUupwmBDHqXV8Wfg2VSTVmdzYMfA",
            language: "en",
          }}
          requestUrl={{
            useOnPlatform: "web", // or "all"
            url: "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api",
          }}
        />
      </View>

      {/* menu container  */}
      {isLoading ? (
        <View style={styles.activityIndicator}>
          <ActivityIndicator size="large" color="#0B646B" />
        </View>
      ) : (
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

          <View>
            <View style={styles.tipsContainer}>
              <Text style={styles.tipText}>Top Tips</Text>
              <TouchableOpacity style={styles.btnExplore}>
                <Text style={styles.exploreText}>Explore</Text>
                <FontAwesome
                  name="long-arrow-right"
                  size={24}
                  color="#A0C4C7"
                />
              </TouchableOpacity>
            </View>

            <View style={styles.itemContainer}>
              {mainData?.length > 0 ? (
                <>
                  {mainData?.map((data, i) => (
                    <ItemCardContainer
                      key={i}
                      imageSrc={
                        data?.photo?.images?.medium?.url
                          ? data?.photo?.images?.medium?.url
                          : require("../assets/chef.png")
                      } title={data?.name} location={data?.location_string} data={data}
                    />
                  ))}
                </>
              ) : (
                <>
                  <View style={styles.noData}>
                    <Image source={NotFound} style={styles.notFoundImg} />
                    <Text style={styles.notFoundText}>
                      Opps...No Data Found
                    </Text>
                  </View>
                </>
              )}
            </View>
          </View>
        </ScrollView>
      )}
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
  tipsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 4,
    marginTop: 8,
  },
  btnExplore: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 2,
  },
  tipText: {
    color: "#2c7379",
    fontSize: 28,
    fontWeight: "bold",
  },
  exploreText: {
    color: "#A0C4C7",
    fontSize: 20,
    fontWeight: "bold",
  },
  itemContainer: {
    paddingHorizontal: 4,
    marginTop: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
  },
  activityIndicator: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  noData: {
    width: "100%",
    height: 300,
    alignItems: "center",
    justifyContent: "center",
  },
  notFoundImg: {
    width: 120,
    height: 120,
    object: "cover",
  },
  notFoundText: {
    color: "#428288",
    fontSize: 16,
    fontWeight: "600",
  },
});
