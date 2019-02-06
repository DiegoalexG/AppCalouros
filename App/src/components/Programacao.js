import React from 'react';
import { StyleSheet, Text, ImageBackground, Dimensions, View, ScrollView, Image } from 'react-native';
import { Header, Left, Right, Icon, Button, Picker, Form, Item } from 'native-base';
import { Font, LinearGradient } from 'expo';
import ProgramacaoHorario from './ProgramacaoHorario';

const banner = require('../../assets/imgs/bannerSombreado.png');
const programacao = require('../../assets/imgs/programacao.png');

export default class Programacao extends React.Component {
  state = {
    dia: ''
  }

  mudarDia = (dia) => {
    this.setState({ dia: dia });
  }

  componentDidMount() {
    Font.loadAsync({
      'theboldfont': require('../../assets/fonts/theboldfont.ttf'),
    });
    Font.loadAsync({
      'open-sans': require('../../assets/fonts/OpenSans-Regular.ttf'),
    });
  }

  render() {
    let componenteDia;
    switch (this.state.dia) {
      case (''):
        componenteDia = <View />;
        break;
      case ('segunda'):
        componenteDia = (
          <View>
            <Text style={styles.titulo}>Segunda-feira</Text>
            <ProgramacaoHorario 
              hora="08:00" 
              atividade="Palestra com o diretor e fala dos estudantes | Boas vindas." 
              local="Local: Ginásio de Esportes."
              corPrim='#08C1FE'
              corSec='#2065CA'
              isGrey='n'
            />
            <ProgramacaoHorario 
              hora="14:00" 
              atividade="Concentração para os stands." 
              local="Local: Discente I." 
              corPrim='#2065CA'
              corSec='#2846B9'
              isGrey='s'
            />
            <ProgramacaoHorario 
              hora="16:00" 
              atividade="Sunset gramado." 
              local="Local: Gramado do museu." 
              corPrim='#2846B9'
              corSec='#3027A8'
              isGrey='n'
            />
          </View>
        );
        break;
      case ('terca'):
        componenteDia = (
          <View>
            <Text style={styles.titulo}>Terça-feira</Text>
            <ProgramacaoHorario 
              hora="08:00" 
              atividade="Aula inaugural." 
              local="Local: será anunciado."
              corPrim='#08C1FE'
              corSec='#10A2EC'
              isGrey='n'
            />
            <ProgramacaoHorario 
              hora="10:00" 
              atividade="Filme - D.A." 
              local="Local: Biblioteca."
              corPrim='#10A2EC'
              corSec='#2065CA'
              isGrey='s'
            />
            <ProgramacaoHorario 
              hora="14:00" 
              atividade="Reconhecimento do câmpus (Cacau + Moradia)." 
              local="Local: Discente I."
              corPrim='#2065CA'
              corSec='#2846B9'
              isGrey='n'
            />
            <ProgramacaoHorario 
              hora="16:00" 
              atividade="Oficina de criatividade (Ópera Krios)."
              local="Local: Sala do rato (Ateliê)."
              corPrim='#2846B9'
              corSec='#3027A8'
              isGrey='s'
            />
            <ProgramacaoHorario 
              hora="18:00" 
              atividade="Yoga."
              local="Local: Gramado do museu."
              corPrim='#3027A8'
              corSec='#380997'
              isGrey='n'
            />
            <ProgramacaoHorario 
              hora="20:00" 
              atividade="Histórico do movimento estudantil - D.A."
              local="Local: D.A."
              corPrim='#380997'
              corSec='#320490'
              isGrey='s'
            />
          </View>
        );
        break;
      case ('quarta'):
        componenteDia = (
          <View>
            <Text style={styles.titulo}>Quarta-feira</Text>
            <ProgramacaoHorario 
              hora="08:00" 
              atividade="Desafio do calouro - D.A."
              local="Local: Ginásio de esportes."
              corPrim='#08C1FE'
              corSec='#2065CA'
              isGrey='n'
            />
            <ProgramacaoHorario 
              hora="14:00" 
              atividade="Integra calouro - Atlética."
              local="Local: Ginásio de esportes."
              corPrim='#2065CA'
              corSec='#2065CA'
              isGrey='s'
            />
            <ProgramacaoHorario 
              hora="14:00" 
              atividade="Palestra saúde mental - Direção."
              local="Local: Anfiteatro 3."
              corPrim='#2065CA'
              corSec='#2C37B0'
              isGrey='n'
            />
            <ProgramacaoHorario 
              hora="17:00" 
              atividade="Assembleia geral - D.A."
              local="Local: Anfiteatro 1."
              corPrim='#2C37B0'
              corSec='#380997'
              isGrey='s'
            />
            <ProgramacaoHorario 
              hora="20:00" 
              atividade="Palestra saúde mental - Direção."
              local="Local: Anfiteatro 1."
              corPrim='#380997'
              corSec='#320490'
              isGrey='n'
            />
          </View>
        );
        break;
      case ('quinta'):
        componenteDia = (
          <View>
            <Text style={styles.titulo}>Quinta-feira</Text>
            <ProgramacaoHorario 
              hora="08:00" 
              atividade="Saída de onibus para doação de sangue - Direção."
              local="Local: Direção."
              corPrim='#08C1FE'
              corSec='#08C1FE'
              isGrey='n'
            />
            <ProgramacaoHorario 
              hora="08:00" 
              atividade="Oficina de maracatu - D.A."
              local="Local: Direção."
              corPrim='#08C1FE'
              corSec='#2065CA'
              isGrey='s'
            />
            <ProgramacaoHorario 
              hora="14:00" 
              atividade="Integra calouro - Atlética."
              local="Local: Educa."
              corPrim='#2065CA'
              corSec='#2065CA'
              isGrey='n'
            />
            <ProgramacaoHorario 
              hora="14:00" 
              atividade="Dança - Performance Jr."
              local="Local: Educa."
              corPrim='#2065CA'
              corSec='#2065CA'
              isGrey='s'
            />
            <ProgramacaoHorario 
              hora="14:00" 
              atividade="Rotina de treino Pegasus - Pegasus."
              local="Local: Educa."
              corPrim='#2065CA'
              corSec='#2065CA'
              isGrey='n'
            />
            <ProgramacaoHorario 
              hora="14:00" 
              atividade="Ensaio Bateria Furiosa - Bateria Furiosa."
              local="Local: Educa."
              corPrim='#2065CA'
              corSec='#2C37B0'
              isGrey='s'
            />
            <ProgramacaoHorario 
              hora="17:00" 
              atividade="Roda de capoeira - (Grupo de capoeira)."
              local="Local: Educa."
              corPrim='#2C37B0'
              corSec='#34189F'
              isGrey='n'
            />
            <ProgramacaoHorario 
              hora="19:00" 
              atividade="Atividade coletivo mãos negras - (Coletivo)."
              local="Local: Anfiteatro 1."
              corPrim='#34189F'
              corSec='#320490'
              isGrey='s'
            />
          </View>
        );
        break;
      default:
        componenteDia = (
          <View>
            <Text style={styles.titulo}>Sexta-feira</Text>
            <ProgramacaoHorario 
              hora="08:00" 
              atividade="Atividade coletivo mãos negras - (Coletivo)."
              local="Local: Anfiteatro 1."
              corPrim='#08C1FE'
              corSec='#2065CA'
              isGrey='n'
            />
            <ProgramacaoHorario 
              hora="14:00" 
              atividade="Show da química - (Trupe)."
              local="Local: Biblioteca."
              corPrim='#2065CA'
              corSec='#2065CA'
              isGrey='s'
            />
            <ProgramacaoHorario 
              hora="14:00" 
              atividade="Discussão: impactos sociais, econômicos e ambientais do desastre de Brumadinho - MG - (CAEA + GEOAMB)."
              local="Local: Anfiteatro 2."
              corPrim='#2065CA'
              corSec='#2065CA'
              isGrey='n'
            />
            <ProgramacaoHorario 
              hora="14:00" 
              atividade="Oficina papel reciclável - (Coletivo cooperação)."
              local="Local: Sala do rato (Ateliê)."
              corPrim='#2065CA'
              corSec='#2846B9'
              isGrey='s'
            />
          </View>
        );
        break;
    }
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
        <View style={styles.container}>
          <ScrollView>
            <Image source={programacao} style={styles.containerImg} />
            <Form style={{ alignItems: 'center' }}>
              <Item picker style={styles.picker}>
                <Picker
                  mode="dropdown" 
                  selectedValue={this.state.dia} 
                  onValueChange={this.mudarDia}>
                  <Picker.Item label="Selecione um dia da semana" value="" />
                  <Picker.Item label="segunda-feira" value="segunda" />
                  <Picker.Item label="terça-feira" value="terca" />
                  <Picker.Item label="quarta-feira" value="quarta" />
                  <Picker.Item label="quinta-feira" value="quinta" />
                  <Picker.Item label="sexta-feira" value="sexta" />
                </Picker>
              </Item>
            </Form>
            <View style={{ marginTop: 20, flex: 1 }}>{componenteDia}</View>
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  containerImg: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: 180,
    resizeMode: 'cover'
  },
  sombra: {
    elevation: 20
  },
  titulo: {
    textAlign: 'center',
    borderWidth: 2,
    borderColor: 'black',
    fontFamily: 'theboldfont',
    fontSize: 30,
    backgroundColor: 'black',
    color: 'white'
  },
  picker: {
    margin: 20,
    marginLeft: 25,
    marginBottom: 0,
    alignItems: 'center',
    height: 50, 
    width: 300,
    backgroundColor: '#DADDE2',
    borderRadius: 20
  }
});
