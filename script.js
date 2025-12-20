const modules = {
    1:{
        title: "Fundamentos de Segurança de Dados",
        video: "Introdução à Segurança",
        videoUrl: "videos/CONCEITOS BÁSICOS DE SEGURANÇA DA INFORMAÇÃO.mp4",
        content: `
            <h2>O que é Segurança de Dados?</h2>
            <p>Segurança de dados é o conjunto de práticas e tecnologias usadas para proteger informações digitais contra acesso não autorizado, corrupção ou roubo.</p>
            
            <div class="info-box">
                <strong>💡 Você Sabia?</strong><br>
                Mais de 4 bilhões de registros foram expostos em violações de dados em 2023.
            </div>

            <h2>Por que é Importante?</h2>
            <p>• Protege informações pessoais e financeiras</p>
            <p>• Previne roubo de identidade</p>
            <p>• Mantém a privacidade online</p>
            <p>• Protege empresas de perdas financeiras</p>

            <h2>Princípios Básicos</h2>
            <p><strong>Confidencialidade:</strong> Garantir que apenas pessoas autorizadas acessem as informações.</p>
            <p><strong>Integridade:</strong> Assegurar que os dados não sejam alterados de forma não autorizada.</p>
            <p><strong>Disponibilidade:</strong> Garantir que os dados estejam acessíveis quando necessário.</p>
        `
    },
    2: {
        title: "Proteção de Dados Pessoais",
        video: "Técnicas de Proteção",
        videoUrl: "videos/Protecao de dados.mp4",
        content: `
            <h2>Criptografia</h2>
            <p>A criptografia transforma dados em códigos que só podem ser lidos por quem possui a chave de descriptografia.</p>

            <div class="info-box">
                <strong>🔐 Exemplo Prático:</strong><br>
                Quando você vê "HTTPS" na barra de endereços, significa que sua conexão está criptografada.
            </div>

            <h2>Backup de Dados</h2>
            <p>• Faça backups regulares de informações importantes</p>
            <p>• Use a regra 3-2-1: 3 cópias, 2 tipos de mídia, 1 fora do local</p>
            <p>• Teste seus backups regularmente</p>

            <h2>Controle de Acesso</h2>
            <p>Implemente níveis de permissão para diferentes usuários e use autenticação de dois fatores (2FA) sempre que possível.</p>
        `
    },
    3: {
        title: "Ameaças Digitais Comuns",
        video: "Identificando Ameaças",
        videoUrl: "videos/ameacas.mp4",
        content: `
            <h2>Tipos de Ataques</h2>
            <p><strong>Malware:</strong> Software malicioso que danifica ou infiltra sistemas.</p>
            <p><strong>Ransomware:</strong> Sequestra seus dados e exige pagamento.</p>
            <p><strong>Spyware:</strong> Monitora suas atividades sem consentimento.</p>

            <div class="info-box">
                <strong>⚠️ Atenção:</strong><br>
                Nunca baixe arquivos de fontes não confiáveis ou clique em links suspeitos.
            </div>

            <h2>Como se Proteger</h2>
            <p>• Mantenha software e sistemas atualizados</p>
            <p>• Use antivírus confiável</p>
            <p>• Desconfie de ofertas "boas demais"</p>
            <p>• Faça análises regulares do sistema</p>
        `
    },
    4: {
        title: "Criação de Senhas Seguras",
        video: "Senhas Fortes",
        videoUrl: "videos/senha forte.mp4",
        content: `
            <h2>Características de Senhas Fortes</h2>
            <p>• Mínimo de 12 caracteres</p>
            <p>• Combinação de letras maiúsculas e minúsculas</p>
            <p>• Números e símbolos especiais</p>
            <p>• Sem informações pessoais óbvias</p>

            <div class="info-box">
                <strong>✅ Exemplo de Senha Forte:</strong><br>
                M3uC@ch0rr0#2024! (nunca use este exemplo!)
            </div>

            <h2>Gerenciadores de Senhas</h2>
            <p>Use gerenciadores como LastPass, 1Password ou Bitwarden para armazenar senhas com segurança.</p>

            <h2>Erros Comuns</h2>
            <p>❌ Usar a mesma senha em vários sites</p>
            <p>❌ Senhas óbvias: 123456, senha123</p>
            <p>❌ Compartilhar senhas por email ou mensagem</p>
        `
    },
    5: {
        title: "Phishing e Engenharia Social",
        video: "Identificando Golpes",
        videoUrl: "videos/Phishing.mp4",
        content: `
            <h2>O que é Phishing?</h2>
            <p>Phishing é uma técnica onde criminosos se passam por entidades confiáveis para roubar informações.</p>

            <div class="info-box">
                <strong>🎣 Sinais de Alerta:</strong><br>
                • Urgência excessiva<br>
                • Erros de ortografia<br>
                • Remetentes suspeitos<br>
                • Links estranhos
            </div>

            <h2>Como Verificar</h2>
            <p>• Passe o mouse sobre links antes de clicar</p>
            <p>• Verifique o endereço de email do remetente</p>
            <p>• Entre em contato diretamente com a empresa</p>
            <p>• Nunca forneça dados pessoais por email</p>

            <h2>Tipos de Phishing</h2>
            <p><strong>Spear Phishing:</strong> Ataques direcionados</p>
            <p><strong>Whaling:</strong> Ataques a executivos</p>
            <p><strong>Smishing:</strong> Phishing por SMS</p>
        `
    },
    6:{
        title: "Navegação Segura na Internet",
        video: "Privacidade Online",
        videoUrl: "videos/navegacao segura.mp4",
        content: `
            <h2>Navegadores Seguros</h2>
            <p>Use navegadores atualizados com recursos de segurança como Firefox, Chrome ou Brave.</p>

            <div class="info-box">
                <strong>🔒 Dica de Ouro:</strong><br>
                Use modo de navegação anônima para sessões sensíveis e limpe cookies regularmente.
            </div>

            <h2>VPN - Virtual Private Network</h2>
            <p>VPNs criptografam sua conexão e ocultam seu endereço IP, protegendo sua privacidade online.</p>

            <h2>Configurações de Privacidade</h2>
            <p>• Desative rastreamento de terceiros</p>
            <p>• Use extensões de bloqueio de anúncios</p>
            <p>• Revise permissões de sites</p>
            <p>• Cuidado com WiFi público</p>

            <h2>Redes Sociais</h2>
            <p>Configure perfis como privados e seja seletivo sobre o que compartilha online.</p>
        `
    }
};

