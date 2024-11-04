import { FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {Produto} from "@/components/produto";
import { useEffect, useState } from 'react';
import { collection, onSnapshot } from '@firebase/firestore';
import { FIRESTORE_DB } from '@/firebaseConfig';


interface Produto {
    id: string,
    tipoProduto: string,
    descricao: string,
    preco: string
}


export default function List(){
    const [camiseta, setProdutos] = useState<Produto[]>([]);
    
    useEffect(() => {
        const unsubscribe = onSnapshot(collection(FIRESTORE_DB, "produtos"), (snapshot) => {
            const produtoList: Produto[] = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as Produto[];
            
            const produtoFiltrado = produtoList.filter((item) => item.tipoProduto === "CAMISETA");
    
            setProdutos(produtoFiltrado);
        });
        
        return () => unsubscribe();
    }, []);
    return(
        <>
            <Text style={styles.center}>Camisetas</Text>
            <SafeAreaView style={styles.container}>
            <FlatList
                style={styles.back}
                data={camiseta}
                renderItem={
                    ({item}) => 
                    <Produto tipoProduto={item.tipoProduto} descricao={item.descricao} preco={item.preco} />
                }
                keyExtractor={item => item.id}
            />
            </SafeAreaView>
        </>
    );
}

const styles = StyleSheet.create({
    container : {
        flex: 1
    },
    back : {
        paddingHorizontal: 20
    },
    center : {
        display: "flex",
        width: "100%",
        justifyContent: "center",
        paddingVertical: 10,
        fontSize: 30
    }
});