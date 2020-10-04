import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from '@ionic/react'

import React from 'react'
import { useLocation } from 'react-router-dom'
import {
  archiveOutline,
  archiveSharp,
  bookmarkOutline,
  heartOutline,
  heartSharp,
  mailOutline,
  mailSharp,
  paperPlaneOutline,
  paperPlaneSharp,
  warningOutline,
  warningSharp,
} from 'ionicons/icons'
import './Menu.css'

interface AppPage {
  url: string
  iosIcon: string
  mdIcon: string
  title: string
}

const appPages: AppPage[] = [
  {
    title: 'Tab1',
    url: '/tabs/tab1',
    iosIcon: mailOutline,
    mdIcon: mailSharp,
  },
  {
    title: 'Tab2',
    url: '/tabs/tab2',
    iosIcon: paperPlaneOutline,
    mdIcon: paperPlaneSharp,
  },
  {
    title: 'Tab3',
    url: '/tabs/tab3',
    iosIcon: heartOutline,
    mdIcon: heartSharp,
  },
  {
    title: 'About',
    url: '/tabs/about',
    iosIcon: warningOutline,
    mdIcon: warningSharp,
  },
  {
    title: 'Contact',
    url: '/contact',
    iosIcon: archiveOutline,
    mdIcon: archiveSharp,
  },
]

const labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders']

const Menu: React.FC = () => {
  const location = useLocation()

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>Inbox</IonListHeader>
          <IonNote>hi@ionicframework.com</IonNote>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem
                  className={
                    location.pathname === appPage.url ? 'selected' : ''
                  }
                  routerLink={appPage.url}
                  routerDirection="none"
                  lines="none"
                  detail={false}
                >
                  <IonIcon
                    slot="start"
                    ios={appPage.iosIcon}
                    md={appPage.mdIcon}
                  />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            )
          })}
        </IonList>

        <IonList id="labels-list">
          <IonListHeader>Labels</IonListHeader>
          {labels.map((label, index) => (
            <IonItem lines="none" key={index}>
              <IonIcon slot="start" icon={bookmarkOutline} />
              <IonLabel>{label}</IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonMenu>
  )
}

export default Menu
