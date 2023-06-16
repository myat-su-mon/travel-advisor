import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { colors } from "../shared/colors";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const ItemCardContainer = ({ imageSrc, title, location, data }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("ItemScreen", { param: data })}
      style={styles.itemCardContainer}
    >
      <Image source={{ uri: imageSrc }} style={styles.image} />

      {title ? (
        <>
          <Text style={styles.cardTitle}>
            {title?.length > 14 ? `${title.slice(0, 14)}...` : title}
          </Text>
          <Text style={styles.cardSubTitle}>
            <FontAwesome name="map-marker" size={20} color="#8597A2" />
            {location?.length > 12 ? `${location.slice(0, 12)}...` : location}
          </Text>
        </>
      ) : (
        <></>
      )}
    </TouchableOpacity>
  );
};

export default ItemCardContainer;

const styles = StyleSheet.create({
  itemCardContainer: {
    width: 160,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.gray400,
    gap: 2,
    marginVertical: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    elevation: 10,
    backgroundColor: colors.white,
  },
  image: {
    width: "100%",
    height: 100,
    borderRadius: 10,
    objectFit: "cover",
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
  },
  cardTitle: {
    color: "#428288",
    fontSize: 10,
    fontWeight: "bold",
  },
  cardSubTitle: {
    color: "#428288",
    fontSize: 8,
    fontWeight: "bold",
  },
});
