import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableHighlight,
    Animated } from 'react-native'; 
import { Thumbnail } from 'native-base';

const upName = require('../../assets/imgs/upArrow.png');
const downName = require('../../assets/imgs/downArrow.png');

class ContatosCollapsiblePanel extends React.Component {

    constructor(props) {
        super(props);
    
        this.icons = {     
            up: upName,
            down: downName
        };

        this.state = {       
            titulo: props.titulo,
            img: props.img,
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
                <View style={styles.tituloContainer} onLayout={this.setMinHeight.bind(this)}>
                    <Thumbnail square large source={this.props.img} style={styles.imagem}/>
                    <Text style={styles.titulo}>{this.state.titulo}</Text>
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
                    <View style={styles.tituloContainer} onLayout={this.setMinHeight.bind(this)}>
                        <Thumbnail square large source={this.props.img} style={styles.imagem}/>
                        <Text style={styles.titulo}>{this.state.titulo}</Text>
                        <TouchableHighlight 
                            style={styles.button} 
                            onPress={this.toggle.bind(this)}
                            underlayColor='transparent'
                        >
                            <Image style={styles.buttonImage} source={icon} />
                        </TouchableHighlight>
                    </View>               
                    <View style={styles.body} onLayout={this.setMaxHeight.bind(this)}>
                        {this.props.children}
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
        margin: 10,
        overflow: 'hidden',
        borderRadius: 10
    },
    tituloContainer: {
        flexDirection: 'row',
    },
    imagem: {
        flex: 1,
        aspectRatio: 2, 
        resizeMode: 'contain',
        margin: 3
    },
    titulo: {
        flex: 1,
        padding: 10,
        color: '#2a2f43',
        fontWeight: 'bold',
        textAlignVertical: 'center',
        textAlign: 'center'
    },
    button: {
        justifyContent: 'center',
        paddingTop: 10,
        paddingRight: 10
    },
    buttonImage: {
        width: 20,
        height: 15
    },
    body: {
        borderTopWidth: 2,
        borderColor: 'black',
        padding: 10
    }
});

export default ContatosCollapsiblePanel;
