function cadConteiner(cliente, numeroconteiner, tipoc, stats, categoria, tipomovimentacao, datainicio, datafim)
{
var tb = document.getElementById("tabela")
var qtdlinhas = tb.rows.length
var linha = tb.insertRow(qtdlinhas)

var cellCodigo = linha.insertCell(0)
var cellCliente = linha.insertCell(1)
var cellNumcont = linha.insertCell(2)
var celltipocont = linha.insertCell(3)
var cellStatus = linha.insertCell(4)
var cellCategoria = linha.insertCell(5)
var cellTipomov = linha.insertCell(6)
var cellDatainicio = linha.insertCell(7)
var cellDatafim = linha.insertCell(8)



cellCodigo.innerHTML = qtdlinhas
cellCliente.innerHTML = cliente
cellNumcont.innerHTML = numeroconteiner
celltipocont.innerHTML = tipoc
cellStatus.innerHTML = stats
cellCategoria.innerHTML = categoria
cellTipomov.innerHTML = tipomovimentacao
cellDatainicio.innerHTML = datainicio
cellDatafim.innerHTML = datafim
}