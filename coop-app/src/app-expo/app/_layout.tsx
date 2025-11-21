// src/app-expo/app/_layout.tsx
import React, { FC, ReactElement, useRef, useState, useContext } from 'react';
import { View, StyleSheet, Dimensions, Animated, ScrollView } from 'react-native';
import { Appbar } from 'react-native-paper';
import { TodoList, TodoItem } from '@/models';
import { TodoContext } from '@/components/todoContext';
import { CardScreen } from '@/components/cardScreen';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

const Layout: FC = (): ReactElement => {
    const pagerRef = useRef<ScrollView>(null);
    const [pageIndex, setPageIndex] = useState(0);
    const appContext = useContext(TodoContext)!; // non-null assertion
    const todoLists: TodoList[] = appContext.state.lists || []; // fallback to empty arraylways TodoList[]

    const goToPage = (index: number) => {
        if (index < 0 || index >= todoLists.length) return;
        pagerRef.current?.scrollTo({ x: index * SCREEN_WIDTH, animated: true });
        setPageIndex(index);
    };

    return (
        <View style={styles.container}>
            <Appbar.Header elevated>
                <Appbar.Action icon="chevron-left" onPress={() => goToPage(pageIndex - 1)} />
                <Appbar.Content title={`Profile: List ${pageIndex + 1}`} />
                <Appbar.Action icon="chevron-right" onPress={() => goToPage(pageIndex + 1)} />
            </Appbar.Header>

            <ScrollView
                horizontal
                pagingEnabled
                ref={pagerRef}
                showsHorizontalScrollIndicator={false}
                onMomentumScrollEnd={e => {
                    const newIndex = Math.round(e.nativeEvent.contentOffset.x / SCREEN_WIDTH);
                    setPageIndex(newIndex);
                }}
            >
                {todoLists.map(list => (
                    <View key={list.id} style={{ width: SCREEN_WIDTH, padding: 16 }}>
                        {list?.items?.map((item: TodoItem) => (
                            <CardScreen
                                key={item.id}
                                title={item.name}
                                dueInDays={item.dueInDays || 0}  // Default to 0 if undefined, -1 if no due date
                                progress={item.progress || 0}
                            />
                        ))}
                    </View>
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#292929', // dark background
    },
    page: {
        width: SCREEN_WIDTH,
        padding: 16,
    },
});

export default Layout;