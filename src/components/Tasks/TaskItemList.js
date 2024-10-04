import { View, ScrollView } from 'react-native';
import TaskItem from './TaskItem/TaskItem';
import styles from './styles';
export default function Tasks({ tasks, onStatusChange, onTaskRemoval }) {
    return (
      <View style={styles.container}>
        <ScrollView>
          {tasks.map((task, index) => (
            <TaskItem key={index} task={task} onStatusChange={onStatusChange} onTaskRemoval={onTaskRemoval}/>
          ))}
        </ScrollView>
      </View>
    );
  }