import React from "react";
import { Dimensions, View, StyleSheet } from "react-native";
import { Appbar, Card, Text } from "react-native-paper";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";
import { PanGestureHandler } from "react-native-gesture-handler";

const { width } = Dimensions.get("window");

type TodoItem = {
  title: string;
  daysLeft: number;      // controls card height
  progress: number;      // 0–1
};

type PageData = {
  name: string;
  todos: TodoItem[];
};

export default function SwipeablePages({ pages }: { pages: PageData[] }) {
  const translateX = useSharedValue(0);
  const maxIndex = pages.length - 1;

  const onGesture = (event: any) => {
    translateX.value = event.translationX - currentIndex.value * width;
  };

  const currentIndex = useSharedValue(0);

  const onEnd = (event: any) => {
    const velocity = event.velocityX;

    if (velocity < -300 && currentIndex.value < maxIndex) {
      currentIndex.value += 1;
    } else if (velocity > 300 && currentIndex.value > 0) {
      currentIndex.value -= 1;
    }

    translateX.value = withSpring(-currentIndex.value * width);
  };

  return (
    <PanGestureHandler onGestureEvent={onGesture} onEnded={onEnd}>
      <Animated.View style={styles.container}>
        {pages.map((page, idx) => {
          const style = useAnimatedStyle(() => ({
            transform: [{ translateX: translateX.value + idx * width }],
          }));

          return (
            <Animated.View key={idx} style={[styles.page, style]}>
              <Appbar.Header>
                <Appbar.Content title={page.name} />
              </Appbar.Header>

              <View style={styles.pageBody}>
                {page.todos.map((todo, i) => {
                  const cardHeight = 80 + todo.daysLeft * 5 - todo.progress * 50;

                  return (
                    <Card key={i} style={[styles.card, { height: cardHeight }]}>
                      <Card.Content>
                        <Text variant="titleMedium">{todo.title}</Text>
                        <Text>Days Left: {todo.daysLeft}</Text>
                        <Text>Progress: {(todo.progress * 100).toFixed(0)}%</Text>
                      </Card.Content>
                    </Card>
                  );
                })}
              </View>
            </Animated.View>
          );
        })}
      </Animated.View>
    </PanGestureHandler>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    flex: 1,
  },
  page: {
    width,
    flex: 1,
  },
  pageBody: {
    padding: 16,
    gap: 12,
  },
  card: {
    width: "100%",
  },
});