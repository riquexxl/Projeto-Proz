<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>information security - Aprenda Segurança de Dados</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <!-- Login Screen -->
        <div id="loginScreen" class="screen active">
            <!-- Hero Section -->
            <div style="text-align: center; padding: 60px 20px 40px; color: white;">
                <h1 style="font-size: 3.5em; margin-bottom: 20px; text-shadow: 2px 2px 4px rgba(0,0,0,0.3);">
                    🛡️ information security
                </h1>
                <p style="font-size: 1.5em; margin-bottom: 40px; text-shadow: 1px 1px 2px rgba(0,0,0,0.3);">
                    Proteja-se no Mundo Digital
                </p>
            </div>

            <!-- Stats Banner -->
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; margin-bottom: 40px; padding: 0 20px;">
                <div class="stat-alert">
                    <div class="stat-number">4.1 Bi</div>
                    <div class="stat-label">Dados vazados em 2023</div>
                </div>
                <div class="stat-alert">
                    <div class="stat-number">R$ 4.45 Mi</div>
                    <div class="stat-label">Custo médio de vazamento</div>
                </div>
                <div class="stat-alert">
                    <div class="stat-number">95%</div>
                    <div class="stat-label">Ataques por erro humano</div>
                </div>
                <div class="stat-alert">
                    <div class="stat-number">23 seg</div>
                    <div class="stat-label">Tempo para hackear senha fraca</div>
                </div>
            </div>

            <!-- Login Box -->
            <div class="auth-container" style="margin-top: 20px;">
                <h2 style="color: #667eea; margin-bottom: 10px;">Entre e Proteja-se Agora!</h2>
                <p style="color: #888; margin-bottom: 30px; font-size: 14px;">
                    ⚡ Aprenda técnicas essenciais de segurança em menos de 3 horas
                </p>
                <form id="loginForm">
                    <div class="form-group">
                        <label>Email</label>
                        <input type="email" id="loginEmail" required placeholder="seu@email.com">
                    </div>
                    <div class="form-group">
                        <label>Senha</label>
                        <input type="password" id="loginPassword" required placeholder="••••••••">
                    </div>
                    <button type="submit" class="btn">🚀 Começar Agora</button>
                </form>
                <div class="link-text">
                    Não tem conta? <a href="#" onclick="showScreen('registerScreen')">Cadastre-se Grátis</a>
                </div>
                <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e0e0e0; text-align: center; color: #888; font-size: 13px;">
                    💡 Teste com usuário demo: <strong>demo@cyberguard.com</strong> / <strong>demo123</strong>
                </div>
            </div>

            <!-- Why Learn Section -->
            <div style="background: white; border-radius: 20px; padding: 40px; margin-top: 40px; max-width: 900px; margin-left: auto; margin-right: auto;">
                <h2 style="text-align: center; color: #667eea; margin-bottom: 30px; font-size: 2em;">
                    ⚠️ Por que Você PRECISA Aprender Isso?
                </h2>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 25px;">
                    <div class="danger-card">
                        <div class="danger-icon">🎣</div>
                        <h3>Phishing Cresceu 61%</h3>
                        <p>Golpistas roubam R$ 2,5 bilhões/ano no Brasil através de emails falsos</p>
                    </div>
                    <div class="danger-card">
                        <div class="danger-icon">💳</div>
                        <h3>Roubo de Identidade</h3>
                        <p>1 brasileiro é vítima a cada 8 segundos - não seja o próximo!</p>
                    </div>
                    <div class="danger-card">
                        <div class="danger-icon">🔓</div>
                        <h3>Senhas Fracas</h3>
                        <p>81% das violações ocorrem por senhas ruins ou reutilizadas</p>
                    </div>
                </div>
            </div>

            <!-- What You'll Learn -->
            <div style="background: rgba(255,255,255,0.1); backdrop-filter: blur(10px); border-radius: 20px; padding: 40px; margin-top: 40px; max-width: 900px; margin-left: auto; margin-right: auto; color: white;">
                <h2 style="text-align: center; margin-bottom: 30px; font-size: 2em;">
                    🎓 O Que Você Vai Aprender
                </h2>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px;">
                    <div class="learn-item">✅ Identificar ataques de phishing</div>
                    <div class="learn-item">✅ Criar senhas inquebráveis</div>
                    <div class="learn-item">✅ Proteger dados pessoais</div>
                    <div class="learn-item">✅ Navegar com segurança</div>
                    <div class="learn-item">✅ Usar criptografia</div>
                    <div class="learn-item">✅ Evitar malware e vírus</div>
                </div>
            </div>
        </div>

        <!-- Register Screen -->
        <div id="registerScreen" class="screen">
            <div style="text-align: center; padding: 60px 20px 40px; color: white;">
                <h1 style="font-size: 3em; margin-bottom: 20px; text-shadow: 2px 2px 4px rgba(0,0,0,0.3);">
                    🚀 Junte-se a Nós!
                </h1>
                <p style="font-size: 1.3em; text-shadow: 1px 1px 2px rgba(0,0,0,0.3);">
                    Comece sua jornada para se tornar um expert em segurança digital
                </p>
            </div>

            <div class="auth-container">
                <h2 style="color: #667eea; margin-bottom: 30px;">Criar Conta Gratuita</h2>
                
                <div style="background: #f5f7fa; padding: 20px; border-radius: 10px; margin-bottom: 30px;">
                    <h4 style="color: #667eea; margin-bottom: 15px;">✨ Você terá acesso a:</h4>
                    <div style="display: grid; gap: 10px; font-size: 14px;">
                        <div>✓ 6 módulos completos sobre segurança</div>
                        <div>✓ Vídeos didáticos e interativos</div>
                        <div>✓ Quizzes para testar conhecimento</div>
                        <div>✓ Certificado profissional em PDF</div>
                        <div>✓ Acompanhamento de progresso</div>
                        <div>✓ 100% gratuito, para sempre!</div>
                    </div>
                </div>

                <form id="registerForm">
                    <div class="form-group">
                        <label>Nome Completo</label>
                        <input type="text" id="registerName" required placeholder="Seu nome completo">
                    </div>
                    <div class="form-group">
                        <label>Email</label>
                        <input type="email" id="registerEmail" required placeholder="seu@email.com">
                    </div>
                    <div class="form-group">
                        <label>Senha</label>
                        <input type="password" id="registerPassword" required placeholder="Mínimo 6 caracteres">
                        <small style="color: #888;">Dica: Use letras, números e símbolos!</small>
                    </div>
                    <button type="submit" class="btn">🎓 Criar Minha Conta</button>
                </form>
                <div class="link-text">
                    Já tem conta? <a href="#" onclick="showScreen('loginScreen')">Fazer login</a>
                </div>
            </div>

            <div style="text-align: center; margin-top: 40px; color: white;">
                <div style="display: inline-flex; gap: 40px; flex-wrap: wrap; justify-content: center;">
                    <div>
                        <div style="font-size: 2em; font-weight: bold;">2000+</div>
                        <div style="font-size: 0.9em; opacity: 0.9;">Alunos Certificados</div>
                    </div>
                    <div>
                        <div style="font-size: 2em; font-weight: bold;">4.9⭐</div>
                        <div style="font-size: 0.9em; opacity: 0.9;">Avaliação Média</div>
                    </div>
                    <div>
                        <div style="font-size: 2em; font-weight: bold;">100%</div>
                        <div style="font-size: 0.9em; opacity: 0.9;">Gratuito</div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Dashboard -->
        <div id="dashboardScreen" class="screen">
            <div class="dashboard">
                <div class="header">
                    <h1>🎓 Minha Jornada de Aprendizado</h1>
                    <div class="user-info">
                        <div class="avatar" id="userAvatar"></div>
                        <div>
                            <strong id="userName"></strong>
                            <div style="font-size: 14px; color: #888;">Estudante CyberGuard</div>
                        </div>
                        <button class="btn-secondary" onclick="showScreen('profileScreen')">👤 Perfil</button>
                        <button class="btn-secondary" onclick="logout()">🚪 Sair</button>
                    </div>
                </div>

                <div class="welcome-banner">
                    <div class="welcome-content">
                        <h2>👋 Bem-vindo de volta!</h2>
                        <p>Continue sua jornada para se tornar um expert em segurança digital. Você está a poucos passos de proteger seus dados como um profissional!</p>
                    </div>
                    <div class="welcome-stats">
                        <div class="mini-stat">
                            <div class="mini-stat-number" id="miniCompleted">0</div>
                            <div class="mini-stat-label">Concluídos</div>
                        </div>
                        <div class="mini-stat">
                            <div class="mini-stat-number" id="miniRemaining">6</div>
                            <div class="mini-stat-label">Restantes</div>
                        </div>
                        <div class="mini-stat">
                            <div class="mini-stat-number" id="miniScore">0%</div>
                            <div class="mini-stat-label">Aproveitamento</div>
                        </div>
                    </div>
                </div>

                <div class="progress-section">
                    <div class="progress-header">
                        <div>
                            <h2>📊 Progresso Geral do Curso</h2>
                            <p style="color: #888; font-size: 14px; margin-top: 5px;">Complete todos os módulos para receber seu certificado profissional</p>
                        </div>
                        <div class="progress-percentage" id="progressText">0%</div>
                    </div>
                    <div class="progress-bar-modern">
                        <div class="progress-fill-modern" id="overallProgress">
                            <span class="progress-label">0% Completo</span>
                        </div>
                    </div>
                    <div class="progress-milestones">
                        <div class="milestone">
                            <div class="milestone-icon">🎯</div>
                            <div class="milestone-text">Início</div>
                        </div>
                        <div class="milestone">
                            <div class="milestone-icon">⭐</div>
                            <div class="milestone-text">50%</div>
                        </div>
                        <div class="milestone">
                            <div class="milestone-icon">🏆</div>
                            <div class="milestone-text">Certificado</div>
                        </div>
                    </div>
                </div>

                <div class="modules-header">
                    <h2>📚 Módulos do Curso</h2>
                    <p style="color: #888; margin-top: 5px;">Cada módulo inclui vídeo, conteúdo detalhado e quiz de avaliação</p>
                </div>

                <div class="modules-grid">
                    <div class="module-card-enhanced" onclick="startModule(1)">
                        <div class="module-number">Módulo 1</div>
                        <div class="module-icon">🔒</div>
                        <h3>Fundamentos de Segurança</h3>
                        <p>Aprenda os conceitos básicos de segurança de dados e por que ela é crucial para sua vida digital.</p>
                        <div class="module-meta">
                            <span>📹 1 vídeo</span>
                            <span>📝 2 questões</span>
                            <span>⏱️ 20 min</span>
                        </div>
                        <div class="module-status" data-module="1">
                            <span class="status-badge">Começar</span>
                        </div>
                    </div>

                    <div class="module-card-enhanced" onclick="startModule(2)">
                        <div class="module-number">Módulo 2</div>
                        <div class="module-icon">🛡️</div>
                        <h3>Proteção de Dados</h3>
                        <p>Técnicas profissionais para proteger suas informações pessoais e corporativas com criptografia.</p>
                        <div class="module-meta">
                            <span>📹 1 vídeo</span>
                            <span>📝 2 questões</span>
                            <span>⏱️ 25 min</span>
                        </div>
                        <div class="module-status" data-module="2">
                            <span class="status-badge">Começar</span>
                        </div>
                    </div>

                    <div class="module-card-enhanced" onclick="startModule(3)">
                        <div class="module-number">Módulo 3</div>
                        <div class="module-icon">⚠️</div>
                        <h3>Ameaças Digitais</h3>
                        <p>Identifique e proteja-se contra malware, ransomware e outros ataques cibernéticos modernos.</p>
                        <div class="module-meta">
                            <span>📹 1 vídeo</span>
                            <span>📝 2 questões</span>
                            <span>⏱️ 30 min</span>
                        </div>
                        <div class="module-status" data-module="3">
                            <span class="status-badge">Começar</span>
                        </div>
                    </div>

                    <div class="module-card-enhanced" onclick="startModule(4)">
                        <div class="module-number">Módulo 4</div>
                        <div class="module-icon">🔑</div>
                        <h3>Senhas Seguras</h3>
                        <p>Domine as melhores práticas para criar, gerenciar e armazenar senhas inquebráveis.</p>
                        <div class="module-meta">
                            <span>📹 1 vídeo</span>
                            <span>📝 2 questões</span>
                            <span>⏱️ 20 min</span>
                        </div>
                        <div class="module-status" data-module="4">
                            <span class="status-badge">Começar</span>
                        </div>
                    </div>

                    <div class="module-card-enhanced" onclick="startModule(5)">
                        <div class="module-number">Módulo 5</div>
                        <div class="module-icon">📧</div>
                        <h3>Phishing e Golpes</h3>
                        <p>Aprenda a identificar e evitar golpes de phishing e técnicas de engenharia social.</p>
                        <div class="module-meta">
                            <span>📹 1 vídeo</span>
                            <span>📝 2 questões</span>
                            <span>⏱️ 25 min</span>
                        </div>
                        <div class="module-status" data-module="5">
                            <span class="status-badge">Começar</span>
                        </div>
                    </div>

                    <div class="module-card-enhanced" onclick="startModule(6)">
                        <div class="module-number">Módulo 6</div>
                        <div class="module-icon">🌐</div>
                        <h3>Navegação Segura</h3>
                        <p>Dicas avançadas para navegar na internet com máxima segurança e privacidade.</p>
                        <div class="module-meta">
                            <span>📹 1 vídeo</span>
                            <span>📝 2 questões</span>
                            <span>⏱️ 30 min</span>
                        </div>
                        <div class="module-status" data-module="6">
                            <span class="status-badge">Começar</span>
                        </div>
                    </div>
                </div>

                <div class="suggestions-box">
                    <h3>💡 Tem Sugestões ou Ideias?</h3>
                    <p>Queremos melhorar constantemente! Compartilhe suas ideias, sugestões de conteúdo ou feedback sobre a plataforma.</p>
                    <textarea id="suggestionText" placeholder="Digite sua sugestão aqui... (Ex: Gostaria de ver um módulo sobre VPNs, ou melhorias na interface)" rows="4"></textarea>
                    <button class="btn" onclick="submitSuggestion()">📮 Enviar Sugestão</button>
                    <div id="suggestionSuccess" style="display: none; margin-top: 15px; padding: 15px; background: #e8f5e9; border-radius: 8px; color: #2e7d32;">
                        ✅ Obrigado pela sua sugestão! Vamos analisar com carinho.
                    </div>
                </div>
            </div>
        </div>

        <!-- Learning Screen -->
        <div id="learningScreen" class="screen">
            <div class="learning-content">
                <button class="btn-secondary" onclick="showScreen('dashboardScreen')">← Voltar</button>
                <h1 id="moduleTitle"></h1>
                
                <div class="video-container" id="videoContainer"></div>

                <div class="content-section" id="moduleContent"></div>

                <button class="btn" onclick="startQuiz()">Fazer Quiz do Módulo</button>
            </div>
        </div>

        <!-- Quiz Screen -->
        <div id="quizScreen" class="screen">
            <div class="quiz-container">
                <button class="btn-secondary" onclick="showScreen('learningScreen')">← Voltar</button>
                <h1>📝 Quiz - <span id="quizTitle"></span></h1>
                <div id="quizContent"></div>
                <button class="btn" id="submitQuiz" onclick="submitQuiz()">Enviar Respostas</button>
            </div>
        </div>

        <!-- Profile Screen -->
        <div id="profileScreen" class="screen">
            <div class="profile-container">
                <button class="btn-secondary" onclick="showScreen('dashboardScreen')">← Voltar</button>
                <div class="profile-header">
                    <div class="profile-avatar" id="profileAvatar"></div>
                    <div>
                        <h1 id="profileName"></h1>
                        <p id="profileEmail" style="color: #888; margin-top: 5px;"></p>
                    </div>
                </div>

                <h2>📊 Suas Estatísticas</h2>
                <div class="stats-grid">
                    <div class="stat-card">
                        <h3 id="completedModules">0</h3>
                        <p>Módulos Concluídos</p>
                    </div>
                    <div class="stat-card">
                        <h3 id="quizzesPassed">0</h3>
                        <p>Quizzes Aprovados</p>
                    </div>
                    <div class="stat-card">
                        <h3 id="averageScore">0%</h3>
                        <p>Média de Acertos</p>
                    </div>
                    <div class="stat-card">
                        <h3 id="studyTime">0h</h3>
                        <p>Tempo de Estudo</p>
                    </div>
                </div>

                <div style="margin-top: 40px;">
                    <h2>👤 Informações Pessoais</h2>
                    <div class="profile-info-grid">
                        <div class="profile-info-card">
                            <div class="profile-info-icon">📧</div>
                            <div class="profile-info-content">
                                <label>Email</label>
                                <input type="email" id="editEmail" class="profile-input" readonly>
                                <small style="color: #888;">Email não pode ser alterado</small>
                            </div>
                        </div>

                        <div class="profile-info-card">
                            <div class="profile-info-icon">👤</div>
                            <div class="profile-info-content">
                                <label>Nome Completo</label>
                                <input type="text" id="editName" class="profile-input">
                            </div>
                        </div>

                        <div class="profile-info-card">
                            <div class="profile-info-icon">📱</div>
                            <div class="profile-info-content">
                                <label>Telefone</label>
                                <input type="tel" id="editPhone" class="profile-input" placeholder="(00) 00000-0000">
                            </div>
                        </div>

                        <div class="profile-info-card">
                            <div class="profile-info-icon">📍</div>
                            <div class="profile-info-content">
                                <label>Endereço</label>
                                <input type="text" id="editAddress" class="profile-input" placeholder="Rua, número, bairro">
                            </div>
                        </div>

                        <div class="profile-info-card">
                            <div class="profile-info-icon">🌆</div>
                            <div class="profile-info-content">
                                <label>Cidade/Estado</label>
                                <input type="text" id="editCity" class="profile-input" placeholder="Cidade - UF">
                            </div>
                        </div>

                        <div class="profile-info-card">
                            <div class="profile-info-icon">📮</div>
                            <div class="profile-info-content">
                                <label>CEP</label>
                                <input type="text" id="editCep" class="profile-input" placeholder="00000-000">
                            </div>
                        </div>
                    </div>

                    <button class="btn" onclick="saveProfile()" style="margin-top: 20px;">💾 Salvar Informações</button>
                </div>

                <div style="margin-top: 40px;">
                    <h2>🔐 Segurança da Conta</h2>
                    <div class="security-section">
                        <div class="security-card">
                            <h3>🔑 Alterar Senha</h3>
                            <p style="color: #666; margin-bottom: 20px;">Mantenha sua conta segura atualizando sua senha regularmente</p>
                            
                            <div class="form-group">
                                <label>Senha Atual</label>
                                <input type="password" id="currentPassword" class="profile-input" placeholder="Digite sua senha atual">
                            </div>
                            <div class="form-group">
                                <label>Nova Senha</label>
                                <input type="password" id="newPassword" class="profile-input" placeholder="Digite a nova senha">
                            </div>
                            <div class="form-group">
                                <label>Confirmar Nova Senha</label>
                                <input type="password" id="confirmPassword" class="profile-input" placeholder="Confirme a nova senha">
                            </div>
                            
                            <button class="btn" onclick="changePassword()">🔄 Alterar Senha</button>
                        </div>
                    </div>
                </div>

                <div style="margin-top: 40px;">
                    <h2>🎓 Certificado</h2>
                    <div class="certificate-section">
                        <p style="color: #666; margin-bottom: 20px;">
                            Complete todos os 6 módulos e obtenha seu certificado profissional de conclusão!
                        </p>
                        <button class="btn" onclick="generateCertificate()" id="certBtn" disabled>🎓 Gerar Certificado</button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Certificate Screen -->
        <div id="certificateScreen" class="screen">
            <div class="profile-container">
                <button class="btn-secondary" onclick="showScreen('profileScreen')">← Voltar</button>
                <div class="certificate" id="certificate">
                    <div class="certificate-header">🎓 Certificado de Conclusão</div>
                    <div class="certificate-body">
                        <p>Certificamos que</p>
                        <div class="certificate-name" id="certName"></div>
                        <p>concluiu com êxito o curso completo de</p>
                        <h2 style="color: #667eea; margin: 20px 0;">Segurança de Dados e Informações</h2>
                        <p>na plataforma CyberGuard Academy</p>
                        <p style="margin-top: 20px;">Data: <span id="certDate"></span></p>
                    </div>
                    <div class="certificate-footer">
                        <div class="signature-line">
                            <strong>CyberGuard Academy</strong><br>
                            <small>Plataforma de Ensino</small>
                        </div>
                        <div class="signature-line">
                            <strong>Instrutor Certificado</strong><br>
                            <small>Segurança Digital</small>
                        </div>
                    </div>
                </div>
                <button class="btn" onclick="downloadCertificate()" style="margin-top: 20px;">📥 Baixar PDF</button>
            </div>
        </div>
    </div>

    <script src="script.js"></script>
