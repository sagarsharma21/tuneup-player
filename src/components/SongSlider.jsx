import React from "react";
//import { Progress } from "react-native-track-player";
import Slider from "@react-native-community/slider";
import {useProgress} from 'react-native-track-player';

const SongSlider =  () => {
    const {position, duration} = useProgress();

    return (
    <View>
        <Slider
        value={position}
        minimumValue={0}
        maximumValue={duration}
        thumbTintColor="#FFF"
        maximumTrackTintColor="#FFF"
        style={StyleSheet.sliderContainer}
        >
        </Slider>
        <View style={styles.timeContainer}>
            <Text style={styles.time}>
                {new Date(position*1000).toISOString().substring(15,19)}
            </Text>
            <Text style={styles.time}>
                {new Date((duration-position)*1000).toISOString.substring(15,19)}
            </Text>
        </View>
    </View>>
  )
}

const styles = StyleSheet.create({
    sliderContainer:{

    },
    timeContainer
})

export default SongSlider;      