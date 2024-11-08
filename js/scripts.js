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
