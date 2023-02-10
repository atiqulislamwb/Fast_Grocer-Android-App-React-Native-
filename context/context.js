import React, {createContext, useEffect, useState} from 'react';
import {useQuery} from '@tanstack/react-query';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ToastAndroid} from 'react-native';

const CART_STORAGE_KEY = 'CART_ITEMS';

export const StateContext = createContext();

export const ContextProvider = ({children}) => {
  const [loading, setLoading] = useState(false);

  // const [products, setProducts] = useState([]);
  const [medProducts, setMedProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Fetch the cart items from storage on component mount
    const fetchCartItems = async () => {
      try {
        const items = await AsyncStorage.getItem(CART_STORAGE_KEY);
        setCartItems(JSON.parse(items) || []);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCartItems();
  }, []);

  const {
    data: medCategories,
    isLoading: isMedCategoriesLoading,
    isError: isMedCategoriesError,
    error: medCategoryError,
  } = useQuery({
    queryKey: ['med-categories'],
    queryFn: () =>
      fetch(`https://fgrocer.vercel.app/med-categories`).then(res =>
        res.json(),
      ),
    keepPreviousData: true,
  });

  const addItemToCart = async product => {
    try {
      const isExist = cartItems?.find(p => p._id === product._id);
      if (isExist) {
        const p = cartItems?.map(item =>
          item._id === product._id
            ? {...isExist, quantity: item.quantity + 1}
            : item,
        );
        setCartItems(p);
      } else {
        setCartItems([...cartItems, {...product, quantity: 1}]);
      }
      ToastAndroid.showWithGravity(
        'Item Added Successfully to cart',
        ToastAndroid.SHORT,
        ToastAndroid.CENTER,
      );
      // Save the updated cart to storage
      await AsyncStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
    } catch (error) {
      console.log(error);
    }
  };

  const removeItemFromCart = async itemId => {
    try {
      // Remove the item from the cart
      const updatedCartItems = cartItems?.filter(item => item._id !== itemId);
      setCartItems(updatedCartItems);
      // Save the updated cart to storage
      await AsyncStorage.setItem(
        CART_STORAGE_KEY,
        JSON.stringify(updatedCartItems),
      );
    } catch (error) {
      console.log(error);
    }
  };

  const handleDecrement = async itemId => {
    try {
      // Find the item in the cart
      const itemIndex = cartItems.findIndex(item => item._id === itemId);
      if (itemIndex !== -1) {
        // Decrement the item's quantity
        const updatedCartItems = [...cartItems];
        if (updatedCartItems[itemIndex].quantity > 1) {
          updatedCartItems[itemIndex].quantity -= 1;
        } else {
          updatedCartItems.splice(itemIndex, 1);
        }
        setCartItems(updatedCartItems);

        await AsyncStorage.setItem(
          CART_STORAGE_KEY,
          JSON.stringify(updatedCartItems),
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleIncrement = async itemId => {
    try {
      // Find the item in the cart
      const itemIndex = cartItems.findIndex(item => item._id === itemId);
      if (itemIndex !== -1) {
        // Increment the item's quantity
        const updatedCartItems = [...cartItems];
        updatedCartItems[itemIndex].quantity += 1;
        setCartItems(updatedCartItems);
        //Save the updated cart to storage
        await AsyncStorage.setItem(
          CART_STORAGE_KEY,
          JSON.stringify(updatedCartItems),
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0,
  );

  const totalQuantity = cartItems?.reduce(
    (total, item) => total + item.quantity,
    0,
  );

  return (
    <StateContext.Provider
      value={{
        loading,
        setLoading,
        medCategories,
        isMedCategoriesLoading,
        medProducts,
        cartItems,
        addItemToCart,
        removeItemFromCart,
        handleDecrement,
        handleIncrement,
        totalPrice,
        totalQuantity,
      }}>
      {children}
    </StateContext.Provider>
  );
};

// useEffect(() => {
//   setLoading(true);
//   fetch('https://fgrocer.vercel.app/products')
//     .then(response => response.json())
//     .then(json => {
//       if (json.status === true) {
//         setProducts(json?.data);
//         setLoading(false);
//       } else {
//       }
//     })
//     .catch(error => console.error(error));
// }, []);
// useEffect(() => {
//   setLoading(true);
//   fetch('https://fgrocer.vercel.app/med-products')
//     .then(response => response.json())
//     .then(json => {
//       if (json.status === true) {
//         setMedProducts(json?.data);
//         setLoading(false);
//       } else {
//       }
//     })
//     .catch(error => console.error(error));
// }, []);
