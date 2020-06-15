import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { globalStyles, images } from "../styles/global";

import Card from "../shared/card";

export default function ReviewDetails({ route }) {
  const rating = route.params?.rating ?? 0;

  return (
    <View style={globalStyles.container}>
      <Card>
        <Text>{route.params?.title ?? "Untitled."}</Text>
        <Text>{route.params?.body ?? "No description available."}</Text>
        <View style={styles.rating}>
          <Text>GameZone Rating:</Text>
          {rating > 0 ? (
            <Image source={images.ratings[rating]} />
          ) : (
            <Text>Not rated yet.</Text>
          )}
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  rating: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
});