</body>
</html>

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

    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    min-height: 100vh;
    color: #333;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
}

.screen {
    display: none;
    animation: fadeIn 0.5s;
}

.screen.active {
    display: block;
}

@keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
}

/* Login/Register Screen */
.auth-container {
    background: white;
    padding: 40px;
    border-radius: 20px;
    box-shadow: 0 20px 60px rgba(0,0,0,0.3);
    max-width: 450px;
    margin: 100px auto;
}

.auth-container h1 {
    color: #667eea;
    margin-bottom: 30px;
    text-align: center;
    font-size: 2em;
}

.form-group {
    margin-bottom: 20px;
}

.form-group label {
    display: block;
    margin-bottom: 8px;
    font-weight: 600;
    color: #555;
}

.form-group input {
    width: 100%;
    padding: 12px;
    border: 2px solid #e0e0e0;
    border-radius: 8px;
    font-size: 16px;
    transition: border 0.3s;
}

.form-group input:focus {
    outline: none;
    border-color: #667eea;
}

.btn {
    width: 100%;
    padding: 14px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: transform 0.2s;
}

.btn:hover {
    transform: translateY(-2px);
}

.link-text {
    text-align: center;
    margin-top: 20px;
    color: #666;
}

.link-text a {
    color: #667eea;
    text-decoration: none;
    font-weight: 600;
}

