import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header, Left, Right, Icon, Body, Button } from 'native-base';

export default class Configuracoes extends React.Component {
static navigationOptions = {
    drawerIcon: ({ tintColor }) => (
      <Icon name='md-settings' 
      type="Ionicons"
      style={{ fontSize: 24, color: tintColor }} />
    )
  }

  render() {
    return (
       <View style={styles.container} >
        <Header style={{ backgroundColor: '#273238'}} >
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
        <Text>Tela de Configurações</Text>     
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

