import { StyleSheet, Dimensions } from 'react-native';


const { width } = Dimensions.get('window');

export default StyleSheet.create({
    container: {
        flex: 1,
    },

    mapView: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },

    placesContainer: {
        position: "absolute",
        bottom: 0,
        width: '100%',
    },

    place: {
        width: width - 40,
        height: 225,
        backgroundColor: 'rgba(25,25,112,.8)',
        marginHorizontal: 20,
        borderRadius: 10,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        padding: 20,
        paddingBottom: 5,
    },
});