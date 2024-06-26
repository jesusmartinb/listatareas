import {Text, SafeAreaView, View, FlatList, StyleSheet, Pressable} from 'react-native';
import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { selectTasks } from '../features/tareas/tareasSlice';
import { toggleComplete, deleteTask } from '../features/tareas/tareasSlice';

const Tasks = () => {

    const tasks = useSelector(selectTasks);

    // console.log(tasks);

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
                        <View style={styles.container}>
                            <Text style={{ textDecorationLine: item.done ? "line-through" : "", texDecorationColor: item.done ? "#f80000" : "", color: item.done ? "#f80000" : "#000000", fontSize: 25}}>{item.title}</Text>
                            <Text style={styles.text}>{item.description}</Text>
                            <Pressable onPress = { () => handleComplete(index) }>
                                <Text style={styles.button}>Completar</Text>
                            </Pressable>
                            <Pressable onPress = { () => handleDelete(index) }>
                                <Text style={styles.button}>Eliminar</Text>
                            </Pressable>
                        </View>
                    }
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    backgroundColor: '#d1e7dd',
  },

  text: {
    fontSize: 15,
    fontWeight: 'bold',
    padding: 10,
  },

  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    fontSize: 20,
    borderRadius: 10,
    backgroundColor: '#f80000',
    margin: 3,
    color: 'white',
  },
});

export default Tasks;