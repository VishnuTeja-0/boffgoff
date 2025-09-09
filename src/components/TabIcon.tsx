import React from 'react';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { View, Text } from 'react-native';

interface TabIconProps {
 iconTitle: "home" | "head-heart" | "fire" | "account";
 tabTitle: string;
 isFocused: boolean;
}

export default function TabIcon ({iconTitle, tabTitle, isFocused}: TabIconProps) {
  return (
    <View 
      className={
        `flex flex-1 flex-nowrap w-full items-center rounded-md
        ${isFocused ? "bg-dark-bg-light" : "bg-transparent"}`}>
        <MaterialCommunityIcons 
          name={iconTitle} 
          size={18} 
          className={"text-accent-primary p-0"}/>
        <Text className={isFocused ? "text-accent-primary" : "text-dark-text-muted"} 
            style={{fontSize: 12, flexWrap: "nowrap"}}>{tabTitle}</Text>
    </View>
  );
};