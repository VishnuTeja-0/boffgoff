import { useEffect } from 'react';
import { Platform, Text, View, Alert } from 'react-native';
import * as Notifications from 'expo-notifications';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Link } from 'expo-router';
import '../globals.css';

export default function App() {

  useEffect(() => {
    const requestPermissions = async () => {
      if (Platform.OS === 'ios') {
        const {status} = await Notifications.requestPermissionsAsync();
        if(status !== 'granted') {
          Alert.alert('Please enable notifications my love 🥺');
          }
        }
      };
      requestPermissions();
  }, []);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{flex: 1}}>
        <View className="flex-1 items-center justify-center bg-dark-bg-dark">
          <Text className="text-accent-primary">Open up App.tsx to start working on youdr app!</Text>
          <Link href="/moments" push>Go</Link>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
