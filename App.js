import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import Counter from './src/components/Counter'

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Open up App.js to start working on your app!</Text>
      <Button title='Click Me' />
      <Counter />
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 38
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
