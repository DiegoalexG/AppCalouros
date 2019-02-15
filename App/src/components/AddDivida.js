import React from 'react';
import { StyleSheet, Text, View, AsyncStorage, Modal, Alert, ImageBackground, Dimensions } from 'react-native';
import {
    Header, Left,
    Right, Icon,
    Body, Button,
    Content, Form,
    Item, Input,
    Container, Label,
    Row, Col
} from 'native-base';

const banner = require('../../assets/imgs/bannerSombreado.png');

export default class AddDivida extends React.Component {


    constructor(props) {
        super(props);

        this.state = {
            motivo: '',
            devedor: '',
            data: null,
            valor: '',
            dividas: [],
            modalVisible: false
        };
    }

    componentWillMount() {
        console.log("Vai pegar");
        
        this._retrieveData();

        console.log("PEGOU");
    }

    _retrieveData = async () => {
        try {
            console.log("PEGANDO ITEM");
            const value = await AsyncStorage.getItem('dividas');
            if (value !== null) this.setState({ dividas: JSON.parse(value) });
        } catch (error) {
            console.log("ERRO", error);
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

    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }


    saveData = async () => {

        const devedor = this.state.devedor;
        const aux = new Date();
        const data = aux.getDate()+'/'+aux.getMonth()+'/'+aux.getFullYear();
        const valor = this.state.valor;
        const motivo = this.state.motivo;

        // const dividas = await AsyncStorage.getItem('dividas') || [];

        
        let dividas = this.state.dividas;

        console.log("DIVIDAS:",dividas);
        
        if (dividas == null) {
            dividas = [];
        }
        
        dividas.push({ devedor, data, valor, motivo });

        console.log(dividas);

        this._storeData(JSON.stringify(dividas));

        this.setState({ dividas, modalVisible: true });
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
                                    <Text style={{ textAlign: 'center', fontSize: 16, fontWeight: 'bold', color: '#3E495F' }}>Novo devedor adicionado. Os dados ficarão salvos apenas em seu smartphone e não serão divulgados.</Text>
                                </Col>

                            </View>
                            <View style={styles.align}>
                                <Button
                                    onPress={() => {
                                        this.props.navigation.navigate('Devedores');
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
                                <Icon name='arrow-left' type="Feather" onPress={() => this.props.navigation.navigate('Devedores')} />
                            </Button>
                        </Left>
                        <Right />
                    </Header>
                </ImageBackground>
                <Container>

                    <Content>
                        <Form>
                            <Item floatingLabel>
                                <Label>Nome do Devedor</Label>
                                <Input value={this.state.devedor} onChangeText={(devedor) => this.setState({ devedor })} />
                            </Item>
                            <Item floatingLabel>
                                <Label>Motivo</Label>
                                <Input value={this.state.motivo} onChangeText={(motivo) => this.setState({ motivo })} />
                            </Item>
                            <Item floatingLabel last>
                                <Label>Valor</Label>
                                <Input value={this.state.valor} keyboardType="numeric" onChangeText={(valor) => this.setState({ valor })} />
                            </Item>

                        </Form>
                        <View style={{ flexDirection: 'row', justifyContent: 'center' }} >
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

