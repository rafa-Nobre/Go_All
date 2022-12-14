import { useState } from 'react'
import { View, Button, FlatList, StyleSheet } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import GoalItem from './src/components/GoalItem/GoalItem'
import GoalInput from './src/components/GoalInput/GoalInput'

export default function App() {
  const [modalVisibility, setModalVisibility] = useState(false)
  const [goals, setGoals] = useState([])

  function addGoalHandler(enteredGoalText) {
    //console.log(enteredGoalText)
    setGoals(currentGoals => [
      ...currentGoals,
      { text: enteredGoalText, id: Math.random().toString() }
    ])
    endAddGoalHandler()
  }
  function deleteGoalHandler(id) {
    setGoals(currentGoals => {
      return currentGoals.filter(goal => goal.id !== id)
    })
  }

  function startAddGoalHandler() {
    setModalVisibility(true)
  }
  function endAddGoalHandler() {
    setModalVisibility(false)
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.container}>
        <Button
          title="Add New Goal"
          onPress={startAddGoalHandler}
          color="#a065ec"
        />

        <GoalInput
          onAddGoal={addGoalHandler}
          onCancel={endAddGoalHandler}
          showModal={modalVisibility}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            data={goals}
            renderItem={itemData => (
              <GoalItem
                text={itemData.item.text}
                id={itemData.item.id}
                onDeleteItem={deleteGoalHandler}
              />
            )}
            keyExtractor={(item, index) => {
              return item.id
            }}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16
  },

  goalsContainer: {
    flex: 5
  }
})
