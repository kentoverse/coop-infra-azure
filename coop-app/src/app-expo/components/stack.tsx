// src/app-expo/components/Stack.tsx
import React, { ReactNode } from 'react';
import { View, ViewStyle, StyleProp } from 'react-native';

interface StackProps {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
  horizontal?: boolean; // row instead of column
  gap?: number;
  padding?: number;
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch';
  justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around';
}

export const Stack = ({
  children,
  style,
  horizontal = false,
  gap = 0,
  padding = 0,
  alignItems = 'flex-start',
  justifyContent = 'flex-start',
}: StackProps) => {
  // Wrap children with spacing if gap is set
  const childrenWithGap = React.Children.toArray(children).map((child, index) => (
    <View key={index} style={index < React.Children.count(children) - 1 ? { marginRight: horizontal ? gap : 0, marginBottom: !horizontal ? gap : 0 } : {}}>
      {child}
    </View>
  ));

  return (
    <View
      style={[
        {
          flexDirection: horizontal ? 'row' : 'column',
          padding,
          alignItems,
          justifyContent,
        },
        style,
      ]}
    >
      {childrenWithGap}
    </View>
  );
};