import React, { useState } from "react";
import { View, Text, Pressable, Switch, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from "./styles";

export default function TaskItem(props) {
    const [isSwitchOn, setSwitchOn] = useState(props.task.status);
  
    const toggleSwitch = () => {
      setSwitchOn((previousState) => !previousState);
      props.onStatusChange(props.task.title);
    };
  
    return (
      <View
        style={[styles.container, { borderColor: isSwitchOn ? "green" : "red" }]}
      >
        <Pressable onPress={props.onPress}>
          <Text>{props.task.title}</Text>
          <Text>Status: {isSwitchOn ? "Done" : "Due"}</Text>
        </Pressable>
        <Switch
          trackColor={{ false: "gray", true: "gray" }}
          thumbColor={isSwitchOn ? "green" : "red"}
          onValueChange={toggleSwitch}
          value={isSwitchOn}
        />
        <TouchableOpacity style={styles.deleteButton} onPress={() => props.onTaskRemoval(props.task.title)}>
          <Icon name="trash" size={20} color="red" />
        </TouchableOpacity>
      </View>
    );
  }