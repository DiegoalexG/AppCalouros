import React from 'react';
import { StyleSheet, Text, View, ScrollView, ImageBackground, Dimensions, Image } from 'react-native';
import { Header, Left, Right, Icon, Button, Spinner } from 'native-base';
import axios from 'axios';
import ContatosCollapsiblePanel from './ContatosCollapsiblePanel';

const banner = require('../../assets/imgs/bannerSombreado.png');
const contatos = require('../../assets/imgs/contatos.png');

export default class Contatos extends React.Component {

  constructor(props) {
    super(props);    
    this.state = {       
        contatos: []      
      };     
  }

  componentDidMount(){

    axios.post('http://api.calouros.ejcomp.com.br/index.php/Contato/api'
    ).then((response) => {
      this.setState({ contatos: response.data });
    }).catch((error) => {
      
      
    });

  
  }

  render() {
    if(this.state.contatos.length == 0){
      return(
        <View style={{ justifyContent: 'center' }} >
          <Spinner />  
        </View>
      );
    } else {
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
              <Text style={styles.titulo}>CONHEÇA-NOS</Text>
              {this.state.contatos.map( (contato, i) => {
                return(
                  <ContatosCollapsiblePanel 
                    key={i}
                    titulo={contato.nome}
                    img={'http://api.calouros.ejcomp.com.br/uploads/' + contato.img}
                    descricao={contato.descricao}
                    email={contato.email}
                    telefone={contato.telefone}
                  />
                );
              })} 
            </ScrollView>
          </View>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  corpoView: {
    flex: 1,
    backgroundColor: 'white'
  },
  titulo: {
    fontFamily: 'theboldfont',
    textAlign: 'center',
    borderBottomWidth: 2,
    borderColor: '#a2a2a2',
    padding: 15,
    paddingBottom: 25,
    fontSize: 20,
    color: '#03bfa0',
  },
  containerImg: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: 180,
    resizeMode: 'cover'
  }
});
