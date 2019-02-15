import React from 'react';
import { View, SafeAreaView, ScrollView, Image, BackHandler, Share } from 'react-native';
import { createDrawerNavigator, DrawerItems } from 'react-navigation';
import { Icon } from 'native-base';
import Expo from 'expo';
import Principal from './src/components/Principal';
import Presencas from './src/components/Presencas';
import Notificacoes from './src/components/Notificacoes';
import Mapa from './src/components/Mapa';
import Faq from './src/components/Faq';
import Programacao from './src/components/Programacao';
import Contatos from './src/components/Contatos';
import Contas from './src/components/Contas';
import AddDisciplina from './src/components/presenca/AddDisciplina';
import AddDivida from './src/components/AddDivida';


async function register() {
  const { status } = await Expo.Permissions.askAsync(
    Expo.Permissions.NOTIFICATIONS
  );

  if(status !== 'granted'){
    alert('Você deve permitir notificações!');
    return;
  }

  const token = await Expo.Notifications.getExpoPushTokenAsync();
  console.log(status, token);
}

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

const compartilhar = async () => {
    try {
      const result = await Share.share({
        message: "Hey, você conhece o app da FCT UNESP? Nele você pode blablabla"
      });
    } catch (error) {}
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
  Devedores: Contas,
  Compartilhar: {
    screen: compartilhar,
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
  AddDisciplina: {
    screen: AddDisciplina,
    navigationOptions: {
        drawerLabel: () => null
    }
  },
  AddDivida: {
    screen: AddDivida,
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

