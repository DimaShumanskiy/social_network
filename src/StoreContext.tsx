import React from "react";
import {AppStateType, store} from "./redux/redux-store";

const StoreContext = React.createContext(store)

export type ProviderType = {
    store: AppStateType,
    children: React.ReactNode
}

export const Provider = (props: ProviderType) => {
    return (
        <StoreContext.Provider value={props.store}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContext;