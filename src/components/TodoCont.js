import React, { useState } from "react";
import { styles } from "../shared/styles";
import {Text,  TouchableOpacity,View, Button, Modal} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { markAsDone, removeTodo } from "../redux/slices/todoSlice";
import Feather from "@expo/vector-icons/Feather";
import AntDesign from "@expo/vector-icons/AntDesign";
import Fontisto from "@expo/vector-icons/Fontisto";

export default function TodoCont({ item }) {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const handleDelete = (id) => {
    dispatch(removeTodo(id));
    setModalVisible(false);
  };
  const handleCancelModal = () => {
    setModalVisible(false);
  };
  const handleAsDone = (id) => {
    console.log(id);    
    dispatch(markAsDone(id));
  };
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("todo-details", { item })}
      style={{
        ...styles.todosContainer,
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 4,
        borderWidth: 1,
        borderBlockColor: "black",
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 15,
      }}
    >
      <View>
        <Text style={item.completed ? styles.doneTodo : ""}>
          {item.title}
        </Text>
        <Text>{item.description}</Text>
      </View>

      <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
        {!item.completed && (
          <TouchableOpacity onPress={() => handleAsDone(item.id)}>
            <Fontisto name="checkbox-passive" size={20}  />
          </TouchableOpacity>
        )}
        {item.completed && (
          <AntDesign name="checksquareo" size={20} color="green" onPress={() => handleAsDone(item.id)} />
        )}

        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Feather name="trash" size={22} color="blue" />
        </TouchableOpacity>
        <Modal
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <Text style={styles.modalText}>
                Are you sure to delete this todo?
              </Text>
              <View style={styles.buttonContainer}>
                <Button title="Cancel" onPress={handleCancelModal} />
                <Button
                  title="Confirm"
                  color="red"
                  onPress={() => handleDelete(item.id)}
                />
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </TouchableOpacity>
  );
}
