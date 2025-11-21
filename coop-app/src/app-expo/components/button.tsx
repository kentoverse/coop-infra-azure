import React, { useState } from "react";
import { View } from "react-native";
import { Button, TextInput } from "react-native-paper";

// -----------------------
// Simple Button Component
// -----------------------
export const PrimaryButton = ({
  label,
  onPress,
}: {
  label: string;
  onPress: () => void;
}) => {
  return (
    <Button mode="contained" onPress={onPress}>
      {label}
    </Button>
  );
};



export default {
  PrimaryButton
};