const quizzes = {
    1: [
        {
            question: "O que significa o princípio de Confidencialidade?",
            options: ["Garantir que dados estejam sempre disponíveis", "Garantir que apenas pessoas autorizadas acessem informações", "Proteger dados contra alterações", "Fazer backup regular"],
            correct: 1
        },
        {
            question: "Qual é a principal função da segurança de dados?",
            options: ["Aumentar a velocidade da internet", "Proteger informações contra acesso não autorizado", "Melhorar o design de websites", "Reduzir custos de TI"],
            correct: 1
        }
    ],
    2: [
        {
            question: "O que significa 'HTTPS' na barra de endereços?",
            options: ["Site muito rápido", "Conexão criptografada", "Site em português", "Site oficial"],
            correct: 1
        },
        {
            question: "Qual é a regra 3-2-1 de backup?",
            options: ["3 backups ao dia, 2 por semana, 1 por mês", "3 cópias, 2 tipos de mídia, 1 fora do local", "3 senhas, 2 emails, 1 telefone", "3 computadores, 2 HDs, 1 nuvem"],
            correct: 1
        }
    ],
    3: [
        {
            question: "O que é Ransomware?",
            options: ["Antivírus gratuito", "Software que sequestra dados", "Programa de backup", "Navegador seguro"],
            correct: 1
        },
        {
            question: "Como se proteger de malware?",
            options: ["Desligar o computador sempre", "Manter software atualizado e usar antivírus", "Não usar a internet", "Usar apenas sites em inglês"],
            correct: 1
        }
    ],
    4: [
        {
            question: "Quantos caracteres deve ter uma senha forte?",
            options: ["6 caracteres", "8 caracteres", "12 ou mais caracteres", "20 caracteres"],
            correct: 2
        },
        {
            question: "O que é um gerenciador de senhas?",
            options: ["Programa para hackear senhas", "Ferramenta para armazenar senhas com segurança", "Senha muito forte", "Aplicativo de banco"],
            correct: 1
        }
    ],
    5: [
        {
            question: "O que é Phishing?",
            options: ["Técnica de pesca", "Golpe para roubar informações", "Antivírus", "Rede social"],
            correct: 1
        },
        {
            question: "Qual é um sinal de email de phishing?",
            options: ["Email bem escrito", "Urgência excessiva e erros de ortografia", "Logo da empresa", "Email curto"],
            correct: 1
        }
    ],
    6: [
        {
            question: "O que é uma VPN?",
            options: ["Tipo de vírus", "Rede que criptografa sua conexão", "Navegador", "Senha especial"],
            correct: 1
        },
        {
            question: "Por que devemos ter cuidado com WiFi público?",
            options: ["É muito lento", "Pode ser inseguro e expor dados", "Consome muita bateria", "É ilegal"],
            correct: 1
        }
    ]
};

