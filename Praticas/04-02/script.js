async function verificaNomeUsuarioDisponivel ( username )
{
	return new Promise (( resolve ) =>
	{
		setTimeout (() =>
		{
			const usuariosRegistrados = [ 'player1', 'gamer2024', 'champion' ];
			resolve ( !usuariosRegistrados.includes ( username ));
		}, 1000);
	});
}

document.getElementById ( 'username-input' ).addEventListener ( 'blur', async function ( event )
{
	const username = event.target.value;

	if ( username.trim() !== "" )
	{
		try
		{
			const usernameDisponivel = await verificaNomeUsuarioDisponivel ( username );
			exibirFeedback ( usernameDisponivel, username );
		}

		catch ( error )
		{
			console.error ( 'Erro ao verificar a disponibilidade do nome de usuário:', error );
			exibirFeedbackErro();
		}
	}
});

function exibirFeedback ( disponivel, username )
{
	const feedbackElemento = document.getElementById ( 'username-feedback' );
	if ( disponivel )
	{
		feedbackElemento.textContent = `O nome de usuário ${username} está disponível.`;
		feedbackElemento.style.color = "green";
	}

	else
	{
		feedbackElemento.textContent = `O nome de usuário ${username} já está registrado.`;
		feedbackElemento.style.color = "red";
	}
}

function exibirFeedbackErro()
{
	const feedbackElemento = document.getElementById ( 'username-feedback' );
	feedbackElemento.textContent = "Erro ao verificar a disponibilidade do nome de usuário. Verifique o console.";
	feedbackElemento.style.color = "red";
}
