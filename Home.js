import { StyleSheet, Text, View, Image, Button } from "react-native";
import React from "react";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Image
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl1bVIU6CmX_CMNVWI6ZlPJkGwvXGeZhB5kbvF0rkj-w&s",
        }}
        style={{ width: 200, height: 200 }}
      />
      <Button
        title="Tap ME"
        color="red"
        onPress={() => navigation.navigate("Profile")}
      ></Button>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
});
