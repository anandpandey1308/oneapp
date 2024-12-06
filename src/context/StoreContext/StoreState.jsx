import { useCallback, useContext, useReducer } from "react";
import { StoreContext } from "./StoreContext.jsx"
import { reducer } from "./StoreReducer.jsx";
import { SET_USER, SET_SOCIALS, SET_HEADER, SET_LINKS } from "./constants.js";

const initialState = {
    user: {
    username: "Manish",
        tagline: "manish is here",
    image: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People/Astronaut.png"
    },
    socials: [
      { id: "1", name: "Instagram", enabled: true, value: "test user ig" },
      { id: "2", name: "Facebook", enabled: false, value: "test user facebook" },
      { id: "3", name: "Email", enabled: true, value: "test user email" },
      { id: "4", name: "Youtube", enabled: false, value: "test user youtube" },
    ],
    header: [],
    links: [],
}

export const StoreProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const updateState = useCallback((type, payload) => {
        dispatch({ type, payload });
    }, []);

    return <StoreContext.Provider value={{
        user: state.user,
        socials: state.socials,
        header: state.header,
        links: state.links,
        setUser: (data) => updateState(SET_USER, data),
        setSocials: (data) => updateState(SET_SOCIALS, data),
        setHeader: (data) => updateState(SET_HEADER, data),
        setLinks: (data) => updateState(SET_LINKS, data),
    }}>
        {children}
    </StoreContext.Provider>
}


export const useStore = () => {
    const context = useContext(StoreContext);
    if (!context) {
      throw new Error('useStore must be used within a StoreProvider');
    }
    return context;
  };