function cadConteiner(cliente, numeroconteiner, tipoc, stats, categoria, tipomovimentacao, datainicio, datafim){

    var tb = document.getElementById("tabela")
    var qtdLinhas = tb.rows.length;
    var linha = tb.insertRow(qtdLinhas)
    

    var cellCodigo = linha.insertCell(0)
    var cellcliente = linha.insertCell(1)
    var cellNumcont = linha.insertCell(2)
    var celltipocont = linha.insertCell(3)
    var cellStatus = linha.insertCell(4)
    var cellCategoria = linha.insertCell(5)
    var cellTipmov = linha.insertCell(6)
    var cellDatainicio = linha.insertCell(7)
    var cellDatafim = linha.insertCell(8)

    cellCodigo.innerHTML = qtdLinhas
    cellcliente.innerHTML = cliente
    cellNumcont.innerHTML = numeroconteiner
    celltipocont.innerHTML = tipoc
    cellStatus.innerHTML = stats
    cellCategoria.innerHTML = categoria
    cellTipmov.innerHTML = tipomovimentacao
    cellDatainicio.innerHTML = datainicio
    cellDatafim.innerHTML = datafim

    
}
