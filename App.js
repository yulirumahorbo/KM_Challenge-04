import React, {useEffect} from 'react'
import Routes from './src/router/Routers'
import SplashScreen from 'react-native-splash-screen'
import { Provider } from 'react-redux'
import {persistedStore, store} from './src/store'
import {PersistGate} from 'redux-persist/lib/integration/react'

export default function App() {
  useEffect(()=>{
    SplashScreen.hide()
  }, [])
  return (
    <Provider store={store}>
      <PersistGate persistor={persistedStore}>
        <Routes />
      </PersistGate> 
    </Provider>
  )
}