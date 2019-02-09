import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight, Animated } from 'react-native'; 
import { Thumbnail } from 'native-base';

const upName = require('../../assets/imgs/upArrow.png');
const downName = require('../../assets/imgs/downArrow.png');

export default class ContatosCollapsiblePanel extends React.Component {

    constructor(props) {
        super(props);
    
        this.icons = {     
            up: upName,
            down: downName
        };

        this.state = {       
            expandido: false,
            animacao: new Animated.Value()
        };   
    }

    setMaxHeight(event) {
        this.setState({
            maxHeight: event.nativeEvent.layout.height
        });
    }

    setMinHeight(event) {
        this.setState({
            minHeight: event.nativeEvent.layout.height
        });
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

    render() {
        let icon = this.icons.down;
        let componente = (
            <Animated.View style={[styles.container, { height: this.state.animacao }]}>
                <View style={{ flexDirection: 'row' }} onLayout={this.setMinHeight.bind(this)}>
                    <Thumbnail source={{uri: this.props.img}} style={styles.imagem} />
                    <Text style={styles.textoTitulo}>{this.props.titulo}</Text>
                    <TouchableHighlight 
                        style={styles.button} 
                        onPress={this.toggle.bind(this)}
                        underlayColor='transparent'
                    >
                        <Image style={styles.buttonImage} source={icon} />
                    </TouchableHighlight>
                </View>  
            </Animated.View>
        );

        if (this.state.expandido) {
            icon = this.icons.up;   
            componente = (
                <Animated.View style={[styles.container, { height: this.state.animacao }]} >
                    <View style={{ flexDirection: 'row' }} onLayout={this.setMinHeight.bind(this)}>
                        <Thumbnail  source={{uri: this.props.img}} style={styles.imagem} />
                        <Text style={styles.textoTitulo}>{this.props.titulo}</Text>
                        <TouchableHighlight 
                            style={styles.button} 
                            onPress={this.toggle.bind(this)}
                            underlayColor='transparent'
                        >
                            <Image style={styles.buttonImage} source={icon} />
                        </TouchableHighlight>
                    </View>               
                    <View onLayout={this.setMaxHeight.bind(this)}>
                        <Text style={styles.textoDescricao}>{this.props.descricao}</Text>
                    </View>
                </Animated.View>
            );
        }
        return (componente);
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        borderBottomWidth: 2,
        borderColor: '#a2a2a2',
        overflow: 'hidden'
    },
    imagem: {
        flex: 1,
        aspectRatio: 2, 
        resizeMode: 'contain',
        margin: 10,
        marginLeft: 0
    },
    textoTitulo: {
        flex: 1,
        padding: 10,
        color: '#2a2f43',
        fontFamily: 'open-sans-bold',
        textAlignVertical: 'center',
        textAlign: 'center'
    },
    textoDescricao: {
        borderTopWidth: 2,
        borderColor: '#a2a2a2',
        padding: 10,
        color: '#2a2f43',
        fontFamily: 'open-sans',
    },
    button: {
        justifyContent: 'center',
        paddingTop: 10,
        paddingRight: 10
    },
    buttonImage: {
        width: 20,
        height: 15
    }
});
