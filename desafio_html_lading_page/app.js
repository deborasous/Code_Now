const urlUF = "https://servicodados.ibge.gov.br/api/v1/localidades/estados";
const uf = document.getElementById("uf");
const cities = document.getElementById("cities");

console.log(urlUF);

//evento para carregar cidades após escolher o estado
uf.addEventListener("change", async () => {
  const urlCities = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf.value}/municipios`;
  const request = await fetch(urlCities);
  const response = await request.json();

  //ao mudar o estado, o input cidade é preenchido com a primeira cidade do estado
  let options = "";
  response.forEach(function (cities) {
    options += "<option>" + cities.nome + "</option>";
  });
  cities.innerHTML = options;
});
//

//carrega estados
window.addEventListener("load", async () => {
  //quando a pagina for carregada é desparado o evento LOAD que...
  const request = await fetch(urlUF); //..faz uma requisição que...
  const response = await request.json(); //...quando retornado, será convertido em JSON e armazenado na RESPONSE

  const options = document.createElement("optgroup"); //cria um elemento grupo...
  options.setAttribute("label", ""); //... e cria atributos LABEL E UFS

  //loop para mostrar todos os estados
  response.forEach(function (uf) {
    //Pode dar qualquer nome para  array response[] (no caso o nome é UF)
    options.innerHTML += "<option>" + uf.sigla + "</option>"; //cria options que imprimirá as siglas das ufs
  });
  uf.append(options); //acrescenta as options logo após a ultima option encontrada no html
});

//MASCARA CELULAR
const phone = document.getElementById("phone");

phone.addEventListener("keypress", () => {
  let phonelength = phone.value.length;

  if (phonelength === 0) {
    phone.value += "(";
  } else if (phonelength === 3) {
    phone.value += ") ";
  } else if (phonelength === 10) {
    phone.value += "-";
  }
});
