import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Menu from './screens/Menu';
import { Provider } from 'react-redux';
import { store } from './app/store.js';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Menu"
            component={Menu}
            options={{
              title: "Mis Tareas",
              headerTitleAlign: "center",
              headerStyle: {
                backgroundColor: "#fff",
              },
              headerTintColor: "#000",
              headerTitleStyle: {
                fontWeight: "bold",
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

