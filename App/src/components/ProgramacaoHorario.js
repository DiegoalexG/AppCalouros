import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Font, LinearGradient } from 'expo';

export default class ProgramacaoHorario extends React.Component {

  componentDidMount() {
    Font.loadAsync({
      'theboldfont': require('../../assets/fonts/theboldfont.ttf'),
    });
    Font.loadAsync({
      'open-sans': require('../../assets/fonts/OpenSans-Regular.ttf'),
    });
  }

  render() {
    let background = 'white';
    if (this.props.isGrey === 's') {
      background = '#f2f2f2';
    }
    const cores = [this.props.corPrim, this.props.corSec];
    return (
      <View>
        <View style={[styles.bloco, { backgroundColor: background }]}>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <LinearGradient style={{ height: 100, width: 5 }} colors={cores} />
            <Text style={[styles.blocoText, styles.blocoTextHora]}>{this.props.hora}</Text>
          </View>
          <View style={[styles.blocoText, { flex: 3, justifyContent: 'space-around' }]}>
            <Text style={styles.blocoTextAtiv}>
              {this.props.atividade}
            </Text>
            <Text style={styles.blocoTextAtiv}>
              {this.props.local}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
    fontFamily: 'open-sans',
    textAlign: 'center',
    color: 'black',
  }
});