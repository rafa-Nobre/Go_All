import { View, Text, StyleSheet } from 'react-native'

const GoalItem = props => {
  return (
    <View style={styles.goalWrapper}>
      <Text style={{ color: 'white' }}>{props.text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  goalWrapper: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
    color: 'white'
  }
})

export default GoalItem
