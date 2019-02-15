import React from 'react';
import { StyleSheet, Text, View, AsyncStorage, Modal, ImageBackground, Dimensions, Image, Share } from 'react-native';
import {
  Header,
  Left, Right, Icon,
  Body, Button, Fab,
  Content, Card, Row, Col,
  CardItem, Container, Spinner
} from 'native-base';

const banner = require('../../assets/imgs/bannerSombreado.png');
const caloteiro = require('../../assets/imgs/caloteiro.jpeg');

export default class Contas extends React.Component {
  static navigationOptions = {
    drawerIcon: ({ tintColor }) => (
      <Icon
        name='monetization-on'
        type="MaterialIcons"
        style={{ fontSize: 24, color: tintColor }} />
    )
  }

  constructor(props) {
    super(props);
    this.state = {
      dividas: null,
      modalVisible: false,
      indice: 0
    };
  }

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  removeDivida() {
    let dividas = this.state.dividas;
    dividas.splice(this.state.indice, 1);
    this._storeData(JSON.stringify(dividas));
    this.setState({ dividas, modalVisible: !this.state.modalVisible });
  }

  _retrieveData = async () => {
    try {
      console.log("PEGANDO DADOS");
      const value = await AsyncStorage.getItem('dividas');
      if (value !== null) this.setState({ dividas: JSON.parse(value) });
    } catch (error) {
      // Error retrieving data
    }
  }

  _storeData = async (element) => {
    try {
      await AsyncStorage.setItem('dividas', element);
    } catch (error) {
      // Error saving data
    }
  }

  async componentWillMount() {
    await this._retrieveData();
  }

