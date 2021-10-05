import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingRight: 15,
    paddingLeft: 15,
    marginBottom: 25,
    marginTop: '7%',
  },
  item: {
    backgroundColor: '#F4F5F7',
    padding: 20,
    marginVertical: 5,
    borderRadius: 15,
    flexDirection: 'column',
  },
  headerContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginBottom: '5%',
  },
  teamContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleContainer: {
    flexDirection: 'column',
    alignSelf: 'center',
    marginBottom: 10,
    paddingRight: 10,
  },
  title: {
    fontSize: 16,
    paddingRight: 10,
    paddingBottom: 10,
  },
  id: {
    alignSelf: 'center',
  },
  score: {
    flexDirection: 'row',
  },
  titleScore: {
    fontSize: 18,
    paddingRight: 10,
  },
  tinyLogo: {
    width: 60,
    height: 60,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  button: {
    backgroundColor: '#068C85',
    alignContent: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    width: '50%',
    height: 30,
    borderRadius: 15,
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFFFFF',
  },
});
