import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TouchableNativeFeedback, TouchableHighlight, Button, Alert, Platform, SafeAreaView, StatusBar, TextInput, ScrollView } from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);
  const handlePress = () => {
    console.log("clicked");

  }

  function goalInputHandler(enteredText) {
    setEnteredGoal(enteredText)
  }
  function goalSubmitHandler() {
    setCourseGoals([...courseGoals, enteredGoal])

  }
  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} onPress={handlePress} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis soluta aut pariatur sed, deserunt architecto, commodi voluptas omnis, a debitis dolore provident quos illo eligendi eaque repellendus fuga quo corporis facilis? Aliquam, natus. Ipsum facilis placeat repellendus qui nobis, laudantium rem at? Qui ducimus laborum eveniet. Enim neque tempora iusto!</Text>
      <TextInput style={styles.input} placeholder="Course Goal" onChangeText={goalInputHandler} value={enteredGoal} />

      <Button title="click me" onPress={
        goalSubmitHandler} />
      <ScrollView>
        {courseGoals.map((goals) => <Text>{goals} </Text>)}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: "center",
    padding: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
  input: {
    width: 2000,
    borderWidth: 2,
    borderColor: "blue"
  }
});
