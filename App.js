import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import Home from './screens/Home';
import Details from './screens/Details';
import TabView from './tab/Tab';
import {ContextProvider} from './context/context.js';
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
import ProductByMedCategory from './screens/ProductByMedCategory';
import PlaceOrder from './screens/PlaceOrder';
import Stripe from './screens/Stripe';
import Bkash from './screens/Bkash';
import Nagad from './screens/Nagad';
import Account from './screens/Account/Account.js';
import PersonalInformation from './screens/Account/PersonalInformation';
import ManageAddress from './screens/Account/ManageAddress';
import Settings from './screens/Account/Settings';
import Coupons from './screens/Coupons';
import Favorites from './screens/Favorites';
import OrderHistory from './screens/OrderHistory';
import PaymentHistory from './screens/PaymentHistory';
import EarnReward from './screens/EarnReward';
import FileComplaint from './screens/FileComplaint';
import OrderDetails from './screens/OrderDetails';
import store from './redux/store';
import {Provider} from 'react-redux';
const queryClient = new QueryClient();
const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <ContextProvider>
        <QueryClientProvider client={queryClient}>
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
              <Stack.Screen name="Coupons" component={Coupons} />
              <Stack.Screen name="Favorites" component={Favorites} />
              <Stack.Screen name="OrderHistory" component={OrderHistory} />
              <Stack.Screen name="OrderDetails" component={OrderDetails} />
              <Stack.Screen name="PaymentHistory" component={PaymentHistory} />
              <Stack.Screen name="EarnReward" component={EarnReward} />
              <Stack.Screen name="FileComplaint" component={FileComplaint} />
              <Stack.Screen name="PharmacyResult" component={PharmacyResult} />
              <Stack.Screen name="GroceryResult" component={GroceryResult} />
              <Stack.Screen name="PlaceOrder" component={PlaceOrder} />
              {/* payment page */}
              <Stack.Screen name="Stripe" component={Stripe} />
              <Stack.Screen name="Bkash" component={Bkash} />
              <Stack.Screen name="Nagad" component={Nagad} />
              {/* user Account */}
              <Stack.Screen name="Account" component={Account} />
              <Stack.Screen
                name="PersonalInformation"
                component={PersonalInformation}
              />
              <Stack.Screen name="ManageAddress" component={ManageAddress} />
              <Stack.Screen name="Settings" component={Settings} />
            </Stack.Navigator>
          </NavigationContainer>
        </QueryClientProvider>
      </ContextProvider>
    </Provider>
  );
};

export default App;
