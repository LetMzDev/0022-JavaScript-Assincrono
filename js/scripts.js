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

const input_Tags = document.getElementById ( "input-tags" );
const lista_Tags = document.getElementById ( "lista-tags" );

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

// Adicionar Tags

input_Tags.addEventListener ( "keypress", async ( evento ) =>
{
	if ( evento.key === "Enter" )
	{
		evento.preventDefault(); // Não atualizar a tela após o ENTER
		const tag_Texto = input_Tags.value.trim();

		if ( tag_Texto !== "" )
		{
			try
			{
				const tag_Existe = await Verifica_Tags_Disponiveis ( tag_Texto );

				if ( tag_Existe )
				{
					const tag_Nova = document.createElement ( "li" );
					tag_Nova.innerHTML = `<p>${tag_Texto}</p> <img src="./img/close-black.svg" class="remove-tag">`;
					lista_Tags.appendChild ( tag_Nova );
					input_Tags.value = "";
				}

				else
					alert ( "Tag não foi encontrada." );
			}

			catch ( error )
			{
				console.error ( "Erro ao verificar a existência da tag" );
				alert ( "Erro ao verificar a existência da tag. Verifique o console." );
			}
		}
	}
})

const botao_Publicar = document.querySelector ( ".botao-publicar" );

// simular envio de dados

async function publicar_Projeto ( nome_Do_Projeto, descricao_Do_Projeto, tags_Projeto )
{
	return new Promise (( resolve, reject ) =>
	{
		setTimeout(() =>
		{
			const deu_Certo = Math.random() > 0.5;

			if ( deu_Certo )
				resolve ( "Projeto publicado com sucesso." );

			else
				reject ( "Erro ao publicar o projeto." );

		}, 2000 )
	})
}

botao_Publicar.addEventListener ( "click", async ( evento ) =>
{
	evento.preventDefault();

	const nome_Do_Projeto = document.getElementById ( "nome" ).value;
	const descricao_Do_Projeto = document.getElementById ( "descricao" ).value;
	const tags_Projeto = Array.from ( lista_Tags.querySelectorAll ( "p" )).map (( tag ) => tag.textContent );

	try
	{
		const resultado = await publicar_Projeto ( nome_Do_Projeto, descricao_Do_Projeto, tags_Projeto );
		console.log ( resultado );
		alert ( "Deu tudo certo!" );
	}

	catch ( error )
	{
		console.log ( "Deu errado: ", error );
		alert ( "Deu tudo errado!" );
	}
})
