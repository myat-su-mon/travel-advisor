import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { colors } from "../shared/colors";
import { FontAwesome5, MaterialIcons } from "@expo/vector-icons";

const ItemScreen = ({ route, navigation }) => {
  const data = route?.params?.param;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imgContainer}>
        <Image
          source={{
            uri: data?.photo?.images?.large?.url
              ? data?.photo?.images?.large?.url
              : require("../assets/chef.png"),
          }}
          style={styles.image}
        />

        <View style={[styles.icons, { top: 5 }]}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Discover")}
            style={styles.iconContainer}
          >
            <FontAwesome5 name="chevron-left" size={24} color="#06B2BE" />
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.iconContainer, { backgroundColor: "#06B2BE" }]}
          >
            <FontAwesome5 name="heartbeat" size={24} color="#fff" />
          </TouchableOpacity>
        </View>

        <View style={[styles.icons, { bottom: 5 }]}>
          <View>
            <Text style={styles.priceLevelText}>{data?.price}</Text>
            <Text style={styles.priceText}>{data?.price_level}</Text>
          </View>

          <View style={styles.closeBtn}>
            <Text style={styles.closeBtnText}>{data?.open_now_text}</Text>
          </View>
        </View>
      </View>
      <ScrollView style={styles.scrollView}>
        <View style={styles.titleSection}>
          <Text style={styles.titleText}>{data?.name}</Text>
          <View style={styles.locationContainer}>
            <FontAwesome5 name="map-marker" size={25} color="#8C9EA6" />
            {data?.location_string && (
              <Text style={styles.locationText}>{data?.location_string}</Text>
            )}
          </View>
        </View>

        <View style={styles.mainSection}>
          {data?.rating && (
            <View style={styles.ratingContainer}>
              <View style={styles.starIconContainer}>
                <FontAwesome5 name="star" size={24} color="#D58574" />
              </View>
              <View>
                <Text style={styles.ratingText}>{data?.rating}</Text>
                <Text style={styles.ratingText}>Ratings</Text>
              </View>
            </View>
          )}

          {data?.price_level && (
            <View style={styles.ratingContainer}>
              <View style={styles.starIconContainer}>
                <MaterialIcons name="attach-money" size={24} color="#D58574" />
              </View>
              <View>
                <Text style={styles.ratingText}>{data?.price}</Text>
                <Text style={styles.ratingText}>Price Level</Text>
              </View>
            </View>
          )}

          {data?.bearing && (
            <View style={styles.ratingContainer}>
              <View style={styles.starIconContainer}>
                <FontAwesome5 name="map-signs" size={24} color="#D58574" />
              </View>
              <View>
                <Text style={styles.ratingText}>{data?.bearing}</Text>
                <Text style={styles.ratingText}>Bearing</Text>
              </View>
            </View>
          )}
        </View>

        {data?.description && (
          <Text style={styles.descriptionText}>{data?.description}</Text>
        )}

        {data?.cuisine && (
          <View style={styles.cuisineContainer}>
            {data?.cuisine.map((n) => (
              <TouchableOpacity key={n.key} style={styles.cuisineName}>
                <Text>{n.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}

        <View style={styles.contactSection}>
          {data?.phone && (
            <View style={styles.contactContainer}>
              <FontAwesome5 name="phone" size={24} color="#428288" />
              <Text style={styles.contactText}>{data?.phone}</Text>
            </View>
          )}

          {data?.email && (
            <View style={styles.contactContainer}>
              <FontAwesome5 name="envelope" size={24} color="#428288" />
              <Text style={styles.contactText}>{data?.email}</Text>
            </View>
          )}

          {data?.address && (
            <View style={styles.contactContainer}>
              <FontAwesome5 name="map-pin" size={24} color="#428288" />
              <Text style={styles.contactText}>{data?.address}</Text>
            </View>
          )}

          <View style={styles.bookNowBtn}>
            <Text style={styles.bookNowText}>Book Now</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ItemScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    marginTop: 12,
    paddingHorizontal: 8,
    paddingVertical: 8,
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 4,
    paddingVertical: 6,
  },
  imgContainer: {
    position: "relative",
    elevation: 12,
  },
  image: {
    width: "100%",
    height: 300,
    objectFit: "cover",
    borderRadius: 10,
  },
  icons: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    position: "absolute",
    left: 0,
    right: 0,
    paddingHorizontal: 6,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.white,
  },
  priceContainer: {
    flexDirection: "row",
    gap: 2,
    alignItems: "center",
  },
  priceLevelText: {
    fontSize: 12,
    fontWeight: "bold",
    color: colors.gray50,
  },
  priceText: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.gray50,
  },
  closeBtn: {
    height: 48,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 20,
    backgroundColor: colors.secondary,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    right: 4,
    bottom: 4,
  },
  closeBtnText: {
    color: colors.white,
  },
  titleSection: {
    marginTop: 4,
  },
  titleText: {
    color: "#428288",
    fontSize: 18,
    fontWeight: "bold",
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    marginTop: 4,
  },
  locationText: {
    color: "#8C9EA6",
    fontSize: 12,
    fontWeight: "bold",
  },
  mainSection: {
    marginTop: 4,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
  },
  starIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "pink",
    alignItems: "center",
    justifyContent: "center",
    elevation: 5,
  },
  ratingText: {
    color: "#515151",
    fontSize: 12,
  },
  descriptionText: {
    marginTop: 4,
    fontSize: 14,
    fontWeight: "600",
    color: "#97A6AF",
  },
  cuisineContainer: {
    flexDirection: "row",
    gap: 4,
    alignItems: "center",
    justifyContent: "flex-start",
    flexWrap: "wrap",
    marginTop: 4,
  },
  cuisineName: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 20,
    backgroundColor: colors.secondary,
  },
  contactSection: {
    gap: 4,
    backgroundColor: colors.gray50,
    marginTop: 4,
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 8,
    elevation: 2,
  },
  contactContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 4,
  },
  bookNowBtn: {
    marginVertical: 4,
    paddingHorizontal: 4,
    paddingVertical: 4,
    borderRadius: 20,
    backgroundColor: colors.secondary,
    alignItems: "center",
    justifyContent: "center",
  },
  bookNowText: {
    fontSize: 16,
    fontWeight: "600",
    textTransform: "uppercase",
    letterSpacing: 1.5,
    color: colors.gray50,
  },
});
