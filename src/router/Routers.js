import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainRoutes from './MainRouters';
import { navigationRef } from '../helpers/navigate';

export default function Routes() {
  return (
    <NavigationContainer ref={navigationRef}>
      <MainRoutes />
    </NavigationContainer>
  );
}
