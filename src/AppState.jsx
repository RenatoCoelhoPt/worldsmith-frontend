import React from 'react'
import { useReducer } from 'react/cjs/react.production.min'

const initialState = {
    url: "http://worldsmith-api.herokuapp.com"
};

const reducer = (state, action) => {
    switch(action.type){
        default:
            return state
    };
};

const AppContext = React.createContext(null);

export const AppState = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return <AppContext.Provider value={{state, dispatch}}>{props.children}</AppContext.Provider>
};

export const useAppState = () => {
    return React.useContext(AppContext)
};

export