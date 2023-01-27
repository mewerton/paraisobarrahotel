import React from 'react'
import ReactDOM from 'react-dom/client'
import { Details } from './Pages/Details'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from "./styles/global"

import { BrowserRouter } from "react-router-dom"

import theme from "./styles/theme"

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <Details />
    </ThemeProvider>
  </BrowserRouter>,
)
