import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

const OutputArea = (props) => {
    return (
        <TouchableOpacity activeOpacity={0.7} onPress={props.onDelete.bind(this, props.id)} >
            <View style={styles.goals}>
                <Text>{props.title}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    goals: {
        marginVertical: 11,
        borderRadius: 15,
        paddingHorizontal: 15,
        paddingVertical: 20,
        backgroundColor: '#777'

    }
})

export default OutputArea;
