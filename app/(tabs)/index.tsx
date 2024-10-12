import React, { useState, useRef } from 'react';
import { View, FlatList, Dimensions, StyleSheet } from 'react-native';
import Video from 'react-native-video';

const { height } = Dimensions.get('window');

const videos = [
  { id: '1', url: 'https://www.w3schools.com/html/mov_bbb.mp4' },
  { id: '2', url: 'https://www.w3schools.com/html/movie.mp4' },
  { id: '3', url: 'https://www.w3schools.com/html/mov_bbb.mp4' },
];

const VideoItem = ({ url, isActive }) => {
  const videoRef = useRef(null);

  return (
    <View style={styles.videoContainer}>
      <Video
        ref={videoRef}
        source={{ uri: url }}
        style={styles.backgroundVideo}
        resizeMode="cover"
        repeat
        paused={!isActive}
        onError={(e) => console.log('Video error:', e)}
      />
    </View>
  );
};

const VideoScroller = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const onViewableItemsChanged = useRef(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setActiveIndex(viewableItems[0].index);
    }
  });

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 80, // Video is considered "viewable" if 80% is visible
  });

  return (
    <FlatList
      data={videos}
      renderItem={({ item, index }) => (
        <VideoItem url={item.url} isActive={index === activeIndex} />
      )}
      keyExtractor={(item) => item.id}
      pagingEnabled
      showsVerticalScrollIndicator={false}
      onViewableItemsChanged={onViewableItemsChanged.current}
      viewabilityConfig={viewabilityConfig.current}
    />
  );
};

const styles = StyleSheet.create({
  videoContainer: {
    height: height,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundVideo: {
    height: '100%',
    width: '100%',
  },
});

export default VideoScroller;