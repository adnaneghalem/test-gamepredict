import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import dayjs from 'dayjs';
import styles from './styles';

interface GameDisplayProps {
  teamHomeName?: string;
  teamAwayName?: string;
  country?: string;
  date?: string;
  league?: string;
  id: string;
  teamHomeImage?: string;
  teamAwayImage?: string;
  onOpen: (id: string) => void | undefined;
  homeScore?: string;
  awayScore?: string;
}

function GameDisplay(props: GameDisplayProps): JSX.Element | null {
  return (
    <View key={props.id} style={styles.container}>
      <View style={styles.item}>
        <View style={styles.headerContainer}>
          <Text style={styles.title}>{props.league}</Text>
          <Text style={styles.title}>{props.country}</Text>
          <Text style={styles.title}>
            {dayjs(props.date).format('DD-MM-YY')}
          </Text>
        </View>
        <View style={styles.teamContainer}>
          <View>
            <View style={styles.titleContainer}>
              <Image
                style={styles.tinyLogo}
                source={{
                  uri: props.teamHomeImage,
                }}
              />
              <Text style={styles.title}>{props.teamHomeName}</Text>
            </View>
          </View>
          {props.homeScore && props.awayScore ? (
            <View style={styles.score}>
              <Text style={styles.titleScore}>{props.homeScore}</Text>
              <Text style={styles.titleScore}>{'-'}</Text>
              <Text style={styles.titleScore}>{props.awayScore}</Text>
            </View>
          ) : null}
          <View>
            <View style={styles.titleContainer}>
              <Image
                style={styles.tinyLogo}
                source={{
                  uri: props.teamAwayImage,
                }}
              />
              <Text style={styles.title}>{props.teamAwayName}</Text>
            </View>
          </View>
        </View>
        {!props.homeScore && !props.awayScore ? (
          <Pressable
            style={styles.button}
            onPress={() => props?.onOpen(props.id)}
          >
            <Text style={styles.buttonText}>More Info</Text>
          </Pressable>
        ) : null}
      </View>
    </View>
  );
}

export default GameDisplay;
