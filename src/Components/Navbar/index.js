import React from 'react';
import './style.css';
import child from '../../Contents/Images/child.jpg'

export default function NavBar () {
    return (
    <>
        <nav class="navbar navbar-dark bg-color">
            <a class="navbar-brand nav-title" href="#">LAH - Desfralde Fácil</a>
                    <a class="nav-nome" href="#" data-toggle="modal" data-target="#nav-info">Lucas, 9 anos</a>
        </nav>

        <div class="modal fade" id="nav-info" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Informações Pessoais</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="container">
                        <div class="row">
                            <div class="column">
                                <img src={child} class="foto-modal"></img>
                            </div>
                            <div class="column">
                                <div class="titulos">
                                    <p><b>Nome:</b>Lucas da Silva</p>
                                    <p><b>Idade:</b>9 anos</p>
                                    <p><b>Responsável:</b>João da Silva</p>
                                    <p><b>Inicio:</b>1 de Janeiro de 2020</p>
                                </div>
                            </div>
                        </div>
                    </div>
                        
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Fechar</button>
                </div>
                </div>
            </div>
        </div>
    </>);
}