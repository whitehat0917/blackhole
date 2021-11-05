import React from 'react'
import { createWeb3ReactRoot, Web3ReactProvider } from '@web3-react/core'
import {ConnectModalProvider} from './ContextProviders/ConnectModalProvider'
import ThemeProvider from './Theme'

import getLibrary from './serviceUtil/getLibrary'

const Web3ProviderNetwork = createWeb3ReactRoot('NETWORK')

const Providers = ({children}) =>{
    return (
        <ConnectModalProvider>
            <Web3ReactProvider getLibrary={getLibrary}>
                <Web3ProviderNetwork getLibrary={getLibrary}>
                    <ThemeProvider>
                        {children}
                    </ThemeProvider>
                </Web3ProviderNetwork>
            </Web3ReactProvider>
        </ConnectModalProvider>
    )
}
export default Providers