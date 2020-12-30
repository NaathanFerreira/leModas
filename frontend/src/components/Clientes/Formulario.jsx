import React, { useEffect, useState } from "react";
import Collapse from 'react-bootstrap/Collapse'
import Button from '../Button'

export default props => {
        const [open, setOpen] = useState(false)
        let icon = open ? "fa-arrow-up" : "fa-arrow-down"
        return (
            <div>
                <div>
                    <button className="btn btn-primary mb-3"
                    onClick={() => setOpen(!open)}
                    aria-controls="collapse-form"
                    aria-expanded={open}>
                        <span><i className={`fa ${icon}`}></i> <strong>Cadastrar novo cliente</strong></span>
                    </button>
                </div>
                <Collapse in={open}>
                    <div className="form" id="collapse-form">
                        <div className="row">
                            <div className="col-12 col-md-6 col-lg-4">
                                <div className="form-group">
                                    <label><strong>Nome</strong></label>
                                    <input type="text" className="form-control" 
                                    value={props.valueNome} placeholder="Digite o nome..."/>
                                </div>
                            </div>

                            <div className="col-12 col-md-6 col-lg-4">
                                <div className="form-group">
                                    <label><strong>Telefone</strong></label>
                                    <input type="text" className="form-control"
                                    value={props.valueTelefone} placeholder="Digite o telefone..."/>
                                </div>
                            </div>

                            <div className="col-12 col-md-6 col-lg-4">
                                <div className="form-group">
                                    <label><strong>Dívida</strong></label>
                                    <input type="text" className="form-control"
                                    value={props.valueDivida} placeholder="Digite o valor da dívida..."/>
                                </div>
                            </div>

                        </div>
                        <div className="row">
                            <div className="col-12 d-flex justify-content-end">
                                <Button color="primary"> Salvar </Button>
                                <Button color ="secondary" bootstrap="ml-2"> Cancelar </Button>
                            </div>
                        </div>
                        <hr/>
                    </div>
                </Collapse>
            </div>
        )
}