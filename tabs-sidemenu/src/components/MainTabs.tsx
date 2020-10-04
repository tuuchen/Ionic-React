import React from 'react'
import { Route } from 'react-router-dom'
import {
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from '@ionic/react'
import { ellipse, square, triangle } from 'ionicons/icons'
import Tab1 from '../pages/Tab1'
import Tab2 from '../pages/Tab2'
import Tab3 from '../pages/Tab3'
import About from '../pages/About'

const MainTabs: React.FC = () => (
  <IonTabs>
    <IonRouterOutlet>
      <Route path="/tabs/tab1" component={Tab1} exact={true} />
      <Route path="/tabs/tab2" component={Tab2} exact={true} />
      <Route path="/tabs/tab3" component={Tab3} />
      <Route path="/tabs/about" component={About} />
    </IonRouterOutlet>
    <IonTabBar slot="bottom">
      <IonTabButton tab="tab1" href="/tabs/tab1">
        <IonIcon icon={triangle} />
        <IonLabel>Tab 1</IonLabel>
      </IonTabButton>
      <IonTabButton tab="tab2" href="/tabs/tab2">
        <IonIcon icon={ellipse} />
        <IonLabel>Tab 2</IonLabel>
      </IonTabButton>
      <IonTabButton tab="tab3" href="/tabs/tab3">
        <IonIcon icon={square} />
        <IonLabel>Tab 3</IonLabel>
      </IonTabButton>
    </IonTabBar>
  </IonTabs>
)

export default MainTabs
