import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Counter from './components/Counter';
import { store } from './store/store';
import { Provider } from 'react-redux';
const App = () => {
  return (
     <Provider store={store}>
    <SafeAreaView>
      <StatusBar barStyle={'dark-content'} />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Counter />
      </ScrollView>
    </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({});

export default App;
