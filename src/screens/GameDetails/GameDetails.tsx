import React, { memo, useState } from 'react';
import { compose } from 'redux';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  Alert,
  TextInput,
  Pressable,
  ActivityIndicator,
} from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack';

import { useGetGameByIdQuery } from '../../services/gamesApi';
import GameDisplay from '../../components/GameDisplay/GameDisplay';
import styles from './styles';

type Score = {
  homeScore: string;
  awayScore: string;
};

type Props = {
  route: NavigationStackProp<{ id: string }>;
};

function GameDetails({ route }: Props): JSX.Element {
  const { id } = route.params;
  const { data, isFetching } = useGetGameByIdQuery(id);
  const gameDetailData = data?.response[0];
  const [awayScore, setAwayScore] = useState<string>('');
  const [homeScore, setHomeScore] = useState<string>('');
  const [predictions, setPrediction] = useState<Score>();
  const [storedPrediction, setStoredPrediction] = useState<Score>();

  const onSubmit = () => {
    const predictions = { homeScore, awayScore };
    if (!homeScore && !awayScore) {
      Alert.alert('Error', 'Please enter a score');
    } else if (!homeScore || !awayScore) {
      Alert.alert('Error', 'Enter a score for both teams1');
    }
    setPrediction(predictions);
    setStoredPrediction(predictions);
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
      <View>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: gameDetailData?.league.logo,
          }}
        />
      </View>
      <View>
        <View style={styles.inputContainer}>
          <View style={styles.scores}>
            <Image
              style={styles.tinyLogo}
              source={{
                uri: gameDetailData?.teams.home.logo,
              }}
            />
            <TextInput
              style={styles.input}
              placeholder="Home"
              keyboardType="numeric"
              value={homeScore}
              onChangeText={(value) => setHomeScore(value)}
            />
          </View>
          <View style={styles.scores}>
            <TextInput
              style={styles.input}
              placeholder="Away"
              keyboardType="numeric"
              value={awayScore}
              onChangeText={(value) => setAwayScore(value)}
            />
            <Image
              style={styles.tinyLogo}
              source={{
                uri: gameDetailData?.teams.away.logo,
              }}
            />
          </View>
        </View>
        <Pressable style={styles.button} onPress={onSubmit}>
          <Text style={styles.buttonText}>Predict</Text>
        </Pressable>
      </View>
      {storedPrediction && (
        <View style={styles.predictionContainer}>
          <Text style={styles.predictionTitle}>Your Prediction</Text>
          <GameDisplay
            key={gameDetailData.id}
            country={gameDetailData.country.name}
            date={gameDetailData.date}
            league={gameDetailData.league.name}
            teamHomeName={gameDetailData.teams.home.name}
            teamAwayName={gameDetailData.teams.away.name}
            id={gameDetailData.id}
            teamHomeImage={gameDetailData.teams.home.logo}
            teamAwayImage={gameDetailData.teams.away.logo}
            homeScore={storedPrediction?.homeScore}
            awayScore={storedPrediction?.awayScore}
            onOpen={() => void null}
          />
        </View>
      )}
    </SafeAreaView>
  );
}

export default compose(memo)(GameDetails);
