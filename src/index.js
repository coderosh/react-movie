import React from 'react'
import { render } from 'react-dom'

import 'regenerator-runtime/runtime'

import App from './App'

render(<App />, document.getElementById('app'))

if (module.hot) {
  module.hot.accept()
}
