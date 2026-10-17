import { useState } from 'react';
import Screen1 from './src/screens/Screen1';
import Screen2 from './src/screens/Screen2';

export default function App() {
  const [pantalla, setPantalla] = useState(1);

  if (pantalla === 1) return <Screen1 siguiente={() => setPantalla(2)} />;
  return <Screen2 />;
}