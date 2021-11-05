import React, { useState, createContext } from "react";

const ConnectModalContext = createContext(undefined);
const ConnectModalDispatchContext = createContext(undefined);

// const GlobalProvider = React.createContext();
const ConnectModalProvider = ({children}) =>  {
    const [ConnectModal, setConnectModal] = useState(false);
    return(
        <ConnectModalContext.Provider value={ConnectModal}>
            <ConnectModalDispatchContext.Provider value={setConnectModal}>
                {children}
            </ConnectModalDispatchContext.Provider>
        </ConnectModalContext.Provider>
    )
  }
  
  export { ConnectModalProvider,ConnectModalContext, ConnectModalDispatchContext };
