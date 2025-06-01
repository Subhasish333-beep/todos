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
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        marginTop: 20
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
        // flex: 0.2,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 2,
    },
    checkboxContainer: {
        flex: 0.1
    },
    tasktitle: {
        flex: 0.8
    },
    modalOverlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 10,
    },
    modalContainer: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        width: '80%',
        alignItems: 'center',
    },
    modalText: {
        fontSize: 16,
        marginBottom: 20,
        textAlign: 'center',
    },
    modalButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    modalButton: {
        flex: 1,
        marginHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    cancelButton: {
        backgroundColor: colors.input,
    },
    deleteButton: {
        backgroundColor: colors.red,
    },
    modalButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    disabled: {
        backgroundColor: colors.disable
    }
});