import React, {useState} from 'react'
import Modal from './Modal'
import './BtnName.css'

export default props => {
    const[isModalVisible, setIsModalVisible] = useState(false)
    return (
        <div>
            <button id="btnName" onClick={() => setIsModalVisible(true)}>{props.nome}</button>
            {
            isModalVisible ? 
                <Modal onClose = {() => setIsModalVisible(false)}>
                    <div className="row">

                            <div className="col-12 col-md-4 col-lg-6">
                                <div className="form-group">
                                    <label><strong>Nome</strong></label>
                                    <input type="text" className="form-control" 
                                    name="nome" placeholder={props.nome} readOnly/>
                                </div>
                            </div>

                            <div className="col-12 col-md-4 col-lg-6">
                                <div className="form-group">
                                    <label><strong>Telefone</strong></label>
                                    <input type="text" className="form-control" 
                                    name="telefone" placeholder={props.telefone} readOnly/>
                                </div>
                            </div>

                            <div className="col-12 col-md-4 col-lg-6">
                                <div className="form-group">
                                    <label><strong>Dívida</strong></label>
                                    <input type="number" className="form-control" 
                                    name="divida" placeholder={props.divida.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} readOnly/>
                                </div>
                            </div>

                            <div className="col-12 col-md-4 col-lg-6">
                                <div className="form-group">
                                    <label><strong>Cpf</strong></label>
                                    <input type="text" className="form-control" 
                                    name="cpf" placeholder={props.cpf} readOnly/>
                                </div>
                            </div>

                            <div className="col-12">
                                <div className="form-group">
                                    <label><strong>Endereço</strong></label>
                                    <input type="text" className="form-control" 
                                    name="endereco" placeholder={props.endereco} readOnly/>
                                </div>
                            </div>

                    </div>
                </Modal> 
                : null
            }
        </div>
    )
}