/* Dashboard */
.dashboard {
    background: white;
    border-radius: 20px;
    padding: 30px;
    margin-top: 20px;
}

.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
    padding-bottom: 20px;
    border-bottom: 2px solid #f0f0f0;
}

.user-info {
    display: flex;
    align-items: center;
    gap: 15px;
}

.avatar {
    width: 50px;
    height: 50px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: bold;
    font-size: 20px;
}

.progress-container {
    margin: 30px 0;
}

.progress-bar {
    width: 100%;
    height: 30px;
    background: #f0f0f0;
    border-radius: 15px;
    overflow: hidden;
    position: relative;
}

.progress-fill {
    height: 100%;
    background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
    transition: width 0.5s;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: 600;
}

.modules-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    margin-top: 30px;
}

.module-card {
    background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
    padding: 25px;
    border-radius: 15px;
    cursor: pointer;
    transition: transform 0.3s, box-shadow 0.3s;
    position: relative;
}

.module-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0,0,0,0.2);
}

.module-card.completed::after {
    content: '✓';
    position: absolute;
    top: 10px;
    right: 10px;
    width: 30px;
    height: 30px;
    background: #4caf50;
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
}

.module-card h3 {
    color: #667eea;
    margin-bottom: 10px;
}

/* Learning Screen */
.learning-content {
    background: white;
    padding: 40px;
    border-radius: 15px;
    margin-top: 20px;
}

