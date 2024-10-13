import React from 'react';
import { FlatList, View, StyleSheet, Dimensions } from 'react-native';
import { WebView } from 'react-native-webview';

const { width } = Dimensions.get('window');

const videos = [
  { id: '1', uri: 'https://www.youtube.com/embed/dQw4w9WgXcQ' }, // Example YouTube video URL
  { id: '2', uri: 'https://www.youtube.com/embed/VIDEO_ID_2' }, // Replace with actual video IDs
  { id: '3', uri: 'https://www.youtube.com/embed/VIDEO_ID_3' },
  // Add more YouTube video IDs
];

const VideoScroller = () => {
  const renderItem = ({ item }: { item: { id: string; uri: string } }) => (
    <View style={styles.videoContainer}>
      <WebView
        source={{ uri: item.uri }}
        style={styles.video}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        allowsInlineMediaPlayback={true}
        mediaPlaybackRequiresUserAction={false} // Allow autoplay
      />
    </View>
  );

  return (
    <FlatList
      data={videos}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      horizontal // Enable horizontal scrolling
      pagingEnabled // Snap to each video
      showsHorizontalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  videoContainer: {
    width: width, // Full screen width for each video
    height: 250, // Adjust the height as needed
  },
  video: {
    width: '100%',
    height: '100%',
  },
});

export default VideoScroller;
