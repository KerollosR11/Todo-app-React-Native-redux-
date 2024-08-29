import { Text, View } from "react-native";
import { styles } from "../shared/styles";
import { SafeAreaView } from "react-native-safe-area-context";
import DisplayTodo from "../components/DisplayTodo";
import TodoInput from "../components/TodoInput";

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>todo list</Text>
      <TodoInput/>
      <View style={styles.dividerLine} />
      <DisplayTodo
      />
    </SafeAreaView>
  );
}
