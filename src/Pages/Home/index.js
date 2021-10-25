import React from 'react';
import './style.css';

import NavBar from '../../Components/Navbar'
import NavTitle from '../../Components/NavTitle'

import grafico from '../../Contents/Images/grafico.png'
import grafico2 from '../../Contents/Images/grafico-2.gif'

export default function Home () {
    return (
    <>
        <NavBar></NavBar>
        <NavTitle></NavTitle>

        <div class="container">
            <br/>
            <div class="row justify-content-center">
                <div class="card-body row no-gutters align-items-center">
                    <div class="col-auto">
                        <i class="fas fa-search h4 text-body"></i>
                    </div>
                    <div class="col">
                        <input class="form-control form-control-lg form-control-borderless" type="search" placeholder="Pesquisa na dashborad"></input>
                    </div>
                    <div class="col-auto">
                        <button class="btn btn-lg btn-dark" type="submit">Pesquisar</button>
                    </div>
                </div>
            </div>
        </div>      

        <div class="menu-dash">
            <div class="row linha">
                <div class="column">
                    <div class="card card-menu" >
                    <div class="card-body">
                        <h5 class="card-title">Progresso x Semana</h5>
                        <img src={grafico} class="card-img-top" data-toggle="modal" data-target="#grafo-1"></img>
                        <p class="card-text">Exemplo de dashboard.</p>
                    </div>
                </div>
                </div>
                <div class="column">
                    <div class="card card-menu" >
                    <div class="card-body">
                        <h5 class="card-title">Progresso x Ano</h5>
                        <img src={grafico} class="card-img-top" data-toggle="modal" data-target="#grafo-2"></img>
                        <p class="card-text">Exemplo de dashboard.</p>
                    </div>
                </div>
                </div>
                <div class="column">
                        <div class="card card-menu-qtd" >
                        <div class="card-body card-body-number">
                            <h5 class="card-title">Quantidade de Alertas</h5>
                            <span class="number-card">7</span>
                            <p class="card-text">Exemplo de dashboard.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div class="modal fade" id="grafo-1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Progresso x Semana</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="container">
                        <img src={grafico2} class="mod-img"></img>
                    </div>
                        
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Fechar</button>
                </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="grafo-2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Progresso x Ano</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="container">
                        <img src={grafico} class="mod-img"></img>
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