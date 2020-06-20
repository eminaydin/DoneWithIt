import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TouchableNativeFeedback, TouchableHighlight } from 'react-native';

export default function App() {
  const handlePress = () => {
    console.log("clicked");

  }
  return (
    <View style={styles.container}>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
