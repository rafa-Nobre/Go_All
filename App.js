import { useState } from 'react'
import { View, FlatList, StyleSheet } from 'react-native'
import GoalItem from './src/components/GoalItem/GoalItem'
import GoalInput from './src/components/GoalInput/GoalInput'

export default function App() {
  const [goals, setGoals] = useState([])

  function addGoalHandler(enteredGoalText) {
    //console.log(enteredGoalText)
    setGoals(currentGoals => [
      ...currentGoals,
      { text: enteredGoalText, id: Math.random().toString() }
    ])
  }

  return (
    <View style={styles.container}>
      <GoalInput onAddGoal={addGoalHandler} />
      <View style={styles.goalsContainer}>
        <FlatList
          data={goals}
          renderItem={itemData => <GoalItem text={itemData.item.text} />}
          keyExtractor={(item, index) => {
            return item.id
          }}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
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
