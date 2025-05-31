import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors, fonts } from '../utils/Constants'
import Icon from 'react-native-vector-icons/AntDesign';

const CustomHeader = ({ title, onClick }) => {
    return (
        <View style={styles.wrap}>
            <Text style={styles.headerText}>{title}</Text>
            <TouchableOpacity onPress={onClick}>
                <Icon name={"logout"} size={20} color="#ffffff" />
            </TouchableOpacity>
        </View>
    )
}

export default CustomHeader

const styles = StyleSheet.create({
    wrap: {
        flexDirection: "row",
        backgroundColor: colors.input,
        height: 80,
        justifyContent: "space-between",
        padding: 30
    },
    headerText: {
        color: "#ffffff",
        fontFamily: fonts.robotXBold,
        fontSize: 17
    }
})