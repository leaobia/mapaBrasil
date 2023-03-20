'use strict'

import { pesquisarEstado } from "./dadosEstadoAPI.js"
import { getCidades } from "./dadosEstadoAPI.js"

const mapa = document.querySelector('svg')

const dadosEstado = document.getElementById('dadosContainer')



const getEstados = async (event) => {
    const estado = event.target.id.replace('BR-', '')
    const estado2 = await pesquisarEstado(estado)
    const estado3 = await getCidades(estado)

    document.getElementById('siglaEstado').innerHTML = estado2.uf
    document.getElementById('nomeEstado').innerHTML = estado2.nome
    document.getElementById('capital').innerHTML = estado2.capital
    document.getElementById('regiao').innerHTML = estado2.regiao


    const ul = document.getElementById('listaContainer')

    estado3.cidades.forEach(function (cidade) {
        const cidades = document.createElement('li')
        cidades.textContent = cidade
        ul.append(cidades)
    })


    dadosEstado.classList.remove('none')

}

mapa.addEventListener('click', getEstados)