// User data storage
let currentUser = null;
let userData = JSON.parse(localStorage.getItem('cyberguardUsers')) || {};
let userProgress = JSON.parse(localStorage.getItem('cyberguardProgress')) || {};

// Show specific screen
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
    
    if (screenId === 'dashboardScreen') {
        updateDashboard();
    } else if (screenId === 'profileScreen') {
        updateProfile();
    }
}

// Register form handler
document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('registerName').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;

    if (userData[email]) {
        alert('Este email já está cadastrado!');
        return;
    }

    userData[email] = { name, password };
    userProgress[email] = {
        completedModules: [],
        quizScores: {},
        totalTime: 0
    };

    localStorage.setItem('cyberguardUsers', JSON.stringify(userData));
    localStorage.setItem('cyberguardProgress', JSON.stringify(userProgress));

    alert('Cadastro realizado com sucesso!');
    showScreen('loginScreen');
    document.getElementById('registerForm').reset();
});

// Login form handler
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    if (userData[email] && userData[email].password === password) {
        currentUser = email;
        showScreen('dashboardScreen');
        document.getElementById('loginForm').reset();
    } else {
        alert('Email ou senha incorretos!');
    }
});

// Logout
function logout() {
    currentUser = null;
    showScreen('loginScreen');
}

// Update dashboard
function updateDashboard() {
    if (!currentUser) return;

    const user = userData[currentUser];
    const progress = userProgress[currentUser];

    document.getElementById('userName').textContent = user.name;
    document.getElementById('userAvatar').textContent = user.name.charAt(0).toUpperCase();

    const totalModules = 6;
    const completed = progress.completedModules.length;
    const remaining = totalModules - completed;
    const percentage = Math.round((completed / totalModules) * 100);

    // Update mini stats
    document.getElementById('miniCompleted').textContent = completed;
    document.getElementById('miniRemaining').textContent = remaining;
    
    const scores = Object.values(progress.quizScores);
    const avgScore = scores.length > 0 ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length) : 0;
    document.getElementById('miniScore').textContent = avgScore + '%';

    // Update progress bar
    document.getElementById('progressText').textContent = percentage + '%';
    document.getElementById('overallProgress').style.width = percentage + '%';
    document.getElementById('overallProgress').querySelector('.progress-label').textContent = percentage + '% Completo';

    // Mark completed modules with enhanced styling
    for (let i = 1; i <= 6; i++) {
        const moduleCard = document.querySelector(`.module-card-enhanced:nth-child(${i})`);
        const statusBadge = document.querySelector(`[data-module="${i}"] .status-badge`);
        
        if (progress.completedModules.includes(i)) {
            moduleCard.classList.add('completed');
            statusBadge.textContent = 'Concluído';
            statusBadge.classList.add('completed');
        } else {
            moduleCard.classList.remove('completed');
            statusBadge.textContent = 'Começar';
            statusBadge.classList.remove('completed');
        }
    }
}

// Submit suggestion
function submitSuggestion() {
    const text = document.getElementById('suggestionText').value.trim();
    if (!text) {
        alert('Por favor, escreva sua sugestão antes de enviar.');
        return;
    }

    // Store suggestion
    let suggestions = JSON.parse(localStorage.getItem('cyberguardSuggestions')) || [];
    suggestions.push({
        user: currentUser,
        text: text,
        date: new Date().toISOString()
    });
    localStorage.setItem('cyberguardSuggestions', JSON.stringify(suggestions));

    // Show success message
    document.getElementById('suggestionSuccess').style.display = 'block';
    document.getElementById('suggestionText').value = '';

    setTimeout(() => {
        document.getElementById('suggestionSuccess').style.display = 'none';
    }, 5000);
}

