import React, { useState } from "react";
import { Alert, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

const NewTask = ({navigation}) => {

    const baseUrl = 'http://localhost:3000/tasks';

    const [newTask, setNewTask] = useState({
        title: "",
        description: "",
    });

    const handleChangeText = (name, value) => {
        setNewTask({ ...newTask, [name]: value });
    }

    const addTasks = async () => {
        const sendData = {
            title: newTask.title,
            description: newTask.description,
        }

        await fetch(baseUrl + '/new-tasks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(sendData),
        })
        .then((res) => res.json())
        .catch((error) => {
            Alert.alert('Error', 'No se pudo agregar la tarea. Inténtalo más tarde');
        })
        .them((response) =>{
            if(response.message === 'error'){
                Alert.alert('Error', 'Inténtalo más tarde');
            } else {
                navigation.navigate("Tareas", {state: true});
            }
        })

        setNewTask({
            title: '',
            description: '',
        });
    }

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
                    placeholder="Descrpción de la tarea..."
                    multiline={true}
                    numberOfLines={10}
                    style={ styles.textArea }
                    value={newTask.description}
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
        textAlignVertical: 'top'
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