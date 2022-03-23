import React, { useState } from 'react';
import {
    SafeAreaView,
    Text,
    TextInput,
    TouchableOpacity,
    ScrollView,
    FlatList
} from 'react-native';

import { styles } from './styles';
import { Button } from '../../components/Button';

interface TaskData {
    id: string;
    name: string;
}

export function Home() {
    const [newTask, setNewTask] = useState("");
    const [tasks, setTasks] = useState<TaskData[]>([]);

    function handleAddNewTask() {
        const data: TaskData = {
            id: String((new Date).getTime()),
            name: newTask
        };
        setTasks(oldState => [...oldState, data]);
    }

    function handleRemoveTask(id: string) {
        setTasks(oldState => oldState.filter(
            task => task.id != id
        ));
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>
                Olá, Angelo!
            </Text>
            <TextInput
                style={styles.input}
                placeholder="Digite a tarefa..."
                placeholderTextColor="#555"
                onChangeText={setNewTask}
            />

            <Button
                onPress={handleAddNewTask}
                activeOpacity={0.7}
                title="Adicionar tarefa"
            />

            {/* <TouchableOpacity  
                style={styles.button}
                activeOpacity={0.7}
                onPress={handleAddNewTask}
            >
            <Text style={styles.buttonText}>
                Adicionar
                </Text>
            </TouchableOpacity> */}

            <Text style={[styles.text, { marginTop: 20 }]}>
                Minhas Tarefas
            </Text>

            {/* <ScrollView>
            {
                tasks.map(task => (
                <TouchableOpacity 
                    style={styles.buttonTask}
                    key={task}
                >
                    <Text style={styles.textTask}>
                    {task}
                    </Text>
                    
                </TouchableOpacity>
                ))
            }
            </ScrollView> */}

            <FlatList
                data={tasks}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.buttonTask}
                        onPress={() => handleRemoveTask(item.id)}
                    >
                        <Text style={styles.textTask}>
                            {item.name}
                        </Text>

                    </TouchableOpacity>
                )}
            >

            </FlatList>

        </SafeAreaView>
    )
}