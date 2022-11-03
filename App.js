import { StatusBar } from 'expo-status-bar'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Insert your goal" style={styles.textInput} />
        <Button title="Add" />
      </View>
      <View>
        <Text>List of goals here!</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 16
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8
  },
  goalsContainer: {}
})
