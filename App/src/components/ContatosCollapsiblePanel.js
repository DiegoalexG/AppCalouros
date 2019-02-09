import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight, Animated } from 'react-native'; 
import { Thumbnail, Icon } from 'native-base';

const upName = require('../../assets/imgs/upArrow.png');
const downName = require('../../assets/imgs/downArrow.png');

export default class ContatosCollapsiblePanel extends React.Component {

    constructor(props) {
        super(props);
        let contatos;
        if (this.props.telefone) {
            contatos = (
                <View style={{ justifyContent: 'space-around', margin: 10 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Icon name="email" type="MaterialCommunityIcons" style={{ fontSize: 20, marginRight: 5 }} />
                        <Text style={{ fontFamily: 'theboldfont', fontSize: 12 }}>Email: {' '}{this.props.email}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Icon name="telephone" type="Foundation" style={{ fontSize: 20, marginRight: 5 }} />
                        <Text style={{ fontFamily: 'theboldfont', fontSize: 12 }}>Telefone: {' '}{this.props.telefone}</Text>
                    </View>
                </View>
            );
        } else {
            contatos = (
                <View style={{ margin: 10 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Icon name="email" type="MaterialCommunityIcons" style={{ fontSize: 20, marginRight: 5 }} />
                        <Text style={{ fontFamily: 'theboldfont', fontSize: 12 }}>Email: {' '}{this.props.email}</Text>
                    </View>
                </View>
            );
        }
        this.icons = {     
            up: upName,
            down: downName
        };

        this.state = {       
            expandido: false,
            contato: contatos,
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
<<<<<<< HEAD
                    <Thumbnail source={{uri: this.props.img}} style={styles.imagem} />
=======
                    <Thumbnail large source={this.props.img} style={styles.imagem} />
>>>>>>> c571b508f47a77a7e55cabebc9196c68ad976ccc
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
<<<<<<< HEAD
                        <Thumbnail  source={{uri: this.props.img}} style={styles.imagem} />
=======
                        <Thumbnail large source={this.props.img} style={styles.imagem} />
>>>>>>> c571b508f47a77a7e55cabebc9196c68ad976ccc
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
                        {this.state.contato}
                    </View>
                </Animated.View>
            );
        }
        return (componente);
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderBottomWidth: 2,
        borderColor: '#a2a2a2',
        overflow: 'hidden'
    },
    imagem: {
        resizeMode: 'contain',
        margin: 10,
        marginRight: 20,
        marginLeft: 0,
    },
    textoTitulo: {
        flex: 1,
        padding: 10,
        color: '#2a2f43',
        fontFamily: 'open-sans-bold',
        textAlignVertical: 'center',
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
