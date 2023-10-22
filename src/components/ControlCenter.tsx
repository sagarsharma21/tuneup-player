import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import TrackPlayer, { State, usePlaybackState } from 'react-native-track-player';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { playbackService } from '../../musicPlayerServices';
 const ControlCenter = () => {

    const playBackState = usePlaybackState();
    //Next button
    const skipToNext = async () => {
        await TrackPlayer.skipToNext();
    }
    //Prev button
    const skipToPrev = async () => {
        await TrackPlayer.skipToPrevious();
    }

    const togglePlayback = async (playback: State) => {
        const currentTrack = await TrackPlayer.getCurrentTrack();
        if (currentTrack !== null) {
            if(playback === State.Paused || playback === State.Ready){
                await TrackPlayer.play();
            }
            else{
                await TrackPlayer.pause();
            }
        }
    }

  return (
    <View style={styles.container}>
       <Pressable onPress={skipToPrev}>
            <Icon style={styles.icon} name="skip-previous" size={40}></Icon>
       </Pressable>

       <Pressable onPress={() =>  togglePlayback(playBackState)}>
            <Icon style={styles.icon} name={playBackState === State.Playing ? "pause" : "play-arrow"} size={70}></Icon>
       </Pressable>
       
       <Pressable onPress={skipToNext}>
            <Icon style={styles.icon} name="skip-next" size={40}></Icon>
       </Pressable>
    </View> 
  )
}

const styles = StyleSheet.create({
    container: {
        marginBottom:56,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    icon: {
        color: '#fff',

    }
})
export default ControlCenter;