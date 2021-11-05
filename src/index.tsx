import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import { GlobalStyle } from './blackhole/Theme'
import App from './blackhole/App'
import Providers from './blackhole/Providers'

ReactDOM.render(
  <StrictMode>
     <Providers>
        <>
          <GlobalStyle />
          <App />
        </>
      </Providers>
  </StrictMode>,
  document.getElementById('root')
)
