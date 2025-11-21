import React from "react";
import { View, ScrollView } from "react-native";
import { Appbar, Card, Text, ProgressBar } from "react-native-paper";
import dayjs from "dayjs";

interface CardScreenProps {
  title: string;
  dueInDays: number;      // ISO format
  progress: number;     // 0 to 1
}


export const CardScreen = (props: CardScreenProps) => {
  const { title, dueInDays, progress } = props;

  const today = dayjs();
  const due = dayjs(dueInDays);
  const totalDays = due.diff(today, "day");

  // Make at least 1 card if due date is today
  const cardCount = Math.max(totalDays, 1);

  return (
    <View style={{ flex: 1 }}>
      
      {/* AppBar */}
      <Appbar.Header>
        <Appbar.Content title="Your Progress" />
      </Appbar.Header>

      {/* Card List */}
      <ScrollView contentContainerStyle={{ padding: 16 }}>
        {[...Array(cardCount)].map((_, i) => {
          const daysLeft = cardCount - i; // descending
          
          // Core logic:
          // Card height grows as daysLeft approaches 1
          // But shrinks as progress goes up
          const baseHeight = 180;
          const growthFactor = 1 + (1 / daysLeft);
          const shrinkFactor = 1 - progress * 0.7; 
          
          const cardHeight = baseHeight * growthFactor * shrinkFactor;

          return (
            <Card key={i} style={{ marginBottom: 16, height: cardHeight }}>
              <Card.Content>
                <Text variant="titleMedium">{title}</Text>
                <Text variant="bodyMedium">
                  {daysLeft} day(s) remaining
                </Text>
                <ProgressBar progress={progress} style={{ marginTop: 8 }} />
              </Card.Content>
            </Card>
          );
        })}
      </ScrollView>
    </View>
  );
}


export default {
  CardScreen,
  
};