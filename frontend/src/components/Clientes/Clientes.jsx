import React, {Component, useState} from 'react'
import Main from '../Main'
import axios from 'axios'
import Button from '../Button'
import Formulario from './Formulario'

import { mask, unMask} from 'remask'

const patternDivida = ['999.999.999']

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

export default class Clientes extends Component {


    state = {...initialState}


    componentDidMount(){
        axios(baseUrl).then(response => {
            this.setState({ list: response.data })
        })
    }

    // FUNÇÕES DO FORMULÁRIO
    save(){
        const cliente = this.state.cliente
        if(cliente.nome && cliente.telefone && cliente.valor_divida) {
            cliente.valor_divida = parseFloat(cliente.valor_divida)
            const method = cliente.id ? 'put' : 'post'
            const url = cliente.id ? `${baseUrl}/${cliente.id}` : baseUrl

            axios[method](url, cliente).then( response => {
                const list = this.getUpdatedList(response.data)
                this.setState({ cliente : initialState.cliente, list })
            })
        } else {
            alert("Você deve preencher todos os campos! ")
        }
    }

    getUpdatedList(cliente, add = true){
        const list = this.state.list.filter(c => c.id != cliente.id)
        if(add) list.unshift(cliente)
        return list
    }

    clear(){
        this.setState({ cliente: initialState.cliente })
    }

    updateField(event){
        const cliente = { ...this.state.cliente}
        cliente[event.target.name] = event.target.value
        this.setState({ cliente })
    }

    load(cliente){
        this.setState({ cliente })
    }

    remove(cliente){
        axios.delete(`${baseUrl}/${cliente.id}`).then(resp => {
            const list = this.getUpdatedList(cliente, false)
            this.setState({ list })
        })
    }

    // LISTA E FUNÇÕES DE CLIENTES
    pagarDividaOuCobrar(qtd, cliente, cobrar = false){

        cobrar ? cliente.valor_divida += qtd : cliente.valor_divida -= qtd
        const url = `${baseUrl}/${cliente.id}`
        axios.put(url, cliente).then( response => {
            const list = this.getUpdatedList(response.data)
            this.setState({ list })
        })
    }


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
        return this.state.list.map(cliente => {
            return (
                <tr key={cliente.id}>
                    <td>{cliente.id}</td>
                    <td>{cliente.nome}</td>
                    <td>{cliente.telefone}</td>
                    <td>{parseFloat(cliente.valor_divida).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
                    <td>
                        <a href="#form">
                            <Button color="warning" callback = {() => this.load(cliente)}>
                                <i className="fa fa-pencil"></i>
                            </Button>
                        </a>

                        <Button color="dark" bootstrap="ml-2" callback = {() => {
                            let qtd = prompt(`Deseja abater qual valor na dívida de ${cliente.nome.toUpperCase()}`)
                            let qtdNum = parseFloat(qtd)
                            if(isNaN(qtdNum)){
                                alert("Você deve digitar um valor numérico !")
                            } else {
                                this.pagarDividaOuCobrar(qtdNum, cliente)
                            }
                        }}>
                                Pagar
                        </Button>

                        <Button color="primary" bootstrap="ml-2" callback = {() => {
                            let qtd = prompt(`Deseja cobrar qual valor de ${cliente.nome.toUpperCase()}`)
                            let qtdNum = parseFloat(qtd)
                            if(isNaN(qtdNum)){
                                alert("Você deve digitar um valor numérico !")
                            } else {
                                this.pagarDividaOuCobrar(qtdNum, cliente, true)
                            }
                        }}>
                                Cobrar
                        </Button>

                        <Button color="danger" bootstrap="ml-2" callback = {() => this.remove(cliente)}>
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
            id="form"
            updateField = {e => this.updateField(e)}
            clear  = {() => this.clear()}
            save = {() => this.save()}
            valueNome = {this.state.cliente.nome}  
            valueTelefone = {this.state.cliente.telefone} 
            valueDivida = {this.state.cliente.valor_divida}/>
            {this.renderTable()}
        </Main>
    }
}