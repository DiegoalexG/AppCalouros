import React from 'react';
import { StyleSheet, View, ImageBackground, Dimensions, ScrollView } from 'react-native';
import { Header, Left, Right, Icon, Button } from 'native-base';
import Map from './Map';
import ContatosCollapsiblePanel from './ContatosCollapsiblePanel';

const banner = require('../../assets/imgs/bannerSombreado.png');

export default class Mapa extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      mode: 'map',
      my_position: false,
      places: [
        {
          latitude: 1,
          longitude: 1,
          nome: 'teste',
          img: '../../assets/imgs/bannerSombreado.png',
          descricao: 'testetbm'
        },
        {
          latitude: 2,
          longitude: 3,
          nome: 'teste',
          img: '../../assets/imgs/bannerSombreado.png',
          descricao: 'testetbm'
        },
        {
          latitude: 3,
          longitude: 3,
          nome: 'teste',
          img: '../../assets/imgs/bannerSombreado.png',
          descricao: 'testetbm'
        },
        {
          latitude: 4,
          longitude: 4,
          nome: 'teste',
          img: '../../assets/imgs/bannerSombreado.png',
          descricao: 'testetbm'
        },
        {
          latitude: 5,
          longitude: 5,
          nome: 'teste',
          img: '../../assets/imgs/bannerSombreado.png',
          descricao: 'testetbm'
        },
      ]
    };
  }

  _changeMode = () => {
    if (this.state.mode == 'map') {
      this.setState({ mode: 'list-ul' });
    } else {
      this.setState({ mode: 'map' });
    }
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

  renderList = () => {
    let list = [];
    this.state.places.map( (place, i) => {
      list.push(
        <ContatosCollapsiblePanel 
          key={i}
          titulo={place.nome}
          img={place.img}
          descricao={place.descricao}
        />
      );
    });
    return list;
  }

  render() {
    const icon = (this.state.mode === 'map') ?
      <Icon
        name="menu"
        color="black"
        size={28}
        onPress={() => this._changeMode()}
      />
      :
      <Icon
        name="menu"
        color="black"
        size={28}
        onPress={() => this._changeMode()}
      />;
    return (
      <View style={styles.container} >
        <ImageBackground
          source={banner}
          style={{ elevation: 20, width: Dimensions.get('window').width }}
          imageStyle={{ width: Dimensions.get('window').width }}
        >
          <Header style={{ backgroundColor: 'transparent' }} >
            <Left>
              <Button transparent >
                <Icon name='menu' onPress={() => this.props.navigation.openDrawer()} />
              </Button>
            </Left>
            <Right>
              <Button transparent >
                {icon}
              </Button>
            </Right>
          </Header>
        </ImageBackground>
        {(this.state.mode === 'map') ?
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
            {this.renderList()}
          </ScrollView>
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

