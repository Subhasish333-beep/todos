import { StyleSheet, Dimensions } from "react-native";
import { colors, fonts } from "../../utils/Constants";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:"center",
        backgroundColor: colors.primary
    },
    gap: {
        height: 15
    },
    errorMessage: {
        color: colors.red,
        fontSize:12,
        fontFamily: fonts.robotoRegular
    },
    loginText: {
        color: colors.white,
        textAlign: "center",
        fontSize: 28,
        marginBottom: 20,
        fontFamily: fonts.robotXBold
    },
    formWrapper: {
        width: "90%",
        alignSelf: "center",
    }
})