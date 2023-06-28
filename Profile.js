import { StyleSheet, Text, View, Image, Button } from "react-native";
import React from "react";

const Profile = ({ navigation }) => {
  return (
    <View style={styles.page1}>
      <Text style={{ fontSize: 30 }}>Profile</Text>
      <Image
        source={{
          uri: "https://1.bp.blogspot.com/-kK7Fxm7U9o0/YN0bSIwSLvI/AAAAAAAACFk/aF4EI7XU_ashruTzTIpifBfNzb4thUivACLcBGAsYHQ/s1280/222.jpg",
        }}
        style={{ width: 200, height: 200 }}
      />
      <Button
        title="Tap ME"
        color="#00FF00"
        onPress={() => navigation.navigate("Exit")}
      ></Button>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  page1: {
    alignItems: "center",
    justifyContent: "space-between",
  },
});
