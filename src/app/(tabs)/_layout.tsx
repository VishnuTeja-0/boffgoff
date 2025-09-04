import { Tabs } from "expo-router";
import TabIcon from "../../components/TabIcon";


export default function Layout() {
  return (
    <Tabs 
      screenOptions={{ 
        headerShown: false, 
        tabBarShowLabel: false,
        tabBarItemStyle: {
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center"
        } }}>
      <Tabs.Screen 
        name="index" 
        options={{ 
          title: "Home",
          tabBarIcon: ({focused}) => {
            return <TabIcon isFocused={focused} tabTitle="Home" iconTitle="home" />
          }
        }}/>
      <Tabs.Screen name="moments" options={{ title: "Moments" }} />
      <Tabs.Screen name="stats" options={{title: "Stats"}} />
    </Tabs>
  );
}