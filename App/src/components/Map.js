import React, { Component } from 'react';

import { ScrollView, View, Text, Dimensions, TouchableHighlight, Image } from 'react-native';
import MapView from 'react-native-maps';
import styles from './styles.js';

export default class Map extends Component {

  _scrollEnd = (e) => {

    const place = (e.nativeEvent.contentOffset.x > 0)
      ? e.nativeEvent.contentOffset.x / Dimensions.get('window').width
      : 0;
    const newPlaces = this.props.places.filter(this._filtrar);
    const { mark } = newPlaces[place];
    const latitude = parseFloat(newPlaces[place].latitude);
    const longitude = parseFloat(newPlaces[place].longitude);

    this.mapView.animateToCoordinate({
      latitude,
      longitude
    }, 0);

    setTimeout(() => {
      mark.showCallout();
    }, 0)

  }

  _filtrar = (place) => {
      let contem = false;
      place.chaves.forEach((chave) => {
          if (chave.toLowerCase().includes(this.props.filter.toLowerCase())) {
              contem = true;
          }
      });   
      if(contem) return place;
   }

  _renderMakers = () => {
    let markers = [];
    this.props.places.filter(this._filtrar).map((place, index) => {
      markers.push(
        <MapView.Marker
          ref={mark => place.mark = mark}
          title={place.nome}
          key={index}
          coordinate={{
            latitude: parseFloat(place.latitude),
            longitude: parseFloat(place.longitude),
          }}
          onPress={() => {
            this._scrollView.scrollTo({ x: index * Dimensions.get('window').width, y: 0, animated: true });
          }}
        >
        </MapView.Marker>
      );
    });
    return markers;
  }

  _renderScrolls = () => {
    let scrolls = [];
    this.props.places.filter(this._filtrar).map((place, index) => (
      scrolls.push(
        <TouchableHighlight
          key={index}
          style={styles.place}
        >
          <View style={{ flex: 1 }}>
            <Text style={{ textAlign: 'center', marginBottom: 10, fontSize: 12, color: 'white', fontFamily: 'theboldfont' }}>{place.nome}</Text>
            <Image 
              resizeMode={'stretch'}
              style={{ width: '100%', height: undefined, aspectRatio: 85 / 50 }}
              source={place.img} />
          </View>
        </TouchableHighlight>
      )
    ));
    return scrolls;
  }

  render() {

    return (
      <View style={styles.container}>
        <MapView
          ref={map => this.mapView = map}
          initialRegion={{
            latitude: -22.121866,
            longitude: -51.407549,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005
          }}
          mapType={'satellite'}
          style={styles.mapView}
          rotateEnabled={this.props.rotate}
          showsPointsOfInterest={true}
          showBuildings={false}
          showsUserLocation={true}
          showsMyLocationButton={true}
          onMapReady={() => {
            this.props.onMapReady(this.mapView);
          }}
        >

          {this._renderMakers()}

        </MapView>
        <ScrollView
          ref={_ref => this._scrollView = _ref}
          style={styles.placesContainer}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={true}


          onMomentumScrollEnd={(e) => {
            this._scrollEnd(e);
          }}
        >

          {this._renderScrolls()}
        </ScrollView>
      </View>
    );
  }

}
