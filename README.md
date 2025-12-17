<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Secure Information | Tactical Operations</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>
    <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&family=JetBrains+Mono:wght@300;500&display=swap" rel="stylesheet">
    
    <style>
        :root {
            --primary: #00f2ff;
            --secondary: #7000ff;
            --bg: #030508;
            --surface: rgba(15, 18, 24, 0.95);
            --border: rgba(0, 242, 255, 0.3);
            --text: #e1e1e1;
            --success: #00ff88;
            --danger: #ff4d4d;
        }

        * { box-sizing: border-box; margin: 0; padding: 0; }

        body {
            font-family: 'JetBrains Mono', monospace;
            background: radial-gradient(circle at center, #0a0e14 0%, #030508 100%);
            color: var(--text);
            min-height: 100vh;
        }

        /* Scanline Effect */
        body::before {
            content: " "; position: fixed; top: 0; left: 0; width: 100%; height: 100%;
            background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.1) 50%);
            background-size: 100% 4px; pointer-events: none; z-index: 1000;
        }

        header {
            padding: 20px 40px;
            background: rgba(0, 0, 0, 0.9);
            border-bottom: 2px solid var(--primary);
            display: flex; justify-content: space-between; align-items: center;
            box-shadow: 0 0 20px rgba(0, 242, 255, 0.2);
        }

        .container {
            width: 90%; max-width: 1000px; margin: 40px auto; padding: 35px;
            background: var(--surface); border: 1px solid var(--border);
            border-radius: 4px; backdrop-filter: blur(10px);
        }

        .neon-text { color: var(--primary); text-shadow: 0 0 10px var(--primary); font-family: 'Orbitron'; }

        /* Botões Estilo Antigo */
        .btn-cyber {
            padding: 12px 30px; background: transparent; border: 1px solid var(--primary);
            color: var(--primary); font-family: 'Orbitron'; cursor: pointer; transition: 0.3s;
            text-transform: uppercase; letter-spacing: 2px;
        }
        .btn-cyber:hover { background: var(--primary); color: #000; box-shadow: 0 0 20px var(--primary); }

        /* Layout de Conteúdo Expandido */
        .content-grid { display: grid; grid-template-columns: 2fr 1fr; gap: 30px; }
        
        .theory-block { 
            line-height: 1.8; text-align: justify; 
            padding: 20px; border-left: 3px solid var(--primary);
            background: rgba(255,255,255,0.02);
        }

        .sidebar { background: rgba(0,0,0,0.4); padding: 20px; border: 1px solid var(--border); font-size: 0.85rem; }

        /* Quiz */
        .option-btn {
            display: block; width: 100%; padding: 15px; margin: 10px 0;
            background: rgba(255,255,255,0.05); border: 1px solid #333;
            color: #fff; text-align: left; cursor: pointer; font-family: inherit;
        }
        .option-btn:hover { border-color: var(--primary); background: rgba(0, 242, 255, 0.05); }
        .correct { border-color: var(--success) !important; color: var(--success); }
        .wrong { border-color: var(--danger) !important; color: var(--danger); }

        .hidden { display: none; }
        input[type="text"] {
            width: 100%; padding: 15px; background: #000; border: 1px solid var(--primary);
            color: var(--primary); margin-bottom: 20px; font-family: inherit;
        }
    </style>
</head>
<body>

    <header id="hud" class="hidden">
        <div class="neon-text" style="font-size: 0.9rem;">SECURE_INFO // AGENTE: <span id="agent-display">---</span></div>
        <div id="lives-display" style="color: var(--danger)">INTEGRIDADE: ❤️❤️❤️</div>
    </header>

    <div id="view-login" class="container" style="text-align: center; margin-top: 15vh;">
        <h1 class="neon-text" style="font-size: 2.5rem; margin-bottom: 20px;">LOGIN_TERMINAL</h1>
        <input type="text" id="user-input" placeholder="[NOME_DO_AGENTE]" autocomplete="off">
        <button class="btn-cyber" onclick="iniciar()">AUTENTICAR</button>
    </div>

    <div id="view-dashboard" class="container hidden">
        <h2 class="neon-text" style="margin-bottom: 30px;">MENU_DE_OPERACÕES</h2>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
            <div class="sidebar" style="cursor:pointer" onclick="abrirModulo(0)">
                <h3 class="neon-text" style="font-size: 1rem;">MÓDULO_01</h3>
                <p>Engenharia Social e Defesa Humana</p>
            </div>
            <div class="sidebar" style="cursor:pointer" onclick="abrirModulo(1)">
                <h3 class="neon-text" style="font-size: 1rem;">MÓDULO_02</h3>
                <p>Gestão de Identidade e Acesso</p>
            </div>
        </div>
        <div id="final-zone" class="hidden" style="margin-top: 40px; text-align: center; border-top: 1px solid var(--primary); padding-top: 20px;">
            <p style="color: var(--success); margin-bottom: 20px;">Protocolos concluídos. Certificado disponível.</p>
            <button class="btn-cyber" onclick="gerarCertificado()">GERAR_CERTIFICADO_FINAL</button>
        </div>
    </div>

    <div id="view-content" class="container hidden">
        <div class="content-grid">
            <div class="main-info">
                <h2 id="module-title" class="neon-text" style="margin-bottom: 20px;"></h2>
                <div id="theory-text" class="theory-block"></div>
                <button class="btn-cyber" style="margin-top: 30px;" onclick="irParaQuiz()">INICIAR_TESTE_DE_CAMPO</button>
            </div>
            <div class="sidebar">
                <h4 class="neon-text" style="font-size: 0.8rem; margin-bottom: 10px;">INTELIGÊNCIA_ADICIONAL</h4>
                <div id="glossary-text"></div>
            </div>
        </div>
    </div>

    <div id="view-quiz" class="container hidden">
        <h3 id="question-text" style="margin-bottom: 25px;"></h3>
        <div id="options-list"></div>
    </div>

<script>
    const db = [
        {
            title: "ENGENHARIA_SOCIAL",
            theory: "<p>A Engenharia Social é a arte de manipular pessoas para que elas divulguem informações confidenciais. Criminosos exploram a confiança, a urgência e a autoridade para contornar defesas tecnológicas.</p><br><p>O <strong>Phishing</strong> continua sendo o vetor número um, evoluindo para ataques direcionados (Spear Phishing). Técnicas como o <strong>Baiting</strong> utilizam iscas físicas ou digitais para infectar sistemas.</p>",
            glossary: "<strong>Phishing:</strong> Isca por e-mail.<br><strong>Pretexting:</strong> Criar um cenário falso.<br><strong>Quid Pro Quo:</strong> Promessa de benefício em troca de dados.",
            questions: [
                { q: "Qual o foco principal da Engenharia Social?", a: ["Código malicioso", "Manipulação Humana", "Quebra de Servidor"], c: 1 },
                { q: "O que caracteriza o Vishing?", a: ["Ataque por Voz", "Ataque por SMS", "Ataque por USB"], c: 0 }
            ]
        },
        {
            title: "IDENTIDADE_E_ACESSO",
            theory: "<p>O controle de acesso é baseado no princípio do <strong>Menor Privilégio</strong>. A autenticação forte requer múltiplos fatores (MFA) para validar quem o usuário diz ser.</p><br><p>Senhas fracas são o ponto de entrada para ataques de dicionário. O uso de frases de segurança (passphrases) é a recomendação atual para garantir entropia suficiente contra ataques automatizados.</p>",
            glossary: "<strong>MFA:</strong> Algo que você sabe, tem ou é.<br><strong>Princípio LP:</strong> Acesso mínimo necessário.<br><strong>Entropy:</strong> Complexidade da senha.",
            questions: [
                { q: "O que significa MFA?", a: ["Monitor de Firewall", "Autenticação Multifator", "Manual de Acesso"], c: 1 },
                { q: "Qual o melhor método para senhas?", a: ["Nomes curtos", "Frases longas (Passphrases)", "Repetir senhas"], c: 1 }
            ]
        }
    ];

    let state = { user: "", mIdx: 0, qIdx: 0, lives: 3, completed: [false, false] };

    function iniciar() {
        const n = document.getElementById('user-input').value;
        if(!n) return;
        state.user = n;
        document.getElementById('agent-display').innerText = n.toUpperCase();
        document.getElementById('hud').classList.remove('hidden');
        show('view-dashboard');
    }

    function abrirModulo(idx) {
        state.mIdx = idx;
        state.qIdx = 0;
        document.getElementById('module-title').innerText = db[idx].title;
        document.getElementById('theory-text').innerHTML = db[idx].theory;
        document.getElementById('glossary-text').innerHTML = db[idx].glossary;
        show('view-content');
    }

    function irParaQuiz() {
        show('view-quiz');
        loadQ();
    }

    function loadQ() {
        const q = db[state.mIdx].questions[state.qIdx];
        document.getElementById('question-text').innerText = q.q;
        const list = document.getElementById('options-list');
        list.innerHTML = "";
        q.a.forEach((opt, i) => {
            const b = document.createElement('button');
            b.className = 'option-btn';
            b.innerText = `> ${opt}`;
            b.onclick = () => check(i, b);
            list.appendChild(b);
        });
    }

    function check(i, b) {
        if(i === db[state.mIdx].questions[state.qIdx].c) {
            b.classList.add('correct');
            setTimeout(() => {
                state.qIdx++;
                if(state.qIdx < db[state.mIdx].questions.length) loadQ();
                else {
                    state.completed[state.mIdx] = true;
                    if(state.completed.every(v => v)) document.getElementById('final-zone').classList.remove('hidden');
                    show('view-dashboard');
                }
            }, 600);
        } else {
            b.classList.add('wrong');
            state.lives--;
            document.getElementById('lives-display').innerText = "INTEGRIDADE: " + "❤️".repeat(state.lives);
            if(state.lives <= 0) location.reload();
        }
    }

    function show(id) {
        document.querySelectorAll('.container').forEach(c => c.classList.add('hidden'));
        document.getElementById(id).classList.remove('hidden');
    }

    function gerarCertificado() {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF('l', 'mm', 'a4');
        const w = doc.internal.pageSize.getWidth();
        
        doc.setFillColor(3, 5, 8); doc.rect(0, 0, w, 210, 'F');
        doc.setDrawColor(0, 242, 255); doc.rect(10, 10, w-20, 190);
        
        doc.setTextColor(0, 242, 255); doc.setFont("helvetica", "bold");
        doc.setFontSize(30); doc.text("SECURE INFORMATION", w/2, 50, {align:"center"});
        doc.setFontSize(20); doc.text("CERTIFICADO DE CAPACITAÇÃO TÁTICA", w/2, 80, {align:"center"});
        
        doc.setTextColor(255, 255, 255);
        doc.setFontSize(16); doc.text("Agente Validado:", w/2, 110, {align:"center"});
        doc.setFontSize(35); doc.text(state.user.toUpperCase(), w/2, 135, {align:"center"});
        
        doc.setFontSize(10); doc.text(`EMITIDO EM: ${new Date().toLocaleDateString()}`, w/2, 180, {align:"center"});
        doc.save(`Certificado_${state.user}.pdf`);
    }
</script>
</body>
</html>
