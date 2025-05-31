import { StyleSheet, Dimensions } from "react-native";
import { colors, fonts } from "../../utils/Constants";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary
    },
    todoContainer: {
        width: "90%",
        alignSelf: "center"
    },
    header: {
        fontSize: 24,
        textAlign: 'center',
        marginVertical: 20,
        color: colors.white,
        fontFamily: fonts.robotXBold
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        adding: 10,
        marginBottom: 10,
        fontFamily: fonts.robotoRegular
    },
    addBtn: {
        backgroundColor: '#2196F3',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 20,
    },
    addText: {
        color: '#fff'
    },
    todoItem: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    checkbox: {
        width: 22,
        height: 22,
        borderRadius: 4,
        borderWidth: 2,
        borderColor: '#2196F3',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2196F3',
        marginRight: 10,
    },
    todoText: {
        flex: 1,
        fontSize: 16,
        marginLeft: 10,
    },
    logoutBtn: {
        backgroundColor: 'red',
        padding: 12,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 20,
    },
    empty: {
        textAlign: "center",
        fontFamily: fonts.robotoBold,
        marginTop: 30,
        color: colors.white
    },
    task: {
        fontFamily: fonts.robotoBold,
        fontSize: 18,
        color: colors.white
    },
    deleteContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 2,
    }
});