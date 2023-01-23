import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import 'react-native-gesture-handler';
import Home from './screens/Home';
import Details from './screens/Details';
import TabView from './tab/Tab';
import {ContextProvider, StateContext} from './context/context.js';
import Login from './screens/Login';
import AllStores from './screens/AllStores';
import Offers from './screens/Offers';
import DailyDeals from './screens/DailyDeals';
import Help from './screens/Help';
import Support from './screens/Support';
import Chat from './screens/Chat';
import SignUp from './screens/SignUp';
import EggClub from './screens/EggClub';
import Categories from './screens/Categories';
import ProductByCategory from './screens/ProductByCategory';
import MedCategories from './screens/MedCategories';
import PharmacyResult from './screens/PharmacyResult';
import GroceryResult from './screens/GroceryResult';
import ProductDetails from './screens/ProductDetails';

import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
const queryClient = new QueryClient();
// import {store} from './redux/store';
const Stack = createStackNavigator();
import {Provider} from 'react-redux';
import ProductByMedCategory from './screens/ProductByMedCategory';
import PlaceOrder from './screens/PlaceOrder';
import useAuth from './hooks/useAuth';
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{headerShown: false}}
            initialRouteName="TabView">
            <Stack.Screen name="TabView" component={TabView} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Details" component={Details} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="EggClub" component={EggClub} />
            <Stack.Screen name="AllStores" component={AllStores} />
            <Stack.Screen name="Categories" component={Categories} />
            <Stack.Screen name="MedCategories" component={MedCategories} />
            <Stack.Screen
              name="ProductByCategory"
              component={ProductByCategory}
            />
            <Stack.Screen
              name="ProductByMedCategory"
              component={ProductByMedCategory}
            />
            <Stack.Screen name="ProductDetails" component={ProductDetails} />
            <Stack.Screen name="Offers" component={Offers} />
            <Stack.Screen name="DailyDeals" component={DailyDeals} />
            <Stack.Screen name="Help" component={Help} />
            <Stack.Screen name="Support" component={Support} />
            <Stack.Screen name="Chat" component={Chat} />
            <Stack.Screen name="PharmacyResult" component={PharmacyResult} />
            <Stack.Screen name="GroceryResult" component={GroceryResult} />
            <Stack.Screen name="PlaceOrder" component={PlaceOrder} />
          </Stack.Navigator>
        </NavigationContainer>
      </ContextProvider>
    </QueryClientProvider>
  );
};

export default App;