.video-container {
    width: 100%;
    aspect-ratio: 16/9;
    background: #000;
    border-radius: 10px;
    margin: 20px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 18px;
}

.content-section {
    margin: 30px 0;
}

.content-section h2 {
    color: #667eea;
    margin-bottom: 15px;
}

.content-section p {
    line-height: 1.8;
    color: #555;
    margin-bottom: 15px;
}

.info-box {
    background: #e3f2fd;
    padding: 20px;
    border-radius: 10px;
    border-left: 4px solid #2196f3;
    margin: 20px 0;
}

/* Quiz */
.quiz-container {
    background: white;
    padding: 40px;
    border-radius: 15px;
    margin-top: 20px;
}

.question {
    margin: 30px 0;
}

.question h3 {
    color: #667eea;
    margin-bottom: 20px;
}

.options {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.option {
    padding: 15px 20px;
    background: #f5f5f5;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.3s;
    border: 2px solid transparent;
}

.option:hover {
    background: #e0e0e0;
}

.option.selected {
    background: #667eea;
    color: white;
    border-color: #764ba2;
}

.option.correct {
    background: #4caf50;
    color: white;
}

.option.wrong {
    background: #f44336;
    color: white;
}

/* Certificate */
.certificate {
    background: white;
    padding: 60px;
    border-radius: 15px;
    margin-top: 20px;
    border: 10px solid #667eea;
    text-align: center;
    position: relative;
}

.certificate-header {
    font-size: 3em;
    color: #667eea;
    margin-bottom: 20px;
    font-family: 'Georgia', serif;
}

.certificate-body {
    font-size: 1.2em;
    line-height: 2;
    color: #555;
}

.certificate-name {
    font-size: 2em;
    color: #764ba2;
    font-weight: bold;
    margin: 20px 0;
}

.certificate-footer {
    margin-top: 40px;
    display: flex;
    justify-content: space-around;
}

.signature-line {
    border-top: 2px solid #333;
    padding-top: 10px;
    width: 200px;
}

/* Profile */
.profile-container {
    background: white;
    padding: 40px;
    border-radius: 15px;
    margin-top: 20px;
}

.profile-header {
    display: flex;
    align-items: center;
    gap: 30px;
    margin-bottom: 40px;
}

.profile-avatar {
    width: 120px;
    height: 120px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 48px;
    font-weight: bold;
}

.stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
    margin-top: 30px;
}

