// Função verificaEmailDisponivel que simula a verificação assíncrona se o e-mail já está cadastrado.
// Esta função deve retornar uma promessa que resolve com true ou false.

async function verificaEmailDisponivel ( email )
{
	return new Promise (( resolve) =>
	{
		setTimeout(() =>
		{
			const emailsCadastrados = [ 'user1@example.com', 'user2@example.com', 'user3@example.com' ];
			resolve ( !emailsCadastrados.includes ( email ));
		}, 1000 );
	});
}

// Eventos ao campo de entrada de e-mail que dispara a verificação quando o campo perde o foco (evento blur)

document.getElementById ( 'email-input' ).addEventListener ( 'blur', async function ( event )
{
	const email = event.target.value;

	if ( email.trim() !== "" )
	{
		try
		{
			const emailDisponivel = await verificaEmailDisponivel ( email );
			exibirFeedback ( emailDisponivel, email );
		}

		catch ( error )
		{
			console.error ( 'Erro ao verificar a disponibilidade do e-mail:', error );
			exibirFeedbackErro();
		}
	}
});

// Funções para fornecer feedback ao usuário sobre a disponibilidade do e-mail, exibindo mensagens de sucesso ou erro.

function exibirFeedback ( disponivel, email )
{
	const feedbackElemento = document.getElementById ( 'email-feedback' );
	if ( disponivel )
	{
		feedbackElemento.textContent = `O e-mail ${email} está disponível.`;
		feedbackElemento.style.color = "green";
	}

	else
	{
		feedbackElemento.textContent = `O e-mail ${email} já está cadastrado.`;
		feedbackElemento.style.color = "red";
	}
}

function exibirFeedbackErro()
{
	const feedbackElemento = document.getElementById ( 'email-feedback' );
	feedbackElemento.textContent = "Erro ao verificar a disponibilidade do e-mail. Verifique o console.";
	feedbackElemento.style.color = "red";
}