// Start module
let currentModule = null;
function startModule(moduleId) {
    currentModule = moduleId;
    const module = modules[moduleId];

    document.getElementById('moduleTitle').textContent = module.title;
    document.getElementById('moduleContent').innerHTML = module.content;

    // Carregar vídeo local
    const videoContainer = document.getElementById('videoContainer');
    
    if (module.videoUrl) {
        // Vídeo local (MP4, WebM, etc)
        videoContainer.innerHTML = `
            <video 
                width="100%" 
                height="100%" 
                controls 
                controlsList="nodownload"
                style="border-radius: 10px; background: #000;">
                <source src="${module.videoUrl}" type="video/mp4">
                <source src="${module.videoUrl.replace('.mp4', '.webm')}" type="video/webm">
                Seu navegador não suporta a tag de vídeo.
            </video>
        `;
    } else {
        // Placeholder se não houver vídeo configurado
        videoContainer.innerHTML = `
            <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; color: white;">
                <div style="font-size: 48px; margin-bottom: 20px;">🎥</div>
                <div style="font-size: 20px; font-weight: 600; margin-bottom: 10px;">${module.video}</div>
                <div style="font-size: 14px; opacity: 0.8;">Configure o arquivo de vídeo no código</div>
            </div>
        `;
    }

    showScreen('learningScreen');
}

// Start quiz
function startQuiz() {
    if (!currentModule) return;

    const module = modules[currentModule];
    const quiz = quizzes[currentModule];

    document.getElementById('quizTitle').textContent = module.title;

    let quizHTML = '';
    quiz.forEach((q, index) => {
        quizHTML += `
            <div class="question" data-question="${index}">
                <h3>Pergunta ${index + 1}: ${q.question}</h3>
                <div class="options">
                    ${q.options.map((opt, i) => `
                        <div class="option" onclick="selectOption(${index}, ${i})" data-option="${i}">
                            ${opt}
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    });

    document.getElementById('quizContent').innerHTML = quizHTML;
    showScreen('quizScreen');
}

// Track selected answers
let selectedAnswers = {};

function selectOption(questionIndex, optionIndex) {
    const question = document.querySelector(`[data-question="${questionIndex}"]`);
    question.querySelectorAll('.option').forEach(opt => opt.classList.remove('selected'));
    question.querySelector(`[data-option="${optionIndex}"]`).classList.add('selected');
    selectedAnswers[questionIndex] = optionIndex;
}

// Submit quiz
function submitQuiz() {
    if (!currentModule || !currentUser) return;

    const quiz = quizzes[currentModule];
    let correct = 0;

    quiz.forEach((q, index) => {
        const question = document.querySelector(`[data-question="${index}"]`);
        const selectedOpt = selectedAnswers[index];

        question.querySelectorAll('.option').forEach(opt => {
            opt.style.pointerEvents = 'none';
        });

        if (selectedOpt !== undefined) {
            const optionEl = question.querySelector(`[data-option="${selectedOpt}"]`);
            if (selectedOpt === q.correct) {
                optionEl.classList.add('correct');
                correct++;
            } else {
                optionEl.classList.add('wrong');
                question.querySelector(`[data-option="${q.correct}"]`).classList.add('correct');
            }
        }
    });

    const score = Math.round((correct / quiz.length) * 100);
    const progress = userProgress[currentUser];

    if (score >= 70) {
        if (!progress.completedModules.includes(currentModule)) {
            progress.completedModules.push(currentModule);
        }
        progress.quizScores[currentModule] = score;
        localStorage.setItem('cyberguardProgress', JSON.stringify(userProgress));

        setTimeout(() => {
            alert(`Parabéns! Você acertou ${correct} de ${quiz.length} questões (${score}%)\n\nMódulo concluído! 🎉`);
            selectedAnswers = {};
            showScreen('dashboardScreen');
        }, 1000);
    } else {
        setTimeout(() => {
            alert(`Você acertou ${correct} de ${quiz.length} questões (${score}%)\n\nÉ necessário 70% para passar. Tente novamente!`);
            selectedAnswers = {};
        }, 1000);
    }
}

