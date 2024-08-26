const UsuariosPermitidos = [];
const senhasPermitidas = [];

const novosUsuarios = [];
const novaSenha = [];

let usuarioDigitado;
let senhaDigitada;

function cadastrar() {
    usuarioDigitado = prompt("Digite o nome de usuário:");

    if (usuarioDigitado !== null) {
        UsuariosPermitidos.push(usuarioDigitado);
        
        senhaDigitada = prompt("Digite a senha:");

        if (senhaDigitada !== null) {
            senhasPermitidas.push(senhaDigitada);
            
            alert('Usuário Cadastrado com sucesso!');
        } else {
            alert("Senha não fornecida.");
        }
    } else {
        alert("Nome de usuário não fornecido.");
    }

    usuarioDigitado = UsuariosPermitidos.push;
    senhaDigitada = senhasPermitidas.push;
}


function Clicar() {
    const usuario = document.querySelector(".digite-usuario").value;
    const senha = document.querySelector(".digite-senha").value;
    
    if (UsuariosPermitidos.includes(usuario) && senhasPermitidas.includes(senha)) {
        alert("Login efetuado com sucesso");
    } else {
        alert("Usuário ou senha inválidos");
    }
}
