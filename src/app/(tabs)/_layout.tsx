import { Tabs } from "expo-router";
import TabIcon from "../../components/TabIcon";
import { View } from "react-native";

export default function Layout() {
  return (
    <Tabs
      screenOptions={{ 
        headerShown: false, 
        tabBarShowLabel: false,
        tabBarItemStyle: {
          width: "100%",
          height: "100%",
          justifyContent: "space-evenly",
          alignItems: "center",
          borderRadius: 6,
          padding: 0
        },
        tabBarActiveBackgroundColor: "hsl(0 0 20%)",
        tabBarStyle: {
          borderRadius: 10,
          width: '80%',
          marginHorizontal: 'auto',
          marginBottom: 10,
          backgroundColor: "hsl(0 0% 20%)",
          padding: 0
        }
      }}>
      <Tabs.Screen 
        name="index" 
        options={{ 
          title: "Home",
          tabBarIcon: ({focused}) => {
            return <TabIcon isFocused={focused} tabTitle="Home" iconTitle="home" />
          }
        }}/>
      <Tabs.Screen 
        name="thoughts" 
        options={{ 
          title: "Thoughts",
          tabBarIcon: ({focused}) => {
            return <TabIcon isFocused={focused} tabTitle="Thoughts" iconTitle="head-heart" />
          }
        }} />
      <Tabs.Screen 
        name="stats" 
        options={{
          title: "Stats",
          tabBarIcon: ({focused}) => {
            return <TabIcon isFocused={focused} tabTitle="Stats" iconTitle="fire" />
          }
        }} />
        <Tabs.Screen 
        name="profile" 
        options={{
          title: "Profile",
          tabBarIcon: ({focused}) => {
            return <TabIcon isFocused={focused} tabTitle="Profile" iconTitle="account" />
          }
        }} />
    </Tabs>
  );
}