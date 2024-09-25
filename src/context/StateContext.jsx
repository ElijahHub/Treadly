import { useReducer, createContext } from "react";

export const StateContext = createContext();

const initialState = {
  cartItems: [],
  wishlist: [],
  productInView: {},
};

const addToCart = (state, action) => {
  const existingItem = state.cartItems.find(
    (item) => item.id === action.payload.id
  );

  if (existingItem) {
    return {
      ...state,
      cartItems: state.cartItems.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ),
    };
  } else {
    return {
      ...state,
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
    default:
      return state;
  }
};

export const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(stateReducer, initialState);
  return (
    <StateContext.Provider
      value={{
        dispatch,
        cartItems: state.cartItems,
        wishlist: state.wishlist,
        productInView: state.productInView,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};