.stat-card {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 25px;
    border-radius: 15px;
    text-align: center;
}

.stat-card h3 {
    font-size: 2.5em;
    margin-bottom: 10px;
}

.btn-secondary {
    background: #f5f5f5;
    color: #667eea;
    padding: 10px 20px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 600;
    margin: 5px;
}

.btn-secondary:hover {
    background: #e0e0e0;
}

/* New Styles for Enhanced Login */
.stat-alert {
    background: rgba(255,255,255,0.95);
    padding: 20px;
    border-radius: 15px;
    text-align: center;
    box-shadow: 0 5px 15px rgba(0,0,0,0.2);
    transition: transform 0.3s;
}

.stat-alert:hover {
    transform: translateY(-5px);
}

.stat-number {
    font-size: 2.5em;
    font-weight: bold;
    color: #f44336;
    margin-bottom: 5px;
}

.stat-label {
    color: #666;
    font-size: 0.9em;
}

.danger-card {
    background: linear-gradient(135deg, #fff5f5 0%, #ffe5e5 100%);
    padding: 25px;
    border-radius: 15px;
    text-align: center;
    border: 2px solid #ffcdd2;
    transition: transform 0.3s;
}

.danger-card:hover {
    transform: scale(1.05);
}

.danger-icon {
    font-size: 3em;
    margin-bottom: 15px;
}

.danger-card h3 {
    color: #d32f2f;
    margin-bottom: 10px;
    font-size: 1.2em;
}

.danger-card p {
    color: #666;
    font-size: 0.95em;
    line-height: 1.6;
}

.learn-item {
    background: rgba(255,255,255,0.2);
    padding: 15px 20px;
    border-radius: 10px;
    font-weight: 600;
    text-align: center;
    backdrop-filter: blur(5px);
    border: 1px solid rgba(255,255,255,0.3);
}

/* Pulse animation for important elements */
@keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
}

