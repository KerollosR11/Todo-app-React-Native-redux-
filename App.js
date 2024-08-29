import "@expo/metro-runtime";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import CompletedTodo from "./src/screens/CompletedTodo";
import Routing from "./src/shared/Routing";


export default function App() {

  const {Navigator,Screen} =createBottomTabNavigator()
  return (
 
    <Provider store={store}>
      <NavigationContainer>
        <Navigator screenOptions={{ tabBarStyle: {
            position: "absolute",
            width: "90%",
            bottom: 20,
            borderWidth: 1,
            borderColor: "grey",
            borderTopColor: "grey",
            borderRadius: 20,
            left: "5%",
          },}}>
          <Screen name="Main" component={Routing} options={{headerShown:false}}/>
          <Screen name="Completed-Task" component={CompletedTodo}/>
        </Navigator>
      </NavigationContainer>
    </Provider>
  );
}

