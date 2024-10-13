import { createStackNavigator } from '@react-navigation/stack';
import TabTwoScreen from './TabTwoScreen';
import VideoScreens from './videos';
import VideoScreen from './video';
import QuizPage from './quiz';
import HomeScreen from './index';



const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="TabTwo" component={TabTwoScreen} />
        <Stack.Screen name="VideoScreens" component={VideoScreens} />
        <Stack.Screen name="VideoScreen" component={VideoScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="QuizPage" component={QuizPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}