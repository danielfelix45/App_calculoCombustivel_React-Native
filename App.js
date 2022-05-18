import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Modal
} from 'react-native';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      inputAlcool: 0,
      inputGasolina: 0,
      alcool: 0,
      gasolina: 0,
      resultado: 0,
      modalVisible: false
    };

    this.calcular = this.calcular.bind(this);
    this.calcularNovamente = this.calcularNovamente.bind(this);
  }

  calcular() {
    this.setState({
      modalVisible: true,
      alcool: this.state.inputAlcool,
      gasolina: this.state.inputGasolina,
      resultado: this.state.inputAlcool / this.state.inputGasolina
    })
  }

  calcularNovamente(visible) {
    this.setState({ modalVisible: visible, inputAlcool: 0, inputGasolina: 0 })
  }

  render() {

    return (
      <View style={styles.container}>

        <Image
          source={require('./src/img/posto-de-gasolina.png')}
          style={styles.logo}
        />

        <Text style={styles.textOpcao}>Qual a melhor opção?</Text>

        <View style={styles.areaInput}>

          <Text style={styles.textValor}>Álcool(preço por litro):</Text>
          <TextInput
            style={styles.inputValor}
            underlineColorAndroid='transparent'
            onChangeText={(numero) => this.setState({ inputAlcool: numero })}
          />
          <Text style={styles.textValor}>Gasolina(preço por litro):</Text>
          <TextInput
            style={styles.inputValor}
            underlineColorAndroid='transparent'
            onChangeText={(numero) => this.setState({ inputGasolina: numero })}
          />
          <TouchableOpacity style={styles.btn} onPress={this.calcular}>
            <Text style={styles.textBtn}>Calcular</Text>
          </TouchableOpacity>
        </View>

        {/*  Área modal */}
        <Modal animationType='slide' visible={this.state.modalVisible}>
          <View style={styles.areaModal}>

            <Image
              source={require('./src/img/bomba-de-gasolina.png')}
              style={styles.imgModal}
            />
            <Text style={styles.textResultado}> {this.state.resultado < 0.7 ? 'Compensa usar Álcool' : 'Compensa usar Gasolina'} </Text>

            <Text style={styles.textPrecos}>Com os preços:</Text>
            <Text style={styles.textInput}>Álcool: R$ {this.state.alcool} </Text>
            <Text style={styles.textInput}>Gasolina: R$ {this.state.gasolina} </Text>

            <TouchableOpacity style={styles.btnModal} onPress={() => this.calcularNovamente(false)}>
              <Text style={styles.textBtnModal}>Calcular novamente</Text>
            </TouchableOpacity>
          </View>
        </Modal>

      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#008B8B'
  },
  logo: {
    width: 150,
    height: 150
  },
  textOpcao: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 5
  },
  areaInput: {
    width: '100%',
    marginTop: 30,
    padding: 20
  },
  textValor: {
    fontSize: 15,
    color: '#000',
    fontWeight: 'bold'
  },
  inputValor: {
    height: 45,
    backgroundColor: '#fff',
    borderRadius: 7,
    marginTop: 7,
    marginBottom: 20
  },
  btn: {
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    backgroundColor: '#ffd700'
  },
  textBtn: {
    fontSize: 20,
    color: '#000',
    fontWeight: 'bold'
  },

  // Área Modal
  areaModal: {
    flex: 1,
    backgroundColor: '#008B8B',
    alignItems: 'center',
    justifyContent: 'center'
  },
  imgModal: {
    width: 100,
    height: 100
  },
  textResultado: {
    marginTop: 20,
    fontSize: 30,
    fontWeight: 'bold',
    color: '#00ff7f'
  },
  textPrecos: {
    marginTop: 30,
    fontSize: 25,
    fontWeight: 'bold',
    color: '#000'
  },
  textInput: {
    marginTop: 5,
    fontSize: 15,
    color: '#000',
    fontWeight: 'bold'
  },
  btnModal: {
    marginTop: 30,
    width: 300,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#ffd700',
    borderRadius: 7
  },
  textBtnModal: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffd700'
  },
});