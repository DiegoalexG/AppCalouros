import React, { Component } from 'react';

import { ScrollView, View, Text, Dimensions, TouchableHighlight, Image } from 'react-native';
import MapView from 'react-native-maps';
import styles from './styles.js';

export default class Map extends Component {

  _scrollEnd = (e) => {

    const place = (e.nativeEvent.contentOffset.x > 0)
      ? e.nativeEvent.contentOffset.x / Dimensions.get('window').width
      : 0;

    const { mark } = this.props.places[place];
    const latitude = parseFloat(this.props.places[place].latitude);
    const longitude = parseFloat(this.props.places[place].longitude);

    this.mapView.animateToCoordinate({
      latitude,
      longitude
    }, 0);

    setTimeout(() => {
      mark.showCallout();
    }, 0)

  }

  _renderMakers = () => {
    let markers = [];

    this.props.places.map((place, index) => (

      // (this.state.code == "" || place.cod.includes(this.state.code)) ?
      markers.push(
        <MapView.Marker
          ref={mark => place.mark = mark}
          title={place.nome}
          description={place.descricao}
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
      )

    ));

    return markers;
  }

  _renderScrolls = () => {
    let scrolls = [];

    this.props.places.map((place, index) => (
      scrolls.push(
        <TouchableHighlight
          key={index}
          style={styles.place}
        >
          <View style={{ flex: 1 }}>

            <Text style={{ fontSize: 12, color: 'white', }}>{place.nome}</Text>
            <Image 
              resizeMode={'cover'}
              style={{ width: '100%', height: 50 }}
              source={{ uri: "https://conteudo.imguol.com.br/c/entretenimento/c4/2018/05/15/super-mario-odyssey-1526426783086_v2_1170x540.jpgx" }} />
            <Text style={{ color: 'white', fontSize: 12 }}>{place.descricao}</Text>
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
            latitude: -22.121161,
            longitude: -51.407519,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
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









