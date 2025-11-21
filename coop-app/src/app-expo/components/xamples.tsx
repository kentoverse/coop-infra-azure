import React, { useState } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import PagerView from "react-native-pager-view";

const SCREEN_WIDTH = Dimensions.get("window").width;

export default function SwipeView() {
  const [page, setPage] = useState(0);

  return (
    <PagerView
      style={styles.pager}
      initialPage={0}
      onPageSelected={(e) => setPage(e.nativeEvent.position)}
    >
      <View key="1" style={styles.page}>
        <Text style={styles.text}>Page 1</Text>
      </View>

      <View key="2" style={styles.page}>
        <Text style={styles.text}>Page 2</Text>
      </View>

      <View key="3" style={styles.page}>
        <Text style={styles.text}>Page 3</Text>
      </View>
    </PagerView>
  );
}

const styles = StyleSheet.create({
  pager: {
    flex: 1,
  },
  
  page: {
    width: SCREEN_WIDTH,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
  text: {
    fontSize: 24,
    fontWeight: "600",
  },
});