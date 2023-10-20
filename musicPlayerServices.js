//this is where all the magic happens
import TrackPlayer, { Event, RepeatMode } from "react-native-track-player";

import { playListData } from "./src/constants";

export async function setupPlayer(){
    let isSetup = false;
    try {
        await TrackPlayer.getCurrentTrack();
        isSetup = true;
    } catch (error) {
        await TrackPlayer.setupPlayer();
        isSetup = true;
    }
    finally{
        return isSetup;
    }
};

export async function addTrack(){
    await TrackPlayer.add(playListData);
    await TrackPlayer.setRepeatMode(RepeatMode.Queue);
}

export async function playbackService() {
    //Pause event listener
    TrackPlayer.addEventListener(Event.RemotePause, () => {
        TrackPlayer.pause();
    });

    //Play event listener
    TrackPlayer.addEventListener(Event.RemotePlay, () => {
        TrackPlayer.play();
    });

    //Stop event listener
    TrackPlayer.addEventListener(Event.RemoteStop, () => {
        TrackPlayer.reset();
    });

    //Next event listener
    TrackPlayer.addEventListener(Event.RemoteNext, () => {
        TrackPlayer.skipToNext();
    })
    
    //Prev event listener
    TrackPlayer.addEventListener((Event.RemotePrevious, () => {
        TrackPlayer.skipToPrevious();
    }))

}