import {Text, SafeAreaView, View, FlatList, ScrollView, StyleSheet, TouchableOpacity} from 'react-native';
import TaskItem from '../components/TaskItem';
import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { toggleComplete, deleteTask } from '../features/tareas/tareasSlice';

const Tasks = () => {

    const tasks = useSelector((state) => state.tasks.value);

    console.log(tasks);

    const dispatch = useDispatch();

    const handleComplete = (index) => {
        dispatch(toggleComplete(index));
    };

    const handleDelete = (index) => {
        dispatch(deleteTask(index));
    };

    return (
        <SafeAreaView style={{marginHorizontal: 20}}>
            <View>
                <FlatList 
                    data = { tasks }
                    keyExtractor={ (item, index) => index}
                    renderItem={ ({item, index}) => 
                        <View>
                            <Text style={{ textDecoration: item.done ? "line-through" : "" }}>{item.title}</Text>
                            <Text>{item.description}</Text>
                            <TouchableOpacity style={styles.button} onPress = { () => handleComplete(index) }>
                                <Text>Completar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button} onPress = { () => handleDelete(index) }>
                                <Text>Eliminar</Text>
                            </TouchableOpacity>
                        </View>
                    }
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    backgroundColor: '#f9c2ff',
  },

  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Tasks;