import {Text, SafeAreaView, View, FlatList, ScrollView, StyleSheet } from 'react-native';
import TaskItem from '../components/TaskItem';
import React, { useState, useEffect } from 'react'

const Tasks = () => {

    const baseUrl = 'http://localhost:3000/tasks';

    const [tasks, setTasks] = useState([]);

    const deleteTask = (index) => {
        let temp = [...tasks];
        temp.splice(index, 1);
        setTasks(temp);
    }

    return (
        <SafeAreaView style={{marginHorizontal: 20}}>
            <View>
                <FlatList 
                    data = { tasks }
                    keyExtractor={(item) => item}
                    renderItem={ ({item, index}) => <TaskItem task={item} onPress = {() => deleteTask(index)} /> }
                />
            </View>
        </SafeAreaView>
    );
};

export default Tasks;