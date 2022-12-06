let botao = document.querySelector("#confirmar");

botao.addEventListener("click", () => {
    let pokenome = document.querySelector("#nome-input").value;

    console.log(pokenome.toLowerCase());

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokenome.toLowerCase()}`)
        .then((resposta) => resposta.json())
        .then((json) => {
            console.log(json.sprites.front_default);

            let imagem = document.querySelector("#display img");
            let id = document.querySelector("#pokeinfo__num");
            let nome = document.querySelector("#pokeinfo__nome");
            let tipos = document.querySelector("#pokeinfo__tipos");

            let dataTipos = json.types;

            dataTipos.forEach((element, index) => {
                dataTipos[index] = element.type.name;
            });

            imagem.src = json.sprites.front_default;
            imagem.style.display = "block";

            id.innerHTML = "ID: # " + json.id;
            nome.innerHTML = "Nome: " + json.name;
            tipos.innerHTML = "Tipos: " + String(dataTipos).replace(",", " e ");
        });
});
