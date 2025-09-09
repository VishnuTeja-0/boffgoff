import { Stack } from "expo-router";
import './globals.css';
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function Layout() {

  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1 bg-dark-bg-dark hello2">
        <Stack 
          screenOptions={{
            contentStyle: {
              backgroundColor: "hsl(0, 0%, 10%)"
            }
          }}>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack> 
      </SafeAreaView>
    </SafeAreaProvider>
  );
}