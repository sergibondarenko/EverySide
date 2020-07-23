import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { getNews } from './src/news';
import { Article } from './src/pages';
import { ARTICLES } from './src/utils/articles';

export default function App() {
  const [articles, setArticles] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [error, setError] = useState(null);

  async function fetchNews() {
    setError(null);
    setIsRefreshing(true);

    try {
      // const articles = await getNews();
      const articles = ARTICLES;

      setArticles(articles);
    } catch (error) {
      console.error('App, fetchNews', error);
      setError(error);
    }

    setIsRefreshing(false);
  }

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <View style={styles.container}>
      <Text>EverySide</Text>
      <StatusBar style="auto" />
      <FlatList
        data={articles}
        renderItem={({ item }) => <Article article={item} />}
        keyExtractor={item => item.url}
        refreshing={isRefreshing}
        onRefresh={fetchNews}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
