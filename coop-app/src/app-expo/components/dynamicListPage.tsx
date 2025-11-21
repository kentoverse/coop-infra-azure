import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { Card, Text, ProgressBar } from "react-native-paper";
import { TodoList} from '@/models/todoList';

interface Props {
    list: TodoList;
}

export default function DynamicListPage({ list }: Props) {
    return (
        <ScrollView style={styles.container}>
            <Text variant="titleLarge" style={styles.title}>
                {list.name}
            </Text>

            {list.items?.map((item) => (
                <Card key={item.id} style={styles.card}>
                    <Card.Title title={item.name} />
                    <Card.Content>
                        <ProgressBar progress={item.progress || 0} />
                        <Text>{item?.dueInDays}</Text>
                    </Card.Content>
                </Card>
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: { padding: 16 },
    title: { marginBottom: 16 },
    card: { marginBottom: 12 },
});