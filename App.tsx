import React from 'react';

import {
  Text,
  StyleSheet,
  useColorScheme,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import ElevatedCards from './components/ElevatedCards';
import FancyCard from './components/FancyCard';
import FlatCards from './components/FlatCards';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  console.log(isDarkMode);
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards />
        <ElevatedCards />
        <FancyCard />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
export default App;
