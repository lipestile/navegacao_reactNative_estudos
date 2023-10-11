import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import Router from './src/routes/Router';
import DrawerRouter from './src/routes/DrawerRouter';
import Routes from './src/routes/Routes';

export default function App() {
  return (
   <PaperProvider>
     <Router></Router>
     {/* <DrawerRouter></DrawerRouter> */}
     {/* <Routes></Routes> */}

   </PaperProvider>
  );
}

const styles = StyleSheet.create({
});
