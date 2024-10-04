import { View, Text, TextInput, Switch } from "react-native";
import styles from "./styles";
import { useState } from "react";
import { Keyboard } from "react-native";
import { TouchableOpacity } from "react-native";

export default function Form(props) {
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDone, setTaskDone] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleAddPress = () => {
    if (taskDescription) {
      props.onAddTask(taskDescription, taskDone);
      setErrorMessage(null);
      setTaskDescription("");
      setTaskDone(false);
      Keyboard.dismiss();
    } else {
      setErrorMessage("The description is required.");
    }
  };

  const handleDescriptionChange = (text) => {
    setTaskDescription(text);
  };

  const handleStatusChange = (value) => {
    setTaskDone(value);
  };

  return (
    <View style={styles.container}>
      {errorMessage && (
        <View style={styles.warning}>
          <Text style={styles.warningText}>Attention:</Text>
          <Text style={styles.warningText}>{errorMessage}</Text>
        </View>
      )}
      <Text style={styles.descriptionText}>Title:</Text>
      <TextInput
        style={styles.input}
        maxLength={150}
        onChangeText={handleDescriptionChange}
        defaultValue={taskDescription}
      />
      <View>
        <TouchableOpacity style={styles.button} onPress={handleAddPress}>
          <Text style={styles.buttonText}>Add Task</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
