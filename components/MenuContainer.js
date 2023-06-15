import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { colors } from "../shared/colors";

const MenuContainer = ({ title, imageSrc, type, setType }) => {
  const handlePress = () => {
    setType(title.toLowerCase());
  };

  let background = "";
  if (type === title.toLowerCase) {
    background = { backgroundColor: colors.gray400 };
  }

  return (
    <TouchableOpacity style={styles.menuContainer} onPress={handlePress}>
      <View style={[styles.menuItem, { background }]}>
        <Image source={imageSrc} style={styles.image} />
      </View>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default MenuContainer;

const styles = StyleSheet.create({
  menuContainer: {
    alignItems: "center",
    justifyContent: "center",
    gap: 2,
  },
  menuItem: {
    width: 96,
    height: 96,
    elevation: 8,
    borderRadius: 20,
    padding: 16,
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },
  text: {
    color: colors.secondary,
    fontSize: 32,
    fontWeight: "600",
  },
});
