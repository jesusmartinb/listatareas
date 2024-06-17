import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { MaterialCommunityIcons }  from "@expo/vector-icons";
import { useTheme } from "react-native-paper";
import { StyleSheet } from "react-native";

import Tasks from "./Tasks";
import NewTask from "./NewTask";

const Tab = createMaterialBottomTabNavigator();

const Menu = () => {

    const theme = useTheme();
    theme.colors.secondaryContainer = "#e5e5e5"

    return (
        <Tab.Navigator
            initialRouteName="Tasks"
            inactiveColor = "#95a5a6"
            activeColor = "#000"
            barStyle={ styles.navigationBar }
        >
            <Tab.Screen
                name="Tareas"
                component={Tasks}
                options={{
                    tabBarLabel: "Tareas",
                    tabBarIcon: () => (
                        <MaterialCommunityIcons name="view-list" color="#000" size={26} />
                    )
                }}
            />

            <Tab.Screen
                name="Nueva Tarea"
                component={NewTask}
                options={{
                    tabBarLabel: "Nueva Tarea",
                    tabBarIcon: () => (
                        <MaterialCommunityIcons name="checkbox-marked-circle-plus-outline" color="#000" size={26} />
                    )
                }}
            />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    navigationBar: {
        backgroundColor: "#fff",
    },
});

export default Menu;