import React from 'react';
import { StyleSheet, Text, View, AsyncStorage, Modal, ImageBackground, Dimensions, Image } from 'react-native';
import { Header, 
  Left, Right, Icon, 
  Body, Button, Fab, 
  Content, Card, Row, Col,
   CardItem, Container, Spinner } from 'native-base';

const banner = require('../../assets/imgs/bannerSombreado.png');
const contatos = require('../../assets/imgs/presencas.png');

export default class Presencas extends React.Component {
  static navigationOptions = {
    drawerIcon: ({ tintColor }) => (
      <Icon 
      name='beenhere' 
      type="MaterialIcons"
      style={{ fontSize: 24, color: tintColor }} />
    )
  }

  constructor(props) {
    super(props);
    this.state = {
      disciplinas: null,
      modalVisible: false,
      indice: 0
    };
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  removeDisciplina() {
       let disciplinas = this.state.disciplinas;
        disciplinas.splice(this.state.indice, 1);
        this._storeData(JSON.stringify(disciplinas));
        this.setState({ disciplinas, modalVisible: !this.state.modalVisible });
  }

  _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('disciplinas');
      if (value !== null) this.setState({ disciplinas: JSON.parse(value) }); 
     } catch (error) {
       // Error retrieving data
     }
  }

  _storeData = async (element) => {
    try {
      await AsyncStorage.setItem('disciplinas', element);
    } catch (error) {
      // Error saving data
    }
  }

  componentWillMount() {
   this._retrieveData();
  }

  render() {
    
    if (this.state.disciplinas !== null && this.state.disciplinas.length !== 0) {   
 
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
                      <Text style={{ textAlign: 'center', fontSize: 16, fontWeight: 'bold', color: '#3E495F' }}>Você está preste a excluir uma disciplina. Você tem certeza?</Text>
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
                          this.removeDisciplina();
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
            <Image source={contatos} style={styles.containerImg} />
           { this.state.disciplinas.map( (disc, i) => {
            return(
              <Card cardBorderRadius={50} style={styles.card} key={i+1} cardDefaultBg={"#12e1d3"}>
                <CardItem header  >
                  <Text style={styles.fontPerson}>{disc.nome}</Text>                          
                </CardItem>
                <CardItem>
                  <Body>
                    <Row>
                      <Col size={1} style={{ justifyContent: 'center'}}>
                        <Icon name="chevron-thin-right" type="Entypo" style={{ fontSize: 17, color: '#666'}} />
                        </Col>
                      <Col size={14} style={{ justifyContent: 'center'}}>
                        <Text style={{ color: '#666', fontSize: 17, fontFamily: 'sans-serif-light' }}>{ ((disc.presenca / disc.aulas)*100).toFixed(1)}% de presença</Text>
                      </Col>
                    </Row>
                    <Row>
                      <Col size={1} style={{ justifyContent: 'center'}}>
                        <Icon name="chevron-thin-right" type="Entypo" style={{ fontSize: 17, color: '#666'}} />
                      </Col>
                      <Col size={14} style={{ justifyContent: 'center'}}>
                        <Text style={{ color: '#666', fontSize: 17, fontFamily: 'sans-serif-light' }}>{ disc.falta } faltas</Text>
                      </Col>
                    </Row>
                  </Body>
                </CardItem>
                <CardItem style={styles.border}>
                  <Left>
                    <Button transparent onPress={() => {
                      let disciplinas = this.state.disciplinas;
                      disciplinas[i].presenca -= 0.8333334;
                      disciplinas[i].falta++;
                      this._storeData(JSON.stringify(disciplinas));
                      this.setState({ disciplinas });
                    }} >
                      <Icon name="plus-square" type="Feather" style={{ fontSize: 25, color: '#1FD5AF'}} />
                      <Text style={{ color: '#1FD5AF', fontSize: 15, fontWeight: 'bold' }}> Adicionar Faltas</Text>
                    </Button>
                  </Left>
                  
                  <Right>
                     <Button transparent onPress={() => {
  
                      this.setState({ indice: i, modalVisible: !this.state.modalVisible });
                    }} >
                      <Icon name="x-square" type="Feather" style={{ fontSize: 25, color: '#EF3C53'}} />
                      <Text style={{ color: '#EF3C53', fontSize: 15, fontWeight: 'bold' }}> Remover Disciplina</Text>
                    </Button>
                  </Right>
                </CardItem>
              </Card>

            );
           }) }              
          </Content>    
            
          <Fab       
            direction="up"
            containerStyle={{ }}
            style={{ backgroundColor: '#5067FF' }}
            position="bottomRight"
            onPress={() => this.props.navigation.navigate('AddDisciplina')} 
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
          <Text style={{ textAlign: 'center', fontSize: 20, marginTop: 25, color: 'black', fontFamily: 'sans-serif-light' }}>
            Nenhuma Disciplina Adicionada
          </Text>
        </Content>    
          
        <Fab       
          direction="up"
          containerStyle={{ }}
          style={{ backgroundColor: '#5067FF' }}
          position="bottomRight"
          onPress={() => this.props.navigation.navigate('AddDisciplina')} 
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
    fontSize: 23,
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
    resizeMode: 'cover'
  }
});

