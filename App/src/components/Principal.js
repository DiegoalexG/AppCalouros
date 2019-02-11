import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View, ImageBackground, Dimensions, StatusBar } from 'react-native';
import { Container, Header, Left, Right, Icon, Button } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Font } from 'expo';

const banner = require('../../assets/imgs/bannerSombreado.png');

export default class Principal extends React.Component {

  static navigationOptions = {
    drawerIcon: ({ tintColor }) => (
      <Icon name='home' style={{ fontSize: 24, color: tintColor }} />
    )
  }

  componentDidMount() {
    Font.loadAsync({
      'theboldfont': require('../../assets/fonts/theboldfont.ttf'),
      'open-sans': require('../../assets/fonts/OpenSans-Regular.ttf'),
      'open-sans-bold': require('../../assets/fonts/OpenSans-Bold.ttf')
    });
    StatusBar.setHidden(true);
  }

  render() {
    return (
      <Container >
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
        <Grid>    
          <Row>
            <Col style={[{ backgroundColor: '#0191EA' }, styles.principal]}>
              <View>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Programacao')} >
                  <Icon name='calendar' type='FontAwesome' style={{ fontSize: 54, color: 'white', alignSelf: 'center' }} />
                  <Text style={styles.textoBotao}>Programação</Text>
                </TouchableOpacity>
              </View>
            </Col>
            <Col style={[{ backgroundColor: '#0180DE' }, styles.principal]}>
              <View>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Contatos')} >
                  <Icon name='people' type='MaterialIcons' style={{ fontSize: 54, color: 'white', alignSelf: 'center' }} />
                  <Text style={styles.textoBotao}>Contatos</Text>
                </TouchableOpacity>
              </View>
            </Col>
          </Row>
          <Row>
            <Col style={[{ backgroundColor: '#0170D3' }, styles.principal]}>
              <View>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Mapa')} >
                  <Icon name='map' type='Foundation' style={{ fontSize: 54, color: 'white', alignSelf: 'center' }} />
                  <Text style={styles.textoBotao}>Mapa</Text>
                </TouchableOpacity>
              </View>
            </Col>
            <Col style={[{ backgroundColor: '#025FC7' }, styles.principal]}>
              <View>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Faq')} >
                  <Icon name='question-answer' type='MaterialIcons' style={{ fontSize: 54, color: 'white', alignSelf: 'center' }} />
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
    justifyContent: 'center',
  },
  textoBotao: {
    fontSize: 23,
    color: 'white',
    fontFamily: 'Roboto',
    fontWeight: 'bold'
  }
});

