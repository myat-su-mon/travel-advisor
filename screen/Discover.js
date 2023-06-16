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
import { useEffect, useState } from "react";
import { colors } from "../shared/colors";
import { Attractions, Avatar, Hotels, NotFound, Restaurants } from "../assets";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import MenuContainer from "../components/MenuContainer";
import { FontAwesome } from "@expo/vector-icons";
import ItemCardContainer from "../components/ItemCardContainer";
import { getPlacesData } from "../api";

const Discover = ({ navigation }) => {
  const [type, setType] = useState("restaurants");
  const [isLoading, setIsLoading] = useState(false);
  const [mainData, setMainData] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    getPlacesData(type).then((data) => {
      const response = data?.filter(
        (item) => item.photo && item.description.length > 0
      );
      setMainData(response);
      setInterval(() => {
        setIsLoading(false);
      }, 2000);
    });
  }, [type]);

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

      {/* <View style={styles.searchContainer}>
        <GooglePlacesAutocomplete
          GooglePlacesDetailsQuery={{ fields: "geometry" }}
          placeholder="Search"
          fetchDetails={true}
          onPress={(data, details = null) => {
            console.log(details?.geometry?.viewport);
            setBl_lat(details?.geometry?.viewport?.southwest?.lat);
            setBl_lng(details?.geometry?.viewport?.nor?.lng);
            setTr_lat(details?.geometry?.viewport?.northeast?.lat);
            setTr_lng(details?.geometry?.viewport?.northeast?.lng);
          }}
          query={{
            key: "AIzaSyD9uxeMUupwmBDHqXV8Wfg2VSTVmdzYMfA",
            language: "en",
          }}
          requestUrl={{
            useOnPlatform: "all",
            url: "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api",
            headers: {
              "x-requested-with": "XMLHttpRequest",
            },
          }}
        />
      </View> */}

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
                  size={16}
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
                          : "https://cdn.pixabay.com/photo/2017/01/26/02/06/platter-2009590_1280.jpg"
                      }
                      title={data?.name}
                      location={data?.location_string}
                      data={data}
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
    paddingHorizontal: 16,
    marginTop: 20,
  },
  headerTitle1: {
    fontSize: 20,
    color: colors.green,
    fontWeight: "bold",
  },
  headerTitle2: {
    color: colors.darkGray,
    fontSize: 16,
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
    marginHorizontal: 16,
    paddingHorizontal: 4,
    paddingVertical: 1,
    borderRadius: 10,
    elevation: 10,
    marginTop: 8,
  },
  menuContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 8,
    marginHorizontal: 8,
    marginTop: 8,
  },
  tipsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
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
    fontSize: 20,
    fontWeight: "bold",
  },
  exploreText: {
    color: "#A0C4C7",
    fontSize: 16,
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
    objectFit: "cover",
  },
  notFoundText: {
    color: "#428288",
    fontSize: 16,
    fontWeight: "600",
  },
});
