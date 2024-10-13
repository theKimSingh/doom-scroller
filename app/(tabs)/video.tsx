import { useVideoPlayer, VideoView } from 'expo-video';
import { useEffect, useRef, useState } from 'react';
import { PixelRatio, StyleSheet, View, Button, ScrollView } from 'react-native';



export default function VideoScreen(videoSources: Array<string>) {
  const ref = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0); // Track the current video index
  const player = useVideoPlayer(videoSources[currentIndex], player => {
    player.loop = true;
    player.play();
  });

  // Load the next video when scrolling down
  const handleScroll = (event: { nativeEvent: { layoutMeasurement: any; contentOffset: any; contentSize: any; }; }) => {
    const { layoutMeasurement, contentOffset, contentSize } = event.nativeEvent;
    const isCloseToBottom =
      layoutMeasurement.height + contentOffset.y >= contentSize.height - 20;

    if (isCloseToBottom) {
      // Check if there is a next video
      if (currentIndex < videoSources.length - 1) {
        setCurrentIndex(currentIndex + 1); // Load the next video
      }
    }
  };

  useEffect(() => {
    if (currentIndex < videoSources.length) {
      player.pause(); // Pause the current video
      player.replace({ uri: videoSources[currentIndex] }); // Set the new video source
      player.play(); // Play the new video
    }
  }, [currentIndex, player]); // Update the player when currentIndex changes

  // useEffect(() => {
  //   return () => {
  //     player.removeAllListeners(); // Clean up listeners when component unmounts
  //   };
  // }, [player]);

  return (
    <ScrollView
      contentContainerStyle={styles.scrollContent}
      onScroll={handleScroll}
      scrollEventThrottle={16} // Ensure onScroll is called frequently
    >
      <View style={styles.contentContainer}>
        <VideoView
          ref={ref}
          style={styles.video}
          player={player}
          allowsFullscreen
          allowsPictureInPicture
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  video: {
    width: 1080,   // Set the width to 1080px
    height: 1920,  // Set the height to 1920px (portrait mode)
    aspectRatio: 9 / 16,
    overflow: 'hidden',
  },
});
