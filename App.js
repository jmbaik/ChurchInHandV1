import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RecoilRoot} from 'recoil';
import {NavigationContainer} from '@react-navigation/native';
import BrainStorm from './src/brainstorm/BrainStorm';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import 'react-native-svg';
import FaithScreen from './src/brainstorm/screens/FaithScreen';

const Stack = createNativeStackNavigator();

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
      staleTime: 30000,
    },
  },
});

export default function App() {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{headerShown: false}}
            initialRouteName="Main">
            <Stack.Screen name="Main" component={BrainStorm} />
            <Stack.Screen name="Faith" component={FaithScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </QueryClientProvider>
    </RecoilRoot>
  );
}
