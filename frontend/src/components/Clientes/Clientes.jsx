import React, {Component, useState} from 'react'
import Main from '../Main'
import axios from 'axios'
import Button from '../Button'
import Formulario from './Formulario'
import $ from 'jquery'

const headerProps = {
    icon: "users",
    titulo: "Clientes",
    subtitulo: "Cadastrar, alterar e excluir clientes"
}

const baseUrl = 'http://localhost:3001/clientes'

const initialState = {
    cliente: { nome:'', telefone:'', valor_divida:''},
    list: []
}

let visibilidade = false

export default class Clientes extends Component {


    state = {...initialState}

    componentDidMount(){
        axios(baseUrl).then(response => {
            this.setState({ list: response.data })
        })
    }


    // exibirOcultarForm(){
    //     if (visibilidade) {
    //         document.getElementById("formulario").style.display = "none";
    //         visibilidade = false;
    //     } else {
    //         document.getElementById("formulario").style.display = "block";
    //         visibilidade = true;
    //     }
    // }

    renderTable(){
        return (         
            <table className="table mt-4">
                <thead>
                    <tr>
                        <th> Id </th>
                        <th> Nome </th>
                        <th> Telefone </th>
                        <th> Dívida </th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderRows()}
                </tbody>
            </table>
        )
    }

    renderRows() {
        return this.state.list.map(clientes => {
            return (
                <tr key={clientes.id}>
                    <td>{clientes.id}</td>
                    <td>{clientes.nome}</td>
                    <td>{clientes.telefone}</td>
                    <td>{clientes.valor_divida}</td>
                    <td>
                        <Button color="warning">
                            <i className="fa fa-pencil"></i>
                        </Button>
                        <Button color="danger" bootstrap="ml-2">
                            <i className="fa fa-trash"></i>
                        </Button>
                    </td>
                </tr>
            )
        })
    }

    render() {
        return <Main {...headerProps}>
            <Formulario 
            valueNome={this.state.nome}
            valueTelefone={this.state.telefone}
            valueDivida={this.state.valor_divida}/>
            {this.renderTable()}
        </Main>
    }
}