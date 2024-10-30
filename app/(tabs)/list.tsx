import { Text, SafeAreaView, FlatList, StyleSheet} from "react-native";
import data from "@/constants/dataEx.json"
import { Item

 } from "@/components/item";
export default function List(){
    return(
        <>
            <Text style={styles.center}>Lista</Text>
            <SafeAreaView style={styles.container}>
            <FlatList
                style={styles.back}
                data={data}
                renderItem={({item}) => <Item name={item.nome} age={item.idade} date={item.data} image={item.imagem} />}
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