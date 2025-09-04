import React from 'react';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { View, Text } from 'react-native';

interface TabIconProps {
 iconTitle: string;
 tabTitle: string;
 isFocused: boolean;
}

export default function TabIcon ({iconTitle,tabTitle, isFocused}: TabIconProps) {
  return (
    <View className='bg-accent-primary' style={{flexDirection: 'row'}}>
        <FontAwesome5 name={iconTitle} size={12} className={"text-accent-primary"}/>
        <Text className={isFocused ?
            "bg-accent-primary text-dark-text-primary" : 
            "bg-dark-bg-medium text-dark-text-muted"} 
            style={{fontSize: 12, overflow: "hidden", flexWrap: "nowrap"}}>{tabTitle}</Text>
    </View>
  );
};