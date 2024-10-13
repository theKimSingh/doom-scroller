import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform, Alert, TouchableOpacity, Text } from 'react-native';
import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import VideoScreen from './video';
import VideoScreens from './videos';

export default function TabTwoScreen() {
  const classes = ["cse331", "cse446"]
  const link = 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
  const links = ['https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4','https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4','https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4']
  
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={<Image
        source={require('@/assets/images/lecture.jpg')}
        style={styles.reactLogo}
      />}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Explore</ThemedText>
      </ThemedView>
      <ThemedText>Come checkout some of your courses:</ThemedText>
      {classes.map((item, index) => (
        <TouchableOpacity
          key={index} // Always provide a unique key for list items
          onPress={() => VideoScreens(link)}
          style={styles.reactButton}
        >
          <Text style={styles.buttonText}>{item}</Text>
        </TouchableOpacity>
      ))}
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },reactLogo: {
    height: '100%',
    width: '100%',
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  reactButton: {
    width: '100%',
    position: 'relative',
    borderRadius: 10,
    backgroundColor: '#000',
    marginTop: "5%",
    height: 50, // Set a specific height instead of 100%
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
  },
});
