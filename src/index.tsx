import React, { memo } from 'react';
import { compose } from 'redux';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GamesList from './screens/GamesList/GamesList';
import GameDetails from './screens/GameDetails/GameDetails';

const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Next Games" component={GamesList} />
      <Stack.Screen name="Game Details" component={GameDetails} />
    </Stack.Navigator>
  );
}

export default compose(memo)(Routes);
