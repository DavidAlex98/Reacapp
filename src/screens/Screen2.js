import { View, Image, Button } from 'react-native';
import { useAudioPlayer } from 'expo-audio';

export default function Screen2() {
  const sonido = useAudioPlayer(require('../../assets/sonidos/clap.mp3'));

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#1B62B4' }}>
      <Image source={require('../../assets/imagenes/logo.jpg')} style={{ width: 200, height: 200 }} />
      <View style={{ backgroundColor: 'white', marginTop: 20 }}>
        <Button title="Reproducir sonido" onPress={() => { sonido.seekTo(0); sonido.play(); }} />
      </View>
    </View>
  );
}