// Update profile
function updateProfile() {
    if (!currentUser) return;

    const user = userData[currentUser];
    const progress = userProgress[currentUser];

    document.getElementById('profileName').textContent = user.name;
    document.getElementById('profileEmail').textContent = currentUser;
    document.getElementById('profileAvatar').textContent = user.name.charAt(0).toUpperCase();

    // Preencher campos editáveis
    document.getElementById('editEmail').value = currentUser;
    document.getElementById('editName').value = user.name || '';
    document.getElementById('editPhone').value = user.phone || '';
    document.getElementById('editAddress').value = user.address || '';
    document.getElementById('editCity').value = user.city || '';
    document.getElementById('editCep').value = user.cep || '';

    document.getElementById('completedModules').textContent = progress.completedModules.length;
    document.getElementById('quizzesPassed').textContent = progress.completedModules.length;

    const scores = Object.values(progress.quizScores);
    const avgScore = scores.length > 0 ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length) : 0;
    document.getElementById('averageScore').textContent = avgScore + '%';

    document.getElementById('studyTime').textContent = Math.round(progress.completedModules.length * 0.5) + 'h';

    // Enable certificate button if all modules completed
    const certBtn = document.getElementById('certBtn');
    if (progress.completedModules.length === 6) {
        certBtn.disabled = false;
    } else {
        certBtn.disabled = true;
    }
}

// Save profile information
function saveProfile() {
    if (!currentUser) return;

    const user = userData[currentUser];
    
    user.name = document.getElementById('editName').value;
    user.phone = document.getElementById('editPhone').value;
    user.address = document.getElementById('editAddress').value;
    user.city = document.getElementById('editCity').value;
    user.cep = document.getElementById('editCep').value;

    localStorage.setItem('cyberguardUsers', JSON.stringify(userData));

    // Update displayed name
    document.getElementById('profileName').textContent = user.name;
    document.getElementById('userName').textContent = user.name;
    document.getElementById('userAvatar').textContent = user.name.charAt(0).toUpperCase();
    document.getElementById('profileAvatar').textContent = user.name.charAt(0).toUpperCase();

    alert('✅ Informações salvas com sucesso!');
}

// Change password
function changePassword() {
    if (!currentUser) return;

    const currentPassword = document.getElementById('currentPassword').value;
    const newPassword = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Validações
    if (!currentPassword || !newPassword || !confirmPassword) {
        alert('⚠️ Por favor, preencha todos os campos de senha!');
        return;
    }

    if (userData[currentUser].password !== currentPassword) {
        alert('❌ Senha atual incorreta!');
        return;
    }

    if (newPassword.length < 6) {
        alert('⚠️ A nova senha deve ter no mínimo 6 caracteres!');
        return;
    }

    if (newPassword !== confirmPassword) {
        alert('❌ As senhas não coincidem!');
        return;
    }

    // Atualizar senha
    userData[currentUser].password = newPassword;
    localStorage.setItem('cyberguardUsers', JSON.stringify(userData));

    // Limpar campos
    document.getElementById('currentPassword').value = '';
    document.getElementById('newPassword').value = '';
    document.getElementById('confirmPassword').value = '';

    alert('✅ Senha alterada com sucesso!');
}

// Generate certificate
function generateCertificate() {
    if (!currentUser) return;

    const user = userData[currentUser];
    const progress = userProgress[currentUser];

    if (progress.completedModules.length < 6) {
        alert('Complete todos os 6 módulos para gerar o certificado!');
        return;
    }

    document.getElementById('certName').textContent = user.name;
    const today = new Date();
    document.getElementById('certDate').textContent = today.toLocaleDateString('pt-BR');

    showScreen('certificateScreen');
}

// Download certificate as PDF
function downloadCertificate() {
    alert('🎉 Certificado gerado com sucesso!\n\n📥 Funcionalidade de download PDF:\n\nEm um ambiente de produção, aqui seria integrado uma biblioteca como jsPDF ou html2canvas para converter o certificado em PDF e fazer o download.\n\nPor enquanto, você pode usar:\n• Ctrl+P / Cmd+P para imprimir\n• Salvar como PDF na opção de impressão\n• Capturar screenshot do certificado');
    
    // Simula o download
    window.print();
}

// Initialize
if (localStorage.getItem('cyberguardUsers')) {
    // Add demo user if no users exist
    if (Object.keys(userData).length === 0) {
        userData['demo@cyberguard.com'] = {
            name: 'Usuário Demo',
            password: 'demo123'
        };
        userProgress['demo@cyberguard.com'] = {
            completedModules: [1, 2],
            quizScores: { 1: 100, 2: 85 },
            totalTime: 2
        };
        localStorage.setItem('cyberguardUsers', JSON.stringify(userData));
        localStorage.setItem('cyberguardProgress', JSON.stringify(userProgress));
    }
