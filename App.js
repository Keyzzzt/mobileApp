import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';
import OutputArea from "./Components/OutputArea";
import InputArea from "./Components/InputArea";

export default function App() {
    const [goals, setGoals] = useState([])
    const [isAddMode, setIsAddMode] = useState(false)

    function addGoalHandler(newGoalText) {
        setGoals((currentGoal) => [...currentGoal, { id: Math.random().toString(), value: newGoalText }])
        setIsAddMode(false)
    }
    function removeGoalHandler(goalId) {
        setGoals(currentGoal => {
            return currentGoal.filter((goal) => goal.id !== goalId)
        })
    }
    function cancelAddGoalHandler() {
        setIsAddMode(false)
    }

    return (
        <View style={styles.mainContainer}>
            <Button title='Add new goal' onPress={() => setIsAddMode(true)} />
            <InputArea visible={isAddMode} onAddGoal={addGoalHandler} onCancel={cancelAddGoalHandler} />
            <FlatList data={goals}
                keyExtractor={(item, index) => item.id}
                renderItem={itemData => <OutputArea title={itemData.item.value} id={itemData.item.id} onDelete={removeGoalHandler} />}
            />
        </View>

    );
}

const styles = StyleSheet.create({
    mainContainer: {
        padding: 50
    },


});
