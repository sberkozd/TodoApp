import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text, Button, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Form from "./src/components/Form/Form";
import Tasks from "./src/components/Tasks/TaskItemList";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import styles from "./src/styles/main";

function HomeScreen({ tasks, setTasks }) {
  const [localTasks, setLocalTasks] = useState(tasks);

  useEffect(() => {
    setLocalTasks(tasks);
  }, [tasks]);

  useEffect(() => {
    setTasks(localTasks);
  }, [localTasks]);

  const handleStatusChange = (title) => {
    setLocalTasks((currentTasks) =>
      currentTasks.map((task) => {
        if (task.title === title) {
          return { ...task, status: !task.status };
        }
        return task;
      })
    );
  };

  const handleTaskRemoval = (title) => {
    setLocalTasks(localTasks.filter((task) => task.title !== title));
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Tasks
        tasks={localTasks}
        setTasks={setTasks}
        onStatusChange={handleStatusChange}
        onTaskRemoval={handleTaskRemoval}
      />
    </View>
  );
}

function AddTaskScreen({ tasks, setTasks }) {
  const handleAddTask = (taskDescription, completed) => {
    const newTask = {
      title: taskDescription,
      status: completed,
    };

    setTasks([...tasks, newTask]);
  };

  return (
    <View style={styles.container}>
      <Form onAddTask={handleAddTask} />
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  const [tasks, setTasks] = useState([
    {
      title: "Watch TV Show",
      status: true,
    },
    {
      title: "Go out for a run",
      status: false,
    },
    {
      title: "Finish the lab",
      status: false,
    },
  ]);

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" color={color} size={size} />
            ),
          }}
        >
          {() => <HomeScreen tasks={tasks} setTasks={setTasks} />}
        </Tab.Screen>
        <Tab.Screen
          name="Add Task"
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="add-circle" color={color} size={size} />
            ),
          }}
        >
          {() => <AddTaskScreen tasks={tasks} setTasks={setTasks} />}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
