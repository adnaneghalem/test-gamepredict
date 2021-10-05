import React, { memo } from 'react';
import { compose } from 'redux';
import {
  SafeAreaView,
  FlatList,
  ActivityIndicator,
  View,
  Text,
} from 'react-native';
import {
  useGetMLBGamesDayQuery,
  useGetMLBGamesTomorrowQuery,
} from '../../services/gamesApi';
import { NavigationStackProp } from 'react-navigation-stack';
import GameDisplay from '../../components/GameDisplay/GameDisplay';
import styles from './styles';

type Props = {
  navigation: NavigationStackProp<{ id: string }>;
};

function GamesList({ navigation }: Props): JSX.Element {
  const { data, isFetching } =
    useGetMLBGamesDayQuery('1') && useGetMLBGamesTomorrowQuery('1');
  const gamesData = data?.response;
  const onOpen = (id: string) => {
    navigation.navigate('Game Details', { id: id });
  };

  if (isFetching) {
    return (
      <View style={styles.fetching}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      {gamesData.length !== 0 ? (
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={gamesData}
          keyExtractor={(item, index) => String(index)}
          onEndReachedThreshold={0.3}
          renderItem={({ item }) => (
            <GameDisplay
              key={item.id}
              country={item.country.name}
              date={item.date}
              league={item.league.name}
              teamHomeName={item.teams.home.name}
              teamAwayName={item.teams.away.name}
              id={item.id}
              teamHomeImage={item.teams.home.logo}
              teamAwayImage={item.teams.away.logo}
              onOpen={onOpen}
            />
          )}
        />
      ) : (
        <View>
          <Text>Sorry, no games available for the next 2 days</Text>
        </View>
      )}
    </SafeAreaView>
  );
}

export default compose(memo)(GamesList);
