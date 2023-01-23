// import {useState, useEffect} from 'react';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import {ToastAndroid} from 'react-native';

// const CART_STORAGE_KEY = 'CART_ITEMS';

// const useCart = () => {

//   const addItemToCart = async product => {
//     try {
//       const isExist = cartItems?.find(p => p._id === product._id);
//       if (isExist) {
//         const p = cartItems?.map(item =>
//           item._id === product._id
//             ? {...isExist, quantity: item.quantity + 1}
//             : item,
//         );
//         setCartItems(p);
//       } else {
//         setCartItems([...cartItems, {...product, quantity: 1}]);
//       }
//       ToastAndroid.show('Item Added Successfully to cart', ToastAndroid.SHORT);
//       // Save the updated cart to storage
//       await AsyncStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const removeItemFromCart = async itemId => {
//     try {
//       // Remove the item from the cart
//       const updatedCartItems = cartItems.filter(item => item._id !== itemId);
//       setCartItems(updatedCartItems);
//       // Save the updated cart to storage
//       ToastAndroid.show(
//         'Item Deleted Successfully to cart',
//         ToastAndroid.SHORT,
//       );
//       await AsyncStorage.setItem(
//         CART_STORAGE_KEY,
//         JSON.stringify(updatedCartItems),
//       );
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const handleDecrement = async itemId => {
//     try {
//       // Find the item in the cart
//       const itemIndex = cartItems.findIndex(item => item._id === itemId);
//       if (itemIndex !== -1) {
//         // Decrement the item's quantity
//         const updatedCartItems = [...cartItems];
//         if (updatedCartItems[itemIndex].quantity > 1) {
//           updatedCartItems[itemIndex].quantity -= 1;
//         } else {
//           updatedCartItems.splice(itemIndex, 1);
//         }
//         setCartItems(updatedCartItems);

//         await AsyncStorage.setItem(
//           CART_STORAGE_KEY,
//           JSON.stringify(updatedCartItems),
//         );
//         ToastAndroid.show(
//           'Item decrement Successfully to cart',
//           ToastAndroid.SHORT,
//         );
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const handleIncrement = async itemId => {
//     try {
//       // Find the item in the cart
//       const itemIndex = cartItems.findIndex(item => item._id === itemId);
//       if (itemIndex !== -1) {
//         // Increment the item's quantity
//         const updatedCartItems = [...cartItems];
//         updatedCartItems[itemIndex].quantity += 1;
//         setCartItems(updatedCartItems);
//         //Save the updated cart to storage
//         await AsyncStorage.setItem(
//           CART_STORAGE_KEY,
//           JSON.stringify(updatedCartItems),
//         );
//         ToastAndroid.show(
//           'Item increment Successfully to cart',
//           ToastAndroid.SHORT,
//         );
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   const totalPrice = cartItems.reduce(
//     (acc, item) => acc + item.quantity * item.price,
//     0,
//   );

//   return {
//     cartItems,
//     addItemToCart,
//     removeItemFromCart,
//     handleDecrement,
//     handleIncrement,
//     totalPrice,
//   };
// };

// export default useCart;
