import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Header, Left, Right, Icon, Body, Button } from 'native-base';
import FaqCollapsiblePanel from './FaqCollapsiblePanel';

export default class Faq extends React.Component {
  render() {
    return (
      <View style={styles.container} >
        <Header style={{ backgroundColor: '#273238' }} >
          <Left>
            <Button transparent >
              <Icon name='menu' onPress={() => this.props.navigation.openDrawer()} />
            </Button>
          </Left>
          <Body>            
            <Text style={{ color: '#fff' }}>Semana dos Calouros</Text>
          </Body>
          <Right />
        </Header>   
        <Text style={styles.titulo}>FAQ</Text>   
        <View style={styles.corpoView}>
          <ScrollView style={styles.container}>
            <FaqCollapsiblePanel titulo="Pergunta 1">
              <Text>Resposta 1</Text>
            </FaqCollapsiblePanel>
            <FaqCollapsiblePanel titulo="Pergunta 22222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222">
              <Text>Resposta 2</Text>
            </FaqCollapsiblePanel>
            <FaqCollapsiblePanel titulo="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.">
              <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
            </FaqCollapsiblePanel>
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
  titulo: {
    fontSize: 28,
    paddingTop: 5,
    paddingBottom: 5,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    backgroundColor: '#52527a',
    //ios shadow  
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowOpacity: 0.51,
    shadowRadius: 13.16,
    //android shadow
    elevation: 20
  },
  corpoView: {
    flex: 1,
    backgroundColor: '#d1d1e0'
  }
});

