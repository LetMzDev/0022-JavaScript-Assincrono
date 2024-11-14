const uploadBtn = document.getElementById ( "upload-btn" );
const inputUpload = document.getElementById ( "image-upload" );

uploadBtn.addEventListener("click", () =>
{
	inputUpload.click();
})

function Ler_Conteudo_Do_Arquivo ( arquivo )
{
	return new Promise (( resolve, reject ) =>
	{
		const leitor = new FileReader()
		leitor.onload = () =>
		{
			resolve ({ url: leitor.result, nome: arquivo.name });
		}

		leitor.onerror = () =>
		{
			reject (`Erro na leitura do arquivo ${arquivo.name}` );
		}

		leitor.readAsDataURL ( arquivo );
	});
}

// Ler arquivo de imagem

const imagem_Principal = document.querySelector ( ".main-imagem" );
const nome_Da_Imagem = document.querySelector ( ".container-imagem-nome p" );

inputUpload.addEventListener ( "change", async ( evento ) =>
{
	const arquivo = evento.target.files [ 0 ];

	if ( arquivo )
	{
		try
		{
			const conteudo_Do_Arquivo = await Ler_Conteudo_Do_Arquivo ( arquivo );
			imagem_Principal.src = conteudo_Do_Arquivo.url;
			nome_Da_Imagem.textContent = conteudo_Do_Arquivo.nome;
		}

		catch ( erro )
		{
			console.error ( "Erro na leitura do arquivo" );
		}

	}
})

// Adicionar Tags

const input_Tags = document.getElementById ( "input-tags" );
const lista_Tags = document.getElementById ( "lista-tags" );

input_Tags.addEventListener ( "keypress", ( evento ) =>
{
	if ( evento.key === "Enter" )
	{
		evento.preventDefault(); // Não atualizar a tela após o ENTER
		const tag_Texto = input_Tags.value.trim();

		if ( tag_Texto !== "" )
		{
			const tag_Nova = document.createElement ( "li" );
			tag_Nova.innerHTML = `<p>${tag_Texto}</p> <img src="./img/close-black.svg" class="remove-tag">`;
			lista_Tags.appendChild ( tag_Nova );
			input_Tags.value = "";
		}
	}
})

// Remover Tags

lista_Tags.addEventListener ( "click", ( evento ) =>
{
	// Verifica se onde está sendo clicado contém a classe "remove-tag"
	if (evento.target.classList.contains ( "remove-tag" ))
	{
		const tag_Que_Queremos_Remover = evento.target.parentElement;
		lista_Tags.removeChild ( tag_Que_Queremos_Remover );
	}
})


// Possíveis tags

const tags_Disponiveis = [ "Front-end", "Programação", "Data Science", "Full-stack", "HTML", "CSS", "JavaScript" ];

async function Verifica_Tags_Disponiveis ( tag_Texto )
{
	return new Promise (( resolve ) =>
	{
		setTimeout(() =>
		{
			resolve ( tags_Disponiveis.includes ( tag_Texto ));
		}, 1000)
	})
}
