import { View, Text, Pressable, StyleSheet } from 'react-native'

const GoalItem = props => {
  return (
    <View style={styles.goalWrapper}>
      <Pressable
        onPress={props.onDeleteItem.bind(this, props.id)}
        android_ripple={{ color: '#210644' }}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.text}>{props.text}</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  goalWrapper: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
    color: 'white'
  },
  text: {
    padding: 8,
    color: 'white'
  },
  pressedItem: {
    opacity: 0.5
  }
})

export default GoalItem
