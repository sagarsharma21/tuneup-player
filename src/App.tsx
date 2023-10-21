/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
 import { useState, useEffect } from 'react';

import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {setupPlayer, addTrack} from "../musicPlayerServices";
import MusicPlayer from './screen/MusicPlayer';



function App(): JSX.Element {
  
  const [isPlayerReady, setIsPlayerReady] = useState(false);

  async function setup() {
    let isSetup = await setupPlayer();

    if (isSetup) {
      await addTrack()
    }

    setIsPlayerReady(isSetup)
  }
  
  useEffect(() => {
   setup()
  }, [])
  
  if (!isPlayerReady) {
    return(
      <SafeAreaView>
        <ActivityIndicator/>
      </SafeAreaView>
    )
  }

  return (

    <View style={styles.container}>
      <StatusBar barStyle={"light-content"}></StatusBar>
      <MusicPlayer/>
        <View><Text style={styles.footer}>Made with 🤍</Text></View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  
  // sectionContainer: {
  //   marginTop: 32,
  //   paddingHorizontal: 24,
  // },
  // sectionTitle: {
  //   fontSize: 24,
  //   fontWeight: '600',
  // },
  // sectionDescription: {
  //   marginTop: 8,
  //   fontSize: 18,
  //   fontWeight: '400',
  // },
  // highlight: {
  //   fontWeight: '700',
  // },
  container: {
    flex:1,
  },
  footer:{
    textAlign:'center'
  }

});

export default App;
