import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  scores: {
    flexDirection: 'row',
    margin: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    width: 60,
    height: 60,
    textAlign: 'center',
  },
  button: {
    width: '50%',
    height: '15%',
    backgroundColor: '#068C85',
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  predictionContainer: {
    height: 150,
  },
  fetching: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
  },
  tinyLogo: {
    width: 60,
    height: 60,
    alignSelf: 'center',
    resizeMode: 'contain',
    marginLeft: 20,
    marginRight: 20,
  },
  predictionTitle: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
