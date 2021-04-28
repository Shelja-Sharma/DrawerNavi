/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import StackNavi from './src/Route/StackNavi';
import { Provider } from 'react-redux';
import store from './src/Redux/store';


const App = () => {
  return (
    <Provider store = {store}>
         <StackNavi />
    </Provider>
   
  )

};

export default App
