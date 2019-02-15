import React, { Component } from 'react';
import { ScrollView, View, Text, StyleSheet, Dimensions, BackHandler, Image, Alert } from 'react-native';

import { Header, SearchBar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import Load from '../components/Load/Load';
import { constants } from '../assets/general';

import Evidencia from '../components/Evidencia/Evidencia';
import Map from '../components/Map';


import Bd from '../helpers/Bd';
import Req from '../helpers/Request';

export default class MapsScreen extends Component {


  static navigationOptions = ({ navigation }) => ({ header: null });


  constructor(props) {
    super(props);
    this.state = {
      db: null,
      load: false,
      loadText: null,
      _scrollView: null,
      code: "",
      places: [],
      mode: 'map',
      my_position: false,
    };

    const handleDidFocus = this.props.navigation.addListener(
      'didFocus',
      payload => {
        _._bootstrapAsyncMap();
      }
    );

    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
  };

  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
  }

  handleBackButtonClick() {
    this.props.navigation.navigate('Home');
    return true;
  }


  _mapReady = async (mapView) => {
    await this._getPosition();

    mapView.animateToCoordinate(this.state.my_position, 0);
  };

  _bootstrapAsyncMap = async () => {

    this.load("Carregando informações");

    let response = await Req.send("get", "Ordem_ServicoWS", {});


    if (response.data.code == 200) {

      if (response.data.data.ordens.length > 0) {

        var calcDistance = function (lat1, lon1, lat2, lon2) {
          var deg2rad = 0.017453292519943295; // === Math.PI / 180
          var cos = Math.cos;
          lat1 *= deg2rad;
          lon1 *= deg2rad;
          lat2 *= deg2rad;
          lon2 *= deg2rad;
          var diam = 12742; // Diameter of the earth in km (2 * 6371)
          var dLat = lat2 - lat1;
          var dLon = lon2 - lon1;
          var a = ((1 - cos(dLat)) +
            (1 - cos(dLon)) * cos(lat1) * cos(lat2)
          ) / 2;

          return parseInt(diam * Math.asin(Math.sqrt(a)) * 1000);
        };

        if (this.state.my_position) {
          response.data.data.ordens.forEach((place) => {
            this.setState({ loadText: "Calculando distâncias" });
            place.distancia = calcDistance(place.latitude, place.longitude, this.state.my_position.latitude, this.state.my_position.longitude);
          });
        }

        // this.mapView.animateToCoordinate({latitude: response.data.data.ordens[0].latitude,longitude: response.data.data.ordens[0].latitude}, 500);

        this.setState({ places: response.data.data.ordens }, this.endLoad);
      } else {
        Alert.alert(
          "Nada encontrado",
          "Você não tem nenhuma ordem no seu setor!",
          [
            {
              text: 'OK', onPress: () => {
                this.props.navigation.pop()
                this.props.navigation.navigate('Home');
              }
            },
          ],
          { cancelable: false }
        )
      }


    } else {
      Alert.alert(
        "Ops",
        "Algo deu errado! Tente fazer login novamente.",
        [
          {
            text: 'OK', onPress: () => {
              this.props.navigation.pop()
              this.props.navigation.navigate('Home');
            }
          },
        ],
        { cancelable: false }
      )
    }
  }


  load = (loadText) => {
    this.setState({ load: true, loadText });
  }

  endLoad = () => {
    this.setState({ load: false });
  }



  _getPosition = () => {
    return new Promise((resolve, reject) => {

      navigator.geolocation.getCurrentPosition(
        (position) => {
          let my_position = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          };

          this.setState({ my_position });

          resolve(my_position);

        },
        (error) => {
          this._getPosition();
        },
        { timeout: 10000, maximumAge: 0 }
        // { enableHighAccuracy: true, timeout: 10000, maximumAge: 0}
      );
      
    });
  }

  _changeMode = () => {
    if (this.state.mode == 'map') {
      this.setState({ mode: 'list-ul' });
    } else {
      this.setState({ mode: 'map' });
    }
  }

  renderEvidencias = () => {
    let evidencias = [];

    if (this.state.places.length == 0) {
      evidencias.push(
        <View key={1} style={{ alignItems: 'center', marginTop: 100, flex: 1, opacity: 0.5 }}>
          <Image
            source={require('../assets/images/nothing-report.png')}
            width={150}
            height={150}
            style={{ width: 150, height: 150, zIndex: 9999 }}
          />
          <Text key={1} style={{ textAlign: 'center', fontSize: 24 }}>Nenhum relatório encontrado</Text>
        </View>
      )
    } else {

      this.state.places.forEach((place, indice) => {

        evidencias.push(

          <Evidencia
            color='white'
            onPress={() => this.props.navigation.navigate('EvidenciaScreen', { id: place.id })}
            key={indice}
            {...place}
            ordem_servico_cod={place.cod}
            endereco={place.logradouro_nome}
          />
        )

      });
    }

    return evidencias;
  }

  render() {

    const icon = (this.state.mode == 'map') ?
      <Icon
        name="list-ul"
        color="white"
        size={28}
        onPress={() => this._changeMode()}
      />
      :
      <Icon
        name="map"
        color="white"
        size={28}
        onPress={() => this._changeMode()}
      />

    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Load
          text={this.state.loadText}
          show={this.state.load}
        />
        <Header
          placement="left"
          backgroundColor={colors.header}
          leftComponent={
            <Icon
              name="arrow-left"
              type="font-awesome"
              color="white"
              size={28}
              onPress={() => {
                navigation.pop();
                navigation.navigate('Home');
              }}
            />

          }
          centerComponent={{ text: 'Revisão por Área', style: { color: '#fff' } }}
          rightComponent={
            icon}
        />
        <View style={{ position: "absolute", top: 80, zIndex: 99999, width: '100%', opacity: .8 }}>
          <SearchBar
            lightTheme
            onChangeText={(code) => this.setState({ code })}
            placeholder='Código da evidência...' />
        </View>

        {(this.state.mode == 'map') ?

          // @map
          <Map
            rotate={false}
            places={this.state.places}
            onMapReady={this._mapReady}
            my_position={this.state.my_position}
            navigation={this.props.navigation}
            view="MapsScreen"
          />

          :
          <ScrollView style={{ marginTop: 70 }}>
            {this.renderEvidencias()}
          </ScrollView>
        }
      </View>
    );
  }
}


const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  mapView: {
    position: 'absolute',
    top: 70,
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
    height: 150,
    backgroundColor: 'rgba(0,0,0,.8)',
    marginHorizontal: 20,
    borderRadius: 10,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    padding: 20,
    paddingBottom: 5,
  },
});