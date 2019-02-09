import React from 'react';
import { StyleSheet, Text, View, AsyncStorage, Modal, TouchableHighlight, ImageBackground, Dimensions } from 'react-native';
import { Header, Left, 
  Right, Icon, 
  Body, Button, 
  Content, Form, 
  Item, Input, 
  Container, Label,
  Row, Col } from 'native-base';

const banner = require('../../../assets/imgs/bannerSombreado.png');

export default class AddDisciplina extends React.Component {


  constructor(props) {
    super(props);

    this.state = {
      nome: '',
      quantHoras: '',
      disciplinas: null,
      modalVisible: false
    };
  }

  componentWillMount() {
   this._retrieveData();
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

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }


  saveData = () => {
  
    if (this.state.disciplinas !== null) {
      let disciplinas = this.state.disciplinas;
      disciplinas.push({ nome: this.state.nome, aulas: this.state.quantHoras, presenca: this.state.quantHoras, falta: 0 });
      AsyncStorage.setItem('disciplinas', JSON.stringify(disciplinas));  
     
    } else {     
        let disciplinas = [];
        disciplinas.push({ nome: this.state.nome, aulas: this.state.quantHoras, presenca: this.state.quantHoras, falta: 0 });
        this._storeData(JSON.stringify(disciplinas));        
    }

    this.setState({ nome: '', quantHoras: '', modalVisible: true });

  }

  render() {
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
                <Icon name="check" type="SimpleLineIcons" style={{ color: '#fff', fontSize: 70 }} />
              </View>

                
              <View >
               
                  <View>
                      <Text style={{ textAlign: 'center', fontSize: 23, fontWeight: 'bold', color: '#3E495F', marginTop: 40 }}>Sucesso!</Text>
                    
                  </View>
                  <View style={{ marginTop: 10 }}>
                    <Col>
                      <Text style={{ textAlign: 'center', fontSize: 16, fontWeight: 'bold', color: '#3E495F' }}>Nova disciplina adicionada.</Text>
                    </Col>

                  </View>
                  <View style={styles.align}>                    
                      <Button 
                        onPress={() => {
                          this.setModalVisible(!this.state.modalVisible);
                        }}
                        style={{ justifyContent: 'space-around', width: '35%', borderRadius: 20, marginTop: 40, backgroundColor: '#E2747E' }} >
                        <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}>Fechar</Text>
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
                  <Icon name='arrow-left' type="Feather" onPress={() => this.props.navigation.navigate('Presencas')} />
                </Button>
              </Left>
              <Right />
            </Header>
        </ImageBackground>       
        <Container>
        
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Nome da Disciplina</Label>
              <Input value={this.state.nome} onChangeText={(nome) => this.setState({ nome })} />
            </Item>
            <Item floatingLabel last>
              <Label>Quantidade de horas</Label>
              <Input value={this.state.quantHoras} keyboardType="numeric" onChangeText={(quantHoras) => this.setState({ quantHoras })} />
            </Item>

          </Form>  
          <View style={{ flexDirection:'row', justifyContent: 'center' }} >
            <Button 
              onPress={this.saveData}
              style={{ justifyContent: 'center', width: '92%', marginTop: 40 }} >
              <Text style={{ color: 'white', fontWeight: 'bold' }}>Confirmar</Text>
            </Button>        
          </View>
        </Content>

      </Container>
      </View>
     
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  modalBody: {
    flexDirection: 'column',
    justifyContent: 'center',
    height: '70%',
    backgroundColor: '#3FC59D',
    alignItems: 'center'    
  },
  align: {
    flexDirection: 'row',
    justifyContent: 'center'
  }
});

