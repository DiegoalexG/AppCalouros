import React from 'react';
import { StyleSheet, Text, ImageBackground, Dimensions, View, ScrollView, Image } from 'react-native';
import { Header, Left, Right, Icon, Button, Picker, Form, Item } from 'native-base';
import { Font } from 'expo';

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
            <View style={styles.bloco}>
              <Text style={[styles.blocoText, styles.blocoTextHora]}>08:00</Text>
              <View style={[styles.blocoText, { flex: 3, justifyContent: 'space-around' }]}>
                <Text style={styles.blocoTextAtiv}>
                  Palestra com o diretor e fala dos estudantes | Boas vindas.
                </Text>
                <Text style={styles.blocoTextAtiv}>
                  Local: Ginásio de esportes.
                </Text>
              </View>
            </View>
            <View style={[styles.bloco, { backgroundColor: '#f2f2f2' }]}>
              <Text style={[styles.blocoText, styles.blocoTextHora]}>14:00</Text>
              <View style={[styles.blocoText, { flex: 3, justifyContent: 'space-around' }]}>
                <Text style={styles.blocoTextAtiv}>
                  Concentração para os stands.
                </Text>
                <Text style={styles.blocoTextAtiv}>
                  Local: Discente I.
                </Text>
              </View>
            </View>
            <View style={styles.bloco}>
              <Text style={[styles.blocoText, styles.blocoTextHora]}>16:00</Text>
              <View style={[styles.blocoText, { flex: 3, justifyContent: 'space-around' }]}>
                <Text style={styles.blocoTextAtiv}>
                  Sunset gramado.
                </Text>
                <Text style={styles.blocoTextAtiv}>
                  Local: Gramado do museu.
                </Text>
              </View>
            </View>
          </View>
        );
        break;
      case ('terca'):
        componenteDia = (
          <View>
            <Text style={styles.titulo}>Terça-feira</Text>
            <View style={styles.bloco}>
              <Text style={[styles.blocoText, styles.blocoTextHora]}>08:00</Text>
              <View style={[styles.blocoText, { flex: 3, justifyContent: 'space-around' }]}>
                <Text style={styles.blocoTextAtiv}>
                  Aula inaugural.
                </Text>
                <Text style={styles.blocoTextAtiv}>
                  Local: será anunciado.
                </Text>
              </View>
            </View>
            <View style={[styles.bloco, { backgroundColor: '#f2f2f2' }]}>
              <Text style={[styles.blocoText, styles.blocoTextHora]}>10:00</Text>
              <View style={[styles.blocoText, { flex: 3, justifyContent: 'space-around' }]}>
                <Text style={styles.blocoTextAtiv}>
                  Filme - D.A.
                </Text>
                <Text style={styles.blocoTextAtiv}>
                  Local: Biblioteca.
                </Text>
              </View>
            </View>
            <View style={styles.bloco}>
              <Text style={[styles.blocoText, styles.blocoTextHora]}>14:00</Text>
              <View style={[styles.blocoText, { flex: 3, justifyContent: 'space-around' }]}>
                <Text style={styles.blocoTextAtiv}>
                  Reconhecimento do câmpus (Cacau + Moradia).
                </Text>
                <Text style={styles.blocoTextAtiv}>
                  Local: Discente I.
                </Text>
              </View>
            </View>
            <View style={[styles.bloco, { backgroundColor: '#f2f2f2' }]}>
              <Text style={[styles.blocoText, styles.blocoTextHora]}>16:00</Text>
              <View style={[styles.blocoText, { flex: 3, justifyContent: 'space-around' }]}>
                <Text style={styles.blocoTextAtiv}>
                  Oficina de criatividade (Ópera Krios).
                </Text>
                <Text style={styles.blocoTextAtiv}>
                  Local: Sala do rato (Ateliê).
                </Text>
              </View>
            </View>
            <View style={styles.bloco}>
              <Text style={[styles.blocoText, styles.blocoTextHora]}>18:00</Text>
              <View style={[styles.blocoText, { flex: 3, justifyContent: 'space-around' }]}>
                <Text style={styles.blocoTextAtiv}>
                  Yoga.
                </Text>
                <Text style={styles.blocoTextAtiv}>
                  Local: Gramado do museu.
                </Text>
              </View>
            </View>
            <View style={[styles.bloco, { backgroundColor: '#f2f2f2' }]}>
              <Text style={[styles.blocoText, styles.blocoTextHora]}>20:00</Text>
              <View style={[styles.blocoText, { flex: 3, justifyContent: 'space-around' }]}>
                <Text style={styles.blocoTextAtiv}>
                  Histórico do movimento estudantil - D.A.
                </Text>
                <Text style={styles.blocoTextAtiv}>
                  Local: D.A.
                </Text>
              </View>
            </View>
          </View>
        );
        break;
      case ('quarta'):
        componenteDia = (
          <View>
            <Text style={styles.titulo}>Quarta-feira</Text>
            <View style={styles.bloco}>
              <Text style={[styles.blocoText, styles.blocoTextHora]}>08:00</Text>
              <View style={[styles.blocoText, { flex: 3, justifyContent: 'space-around' }]}>
                <Text style={styles.blocoTextAtiv}>
                  Desafio do calouro - D.A.
                </Text>
                <Text style={styles.blocoTextAtiv}>
                  Local: Ginásio de esportes.
                </Text>
              </View>
            </View>
            <View style={[styles.bloco, { backgroundColor: '#f2f2f2' }]}>
              <Text style={[styles.blocoText, styles.blocoTextHora]}>14:00</Text>
              <View style={[styles.blocoText, { flex: 3, justifyContent: 'space-around' }]}>
                <Text style={styles.blocoTextAtiv}>
                  Integra calouro - Atlética
                </Text>
                <Text style={styles.blocoTextAtiv}>
                  Local: Ginásio de esportes
                </Text>
              </View>
            </View>
            <View style={styles.bloco}>
              <Text style={[styles.blocoText, styles.blocoTextHora]}>14:00</Text>
              <View style={[styles.blocoText, { flex: 3, justifyContent: 'space-around' }]}>
                <Text style={styles.blocoTextAtiv}>
                  Palestra saúde mental - Direção.
                </Text>
                <Text style={styles.blocoTextAtiv}>
                  Local: Anfiteatro 3.
                </Text>
              </View>
            </View>
            <View style={[styles.bloco, { backgroundColor: '#f2f2f2' }]}>
              <Text style={[styles.blocoText, styles.blocoTextHora]}>17:00</Text>
              <View style={[styles.blocoText, { flex: 3, justifyContent: 'space-around' }]}>
                <Text style={styles.blocoTextAtiv}>
                  Assembleia geral - D.A.
                </Text>
                <Text style={styles.blocoTextAtiv}>
                  Local: Anfiteatro 1.
                </Text>
              </View>
            </View>
            <View style={styles.bloco}>
              <Text style={[styles.blocoText, styles.blocoTextHora]}>20:00</Text>
              <View style={[styles.blocoText, { flex: 3, justifyContent: 'space-around' }]}>
                <Text style={styles.blocoTextAtiv}>
                  Palestra saúde mental - Direção.
                </Text>
                <Text style={styles.blocoTextAtiv}>
                  Local: Anfiteatro 1.
                </Text>
              </View>
            </View>
          </View>
        );
        break;
      case ('quinta'):
        componenteDia = (
          <View>
            <Text style={styles.titulo}>Quinta-feira</Text>
            <View style={styles.bloco}>
              <Text style={[styles.blocoText, styles.blocoTextHora]}>08:00</Text>
              <View style={[styles.blocoText, { flex: 3, justifyContent: 'space-around' }]}>
                <Text style={styles.blocoTextAtiv}>
                  Saída de onibus para doação de sangue - Direção.
                </Text>
                <Text style={styles.blocoTextAtiv}>
                  Local: Direção.
                </Text>
              </View>
            </View>
            <View style={[styles.bloco, { backgroundColor: '#f2f2f2' }]}>
              <Text style={[styles.blocoText, styles.blocoTextHora]}>08:00</Text>
              <View style={[styles.blocoText, { flex: 3, justifyContent: 'space-around' }]}>
                <Text style={styles.blocoTextAtiv}>
                  Oficina de maracatu - D.A.
                </Text>
                <Text style={styles.blocoTextAtiv}>
                  Local: Direção.
                </Text>
              </View>
            </View>
            <View style={styles.bloco}>
              <Text style={[styles.blocoText, styles.blocoTextHora]}>14:00</Text>
              <View style={[styles.blocoText, { flex: 3, justifyContent: 'space-around' }]}>
                <Text style={styles.blocoTextAtiv}>
                  Integra calouro - Atlética
                </Text>
                <Text style={styles.blocoTextAtiv}>
                  Local: Educa.
                </Text>
              </View>
            </View>
            <View style={[styles.bloco, { backgroundColor: '#f2f2f2' }]}>
              <Text style={[styles.blocoText, styles.blocoTextHora]}>14:00</Text>
              <View style={[styles.blocoText, { flex: 3, justifyContent: 'space-around' }]}>
                <Text style={styles.blocoTextAtiv}>
                  Dança - Performance Jr
                </Text>
                <Text style={styles.blocoTextAtiv}>
                  Local: Educa.
                </Text>
              </View>
            </View>
            <View style={styles.bloco}>
              <Text style={[styles.blocoText, styles.blocoTextHora]}>14:00</Text>
              <View style={[styles.blocoText, { flex: 3, justifyContent: 'space-around' }]}>
                <Text style={styles.blocoTextAtiv}>
                  Rotina de treino Pegasus - Pegasus
                </Text>
                <Text style={styles.blocoTextAtiv}>
                  Local: Educa.
                </Text>
              </View>
            </View>
            <View style={[styles.bloco, { backgroundColor: '#f2f2f2' }]}>
              <Text style={[styles.blocoText, styles.blocoTextHora]}>14:00</Text>
              <View style={[styles.blocoText, { flex: 3, justifyContent: 'space-around' }]}>
                <Text style={styles.blocoTextAtiv}>
                  Ensaio Bateria Furiosa - Bateria Furiosa.
                </Text>
                <Text style={styles.blocoTextAtiv}>
                  Local: Educa.
                </Text>
              </View>
            </View>
            <View style={styles.bloco}>
              <Text style={[styles.blocoText, styles.blocoTextHora]}>17:00</Text>
              <View style={[styles.blocoText, { flex: 3, justifyContent: 'space-around' }]}>
                <Text style={styles.blocoTextAtiv}>
                  Roda de capoeira - (Grupo de capoeira).
                </Text>
                <Text style={styles.blocoTextAtiv}>
                  Local: Educa.
                </Text>
              </View>
            </View>
            <View style={[styles.bloco, { backgroundColor: '#f2f2f2' }]}>
              <Text style={[styles.blocoText, styles.blocoTextHora]}>19:00</Text>
              <View style={[styles.blocoText, { flex: 3, justifyContent: 'space-around' }]}>
                <Text style={styles.blocoTextAtiv}>
                  Atividade coletivo mãos negras - (Coletivo).
                </Text>
                <Text style={styles.blocoTextAtiv}>
                  Local: Anfiteatro 1.
                </Text>
              </View>
            </View>
          </View>
        );
        break;
      default:
        componenteDia = (
          <View>
            <Text style={styles.titulo}>Sexta-feira</Text>
            <View style={styles.bloco}>
              <Text style={[styles.blocoText, styles.blocoTextHora]}>08:00</Text>
              <View style={[styles.blocoText, { flex: 3, justifyContent: 'space-around' }]}>
                <Text style={styles.blocoTextAtiv}>
                  Atividade coletivo mãos negras - (Coletivo).
                </Text>
                <Text style={styles.blocoTextAtiv}>
                  Local: Anfiteatro 1.
                </Text>
              </View>
            </View>
            <View style={[styles.bloco, { backgroundColor: '#f2f2f2' }]}>
              <Text style={[styles.blocoText, styles.blocoTextHora]}>14:00</Text>
              <View style={[styles.blocoText, { flex: 3, justifyContent: 'space-around' }]}>
                <Text style={styles.blocoTextAtiv}>
                  Show da química - (Trupe)
                </Text>
                <Text style={styles.blocoTextAtiv}>
                  Local: Biblioteca.
                </Text>
              </View>
            </View>
            <View style={styles.bloco}>
              <Text style={[styles.blocoText, styles.blocoTextHora]}>14:00</Text>
              <View style={[styles.blocoText, { flex: 3, justifyContent: 'space-around' }]}>
                <Text style={styles.blocoTextAtiv}>
                  Discussão: impactos sociais, econômicos e ambientais do desastre de Brumadinho - MG - (CAEA + GEOAMB).
                </Text>
                <Text style={styles.blocoTextAtiv}>
                  Local: Anfiteatro 2.
                </Text>
              </View>
            </View>
            <View style={[styles.bloco, { backgroundColor: '#f2f2f2' }]}>
              <Text style={[styles.blocoText, styles.blocoTextHora]}>14:00</Text>
              <View style={[styles.blocoText, { flex: 3, justifyContent: 'space-around' }]}>
                <Text style={styles.blocoTextAtiv}>
                  Oficina papel reciclável - (Coletivo cooperação).
                </Text>
                <Text style={styles.blocoTextAtiv}>
                  Local: Sala do rato (Ateliê).
                </Text>
              </View>
            </View>
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
        <View style={styles.corpoView}>
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
  corpoView: {
    flex: 1,
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
  },
  bloco: {
    flex: 1,
    flexDirection: 'row',
  },
  blocoText: {
    height: 100,
    fontSize: 16,
    textAlign: 'center',
    color: '#fdf6ec',
    borderBottomWidth: 2,
    borderColor: '#a2a2a2'
  },
  blocoTextHora: {
    flex: 1, 
    color: 'black', 
    textAlignVertical: 'center', 
  },
  blocoTextAtiv: {
    fontSize: 14,
    textAlign: 'center',
    color: 'black',
  }
});
