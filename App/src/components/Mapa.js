import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import { Header, Left, Right, Body, Icon, Button } from 'native-base';
import Map from './Map';

const banner = require('../../assets/imgs/bannerSombreado.png');

export default class Mapa extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      my_position: false,
      filter: '',
      places: [
        {
          latitude: -22.120832,
          longitude: -51.407559,
          nome: 'Anfiteatro I',
          img: require('../../assets/imgs/locais/anf1.png'),
          chaves: [
            'anfiteatro I',
            'anf 1',
            'anf I',
            'palestra saude mental',
            'palestra saúde mental',
            'assembleia geral',
            'reconhecimento do campus',
            'câmpus',
            'coletivo maos negras',
            'coletivo mãos negras'
          ]
        },
        {
          latitude: -22.122949,
          longitude: -51.409161,
          nome: 'Anfiteatro II',
          img: require('../../assets/imgs/locais/anf2.png'),
          chaves: [
            'anfiteatro II',
            'anf 2',
            'anf II',
            'Discussao sobre o impacto ambiental',
            'Brumadinho'
          ]
        },
        {
          latitude: -22.119291,
          longitude: -51.406033,
          nome: 'Anfiteatro III',
          img: require('../../assets/imgs/locais/anf3.png'),
          chaves: [
            'anfiteatro III',
            'anf 3',
            'anf III',
          ]
        },
        {
          latitude: -22.123351,
          longitude: -51.409866,
          nome: 'Auditório',
          img: require('../../assets/imgs/locais/auditorio.png'),
          chaves: [
            'auditório',
          ]
        },
        {
          latitude: -22.121371,
          longitude: -51.406622,
          nome: 'Biblioteca',
          img: require('../../assets/imgs/locais/biblioteca.png'),
          chaves: [
            'biblioteca',
            'show da química',
            'filme',
            'exibicao',
            'exibição'
          ]
        },
        {
          latitude: -22.120796,
          longitude: -51.407957,
          nome: 'Bloco I',
          img: require('../../assets/imgs/locais/bloco-1.png'),
          chaves: [
            'bloco I',
            'discente I'
          ]
        },
        {
          latitude: -22.122929,
          longitude: -51.409253,
          nome: 'Bloco IV',
          img: require('../../assets/imgs/locais/bloco-4.png'),
          chaves: [
            'bloco IV',
            'discente IV'
          ]
        },
        {
          latitude: -22.123156,
          longitude: -51.409778,
          nome: 'Bloco V',
          img: require('../../assets/imgs/locais/bloco-5.png'),
          chaves: [
            'bloco V',
            'discente V'
          ]
        },
        {
          latitude: -22.123747,
          longitude: -51.409802,
          nome: 'Bloco VI',
          img: require('../../assets/imgs/locais/bloco-6.png'),
          chaves: [
            'bloco VI',
            'discente VI'
          ]
        },
        {
          latitude: -22.120980, 
          longitude: -51.406557,
          nome: 'Bomboteca',
          img: require('../../assets/imgs/locais/bomboteca.png'),
          chaves: [
            'bomboteca',
            'quadra'
          ]
        },
        {
          latitude: -22.120902,
          longitude: -51.408068,
          nome: 'CACiC | EJCOMP | TCC',
          img: require('../../assets/imgs/locais/lab-5.png'),
          chaves: [
            'cacic | ejcomp | tcc',
            'laboratório 5',
            'empresa junior'
          ]
        },
        {
          latitude: -22.119597,
          longitude: -51.406704,
          nome: 'Cantina Educa',
          img: require('../../assets/imgs/locais/cantina-educa.png'),
          chaves: [
            'cantina educa'
          ]
        },
        {
          latitude: -22.121211,
          longitude: -51.408167,
          nome: 'Centro de ciências',
          img: require('../../assets/imgs/locais/centro-de-ciencas.png'),
          chaves: [
            'centro de ciencias'
          ]
        },
        {
          latitude: -22.120609,
          longitude: -51.408634,
          nome: 'Diretório Acadêmico (D.A)',
          img: require('../../assets/imgs/locais/DA.png'),
          chaves: [
            'diretório acadêmico (d.a)',
            'da',
          ]
        },
        {
          latitude: -22.120889,
          longitude: -51.408005,
          nome: 'Direção',
          img: require('../../assets/imgs/locais/direcao.png'),
          chaves: [
            'direçao',
            'ticket RU'
          ]
        },
        {
          latitude: -22.120680,
          longitude: -51.408219,
          nome: 'EJECART',
          img: require('../../assets/imgs/locais/ejecart.png'),
          chaves: [
            'ejecart',
            'empresa junior'
          ]
        },
        {
          latitude: -22.122781,
          longitude:  -51.409296,
          nome: 'EJEST',
          img: require('../../assets/imgs/locais/EJEST.png'),
          chaves: [
            'ejest',
            'empresa junior'
          ]
        },
        {
          latitude: -22.119816,
          longitude:  -51.405773,
          nome: 'Ensaio Bateria Furiosa',
          img: require('../../assets/imgs/locais/ensaio-bateria-furiosa.png'),
          chaves: [
            'bateria furiosa'
          ]
        },
        {
          latitude: -22.122235,
          longitude: -51.409115,
          nome: 'Eucaliptos',
          img: require('../../assets/imgs/locais/eucaliptos.png'),
          chaves: [
            'eucaliptos'
          ]
        },
        {
          latitude: -22.121099,
          longitude:  -51.408304,
          nome: 'GeoAmbiental Jr',
          img: require('../../assets/imgs/locais/geoambientaljr.png'),
          chaves: [
            'geoambiental jr',
            'empresa junior'
          ]
        },
        {
          latitude: -22.118388,
          longitude:  -51.407645,
          nome: 'Ginásio de Esportes',
          img: require('../../assets/imgs/locais/ginasio.png'),
          chaves: [
            'ginásio de esportes',
            'desafio do calouro',
            'integra calouro',
            'yoga',
            'palestra de boas vindas'
          ]
        },
        {
          latitude: -22.122666,
          longitude:  -51.408524,
          nome: 'Gramado',
          img: require('../../assets/imgs/locais/gramado.png'),
          chaves: [
            'gramado',
            'central'
          ]
        },
        {
          latitude: -22.122867,
          longitude:  -51.410540,
          nome: 'Joppanas Pobre',
          img: require('../../assets/imgs/locais/joppanas-pobre.png'),
          chaves: [
            'joppanas pobre',
            'cantina',
            'xerox'
          ]
        },
        {
          latitude: -22.121566,
          longitude:  -51.407443,
          nome: 'Joppanas Rico',
          img: require('../../assets/imgs/locais/joppanas-rico.png'),
          chaves: [
            'joppanas rico',
            'cantina',
            'joppanas café',
            'joppanas cafe'
          ]
        },
        {
          latitude: -22.120826,
          longitude:  -51.408039,
          nome: 'Laboratório 6 - Bloco 1',
          img: require('../../assets/imgs/locais/lab-6.png'),
          chaves: [
            'laboratório 6',
            'computacao'
          ]
        },
        {
          latitude: -22.120684,
          longitude:  -51.408137,
          nome: 'Laboratório 10 - Bloco 1',
          img: require('../../assets/imgs/locais/lab-10.png'),
          chaves: [
            'laboratório 10',
            'computacao'
          ]
        },
        {
          latitude: -22.122014,
          longitude: -51.407047,
          nome: 'Latogeo',
          img: require('../../assets/imgs/locais/latogeo.png'),
          chaves: [
            'latogeo'
          ]
        },
        {
          latitude: -22.122315,
          longitude: -51.410132,
          nome: 'Maquetaria',
          img: require('../../assets/imgs/locais/maquetaria.png'),
          chaves: [
            'maquetaria',
            'arquitetura'
          ]
        },
         {
          latitude: -22.127925,
          longitude: -51.413036,
          nome: 'Ópera Krios',
          img: require('../../assets/imgs/locais/ok.jpeg'),
          chaves: [
            'OK',
            'empresa junior',
            'arquitetura'
          ]        
        },
        {
          latitude: -22.11979,
          longitude: -51.405803,
          nome: 'Performance Jr',
          img: require('../../assets/imgs/locais/performancejr.png'),
          chaves: [
            'performance jr',
            'empresa junior'
          ]
        },
        {
          latitude: -22.119092,
          longitude: -51.406751,
          nome: 'Quadra Educa',
          img: require('../../assets/imgs/locais/quadra-educa.png'),
          chaves: [
            'quadra educa',
            'esporte'
          ]
        },
        {
          latitude: -22.123855,
          longitude:  -51.410262,
          nome: 'Restaurante Universitário',
          img: require('../../assets/imgs/locais/RU.png'),
          chaves: [
            'restaurante universitario',
            'ru'
          ]
        },
        {
          latitude: -22.120728,
          longitude:  -51.408356,
          nome: 'Sala do rato (Ateliê)',
          img: require('../../assets/imgs/locais/sala-do-rato.png'),
          chaves: [
            'sala do rato',
            'atelie',
            'ateliê',
            'oficina papel reciclavel',
            'oficina de criatividade'
          ]
        },
        {
          latitude: -22.121969,
          longitude: -51.406480,
          nome: 'Seção Técnica de Informática',
          img: require('../../assets/imgs/locais/STI.png'),
          chaves: [
            'seção técnica de informática',
            'STI'
          ]
        },
        {
          latitude: -22.118841,
          longitude: -51.407620,
          nome: 'Treino - Pegasus',
          img: require('../../assets/imgs/locais/treino-pegasus.png'),
          chaves: [
            'pegasus',
            'cheer'
          ]
        },
      ]
    };
  }

  _mapReady = async (mapView) => {
    await this._getPosition();

    mapView.animateToCoordinate(this.state.my_position, 0);
  };

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

  render() {
    return (
      <View style={styles.container} >
        <Header style={{ backgroundColor: '#4a50c8' }} >
            <Left>
              <Button transparent >
                <Icon name='menu' onPress={() => this.props.navigation.openDrawer()} />
              </Button>
            </Left>
            <Body>
              <View style={styles.searchSection}>
                <Icon style={styles.searchIcon} name="ios-search" size={20} color="white"/>
                <TextInput
                    style={styles.input}
                    placeholder="Pesquisar"
                    value={this.state.filter}
                    onChangeText={(filter) => { this.setState({ filter }); }}
                    underlineColorAndroid="transparent"
                />
              </View>
            </Body>
        </Header>
        <Map
          filter={this.state.filter}   
          rotate={false}
          places={this.state.places}
          onMapReady={this._mapReady}
          my_position={this.state.my_position}
          navigation={this.props.navigation}
          view="MapsScreen"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  searchSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    paddingRight: 10,
    marginRight: 20,
    borderRadius: 10
  },
  searchIcon: {
      padding: 10,
  },
  input: {
      flex: 1,
      paddingTop: 10,
      paddingBottom: 10,
      paddingRight: 10,
      paddingLeft: 0,
      backgroundColor: 'transparent',
      color: 'white',
  },
});