.pulse {
    animation: pulse 2s infinite;
}

/* Enhanced Dashboard Styles */
.welcome-banner {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 30px;
    border-radius: 20px;
    margin-bottom: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 30px;
    flex-wrap: wrap;
    box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
}

.welcome-content h2 {
    margin-bottom: 10px;
    font-size: 1.8em;
}

.welcome-content p {
    opacity: 0.95;
    line-height: 1.6;
}

.welcome-stats {
    display: flex;
    gap: 20px;
}

.mini-stat {
    background: rgba(255,255,255,0.2);
    padding: 15px 25px;
    border-radius: 15px;
    text-align: center;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255,255,255,0.3);
}

.mini-stat-number {
    font-size: 2em;
    font-weight: bold;
    margin-bottom: 5px;
}

.mini-stat-label {
    font-size: 0.85em;
    opacity: 0.9;
}

.progress-section {
    background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
    padding: 30px;
    border-radius: 20px;
    margin-bottom: 30px;
}

.progress-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    flex-wrap: wrap;
    gap: 15px;
}

.progress-percentage {
    font-size: 3em;
    font-weight: bold;
    color: #667eea;
}

.progress-bar-modern {
    width: 100%;
    height: 40px;
    background: white;
    border-radius: 20px;
    overflow: hidden;
    position: relative;
    box-shadow: inset 0 2px 5px rgba(0,0,0,0.1);
}

