import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TouchableNativeFeedback, TouchableHighlight, Button, Alert, Platform, SafeAreaView, StatusBar } from 'react-native';

export default function App() {
  const handlePress = () => {
    console.log("clicked");

  }
  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} onPress={handlePress} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis soluta aut pariatur sed, deserunt architecto, commodi voluptas omnis, a debitis dolore provident quos illo eligendi eaque repellendus fuga quo corporis facilis? Aliquam, natus. Ipsum facilis placeat repellendus qui nobis, laudantium rem at? Qui ducimus laborum eveniet. Enim neque tempora iusto!</Text>
      <TouchableNativeFeedback>
        <View style={{ width: 200, height: 100, backgroundColor: "gray" }}></View>
      </TouchableNativeFeedback>
      <TouchableOpacity>
        <Image source={{ width: 200, height: 200, uri: "https://picsum.photos/200/300" }} />
      </TouchableOpacity>
      <TouchableHighlight
        onPress={() => console.log("highlight clicked")
        }>
        <Image source={{ width: 200, height: 200, uri: "https://picsum.photos/200/300" }} />
      </TouchableHighlight>
      <Button title="click me" onPress={() => Alert.prompt("My title", "My message", text => console.log(text)
      )} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
});
