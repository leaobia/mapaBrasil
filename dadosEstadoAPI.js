export const pesquisarEstado = async (ufPesquisada) => {
    const url = `http://localhost:8080/estado/${ufPesquisada}`
    const response = await fetch(url)
    const data = await response.json()
    return {
        uf: data.uf,
        nome: data.descricao,
        capital: data.capital,
        regiao: data.regiao
    }
}
export const getCidades = async (ufPesquisada) => {
    const url = `http://localhost:8080/v1/cidadesEstado/${ufPesquisada}`
    const response = await fetch(url)
    const data = await response.json()
    return {
        cidades: data.cidades
    }
}

