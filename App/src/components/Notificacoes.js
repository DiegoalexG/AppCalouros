import React from 'react';
import { StyleSheet, Text, View, ScrollView, ImageBackground, Dimensions, Image } from 'react-native';
import { Header, Left, Right, Icon, Button, Spinner } from 'native-base';
import axios from 'axios';
import ContatosCollapsiblePanel from './ContatosCollapsiblePanel';

const banner = require('../../assets/imgs/bannerSombreado.png');
const contatos = require('../../assets/imgs/contatos.png');

export default class Notificacoes extends React.Component {
  static navigationOptions = {
    drawerIcon: ({ tintColor }) => (
      <Icon 
      name='notifications' 
      type="MaterialIcons"
      style={{ fontSize: 24, color: tintColor }} />
    )
  }

  constructor(props) {
    super(props);    
    this.state = {       
        notificacoes: []      
      };     
  }

  componentDidMount(){

    axios.post('http://api.calouros.ejcomp.com.br/index.php/Notificacao/api'
    ).then((response) => {
      this.setState({ notificacoes: response.data });
    }).catch((error) => {
      
      
    });

  
  }

  render() {
    if(this.state.notificacoes.length == 0){
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
              {this.state.notificacoes.map( (contato, i) => {
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
        </View>
      );
    }
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
    resizeMode: 'cover',
    marginBottom: 20
  }
});
