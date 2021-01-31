import React, { useState } from 'react';
import { Button, TextInput, View, StyleSheet, Modal } from "react-native";

const InputArea =

    (props) => {
        const [newGoalText, setNewGoalText] = useState('')

        function saveGoalText(text) {
            setNewGoalText(text)
        }
        function addGoalHandler() {
            props.onAddGoal(newGoalText)
            setNewGoalText('')
        }

        return (
            <Modal visible={props.visible} animationType='slide'>
                <View style={styles.addGoalContainer}>
                    <TextInput onChangeText={saveGoalText} placeholder='Add goal here.' style={styles.textInput}
                        value={newGoalText} />
                    <View style={styles.buttonInput}>
                        <View style={styles.button}>
                            <Button onPress={props.onCancel} title='Cancel' color='red' />
                        </View>
                        <View style={styles.button}>
                            <Button onPress={addGoalHandler} title='Add' />
                        </View>
                    </View>


                    {/*or we could do so... props.onAddGoal.bind(this, newGoalText)*/}
                </View>
            </Modal>
        );
    };

const styles = StyleSheet.create({
    addGoalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textInput: {
        borderWidth: 1,
        padding: 10,
        margin: 10,
        width: '80%'
    },
    buttonInput: {
        width: '70%',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    button: {
        width: '40%'
    }
})

export default InputArea;
