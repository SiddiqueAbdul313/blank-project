import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { COLORS, SIZES } from "../../constants/theme";
import React from "react";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={{ color: COLORS.black, fontSize: SIZES.padding * 2 }}>
          Blank Project
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: SIZES.height,
    backgroundColor: COLORS.white,
  },
});
