import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet, Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    width: '100%',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
  },
});

const HomeScreen = () => {
  const [gratitude, setGratitude] = useState('');
  const [pride, setPride] = useState('');

  const storeEntry = async () => {
    const entry = {date: new Date().toISOString(), gratitude, pride};
    try {
      const existingEntries = await AsyncStorage.getItem('entries');
      const entries = existingEntries ? JSON.parse(existingEntries) : [];
      entries.push(entry);
      await AsyncStorage.setItem('entries', JSON.stringify(entries));
      Alert.alert('Entry Saved', 'Your entry has been saved successfully.');
      // Reset fields after saving
      setGratitude('');
      setPride('');
    } catch (error) {
      Alert.alert('Error', 'Failed to save the entry.');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="What I'm thankful for today"
        value={gratitude}
        onChangeText={setGratitude}
      />
      <TextInput
        style={styles.input}
        placeholder="What I'm proud of today"
        value={pride}
        onChangeText={setPride}
      />
      <Button title="Save Entry" onPress={storeEntry} />
    </View>
  );
};

export default HomeScreen;
