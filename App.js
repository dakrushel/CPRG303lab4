import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import ToDoForm from './app/toDoForm';
import ToDoList from './app/toDoList';


function App() {
  const [tasks, setTasks] = useState([]);
  
  //Part 3: addTask Function
  const addTask = (taskText) => {   //Part 1:
    //Part 4: Prevent duplicate tasks
    if (tasks.includes(taskText) || taskText.trim() === '') return;
    setTasks([...tasks, taskText]);
  }
  return (
    <SafeAreaView style={styles.constainer}>
      <Text style={styles.title}>Incredible To-Do List App</Text>
      <ToDoList tasks={tasks} />
      <ToDoForm addTask={addTask} />
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 10,
  },
});