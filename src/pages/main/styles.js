import { Dimensions, StyleSheet } from 'react-native';
const { width: screenWidth } = Dimensions.get('window')

const styles = StyleSheet.create({
   container: {
      marginTop: 30,
      justifyContent: 'center',
      flexDirection: 'row',
   },
   nameFilm: {
      fontSize: 14,
      fontWeight: 'bold',
   },
   filmEx: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#da552f',
   },
   filmExView: {
      marginTop: 40,
      justifyContent: 'center',
      flexDirection: 'row',
   },
   item: {
      width: screenWidth - 60,
      height: screenWidth - 60,
    },
    imageContainer: {
      flex: 1,
      marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
      backgroundColor: 'white',
      borderRadius: 8,
    },
    image: {
      ...StyleSheet.absoluteFillObject,
      resizeMode: 'cover',
    },
});

export default styles;