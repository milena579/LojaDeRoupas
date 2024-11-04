import { View, StyleSheet, Text} from "react-native"

export const Produto = ({tipoProduto, descricao, preco} : { tipoProduto : string, descricao : string, preco : string}) => {
    return (
        <>
            <View style={styles.item}>
                <Text>{tipoProduto}</Text>
                <Text>{descricao}</Text>
                <Text>{preco}</Text>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    item : {
        display : "flex",
        flexDirection : "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#BB5A4EFF",
        margin: 10,
        height: 80,
        paddingHorizontal: 10,
        color: "#ffffff"
    },
    imageSytele : {
        height: 30,
        width: 30
    }
})