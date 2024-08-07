import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, TextInput, Pressable, View } from "react-native";
import { useDispatch } from "react-redux";
import { create } from "../features/tareas/tareasSlice";

const NewTask = ({navigation}) => {


    const [newTask, setNewTask] = useState({
        title: "",
        description: "",
    });

    const dispatch = useDispatch();

    const handleChangeText = (name, value) => {
        setNewTask({ ...newTask, [name]: value });
    };

    const addTasks = () => {
        if (!newTask) return;
        dispatch(create(newTask));
        setNewTask({ title: "", description: "", done: false });
        navigation.navigate("Tareas");
    };

    return (
        <SafeAreaView style={{marginHorizontal: 20}}>
            <View>
                <View>
                    <Text style={ styles.title}>
                        Crea Una Nueva Tarea
                    </Text>
                </View>
            </View>
            <View>
                <TextInput
                    onChangeText={ (value) => handleChangeText("title", value) }
                    placeholder="Agregar nombre de la tarea..."
                    style={ styles.input }
                    value={newTask.title}
                 />
            </View>
            <View>
                <TextInput
                    onChangeText={ (value) => handleChangeText("description", value) }
                    placeholder="Descripción de la tarea..."
                    multiline={true}
                    rows={8}
                    style={ styles.textArea }
                    value={newTask.description}
                 />
            </View>
            <View>
                <Pressable>
                    <Text
                        style={ [styles.buttom, styles.acceptButton] }
                        onPress={ addTasks }
                    >
                        Agregar tarea
                    </Text>
                </Pressable>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({

    title: {
        fontSize: 30, 
        textAlign: 'center', 
        margin: 10
    },

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
    
    textArea: {
        borderColor: 'gray',
        borderWidth: 1,
        margin: 10,
        padding: 20,
        fontSize: 20,
        backgroundColor: '#fbfbfb',
        borderRadius: 10,
        verticalAlign: 'top'
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

});

export default NewTask;