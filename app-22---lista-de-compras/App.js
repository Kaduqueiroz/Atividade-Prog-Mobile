import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, Modal } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const [shoppingList, setShoppingList] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [currentItem, setCurrentItem] = useState({ name: '', quantity: '' });
  const [editingIndex, setEditingIndex] = useState(null);

  useEffect(() => {
    const loadShoppingList = async () => {
      try {
        const savedList = await AsyncStorage.getItem('shoppingList');
        if (savedList !== null) setShoppingList(JSON.parse(savedList));
      } catch (e) {
        console.error('Failed to load shopping list.');
      }
    };

    loadShoppingList();
  }, []);

  useEffect(() => {
    const saveShoppingList = async () => {
      try {
        await AsyncStorage.setItem('shoppingList', JSON.stringify(shoppingList));
      } catch (e) {
        console.error('Failed to save shopping list.');
      }
    };

    saveShoppingList();
  }, [shoppingList]);

  const handleSaveItem = () => {
    if (editingIndex !== null) {
      const updatedList = [...shoppingList];
      updatedList[editingIndex] = currentItem;
      setShoppingList(updatedList);
    } else {
      setShoppingList([...shoppingList, currentItem]);
    }
    setCurrentItem({ name: '', quantity: '' });
    setEditingIndex(null);
    setModalVisible(false);
  };

  const handleEditItem = (index) => {
    setCurrentItem(shoppingList[index]);
    setEditingIndex(index);
    setModalVisible(true);
  };

  const handleDeleteItem = (index) => {
    const updatedList = shoppingList.filter((_, i) => i !== index);
    setShoppingList(updatedList);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Compras</Text>
      <FlatList
        data={shoppingList}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.item}>
              {item.name} ({item.quantity})
            </Text>
            <TouchableOpacity onPress={() => handleEditItem(index)} style={styles.editButton}>
              <Text style={styles.buttonText}>✏️</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleDeleteItem(index)} style={styles.deleteButton}>
              <Text style={styles.buttonText}>🗑️</Text>
            </TouchableOpacity>
          </View>
        )}
      />
      <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.addButton}>
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>

      <Modal visible={modalVisible} transparent={true} animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TextInput
              value={currentItem.name}
              onChangeText={(text) => setCurrentItem({ ...currentItem, name: text })}
              placeholder="Nome do Item"
              style={styles.input}
            />
            <TextInput
              value={currentItem.quantity}
              onChangeText={(text) => setCurrentItem({ ...currentItem, quantity: text })}
              placeholder="Quantidade"
              style={styles.input}
            />
            <View style={styles.modalButtons}>
              <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.cancelButton}>
                <Text style={styles.buttonText}>Cancelar</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleSaveItem} style={styles.saveButton}>
                <Text style={styles.buttonText}>Salvar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  },
  item: {
    flex: 1,
    fontSize: 18,
  },
  editButton: {
    marginRight: 10,
  },
  deleteButton: {},
  buttonText: {
    fontSize: 18,
  },
  addButton: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    backgroundColor: '#007BFF',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 24,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 20,
    fontSize: 18,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cancelButton: {
    padding: 10,
  },
  saveButton: {
    padding: 10,
    backgroundColor: '#007BFF',
    borderRadius: 5,
  },
});
