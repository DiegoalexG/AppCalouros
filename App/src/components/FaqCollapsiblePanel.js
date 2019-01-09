import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableHighlight,
    Animated } from 'react-native'; 

const upName = require('../../assets/imgs/upArrow.png');
const downName = require('../../assets/imgs/downArrow.png');

class FaqCollapsiblePanel extends React.Component {

    constructor(props) {
        super(props);
    
        this.icons = {     
            up: upName,
            down: downName
        };

        this.state = {       
            titulo: props.titulo,
            expandido: false,
            animacao: new Animated.Value(39)
        };
    }

    toggle() {
        const valorInicial = this.state.expandido ? 
        this.state.maxHeight + this.state.minHeight : this.state.minHeight;
        const valorFinal = this.state.expandido ?
        this.state.minHeight : this.state.maxHeight + this.state.minHeight;

        this.setState({
            expandido: !this.state.expandido  
        });

        this.state.animacao.setValue(valorInicial);  
        Animated.spring(     
            this.state.animacao,
            {
                toValue: valorFinal
            }
        ).start();  
    }

    _setMaxHeight(event) {
        this.setState({
            maxHeight: event.nativeEvent.layout.height
        });
    }

    _setMinHeight(event) {
        this.setState({
            minHeight: event.nativeEvent.layout.height
        });
    }

    render() {
        let icon = this.icons.down;

        if (this.state.expandido) {
            icon = this.icons.up;   
        }
        return ( 
            <Animated.View style={[styles.container, { height: this.state.animacao }]} >
                <View style={styles.tituloContainer} onLayout={this._setMinHeight.bind(this)}>
                    <Text style={styles.titulo}>{this.state.titulo}</Text>
                    <TouchableHighlight 
                        style={styles.button} 
                        onPress={this.toggle.bind(this)}
                        underlayColor="#f1f1f1"
                    >
                        <Image style={styles.buttonImage} source={icon} />
                    </TouchableHighlight>
                </View>               
                <View style={styles.body} onLayout={this._setMaxHeight.bind(this)}>
                    {this.props.children}
                </View>
            </Animated.View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        margin: 10,
        overflow: 'hidden'
    },
    tituloContainer: {
        flexDirection: 'row'
    },
    titulo: {
        flex: 1,
        padding: 10,
        color: '#2a2f43',
        fontWeight: 'bold'
    },
    button: {

    },
    buttonImage: {
        width: 20,
        height: 15
    },
    body: {
        padding: 10,
        paddingTop: 0
    }
});

export default FaqCollapsiblePanel;
