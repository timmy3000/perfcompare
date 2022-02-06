import React from 'react'
import ReactDOM from 'react-dom'

import '@mozilla-protocol/core/protocol/css/protocol.css.map'
import '@mozilla-protocol/core/protocol/css/protocol.min.css'
import '@mozilla-protocol/core/protocol/css/protocol-components.css'


import App from './components/App'

import store from './app/store.js'
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()