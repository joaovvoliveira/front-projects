
//Ativar links header
const links = document.querySelectorAll('.header-menu a')
function ativarLink(link) {
  const url = location.href;
  const href = link.href

  url.includes()
  if (url.includes(href)) {
    link.classList.add('ativo')
  }
}

links.forEach(ativarLink)


//Ativar links orcamento

const parametros = new URLSearchParams(location.search)


function ativarParametros(parameters) {
  if(parameters) {
    const input = document.getElementById(parameters)
    input.checked = true
  }
}

parametros.forEach(ativarParametros)


// const inputSeguro = document.getElementById('seguro')

// if (parametros.search.includes('prata')) {
//   inputSeguro.checked = true
//   const radioPrata = document.getElementById('prata')
//   radioPrata.checked = true
// } else if (parametros.search.includes('ouro')) {
//   inputSeguro.checked = true
//   const radioOuro = document.getElementById('ouro')
//   radioOuro.checked = true
// }

// const inputBike = document.getElementById('bikecraft')
// if (parametros.search.includes('nimbus')) {
//   inputBike.checked = true
//   const nimbus = document.getElementById('nimbus')
//   nimbus.checked = true
// }
// if (parametros.search.includes('magic')) {
//   inputBike.checked = true
//   const magic = document.getElementById('magic')
//   magic.style.fontSize = '8px'
//   magic.checked = true
  
// }
// if (parametros.search.includes('nebula')) {
//   inputBike.checked = true
//   const nebula = document.getElementById('nebula')
//   nebula.checked = true
  
// }




