import { useReducer, createContext, useEffect } from "react";

export const StateContext = createContext();

const loadStoredData = () => {
  const storedData = localStorage.getItem("USER_DATA");
  return storedData ? JSON.parse(storedData) : {};
};

const updateStoredData = (data) => {
  localStorage.setItem("USER_DATA", JSON.stringify(data));
};

const initialState =
  Object.entries(loadStoredData()).length === 0
    ? {
        cartItems: [],
        wishlist: [],
        orderDetails: [],
        productInView: {},
      }
    : loadStoredData();

const addToCart = (state, action) => {
  const existingItem = state.cartItems.find(
    (item) => item.id === action.payload.id
  );

  if (existingItem) {
    return {
      ...state,
      orderDetails: [],
      cartItems: state.cartItems.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ),
    };
  } else {
    return {
      ...state,
      orderDetails: [],
      cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
    };
  }
};

const addToWishList = (state, action) => {
  const existingItem = state.wishlist.find(
    (item) => item.id === action.payload.id
  );

  if (existingItem) {
    return {
      ...state,
      wishlist: state.wishlist.filter((item) => item.id !== action.payload.id),
    };
  } else {
    return {
      ...state,
      wishlist: [...state.wishlist, { ...action.payload }],
    };
  }
};

const stateReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return addToCart(state, action);
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    case "UPDATE_QUANTITY":
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };
    case "ADD_TO_WISHLIST":
      return addToWishList(state, action);
    case "REMOVE_FROM_WISHLIST":
      return {
        ...state,
        wishlist: state.wishlist.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    case "SET_PRODUCT_IN_VIEW":
      return {
        ...state,
        productInView: { ...action.payload },
      };
    case "RESET_CART_ITEM":
      return {
        ...state,
        orderDetails: state.cartItems,
        cartItems: [],
      };
    default:
      return state;
  }
};

export const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(stateReducer, initialState);

  useEffect(() => {
    updateStoredData(state);
  }, [state]);

  return (
    <StateContext.Provider
      value={{
        dispatch,
        cartItems: state.cartItems,
        wishlist: state.wishlist,
        productInView: state.productInView,
        orderDetails: state.orderDetails,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};
