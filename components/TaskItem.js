import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const TaskItem = ({ onPress, task }) => {
  return (
    <View style={
      styles.container
    } >
      <TouchableOpacity style={styles.button} onPress = { onPress }>
        <Text>{task}</Text>
      </TouchableOpacity>
    </View>
  )
}

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

export default TaskItem