import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { Product } from '../App';

interface CartItem extends Product {
  quantity: number;
  customizations?: {
    woodType: string;
    finish: string;
    size: string;
  };
}

interface CartState {
  cartItems: CartItem[];
}

type CartAction =
  | { type: 'ADD_TO_CART'; payload: CartItem }
  | { type: 'UPDATE_QUANTITY'; payload: { id: number; customizations?: any; quantity: number } }
  | { type: 'REMOVE_FROM_CART'; payload: { id: number; customizations?: any } }
  | { type: 'CLEAR_CART' };

const CartContext = createContext<{
  cartItems: CartItem[];
  addToCart: (product: CartItem) => void;
  updateQuantity: (id: number, customizations: any, quantity: number) => void;
  removeFromCart: (id: number, customizations?: any) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
  getTotalItems: () => number;
} | undefined>(undefined);

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingItemIndex = state.cartItems.findIndex(
        item => 
          item.id === action.payload.id && 
          JSON.stringify(item.customizations) === JSON.stringify(action.payload.customizations)
      );

      if (existingItemIndex > -1) {
        const updatedItems = [...state.cartItems];
        updatedItems[existingItemIndex].quantity += action.payload.quantity;
        return { ...state, cartItems: updatedItems };
      }

      return { ...state, cartItems: [...state.cartItems, action.payload] };

    case 'UPDATE_QUANTITY':
      return {
        ...state,
        cartItems: state.cartItems.map(item =>
          item.id === action.payload.id && 
          JSON.stringify(item.customizations) === JSON.stringify(action.payload.customizations)
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };

    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cartItems: state.cartItems.filter(
          item => !(
            item.id === action.payload.id && 
            JSON.stringify(item.customizations) === JSON.stringify(action.payload.customizations)
          )
        ),
      };

    case 'CLEAR_CART':
      return { ...state, cartItems: [] };

    default:
      return state;
  }
};

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, { cartItems: [] });

  const addToCart = (product: CartItem) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  const updateQuantity = (id: number, customizations: any, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, customizations, quantity } });
  };

  const removeFromCart = (id: number, customizations?: any) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: { id, customizations } });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const getTotalPrice = () => {
    return state.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const getTotalItems = () => {
    return state.cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems: state.cartItems,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        getTotalPrice,
        getTotalItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};