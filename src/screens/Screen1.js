import { useEffect } from 'react';
import { View, Text, Button, Alert } from 'react-native';

export default function Screen1({ siguiente }) {
  useEffect(() => { Alert.alert('Bienvenido'); }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor: '#e9e9e9' }}>
      <Text style={{ fontSize: 28 }}>Mi Primera App</Text>
      <Button title="Continuar" onPress={siguiente} />
    </View>
  );
}