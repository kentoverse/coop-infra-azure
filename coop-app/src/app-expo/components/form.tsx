import React, { useState } from "react";
import { View } from "react-native";
import { Button, TextInput } from "react-native-paper";


// -----------------------
// Simple Form Component
// -----------------------
export const BasicForm = ({
  onSubmit,
}: {
  onSubmit: (value: string) => void;
}) => {
  const [text, setText] = useState("");

  return (
    <View style={{ gap: 12 }}>
      <TextInput
        mode="outlined"
        label="Your Input"
        value={text}
        onChangeText={setText}
      />

      <Button
        mode="contained"
        onPress={() => {
          onSubmit(text);
        }}
      >
        Submit
      </Button>
    </View>
  );
};

// You can also export everything together (optional)
export default {
  BasicForm,
};