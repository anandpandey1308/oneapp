// MyStorePage/context/StoreContext.jsx
import React, { createContext, useContext, useReducer, useEffect } from 'react';

const StoreContext = createContext();

const initialState = {
  headers: [],
  profile: {
    name: '',
    image: '',
    contact: {
      email: '',
      phone: ''
    }
  },
  isLoading: false
};

function storeReducer(state, action) {
  switch (action.type) {
    case 'ADD_HEADER':
      return {
        ...state,
        headers: [action.payload, ...state.headers]
      };
    case 'UPDATE_HEADER':
      return {
        ...state,
        headers: state.headers.map(header => 
          header.id === action.payload.id ? action.payload : header
        )
      };
    case 'DELETE_HEADER':
      return {
        ...state,
        headers: state.headers.filter(header => header.id !== action.payload)
      };
    case 'REORDER_HEADERS':
      return {
        ...state,
        headers: action.payload
      };
    case 'SET_LOADING':
      return {
        ...state,
        isLoading: action.payload
      };
    case 'SET_STATE':
      return {
        ...state,
        ...action.payload
      };
      case 'UPDATE_PROFILE':
        return {
          ...state,
          profile: {
            ...state.profile,
            ...action.payload
          }
        };
    default:
      return state;
  }
  
}

export function StoreProvider({ children }) {
  const [state, dispatch] = useReducer(storeReducer, initialState);

  useEffect(() => {
    const savedState = localStorage.getItem('storeState');
    if (savedState) {
      dispatch({ 
        type: 'SET_STATE', 
        payload: JSON.parse(savedState)
      });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('storeState', JSON.stringify(state));
  }, [state]);

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
}

export function useStore() {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error('useStore must be used within a StoreProvider');
  }
  return context;
}