  onShare = async (divida) => {
    try {

      const result = await Share.share({
        message: `Hey ${divida.devedor}, vi aqui no app da UNESP que você esta me devendo R$ ${divida.valor} desde ${divida.data} pelo motivo: ${divida.motivo}`
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      // alert(error.message);
    }
  };

  render() {

    // console.log(this.state.dividas);

    if (this.state.dividas !== null && this.state.dividas.length !== 0) {

      return (
        <View style={styles.container} >

          <Modal
            animationType="slide"
            style={styles.modal}
            visible={this.state.modalVisible}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
            }}>
            <View >
              <View style={styles.modalBody}>
                <Icon name="exclamation" type="SimpleLineIcons" style={{ color: '#fff', fontSize: 70 }} />
              </View>


              <View >

                <View>
                  <Text style={{ textAlign: 'center', fontSize: 23, fontWeight: 'bold', color: '#3E495F', marginTop: 40 }}>Alerta!</Text>

                </View>
                <View style={{ marginTop: 10 }}>
                  <Col>
                    <Text style={{ textAlign: 'center', fontSize: 16, fontWeight: 'bold', color: '#3E495F' }}>Você está preste a excluir uma divida. Você tem certeza que ele ja te pagou?</Text>
                  </Col>

                </View>
                <View style={styles.align}>
                  <Button
                    onPress={() => {
                      this.setModalVisible(!this.state.modalVisible);
                    }}
                    style={{ justifyContent: 'space-around', width: '35%', borderRadius: 20, marginTop: 50, backgroundColor: '#E2747E' }} >
                    <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}>Cancelar</Text>
                  </Button>
                  <Button
                    onPress={() => {
                      this.removeDivida();
                    }}
                    style={{ justifyContent: 'space-around', width: '35%', borderRadius: 20, marginTop: 50, backgroundColor: '#3FC59D' }} >
                    <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}>Sim</Text>
                  </Button>

                </View>
              </View>


            </View>
          </Modal>

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
          <Content>
            <Image source={caloteiro} style={styles.containerImg} />
            {this.state.dividas.map((divida, i) => {
              return (
                <Card cardBorderRadius={50} style={styles.card} key={i + 1} cardDefaultBg={"#12e1d3"}>
                  <CardItem header  >
                    <Text style={styles.fontPerson}>{divida.motivo}</Text>
                  </CardItem>
                  <CardItem>
                    <Body>
                      <Row>
                        <Col size={1} style={{ justifyContent: 'center' }}>
                          <Icon name="chevron-thin-right" type="Entypo" style={{ fontSize: 17, color: '#666' }} />
                        </Col>
                        <Col size={14} style={{ justifyContent: 'center' }}>
                          <Text style={{ color: '#666', fontSize: 17, fontFamily: 'sans-serif-light' }}>R$ {divida.valor}</Text>
                        </Col>
                      </Row>
                      <Row>
                        <Col size={1} style={{ justifyContent: 'center' }}>
                          <Icon name="chevron-thin-right" type="Entypo" style={{ fontSize: 17, color: '#666' }} />
                        </Col>
                        <Col size={14} style={{ justifyContent: 'center' }}>
                          <Text style={{ color: '#666', fontSize: 17, fontFamily: 'sans-serif-light' }}>Dia: {divida.data}</Text>
                        </Col>
                      </Row>
                      <Row>
                        <Col size={14} style={{ justifyContent: 'center' }}>
                          <Text style={{ color: '#666', fontSize: 17, fontFamily: 'sans-serif-light' }}>Devedor: {divida.devedor}</Text>
                        </Col>
                      </Row>
                    </Body>
                  </CardItem>
                  <CardItem style={styles.border}>
                    <Left>
                      <Button transparent onPress={() => { this.onShare(divida) }}>
                        <Icon name='share' type="MaterialIcons" style={{ fontSize: 25, color: '#1FD5AF' }} />
                        <Text style={{ color: '#1FD5AF', fontSize: 12, fontWeight: 'bold' }}> Notificar o caloteiro</Text>
                      </Button>
                    </Left>

                    <Right>
                      <Button transparent onPress={() => {
                        this.setState({ indice: i, modalVisible: !this.state.modalVisible });
                      }} >
                        <Icon name="x-square" type="Feather" style={{ fontSize: 25, color: '#EF3C53' }} />
                        <Text style={{ color: '#EF3C53', fontSize: 12, fontWeight: 'bold' }}> Remover Divida</Text>
                      </Button>
                    </Right>
                  </CardItem>
                </Card>

              );
            })}
          </Content>

          <Fab
            direction="up"
            containerStyle={{}}
            style={{ backgroundColor: '#5067FF' }}
            position="bottomRight"
            onPress={() => this.props.navigation.navigate('AddDivida')}
          >
            <Icon name="plus" type="Feather" />
          </Fab>

        </View>
      );
    } /*else if (this.state.disciplinas == null) {
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
          <Content>
            <Spinner />            
          </Content>
        </View>
      );
    } */

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
        <Content>
          <Image source={caloteiro} style={styles.containerImg} />
          <Text style={{ textAlign: 'center', fontSize: 20, marginTop: 25, color: 'black', fontFamily: 'sans-serif-light' }}>
            Você não tem dinheiro pra receber ou esqueceu de cadastrar
          </Text>
        </Content>

        <Fab
          direction="up"
          containerStyle={{}}
          style={{ backgroundColor: '#5067FF' }}
          position="bottomRight"
          onPress={() => this.props.navigation.navigate('AddDivida')}
        >
          <Icon name="plus" type="Feather" />
        </Fab>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee'
  },
  fontPerson: {
    fontSize: 18,
    fontWeight: '800',
    fontFamily: 'sans-serif-light'
  },
  card: {
    marginTop: 10,
    marginLeft: 20,
    marginBottom: 10,
    marginRight: 20
  },
  border: {
    paddingRight: 0,
    paddingLeft: 0,
    marginLeft: 10,
    marginRight: 10,
    borderTopWidth: 0.5,
    borderTopColor: '#777'
  },
  modalBody: {
    flexDirection: 'column',
    justifyContent: 'center',
    height: '70%',
    backgroundColor: '#f7b529',
    alignItems: 'center'
  },
  align: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  containerImg: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: 180,
    resizeMode: 'cover',
    marginBottom: 10
  }
});

