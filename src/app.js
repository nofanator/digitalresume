import React from 'react'
import ReactDOM from 'react-dom'
import ReactGA from 'react-ga';
import withTracker from 'hocs/withTracker'

import { Provider } from "react-redux"
import { HashRouter  as Router, Route } from 'react-router-dom'

import store from "store"

import { Home, JobDetail } from "pages"

function App(props) {
    const trackingId = process.env.GA_TRACKING_ID

    if (trackingId) {
        ReactGA.initialize(trackingId)
    }

    return (
        <Provider store={ store }>
            <Router>
                <div>
                    <Route exact path="/" component={ withTracker(Home) } />
                    <Route path="/job/:id" component={ withTracker(JobDetail) } />
                </div>
            </Router>
        </Provider>
    )
}

ReactDOM.render(<App />, document.getElementById('app'))