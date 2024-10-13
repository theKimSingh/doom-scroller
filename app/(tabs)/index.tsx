import { Image, StyleSheet, Platform, Button, Alert,TouchableOpacity, Text } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';


export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/education.jpg')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome to Doom Learn!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 1: Try it 📲</ThemedText>
        <ThemedText>
          Click on <ThemedText type="defaultSemiBold">Explore</ThemedText> to load
          some lectures, and explore our app.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 2: Answer ✅</ThemedText>
        <ThemedText>
          Answer the our handcrafted <ThemedText type="defaultSemiBold">quiz sections </ThemedText>
          that come after the videos.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 3: Use the knowledge 🧠</ThemedText>
        <ThemedText>
          Begin acing your tests 📝, getting a girlfriend 👩‍❤️‍👨, building muscle 🏋️, and do much more!
        </ThemedText>
        <TouchableOpacity
          onPress={() => Alert.alert('Simple Button pressed')}
          style={styles.reactButton}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
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
