import { useVideoPlayer, VideoView } from 'expo-video';
import { useEffect, useRef } from 'react';
import { StyleSheet, View } from 'react-native';

export default function VideoScreens(videoSource: string) {
  const ref = useRef(null);
  const player = useVideoPlayer(videoSource, player => {
    player.loop = true;
    player.play();
  });


  return (
    <View style={styles.contentContainer}>
      <VideoView
        ref={ref}
        style={styles.video}
        player={player}
        allowsFullscreen
        allowsPictureInPicture
      />
    </View>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  video: {
    width: 1080,   // Set the width to 1080px
    height: 1920,  // Set the height to 1920px (portrait mode)
    aspectRatio: 9 / 16,  // Keep the aspect ratio for portrait mode
    overflow: 'hidden',   // This ensures that any excess part of the video is cropped
  },
});