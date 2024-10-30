import { View, Text, Image, ImageSourcePropType, StyleSheet } from "react-native";

export const Header = ({image} : {image : ImageSourcePropType}) => {
    return (
        <>
            <View style={styles.background}>
                <Text style={styles.temQSerNoText}>Header exemplo</Text>
                <Text style={styles.fonteDiferente}>Testando fontes diferentes</Text>
                <Image source={image}/>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    background : {
        backgroundColor: "#2A2B2AFF",
        display : "flex",
        alignItems : "center",
        justifyContent : "center",
        paddingHorizontal : 10,
        paddingVertical : 30
    },

    temQSerNoText : {
        color: "#ffffff",
        fontWeight: "900",
        fontSize : 30,
        fontFamily: "InterRegular"
    },
    fonteDiferente : {
        fontFamily :"Anton",
        color: "#ffffff"
    }
})