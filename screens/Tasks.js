import {Text, SafeAreaView, View, FlatList, StyleSheet, Pressable, Alert, Modal} from 'react-native';
import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { selectTasks, toggleComplete, deleteTask } from '../features/tareas/tareasSlice';

const Tasks = () => {

    const tasks = useSelector(selectTasks);

    // console.log(tasks);

    const [modalVisible, setModalVisible] = useState(false);
    const [indice, setIndice] = useState(null);

    const dispatch = useDispatch();

    const handleComplete = (index) => {
        dispatch(toggleComplete(index));
    };

    const handleDelete = (index) => {
        setModalVisible(true);
        setIndice(index);
    };

    const handleEliminacion = () => {
        setModalVisible(modalVisible => { return false });
        dispatch(deleteTask(indice));
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
                                <Text style={styles.button}>{item.done ? "No Completada" : "Completada"}</Text>
                            </Pressable>
                            <Pressable onPress = { () => handleDelete(index) }>
                                <Text style={styles.button}>Eliminar</Text>
                            </Pressable>
                        </View>
                    }
                />
            </View>
            <View style={styles.centeredView}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible(!modalVisible);
                    }}>
                    <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Realmente desea eliminar la tarea, una vez eliminada no se podrá recuperar</Text>
                        <Pressable
                        style={[styles.buttonModal, styles.buttonClose]}
                        onPress={() => setModalVisible(!modalVisible)}>
                        <Text style={styles.textStyle}>No, Mantener la Tarea</Text>
                        </Pressable>
                        <Pressable
                        style={[styles.buttonModal, styles.buttonEliminar]}
                        onPress={() => handleEliminacion()}>
                        <Text style={styles.textStyle}>Si, Eliminar la Tarea</Text>
                        </Pressable>
                    </View>
                    </View>
                </Modal>
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

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },

  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  buttonModal: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },

  buttonOpen: {
    backgroundColor: '#F194FF',
  },

  buttonClose: {
    backgroundColor: '#2196F3',
  },

  buttonEliminar: {
    backgroundColor: '#f80000',
    marginTop: 20,
  },

  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },

  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default Tasks;