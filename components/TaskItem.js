import { View, Text } from 'react-native'
import React from 'react'

const TaskItem = ({ task, index }) => {
  return (
    <View>
      <Text>{task}</Text>
    </View>
  )
}

export default TaskItem