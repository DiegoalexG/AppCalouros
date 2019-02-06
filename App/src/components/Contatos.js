import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View, 
    ScrollView, 
    ImageBackground, 
    Dimensions, 
    Image } from 'react-native';
import { Header, Left, Right, Icon, Button } from 'native-base';
import ContatosCollapsiblePanel from './ContatosCollapsiblePanel';

const banner = require('../../assets/imgs/bannerSombreado.png');
const contatos = require('../../assets/imgs/contatos.png');

export default class Contatos extends React.Component {

  render() {
    return (
      <View style={styles.container} >
        <ImageBackground
          source={banner}
          style={[styles.sombra, { width: Dimensions.get('window').width }]}
          imageStyle={{ width: Dimensions.get('window').width }}
        >
          <Header style={{ backgroundColor: 'transparent' }} >
            <Left>
              <Button transparent >
                <Icon name='menu' onPress={() => this.props.navigation.openDrawer()} />
              </Button>
            </Left>
            <Right />
          </Header>
        </ImageBackground>
        <View style={styles.corpoView}>
          <ScrollView style={styles.container}>
            <Image source={contatos} style={styles.containerImg} />
            <ContatosCollapsiblePanel titulo="Trupe Quimioatividade" img={require('../../assets/imgs/teste1.jpg')}>
              <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
            </ContatosCollapsiblePanel>
            <ContatosCollapsiblePanel titulo="Ópera Krios" img={require('../../assets/imgs/teste2.png')}>
              <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
            </ContatosCollapsiblePanel>
            <ContatosCollapsiblePanel titulo="CACiC ''Alan Turing'' - Centro Acadêmico de Ciência da Computação" img={require('../../assets/imgs/teste3.png')}>
              <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
            </ContatosCollapsiblePanel>
            <ContatosCollapsiblePanel titulo="CACAU - Centro Acadêmico do Curso de Arquitetura e Urbanismo" img={require('../../assets/imgs/teste4.png')}>
              <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
            </ContatosCollapsiblePanel>
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sombra: {
    elevation: 20
  },
  corpoView: {
    flex: 1,
    backgroundColor: '#d1d1e0'
  }, 
  containerImg: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: 180,
    resizeMode: 'cover'
  }
});
