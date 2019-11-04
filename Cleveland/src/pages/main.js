import React, { Component } from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";
// import {FlatList} from "react-native-gesture-handler"


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            medicos: null,
        }
    }

    componentDidMount() {
        this._carregarPagina();
    }

    _carregarPagina = async () => {
        await fetch("http://192.168.4.221:5000/api/medicos")
            .then(resposta => resposta.json())
            .then(data => {
                // console.warn(data);
                this.setState({ medicos: data });
                console.warn(this.state)
            })
            .catch(error => console.warn(error));
    };


    render() {
        return (
            <View>
                <Text style={styles.titulo}>Clínica Cleveland</Text>
                <Text>Médicos:</Text>
                <FlatList
                    data={this.state.medicos}
                    keyExtractor={item => item.idMedico.toString()}
                    renderItem={({ item }) => (
                        <View>
                            <Text>{item.idMedico}</Text>
                            <Text>{item.nome}</Text>
                            <Text>{item.dataNascimento}</Text>
                            <Text>{item.crm}</Text>
                        </View>
                    )} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    textoTeste: {
        backgroundColor: "#a90",
    },
    titulo: {
        textAlign: "center",
        fontSize: 20,
        color: "#42a",
        padding: 20,
    }
})


export default Main;