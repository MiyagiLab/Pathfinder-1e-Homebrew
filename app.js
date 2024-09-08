// call de função de pesquisar
function pesquisar() {
  // Busca os elementos HTML onde os resultados serão exibidos
  let section = document.getElementById("resultados-pesquisa");
  let campoPesquisa = document.getElementById("campo-pesquisa").value.trim();
  const MIN_CARACTERES = 3; // Define o número mínimo de caracteres
  // se campoPesquisa não tiver o número mínimo de caracteres, mostra a lista inteira. Essa lista é interessante ter acesso completo à ela de alguma forma.
  if (campoPesquisa.length < MIN_CARACTERES) {
    dados.sort((a,b) => a.titulo.localeCompare(b.titulo));
    let resultados = "";
    for (let dado of dados) {
      resultados += `
         <div class="item-resultado">
          <h2>
          <a href=${dado.link}  target="_blank">${dado.titulo}</a> </h2>
          <p class="descricao-meta">${dado.descricao}<p/>
          <p class="descricao-meta">${dado.requisite}</p>
          <p class="descricao-meta"><b>Benefit: </b>${dado.benefit}</p>
          <p class="descricao-meta"><b>House Rules: </b>${dado.house}</p>
        </div>
          `;
    }
    section.innerHTML = resultados;
  } else { // Em caso de busca normal, vai mostrar os resultados de acordo com o input.
    campoPesquisa = campoPesquisa.toLowerCase()
    // String que armazenará o HTML dos resultados da pesquisa
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let benefit = "";
    let house = "";
    let tags = "";
    // Itera sobre cada resultado da pesquisa
    for (let dado of dados) {
      titulo = dado.titulo.toLowerCase()
      descricao = dado.descricao.toLowerCase()
      benefit = dado.benefit.toLowerCase()
      house = dado.house.toLowerCase()
      tags = dado.tags.toLowerCase()
      // Se em alguma das partes inclui campoPesquisa, então resultado.
      if (titulo.includes(campoPesquisa) || tags.includes(campoPesquisa) || benefit.includes(campoPesquisa) || house.includes(campoPesquisa) || descricao.includes(campoPesquisa)) {
        // Cria um novo elemento de resultado
        resultados += `
        <div class="item-resultado">
          <h2>
            <a href=${dado.link}  target="_blank">${dado.titulo}</a> </h2>
          <p class="descricao-meta">${dado.descricao}<p/>
          <p class="descricao-meta">${dado.requisite}</p>
          <p class="descricao-meta"><b>Benefit: </b>${dado.benefit}</p>
          <p class="descricao-meta"><b>House Rules: </b>${dado.house}</p>
        </div>
      `;
      }
    }
    if (!resultados) { //Se não tiver resultado correspondente, volta o aviso "Sem Resultado"
      resultados = "<p>Sem resultados</p>"
    }
    // Insere os resultados construídos no elemento HTML
    section.innerHTML = resultados;
  }
}
// Evento de pesquisa com Enter
const campoPesquisa = document.getElementById("campo-pesquisa")
campoPesquisa.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    pesquisar();
  }
});
