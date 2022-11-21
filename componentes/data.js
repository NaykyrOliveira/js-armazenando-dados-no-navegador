export const removeDatasRepetidas = () => {
    const datasUnicas = []
    datasUnicas.forEach((data => {
        if(datasUnicas.indexOf(data.dataFormatada) === -1) {
            datasUnicas.push
        }
    }))

    return datasUnicas
}

export const ordenaDatas = (data) => {
    data.sort(a => {
        const primeiraData = moment (a, 'DD/MM/YYYY').format('YYYY/MM/DD')
        console.log(primeiraData)
    })
}