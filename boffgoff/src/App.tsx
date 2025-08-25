import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { Platform, StyleSheet, Text, View, Alert } from 'react-native';
import * as Notifications from 'expo-notifications';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

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
        <View style={styles.container}>
          <Text>Open up App.tsx to start working on your app!</Text>
          <StatusBar style="auto" />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
    color: '#ddd',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
