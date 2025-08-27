import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { Product } from '../App';

interface WishlistState {
  wishlistItems: Product[];
}

type WishlistAction =
  | { type: 'ADD_TO_WISHLIST'; payload: Product }
  | { type: 'REMOVE_FROM_WISHLIST'; payload: number }
  | { type: 'CLEAR_WISHLIST' };

const WishlistContext = createContext<{
  wishlistItems: Product[];
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (id: number) => void;
  clearWishlist: () => void;
  isInWishlist: (id: number) => boolean;
} | undefined>(undefined);

const wishlistReducer = (state: WishlistState, action: WishlistAction): WishlistState => {
  switch (action.type) {
    case 'ADD_TO_WISHLIST':
      if (state.wishlistItems.some(item => item.id === action.payload.id)) {
        return state;
      }
      return { ...state, wishlistItems: [...state.wishlistItems, action.payload] };

    case 'REMOVE_FROM_WISHLIST':
      return {
        ...state,
        wishlistItems: state.wishlistItems.filter(item => item.id !== action.payload),
      };

    case 'CLEAR_WISHLIST':
      return { ...state, wishlistItems: [] };

    default:
      return state;
  }
};

export const WishlistProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(wishlistReducer, { wishlistItems: [] });

  const addToWishlist = (product: Product) => {
    dispatch({ type: 'ADD_TO_WISHLIST', payload: product });
  };

  const removeFromWishlist = (id: number) => {
    dispatch({ type: 'REMOVE_FROM_WISHLIST', payload: id });
  };

  const clearWishlist = () => {
    dispatch({ type: 'CLEAR_WISHLIST' });
  };

  const isInWishlist = (id: number) => {
    return state.wishlistItems.some(item => item.id === id);
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlistItems: state.wishlistItems,
        addToWishlist,
        removeFromWishlist,
        clearWishlist,
        isInWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (context === undefined) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
};