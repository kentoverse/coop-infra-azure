import { View, StyleSheet, Dimensions, Platform } from "react-native";
import { useState } from "react";
import { Appbar, Card, Text } from "react-native-paper";
import { CardScreen } from "@/components/cardScreen";

let PagerView: any;

if (Platform.OS !== 'web') {
  PagerView = require('react-native-paper').default;
}


const SCREEN_WIDTH = Dimensions.get("window").width;

export default function ProfileScreen() {
  const [page, setPage] = useState(0);

  return (
    <View style={styles.root}>
      <Appbar.Header elevated>
        <Appbar.BackAction onPress={() => console.log("Back")} />
        <Appbar.Content title="My Profile" />
        <Appbar.Action icon="account-edit" onPress={() => {}} />
      </Appbar.Header>

{ Platform.OS !== 'web' && 

      <PagerView
        style={styles.pager}
        initialPage={0}
        onPageSelected={(e:any) => setPage(e.nativeEvent.position)}
      >
        <View key="page1" style={styles.page}>
          <Text variant="titleLarge" style={styles.sectionTitle}>Overview</Text>
            <CardScreen
        title="Finish AI Prototype"
        dueInDays={10}
        progress={0.35}   // 35%
        />
        
        </View>

        <View key="page2" style={styles.page}>
          <Text variant="titleLarge" style={styles.sectionTitle}>Activity</Text>
          <Card style={styles.card}>
            <Card.Title title="Last Login" />
            <Card.Content>
              <Text>Today</Text>
            </Card.Content>
          </Card>

          <Card style={styles.card}>
            <Card.Title title="Tasks Completed" />
            <Card.Content>
              <Text>18 tasks</Text>
            </Card.Content>
          </Card>
        </View>

        <View key="page3" style={styles.page}>
          <Text variant="titleLarge" style={styles.sectionTitle}>Settings</Text>
          <Card style={styles.card}>
            <Card.Title title="Security" />
            <Card.Content>
              <Text>Password, MFA, Sessions</Text>
            </Card.Content>
          </Card>

          <Card style={styles.card}>
            <Card.Title title="Notifications" />
            <Card.Content>
              <Text>App + Email</Text>
            </Card.Content>
          </Card>
        </View>
      </PagerView>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#fff",
  },
  pager: {
    flex: 1,
  },
  page: {
    flex: 1,
    padding: 16,
    width: SCREEN_WIDTH,
  },
  sectionTitle: {
    marginBottom: 12,
  },
  card: {
    width: "100%",
    marginBottom: 16,
  },
});