import {Text, SafeAreaView, View, FlatList} from 'react-native';
import TaskItem from '../components/TaskItem';

const Tasks = () => {
    return (
        <SafeAreaView style={{marginHorizontal: 20}}>
            <View>
                <FlatList 
                    data = { tasks }
                    keyExtractor={(item) => item}
                    renderItem={ ({item, index}) => <TaskItem task={item} index={index} /> }
                />
            </View>
        </SafeAreaView>
    );
};

export default Tasks;