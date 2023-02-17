import React from 'react';

import {useColorScheme, SafeAreaView, ScrollView} from 'react-native';
import ActionCard from './components/ActionCard';
import ContactList from './components/ContactList';
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
        <ActionCard />
        <ContactList />
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
