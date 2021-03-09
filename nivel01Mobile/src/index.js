import React, { useState, useEffect } from 'react';

// Dependencies
import { View, SafeAreaView, Text, ScrollView, FlatList, StyleSheet, StatusBar, TouchableOpacity } from 'react-native'

// API
import api from './services/api'

export default function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects([
      { title: 'Project 1' },
      { title: 'Project 2' },
      { title: 'Project 3' },
      { title: 'Project 4' },
      { title: 'Project 5' },
      { title: 'Project 6' },
      { title: 'Project 7' },
    ])
  }, [])

  return <>
    <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
    {/* <View style={styles.container}>
      {projects.map(project => <Text key={project.title} style={styles.title}>{project.title}</Text>)}
    </View> */}
    <SafeAreaView style={styles.container}>
      <FlatList
        data={projects}
        keyExtractor={project => project.title}
        renderItem={({ item: project }) => <Text key={project.title} style={styles.title}>{project.title}</Text>}
      />

      <TouchableOpacity activeOpacity={0.5} style={styles.button}>
        <Text>Adicionar projeto</Text>
      </TouchableOpacity>

    </SafeAreaView>
  </>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7159c1',
  },
  title: {
    color: '#FFF',
    fontSize: 32,
  },
  button: {
    backgroundColor: '#FFF',
    margin: 20,
    height: 50,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  }
});