.progress-fill-modern {
    height: 100%;
    background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
    transition: width 0.8s ease;
    display: flex;
    align-items: center;
    padding: 0 15px;
    position: relative;
    box-shadow: 0 2px 10px rgba(102, 126, 234, 0.5);
}

.progress-label {
    color: white;
    font-weight: 600;
    font-size: 14px;
    white-space: nowrap;
}

.progress-milestones {
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
}

.milestone {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
}

.milestone-icon {
    font-size: 1.5em;
}

.milestone-text {
    font-size: 0.85em;
    color: #666;
    font-weight: 600;
}

.modules-header {
    margin-bottom: 25px;
}

.modules-header h2 {
    color: #333;
    font-size: 1.8em;
}

.module-card-enhanced {
    background: white;
    padding: 25px;
    border-radius: 20px;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    border: 2px solid #f0f0f0;
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.module-card-enhanced:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 40px rgba(0,0,0,0.15);
    border-color: #667eea;
}

.module-number {
    position: absolute;
    top: 15px;
    right: 15px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 5px 15px;
    border-radius: 20px;
    font-size: 0.85em;
    font-weight: 600;
}

.module-icon {
    font-size: 3em;
    margin-bottom: 10px;
}

.module-card-enhanced h3 {
    color: #333;
    margin-bottom: 8px;
    font-size: 1.3em;
}

