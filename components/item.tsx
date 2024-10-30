import { View, StyleSheet, Text} from "react-native"
import { Image } from "expo-image"

export const Item = ({name, age, date, image} : {name : string, age : string, date : string, image : string}) => {
    return (
        <>
            <View style={styles.itemList}>
                <Image source={image} style={styles.imageSytele}></Image>
                <Text>{name}</Text>
                <Text>{age}</Text>
                <Text>{date}</Text>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    itemList : {
        display : "flex",
        flexDirection : "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#343D3DFF",
        margin: 10,
        height: 80,
        paddingHorizontal: 10,
    },
    imageSytele : {
        height: 30,
        width: 30
    }
})