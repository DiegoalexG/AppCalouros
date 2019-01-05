import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View, StatusBar } from 'react-native';
import { Container, Header, Left, Right, Icon, Body, Button, Title } from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";

export default class Principal extends React.Component {

  static navigationOptions = {
    drawerIcon: ({ tintColor }) => (
      <Icon name='home' style={{ fontSize: 24, color: tintColor }} />
    )
  }

  componentDidMount() {
       StatusBar.setHidden(true);
  }

  render() {
    return (
      <Container >
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
        <Grid>    
          <Row>
            <Col style={{ backgroundColor: '#ffffff'}, styles.principal}>
              <View>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Programacao')} >
                  <Icon name='calendar' type='FontAwesome' style={{ fontSize: 54, color: 'red', alignSelf: 'center' }} />
                  <Text style={styles.textoBotao}>Programação</Text>
                </TouchableOpacity>
              </View>
            </Col>
            <Col style={[{ backgroundColor: '#0191ea'}, styles.principal]}>
              <View>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Contatos')} >
                  <Icon name='people' type='MaterialIcons' style={{ fontSize: 54, color: 'white', alignSelf: 'center' }} />
                  <Text style={styles.textoBotao}>Contatos</Text>
                </TouchableOpacity>
              </View>
            </Col>
          </Row>
          <Row>
            <Col style={[{ backgroundColor: '#E8B336'}, styles.principal]}>
              <View>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Mapa')} >
                  <Icon name='map' type='Foundation' style={{ fontSize: 54, color: '#00B336', alignSelf: 'center' }} />
                  <Text style={styles.textoBotao}>Mapa</Text>
                </TouchableOpacity>
              </View>
            </Col>
            <Col style={[{ backgroundColor: '#fb3e05'}, styles.principal]}>
              <View>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Faq')} >
                  <Icon name='question-answer' type='MaterialIcons' style={{ fontSize: 54, color: '#FBB442', alignSelf: 'center' }} />
                  <Text style={styles.textoBotao}>F.A.Q</Text>
                </TouchableOpacity>
              </View>
            </Col>
          </Row>
        </Grid>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  principal: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textoBotao: {
    fontSize: 23,
    color: '#273238',
    fontWeight: 'bold'
  }
});