.module-card-enhanced p {
    color: #666;
    line-height: 1.6;
    font-size: 0.95em;
    flex-grow: 1;
}

.module-meta {
    display: flex;
    gap: 15px;
    padding-top: 15px;
    border-top: 1px solid #f0f0f0;
    font-size: 0.85em;
    color: #888;
}

.module-status {
    margin-top: 10px;
}

.status-badge {
    display: inline-block;
    padding: 8px 20px;
    background: #667eea;
    color: white;
    border-radius: 20px;
    font-size: 0.9em;
    font-weight: 600;
}

.status-badge.completed {
    background: #4caf50;
}

.status-badge.completed::before {
    content: '✓ ';
}

.module-card-enhanced.completed {
    border-color: #4caf50;
    background: linear-gradient(135deg, #f1f8f4 0%, #e8f5e9 100%);
}

.module-card-enhanced.completed .module-number {
    background: #4caf50;
}

.suggestions-box {
    background: linear-gradient(135deg, #fff9e6 0%, #ffe9b3 100%);
    padding: 30px;
    border-radius: 20px;
    margin-top: 40px;
    border: 2px solid #ffd966;
}

.suggestions-box h3 {
    color: #f57c00;
    margin-bottom: 15px;
    font-size: 1.5em;
}

.suggestions-box p {
    color: #666;
    margin-bottom: 20px;
    line-height: 1.6;
}

.suggestions-box textarea {
    width: 100%;
    padding: 15px;
    border: 2px solid #ffd966;
    border-radius: 10px;
    font-size: 15px;
    font-family: inherit;
    resize: vertical;
    margin-bottom: 15px;
}

.suggestions-box textarea:focus {
    outline: none;
    border-color: #f57c00;
}

/* Profile Information Styles */
.profile-info-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    margin-top: 20px;
}

.profile-info-card {
    background: #f5f7fa;
    padding: 20px;
    border-radius: 15px;
    display: flex;
    gap: 15px;
    align-items: start;
    border: 2px solid #e0e0e0;
    transition: all 0.3s;
}

.profile-info-card:hover {
    border-color: #667eea;
    box-shadow: 0 5px 15px rgba(102, 126, 234, 0.1);
}

.profile-info-icon {
    font-size: 2em;
    min-width: 50px;
    text-align: center;
}

.profile-info-content {
    flex: 1;
}

.profile-info-content label {
    display: block;
    font-weight: 600;
    color: #555;
    margin-bottom: 8px;
    font-size: 14px;
}

.profile-input {
    width: 100%;
    padding: 10px 12px;
    border: 2px solid #e0e0e0;
    border-radius: 8px;
    font-size: 15px;
    transition: border 0.3s;
    font-family: inherit;
}

.profile-input:focus {
    outline: none;
    border-color: #667eea;
}

.profile-input:read-only {
    background: #f0f0f0;
    cursor: not-allowed;
}

.security-section {
    margin-top: 20px;
}

.security-card {
    background: linear-gradient(135deg, #fff5f5 0%, #ffe9e9 100%);
    padding: 30px;
    border-radius: 15px;
    border: 2px solid #ffcdd2;
}

.security-card h3 {
    color: #d32f2f;
    margin-bottom: 10px;
    font-size: 1.3em;
}

.certificate-section {
    background: linear-gradient(135deg, #f0f4ff 0%, #e3edff 100%);
    padding: 30px;
    border-radius: 15px;
    border: 2px solid #667eea;
    text-align: center;
}
