import React, { useRef, useContext, useState } from "react";
import { View, StyleSheet, Text, Platform } from "react-native";
import { Appbar } from "react-native-paper";
import { TodoContext } from "@/components/todoContext";
import DynamicListPage from "@/components/dynamicListPage";


let PagerView: any;

if (Platform.OS !== 'web') {
  PagerView = require('react-native-paper').default;
}


export default function ProfileLayout() {
  const pagerRef = useRef<typeof PagerView>(null);
  const { state } = useContext(TodoContext);

  const lists = state.lists || [];
  const [pageIndex, setPageIndex] = useState(0);

  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.Content title={lists[pageIndex]?.name || "Profile"} />
      </Appbar.Header>

      {Platform.OS !== 'web' &&

        <PagerView
          style={styles.pager}
          initialPage={0}
          ref={pagerRef}
          onPageSelected={(e: any) => setPageIndex(e.nativeEvent.position)}
        >
          {lists.map((list) => (
            <View key={list.id}>
              <Text>{list.name}</Text>
              <DynamicListPage list={list} />
            </View>
          ))}
        </PagerView>}


      <Appbar.Action icon="chevron-left" onPress={() => pagerRef.current?.setPage(pageIndex - 1)} />
      <Appbar.Action icon="chevron-right" onPress={() => pagerRef.current?.setPage(pageIndex + 1)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  pager: { flex: 1 },
});