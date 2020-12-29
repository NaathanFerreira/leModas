import React, {Component} from 'react'
import Main from '../Main'
import axios from 'axios'

const headerProps = {
    icon: "users",
    titulo: "Clientes",
    subtitulo: "Cadastrar, alterar e excluir clientes"
}

const baseUrl = 'http://localhost:3001/clientes'

const initialState = {
    cliente: { nome:'', email:'', valor_divida:''},
    list: []
}

export default class Clientes extends Component {

    state = {...initialState}

    componentWillMount(){
        axios(baseUrl).then(response => {
            this.setState({ list: response.data })
        })
    }

    renderTable(){
        console.log(this.state.list)
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
                        <button className="btn btn-warning">
                            <i className="fa fa-pencil"></i>
                        </button>
                        <button className="btn btn-danger ml-2">
                            <i className="fa fa-trash"></i>
                        </button>
                    </td>
                </tr>
            )
        })
    }

    render() {
        return <Main {...headerProps}>
            {this.renderTable()}
        </Main>
    }
}