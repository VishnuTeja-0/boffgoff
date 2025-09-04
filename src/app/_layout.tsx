import {useFonts} from 'expo-font';
import { Stack } from "expo-router";
import './globals.css';

export default function Layout() {
  // useFonts({
  //   'FontAwesome' : [require('./assets/fonts/fontawesome.ttf', Ionicons.font)]
  // });

  return (
    <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack> 
  );
}