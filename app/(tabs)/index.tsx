import { FIRESTORE_DB } from '@/firebaseConfig';
import { addDoc, collection, deleteDoc, doc, onSnapshot, updateDoc } from '@firebase/firestore';
import { useEffect, useState } from 'react';
import { Alert, FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

interface Produto {
  id: string,
  tipoProduto: string,
  descricao: string,
  preco: string

}
export default function HomeScreen() {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [newTipo, setTipo] = useState('');
  const [newDesc, setDescricao] = useState('');
  const [newPreco, setPreco] = useState('');

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(FIRESTORE_DB, "produtos"), (snapshot) => {
        const produtoList: Produto[] = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as Produto[];
        setProdutos(produtoList);
    });

    return () => unsubscribe();
}, []);

  const addProduto = async () => {
    if (newTipo === "" || newDesc == "" || newPreco == ""){
      Alert.alert("Você deve preencher todos os campos para adicionar!");
      return;
    }

    await addDoc(collection(FIRESTORE_DB, "produtos"), { tipoProduto: newTipo, descricao: newDesc, preco: newPreco });
    setTipo('');
    setDescricao('');
    setPreco('');
  }

  const deleteProduto = async (id: string) => {
    await deleteDoc(doc(FIRESTORE_DB, "produtos", id));
  }

  const updateProduto = async (id: string) => {
    if (newTipo === "" || newDesc == "" || newPreco == ""){
      Alert.alert("Você deve preencher todos os campos para atualizar!");
      return;
    }
    const prodRef = doc(FIRESTORE_DB, "produtos", id);
    
    await updateDoc(prodRef, {
      tipoProduto: newTipo, 
      descricao: newDesc, 
      preco: newPreco 
    });

    setTipo('');
    setDescricao('');
    setPreco('');
  }

  return (
   <>
      <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Tipo do produto"
                value={newTipo}
                onChangeText={setTipo}
            />
            <TextInput
              style={styles.input}
              placeholder="Descrição do produto"
              value={newDesc}
              onChangeText={setDescricao}
            />
            <TextInput
              style={styles.input}
              placeholder="Preço"
              value={newPreco}
              onChangeText={setPreco}
            />
            <TouchableOpacity style={styles.button} onPress={addProduto}>
                <Text style={styles.buttonText}>Adicionar</Text>
            </TouchableOpacity>

            <FlatList
                data={produtos}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.userItem}>
                        <Text>{item.id}</Text>
                        <Text>{item.tipoProduto}</Text>
                        <Text>{item.descricao}</Text>
                        <Text>{item.preco}</Text>
                        <TouchableOpacity onPress={() => deleteProduto(item.id)}>
                            <Text style={styles.deleteButton}>Excluir</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => updateProduto(item.id)}>
                            <Text style={styles.deleteButton}>Atualizar</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
   </>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  input: {
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 4,
      height: 40,
      paddingHorizontal: 10,
      marginBottom: 10,
  },
  button: {
      backgroundColor: '#4b6beb',
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 5,
  },
  buttonText: {
      color: '#fff',
  },
  userItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
  },
  deleteButton: {
      color: 'red',
  },
});
