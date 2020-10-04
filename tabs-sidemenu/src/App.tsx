import React from 'react'
import { Redirect, Route, useLocation } from 'react-router-dom'
import { IonApp, IonRouterOutlet, IonSplitPane } from '@ionic/react'

import MainTabs from './components/MainTabs'
import Menu from './components/Menu'
import Contact from './pages/Contact'

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css'

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css'
import '@ionic/react/css/structure.css'
import '@ionic/react/css/typography.css'

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css'
import '@ionic/react/css/float-elements.css'
import '@ionic/react/css/text-alignment.css'
import '@ionic/react/css/text-transformation.css'
import '@ionic/react/css/flex-utils.css'
import '@ionic/react/css/display.css'

/* Theme variables */
import './theme/variables.css'

/* Track pageviews */
const PageViews = (): void => {
  let location = useLocation()
  React.useEffect(() => {
    // ga('send', 'pageview', location.pathname)
  }, [location])
}

const App: React.FC = () => {
  PageViews()
  return (
    <IonApp>
      <IonSplitPane contentId="main">
        <Menu />
        <IonRouterOutlet id="main">
          <Route
            path="/"
            render={() => <Redirect to="/tabs/tab1" />}
            exact={true}
          />
          <Route path="/tabs" component={MainTabs} />
          <Route path="/contact" component={Contact} />
        </IonRouterOutlet>
      </IonSplitPane>
    </IonApp>
  )
}

export default App
