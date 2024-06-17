import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

const NewTask = () => {

    const [newTask, setNewTask] = useState("");
    const [tasks, setTasks] = useState([]);

    const addTasks = () => {
        // Añadir la tarea al arreglo de tareas
        setTasks(currentTasks => [...currentTasks, newTask]);
        // Limpiar el task
        setNewTask("");
    }

    return (
        <SafeAreaView style={{marginHorizontal: 20}}>
            <View>
                <TextInput
                    onChangeText={ setNewTask }
                    placeholder="Agregar nueva tarea..."
                    style={ styles.input }
                    value={newTask}
                 />
            </View>
            <View>
                <TouchableOpacity>
                    <Text
                        style={ [styles.buttom, styles.acceptButton] }
                        onPress={ addTasks }
                    >
                        Agregar tarea
                    </Text>
                </TouchableOpacity>
            </View>
            {/* <View>
                <TouchableOpacity>
                    <Text style={ [styles.buttom, styles.cancelButtom] }>
                        Cancelar
                    </Text>
                </TouchableOpacity>
            </View> */}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({

    input: {
        height: 60,
        borderColor: 'gray',
        borderWidth: 1,
        margin: 10,
        padding: 20,
        fontSize: 20,
        backgroundColor: '#fbfbfb',
        borderRadius: 10
    },

    buttom: {
        color: '#fff',
        fontSize: 20,
        margin: 10,
        padding: 20,
        textAlign: 'center',
        borderRadius: 10
    },

    acceptButton: {
        backgroundColor: '#3498db',
    },

    cancelButtom: {
        backgroundColor: '#e74c3c',
    }
});

export default NewTask;