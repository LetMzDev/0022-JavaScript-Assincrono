document.addEventListener ( 'DOMContentLoaded', () =>
{
	// Seleciona o input de tags e a lista de tags
	const input_Tags = document.getElementById ( 'input-tags' );
	const lista_Tags = document.getElementById ( 'lista-tags' );

	// Adiciona um ouvinte de evento para capturar a tecla Enter no input
	input_Tags.addEventListener ( 'keypress', ( event ) =>
	{
		// Verifica se a tecla pressionada foi Enter
		if ( event.key === 'Enter' )
		{
			event.preventDefault(); // Evita o comportamento padrão do Enter (submeter o formulário)

			const tag_Texto = input_Tags.value.trim(); // Obtém o texto da tag e remove espaços em branco extras

			// Verifica se o texto da tag não está vazio
			if ( tag_Texto !== '' )
			{
				// Cria um novo elemento <li> para a nova tag
				const nova_Tag = document.createElement ( 'li' );
				nova_Tag.innerHTML = `${tag_Texto} <img src="img/close.svg" class="remove-tag" alt="Remover Tag">`;
				lista_Tags.appendChild ( nova_Tag ); // Adiciona a nova tag à lista de tags
				input_Tags.value = ''; // Limpa o input de tags para o próximo input
			}
		}
	});

	// Adiciona um ouvinte de evento para capturar cliques na lista de tags
	lista_Tags.addEventListener ( 'click', ( event ) =>
	{
		// Verifica se o elemento clicado é um botão de remoção de tag
		if ( event.target.classList.contains ( 'remove-tag' ))
			event.target.parentElement.remove(); // Remove o pai do botão (ou seja, o <li> que contém a tag)
	});
});

/*
	Evento DOMContentLoaded: Espera até que todo o DOM esteja carregado para iniciar a execução do JavaScript. Isso garante que todos os elementos HTML estejam disponíveis para manipulação.

	Seleção de Elementos: const inputTags = document.getElementById('input-tags'); seleciona o elemento de entrada de tags onde os usuários digitam as tags. const listaTags = document.getElementById('lista-tags'); seleciona a lista <ul> onde as tags serão exibidas.

	Evento keypress no Input de Tags: Adiciona um ouvinte de evento para capturar quando uma tecla é pressionada dentro do input de tags. event.key === 'Enter' verifica se a tecla pressionada foi Enter. event.preventDefault(); impede o comportamento padrão do Enter, que é submeter o formulário.

	Criação e Adição de Nova Tag: const tagTexto = inputTags.value.trim(); obtém o texto digitado no input de tags e remove espaços em branco extras. if (tagTexto !== '') { ... } verifica se o texto da tag não está vazio. const novaTag = document.createElement('li'); cria um novo elemento <li> para representar a nova tag. novaTag.innerHTML = ${tagTexto} <img src="img/close.svg" class="remove-tag" alt="Remover Tag">; define o HTML da nova tag, incluindo o texto da tag e um ícone de fechar. listaTags.appendChild(novaTag); adiciona a nova tag à lista de tags.

	Evento click na Lista de Tags para Remoção: Adiciona um ouvinte de evento para capturar cliques na lista de tags. event.target.classList.contains('remove-tag') verifica se o elemento clicado tem a classe remove-tag, que é atribuída ao ícone de fechar. event.target.parentElement.remove(); remove o elemento pai do ícone de fechar, ou seja, remove a tag da lista quando o ícone de fechar é clicado.
*/
