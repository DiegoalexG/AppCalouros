import React from 'react';
import { View, SafeAreaView, ScrollView, Image, BackHandler } from 'react-native';
import { createDrawerNavigator, DrawerItems } from 'react-navigation';
import { Icon } from 'native-base';
import Principal from './src/components/Principal';
import Presencas from './src/components/Presencas';
import Notificacoes from './src/components/Notificacoes';
import Configuracoes from './src/components/Configuracoes';
import Mapa from './src/components/Mapa';
import Faq from './src/components/Faq';
import Programacao from './src/components/Programacao';
import Contatos from './src/components/Contatos';
import AddDisciplina from './src/components/presenca/AddDisciplina';

export default class App extends React.Component {
  render() {
    return (
      <AppDrawerNavigator />
    );
  }
}

const sair = () => {
  BackHandler.exitApp();
};

const CustomDrawerComponent = (props) => (
  <SafeAreaView style={{ flex: 1 }}>
    <View style={{ height: 150, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }} >
      <Image source={ require('./assets/imgs/unesp-logo.png')} 
        style={{ height: 120, width: 120 }} />
    </View>
    <ScrollView>
      <DrawerItems {...props} />
    </ScrollView>
  </SafeAreaView>
);

const AppDrawerNavigator = createDrawerNavigator({
  Início: Principal,
  Notificações: Notificacoes,
  Presencas: Presencas,
  Compartilhar: {
    screen: sair,
    navigationOptions:() => ({
      drawerIcon: ({ tintColor }) => (
        <Icon name='share' 
        type="MaterialIcons"
        style={{ fontSize: 24, color: tintColor }} />
      )
    })
  },
  Sair: {
    screen: sair,
    navigationOptions:() => ({
      drawerIcon: ({ tintColor }) => (
        <Icon name='sign-out' 
        type="Octicons"
        style={{ fontSize: 24, color: tintColor }} />
      )
    })
  },
  Mapa: {
    screen: Mapa,
    navigationOptions: {
        drawerLabel: () => null
    }
  },
  Faq: {
    screen: Faq,
    navigationOptions: {
        drawerLabel: () => null
    }
  },
  Programacao: {
    screen: Programacao,
    navigationOptions: {
        drawerLabel: () => null
    }
  },
  Contatos: {
    screen: Contatos,
    navigationOptions: {
        drawerLabel: () => null
    }
  }
}, {
  contentComponent: CustomDrawerComponent
});

