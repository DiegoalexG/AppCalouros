import React from 'react';
<<<<<<< HEAD
import { StyleSheet, Text, View, ScrollView, ImageBackground, Dimensions, Image } from 'react-native';
import { Header, Left, Right, Icon, Button, Spinner } from 'native-base';
import axios from 'axios';
=======
import { StyleSheet, View, ScrollView, ImageBackground, Dimensions, Image } from 'react-native';
import { Header, Left, Right, Icon, Button } from 'native-base';
>>>>>>> c571b508f47a77a7e55cabebc9196c68ad976ccc
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
<<<<<<< HEAD
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
              {this.state.contatos.map( (contato, i) => {
                return(
                  <ContatosCollapsiblePanel 
                    key={i}
                    titulo={contato.nome}
                    img={'http://api.calouros.ejcomp.com.br/uploads/' + contato.img}
                    descricao={contato.descricao}
                  />
                );
              })} 
            </ScrollView>
          </View>
=======
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
            <Right />
          </Header>
        </ImageBackground>
        <View style={styles.corpoView}>
          <ScrollView style={styles.container}>
            <View style={{ borderBottomWidth: 2, borderColor: '#a2a2a2' }}>
              <Image source={contatos} style={styles.containerImg} />
            </View>
            <ContatosCollapsiblePanel 
              titulo="Trupe Quimioatividade"
              img={require('../../assets/imgs/teste1.jpg')}
              descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." 
              email="teste1@testemail.com"
              telefone="40028922"
            />
            <ContatosCollapsiblePanel 
              titulo="Ópera Krios"
              img={require('../../assets/imgs/teste2.png')}
              descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." 
              email="teste2@testemail.com"
            />
            <ContatosCollapsiblePanel 
              titulo="CACiC ''Alan Turing'' - Centro Acadêmico de Ciência da Computação" 
              img={require('../../assets/imgs/teste3.png')}
              descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." 
              email="teste3@testemail.com"
              telefone="40028922"
            />
            <ContatosCollapsiblePanel 
              titulo="CACAU - Centro Acadêmico do Curso de Arquitetura e Urbanismo"
              img={require('../../assets/imgs/teste4.png')}
              descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." 
              email="teste4@testemail.com"
            />
          </ScrollView>
>>>>>>> c571b508f47a77a7e55cabebc9196c68ad976ccc
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
  containerImg: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: 180,
    resizeMode: 'cover'
  }
});
