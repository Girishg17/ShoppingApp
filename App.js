
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Products from './Views/Products';
import Cart from './Views/Cart';
import store from './Redux/store';
import { Provider } from 'react-redux';
import { enableScreens } from 'react-native-screens';

enableScreens(true);

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <Provider store={store}>
    
     <NavigationContainer>
      <Stack.Navigator initialRouteName='Products'>
        <Stack.Screen
          name='Products'
          component={Products}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name='Cart'
          component={Cart}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}

