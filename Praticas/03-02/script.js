const form = document.getElementById ( 'cadastro-form' );
const nome = document.getElementById ( 'nome' );
const email = document.getElementById ( 'email' );
const senha = document.getElementById ( 'senha' );
const erroNome = document.getElementById ( 'erro-nome' );
const erroEmail = document.getElementById ( 'erro-email' );
const erroSenha = document.getElementById ( 'erro-senha' );

form.addEventListener ( 'submit', function ( event )
{
	event.preventDefault();

	// Verificar se o campo nome está vazio. Se estiver, exibe uma mensagem de erro no span erroNome.
	if ( nome.value.trim() === '')
	{
		erroNome.textContent = 'O nome é obrigatório.';
		return; // Encerrar a função se houver erro
	}

	else
		erroNome.textContent = '';

	/*
		Verificar se o campo email está vazio.
		Se estiver, exibe uma mensagem de erro no span erroEmail.
		Expressão regular (regexEmail) para validar o formato do e-mail.
	*/

	const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

	if ( email.value.trim() === '')
	{
		erroEmail.textContent = 'O e-mail é obrigatório.';
		return; // Encerrar a função se houver erro
	}

	else if ( !regexEmail.test ( email.value.trim() ))
	{
		erroEmail.textContent = 'O e-mail não é válido.';
		return; // Encerrar a função se houver erro
	}

	else
		erroEmail.textContent = '';

	// Verificar se o campo senha está vazio. Se estiver, exibe uma mensagem de erro no span erroSenha.

	if ( senha.value.trim() === '' )
	{
		erroSenha.textContent = 'A senha é obrigatória.';
		return; // Encerrar a função se houver erro
	}

	else
		erroSenha.textContent = '';
})
