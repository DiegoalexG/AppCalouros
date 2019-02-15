import React from 'react';
import { StyleSheet, Text, View, ScrollView, ImageBackground, Dimensions, Linking, Image } from 'react-native';
import { Header, Left, Right, Icon, Button } from 'native-base';
import FaqCollapsiblePanel from './FaqCollapsiblePanel';

const banner = require('../../assets/imgs/bannerSombreado.png');
const faq = require('../../assets/imgs/faq.png');

export default class Faq extends React.Component {

  render() {
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
            <Image source={faq} style={styles.containerImg} />
            <FaqCollapsiblePanel
              titulo="Para quais plataformas o aplicativo está disponível?" 
            >
              <Text>No momento, o aplicativo conta com versōes apenas para Android.</Text>
            </FaqCollapsiblePanel>
            <FaqCollapsiblePanel
              titulo="O que exatamente é a semana dos calouros?" 
            >
              <Text>A primeira semana de aulas da FCT Unesp propõe uma série 
              de atividades que visam integrar o novo aluno à Faculdade. Através 
              dessas atividades, busca-se apresentar aos calouros os seus cursos, 
              promover a socialização entre colegas e explicar como algumas entidades 
              presentes na universidade funcionam.</Text>
            </FaqCollapsiblePanel>
            <FaqCollapsiblePanel
              titulo="Por que eu devo participar da semana dos calouros?" 
            >
              <Text>A semana dos calouros é um evento tradicional na FCT, pensado 
              exatamente para auxiliar os calouros nessa nova etapa. É a melhor 
              forma de integrar os ingressantes do ano de 2019 à realidade do 
              campus e às atividades.</Text>
            </FaqCollapsiblePanel>
            <FaqCollapsiblePanel 
              titulo="Não conheço bem o câmpus, como faço para encontrar o local das próximas atividades?"
            >
              <Text>Na aba "Mapa", localizada no menu, você terá acesso ao 
              mapa de toda a FCT Unesp com pontos de referência e suas fotos.</Text>
            </FaqCollapsiblePanel>
            <FaqCollapsiblePanel 
            titulo="A semana dos calouros se encerrou. Devo deletar o aplicativo?"
            >
              <Text>Em 2019 o aplicativo dos calouros conta com diversas novidades. 
              Agora integrado ao aplicativo, temos um feed de notícias que 
              será atualizado de acordo com pedidos realizados pelas 
              entidades da universidade. Além disso, adicionamos 
              uma área chamada "Presenças", na qual você poderá adicionar ou excluir 
              as matérias que estiver fazendo e poderá marcar suas presenças e faltas, 
              facilitando o cálculo da porcentagem, e uma área chama "Devetores", na 
              qual você poderá controlar as dívidas que outras pessoas têm com você.</Text>
            </FaqCollapsiblePanel>
            <FaqCollapsiblePanel titulo="Encontrei um bug/falha no aplicativo, como posso reportar?">
              <Text>O aplicativo estará aberto para mudanças e melhoras durante todo o 
              ano, por isso, reportar bugs é essencial para contribuir com essas melhoras. 
              Você pode nos contatar por meio do e-mail appcalouros@ejcomp.com.br para nos enviar 
              seu feedback, reportar algum erro ou bug, e até mesmo esclarecer suas 
              dúvidas (não se esqueça de especificar no assunto do e-mail).</Text>
            </FaqCollapsiblePanel>
            <FaqCollapsiblePanel 
              titulo="Tenho alguma outra dúvida que não foi tratada aqui, com quem posso conversar para tirá-la?"
            >
              <Text>No menu temos uma área chamada "Contatos", dedicada a descrever as entidades 
              presentes na universidade e disponibilizar seus contatos. A partir dessa descrição, 
              você deverá ser capaz de saber qual poderá solucionar sua dúvida.
              </Text>
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
    elevation: 20
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

