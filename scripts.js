


document.getElementById('login').addEventListener('submit', function(e) {
        e.preventDefault(); // Previne o comportamento padrão

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Validação
        if (!email || !password) {
            alert('Preencha todos os campos!');
            return;
        }

        if (!email.includes('@')) {
            alert('Email inválido!');
            return;
        }

        if (password.length < 6) {
            alert('Senha deve ter no mínimo 6 caracteres!');
            return;
        }

        // Se passou na validação, vai para a página
        window.location.href = 'dashboard.html';
    });
