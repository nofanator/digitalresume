import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from "react-redux"
import { HashRouter  as Router, Route } from 'react-router-dom'

import store from "store"

import { Home, JobDetail } from "pages"

function App(props) {
    return (
        <Provider store={ store }>
            <Router>
                <div>
                    <Route exact path="/" component={ Home } />
                    <Route path="/job/:id" component={ JobDetail } />
                </div>
            </Router>
        </Provider>
    )
}

ReactDOM.render(<App />, document.getElementById('app'))