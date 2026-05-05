const mensajesExito = [
  "¡Excelente deducción! Conectaste los conceptos correctamente.",
  "¡Felicidades! Resolviste el problema paso a paso.",
  "¡Muy bien hecho! Aprender haciendo es el mejor camino."
];
const mensajesFallo = [
  "¡Casi lo tienes! El error es tu mejor maestro.",
  "Revisa cada instrucción, un pequeño detalle lo cambia todo.",
  "El código hace exactamente lo que le decimos. ¡Revisa bien!"
];

// DATA DE LAS SEMANAS
const weeks = {
  1: {
    title: "Primer Contacto (LED)",
    challenge: "Simula el código base. Luego supera los retos modificando el código.",
    components: ["Arduino UNO", "LED", "Resistor 220Ω"],
    wiring: ["PIN 13 → Ánodo LED", "Cátodo LED → Resistencia → GND"],
    code: `void setup() {\n  pinMode(13, OUTPUT);\n}\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(1000);\n  digitalWrite(13, LOW);\n  delay(1000);\n}`,
    explicacion: [
      { codigo: "void setup() {\n  pinMode(13, OUTPUT);\n}", texto: "⚙️ <strong>Configuración:</strong> Le decimos al cerebro de Arduino que el pin 13 enviará energía (OUTPUT)." },
      { codigo: "digitalWrite(13, HIGH);\ndelay(1000);", texto: "💡 <strong>Acción:</strong> Enviamos 5 Voltios (HIGH) para encender, y pausamos (delay) por 1000ms." }
    ],
    retos: {
      basico: {
        desc: "Agrega un 2do LED en el PIN 12. Enciéndelos a la vez.",
        match: ["12,OUTPUT","digitalWrite(12,HIGH)"],
        pistas: ["💡 Pista 1: Agrega pinMode(12, OUTPUT) en setup() y digitalWrite(12, HIGH) en loop()."]
      },
      alto: {
        desc: "Haz que parpadeen ALTERNADOS: uno prendido mientras el otro apagado.",
        match: ["digitalWrite(13,HIGH)","digitalWrite(12,LOW)"],
        pistas: ["💡 Pista 1: Cuando el 13 es HIGH, el 12 debe ser LOW."]
      },
      superior: {
        desc: "Efecto 'Latido': dos parpadeos rápidos (50ms) y una pausa larga (1000ms+).",
        match: ["delay(50)"], minCount: { "delay(50)": 2 },
        pistas: ["💡 Pista 1: Un 'latido' tiene dos pulsos rápidos de 50ms."]
      }
    }
  },
  2: {
    title: "Semáforo Inteligente",
    challenge: "Programa un semáforo de 3 colores funcional.",
    components: ["3x LED", "3x Resistor"],
    wiring: ["Verde→PIN 2", "Amarillo→PIN 3", "Rojo→PIN 4"],
    code: `int verde=2, amarillo=3, rojo=4;\nvoid setup() {\n  pinMode(verde, OUTPUT);\n  pinMode(amarillo, OUTPUT);\n  pinMode(rojo, OUTPUT);\n}\nvoid loop() {\n  digitalWrite(verde, HIGH);\n  delay(3000);\n  digitalWrite(verde, LOW);\n}`,
    explicacion: [
      { codigo: "int verde=2;", texto: "📦 <strong>Variables:</strong> Guardamos el pin en un nombre para recordarlo." }
    ],
    retos: {
      basico: { desc: "El Verde debe parpadear antes de pasar al amarillo.", match: ["__OR__delay(200)__delay(300)__"], pistas: ["Haz parpadear el verde con delay cortos."] },
      alto: { desc: "Añade una luz de giro (PIN 5) que parpadee junto al verde.", match: ["5,OUTPUT","digitalWrite(5,HIGH)"], pistas: ["Recuerda declarar el pin 5."] },
      superior: { desc: "Agrega un Buzzer (PIN 9) que suene cuando esté en Rojo.", match: ["9,OUTPUT","tone(9"], pistas: ["Usa la función tone(9, 440)"] }
    }
  },
  3: {
    title: "Botón de Pánico",
    challenge: "Aprende a leer el estado de un botón (Entrada digital).",
    components: ["Pushbutton", "LED x2"],
    wiring: ["LED→PIN 8", "Botón→PIN 7 (INPUT_PULLUP)"],
    code: `void setup() {\n  pinMode(8, OUTPUT);\n  pinMode(7, INPUT_PULLUP);\n}\nvoid loop() {\n  if(digitalRead(7) == LOW) {\n    digitalWrite(8, HIGH);\n  } else {\n    digitalWrite(8, LOW);\n  }\n}`,
    explicacion: [
      { codigo: "pinMode(7, INPUT_PULLUP);", texto: "⚙️ <strong>Entrada:</strong> El pin 7 recibe una señal en lugar de enviarla." },
      { codigo: "if(digitalRead(7) == LOW)", texto: "🔄 <strong>Lógica:</strong> Si el botón es presionado (LOW), ejecuta el bloque siguiente." }
    ],
    retos: {
      basico: { desc: "Agrega otro LED (PIN 9). Si presionas: prende 9 y apaga 8.", match: ["9,OUTPUT","digitalWrite(9,HIGH)"], pistas: ["En if(LOW) pon el 8 LOW y el 9 HIGH."] },
      alto: { desc: "Al presionar, el LED debe parpadear simulando alarma.", match: ["delay("], pistas: ["Agrega un ciclo de parpadeo con delay dentro del IF."] },
      superior: { desc: "Hazlo un interruptor Toggle (una variable booleana que cambia).", match: ["__OR__boolean__bool__"], pistas: ["Crea una variable bool estado = false; fuera del loop."] }
    }
  }
};

// ESTADO GLOBAL
let currentUser = null;
let currentRetoId = '1';
let timers = {};
let intervalos = {};
let fallos = { basico: 0, alto: 0, superior: 0 };
let vidas = { basico: 3, alto: 3, superior: 3 };

function simpleHash(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) - hash) + str.charCodeAt(i);
    hash |= 0;
  }
  return 'hs_' + Math.abs(hash).toString(16);
}

function getPrefix() {
  return currentUser ? `its_v6_${simpleHash(currentUser.email)}_` : '';
}

// AUTENTICACIÓN
function toggleNewUser() {
  const sec = document.getElementById('new-user-section');
  sec.style.display = sec.style.display === 'none' ? 'block' : 'none';
}

function registrarNuevo() {
  const email = document.getElementById('email-input').value.trim().toLowerCase();
  const clave1 = document.getElementById('clave1-input').value;
  const clave2 = document.getElementById('clave2-input').value;
  const nombres = document.getElementById('nombres-input').value.trim();
  const errorDiv = document.getElementById('login-error');
  
  if(!email.endsWith('@itspereira.edu.co')) return errorDiv.style.display = 'block', errorDiv.textContent = 'Solo correos @itspereira.edu.co';
  if(clave1.length < 6) return errorDiv.style.display = 'block', errorDiv.textContent = 'La clave debe tener mínimo 6 caracteres';
  if(clave1 !== clave2) return errorDiv.style.display = 'block', errorDiv.textContent = 'Las claves no coinciden';
  
  const hash = simpleHash(email + clave1);
  localStorage.setItem(`its_v6_${email}_hash`, hash);
  localStorage.setItem(`its_v6_${email}_nombres`, nombres);
  
  document.getElementById('login-success').style.display = 'block';
  document.getElementById('login-success').textContent = '✅ Registrado. Inicia sesión.';
  toggleNewUser();
}

function loginLocal() {
  const email = document.getElementById('email-input').value.trim().toLowerCase();
  const clave = document.getElementById('clave-input').value;
  const hash = simpleHash(email + clave);
  const storedHash = localStorage.getItem(`its_v6_${email}_hash`);
  
  if(storedHash === hash) {
    currentUser = { email, nombres: localStorage.getItem(`its_v6_${email}_nombres`) };
    document.getElementById('screen-login').classList.remove('active');
    document.getElementById('screen-app').classList.add('active');
    
    // Add user badge
    const badge = document.createElement('div');
    badge.className = 'user-badge';
    badge.innerHTML = `<i data-lucide="user"></i> <span>${currentUser.nombres}</span> <button class="btn-logout flex-icon" onclick="logout()"><i data-lucide="log-out"></i></button>`;
    document.querySelector('.header-top').appendChild(badge);

    loadWeek();
    updateProgress();
    lucide.createIcons();
  } else {
    document.getElementById('login-error').style.display = 'block';
    document.getElementById('login-error').textContent = 'Credenciales incorrectas.';
  }
}

function logout() {
  if (confirm('¿Cerrar sesión?')) {
    currentUser = null;
    const badge = document.querySelector('.user-badge');
    if(badge) badge.remove();
    document.getElementById('screen-app').classList.remove('active');
    document.getElementById('screen-login').classList.add('active');
    document.getElementById('email-input').value = ''; document.getElementById('clave-input').value = '';
  }
}

function recuperarClave() {
  const email = prompt("Ingresa tu correo institucional:");
  if (!email) return;
  const storedHash = localStorage.getItem(`its_v6_${email.toLowerCase()}_hash`);
  const nombres = localStorage.getItem(`its_v6_${email.toLowerCase()}_nombres`);
  if (storedHash && nombres) {
    alert(`📧 ${nombres}\n🔑 Tu hash inicia en: ${storedHash.substring(0,8)}...\n💡 Usa la clave que genera este hash.`);
  } else {
    alert('❌ Usuario no encontrado.');
  }
}

function sessionCheck() {
  document.getElementById('screen-login').classList.add('active');
  document.getElementById('screen-app').classList.remove('active');
}

// LÓGICA CORE DE RETOS
function loadWeek() {
  currentRetoId = document.getElementById('week-select').value;
  const data = weeks[currentRetoId];
  if (!data) return;

  document.getElementById('w-challenge').innerHTML = data.challenge;
  document.getElementById('w-code').textContent = data.code;
  document.getElementById('w-components').innerHTML = data.components.map(c => `<span class="tag">${c}</span>`).join('');
  document.getElementById('w-wiring').innerHTML = data.wiring.map(w => `<li>${w}</li>`).join('');

  const expContainer = document.getElementById('w-explicacion');
  expContainer.innerHTML = ''; 
  if (data.explicacion) {
    data.explicacion.forEach(paso => {
      expContainer.innerHTML += `<div class="step-card"><div class="step-code">${paso.codigo.replace(/\n/g, '<br>')}</div><div class="step-text">${paso.texto}</div></div>`;
    });
  }

  ['basico', 'alto', 'superior'].forEach(nivel => {
    if(data.retos[nivel]) {
      document.getElementById(`r-container-${nivel}`).style.display = 'block';
      document.getElementById(`r-desc-${nivel}`).innerHTML = data.retos[nivel].desc;
      
      const isDone = localStorage.getItem(`${getPrefix()}reto_${currentRetoId}_${nivel}`) === 'true';
      const record = localStorage.getItem(`${getPrefix()}record_${currentRetoId}_${nivel}`);
      const doneBadge = document.getElementById(`done-${nivel}`);
      const evalBox = document.getElementById(`eval-${nivel}`);
      
      if (isDone) {
        doneBadge.style.display = 'flex'; evalBox.style.display = 'none';
        if (record) { document.getElementById(`record-done-${nivel}`).style.display = 'inline-block'; document.getElementById(`record-done-${nivel}`).textContent = `⏱ Récord: ${formatTime(parseInt(record))}`; }
      } else {
        doneBadge.style.display = 'none'; evalBox.style.display = 'block';
        if (record) { document.getElementById(`record-${nivel}`).style.display = 'inline-block'; document.getElementById(`record-${nivel}`).textContent = `🏆 Mejor: ${formatTime(parseInt(record))}`; } 
        else document.getElementById(`record-${nivel}`).style.display = 'none';
      }
    } else {
      document.getElementById(`r-container-${nivel}`).style.display = 'none';
    }
  });

  resetProgress();
  lucide.createIcons();
}

function copyCode() {
  const code = document.getElementById('w-code').textContent;
  navigator.clipboard.writeText(code).then(() => {
    const btn = document.getElementById('btnCopy');
    const originalText = btn.innerHTML;
    btn.innerHTML = `<i data-lucide="check"></i> Copiado`;
    lucide.createIcons();
    setTimeout(() => { btn.innerHTML = originalText; lucide.createIcons(); }, 2000);
  });
}

function formatTime(sec) {
  return `${Math.floor(sec/60).toString().padStart(2,'0')}:${(sec%60).toString().padStart(2,'0')}`;
}

function iniciarTimerSiNecesario(nivel) {
  if (!intervalos[nivel] && vidas[nivel] > 0) {
    timers[nivel] = 0; document.getElementById(`timer-${nivel}`).textContent = `⏱ 00:00`;
    intervalos[nivel] = setInterval(() => {
      timers[nivel]++;
      document.getElementById(`timer-${nivel}`).textContent = `⏱ ${formatTime(timers[nivel])}`;
    }, 1000);
  }
}

function stopTimer(nivel) {
  if (intervalos[nivel]) { clearInterval(intervalos[nivel]); intervalos[nivel] = null; }
}

function resetProgress() {
  ['basico', 'alto', 'superior'].forEach(nivel => {
    stopTimer(nivel);
    timers[nivel] = 0; fallos[nivel] = 0; vidas[nivel] = 3;
    document.getElementById(`timer-${nivel}`).textContent = `⏱ 00:00`;
    document.getElementById(`vidas-${nivel}`).innerHTML = '❤️❤️❤️';
    
    const input = document.getElementById(`input-${nivel}`);
    if(input) { input.value = ''; input.disabled = false; input.classList.remove('syntax-ok','syntax-error'); }
    
    const btn = document.getElementById(`btn-${nivel}`);
    if(btn) btn.disabled = false;
    const fb = document.getElementById(`feedback-${nivel}`);
    if(fb) fb.style.display = 'none';
    const pista = document.getElementById(`pista-${nivel}`);
    if(pista) pista.classList.remove('visible');
    
    validarSintaxis(nivel); // Restablecer barra de sintaxis
  });
}

// VALIDADOR EN TIEMPO REAL
function validarSintaxis(nivel) {
  const txt = document.getElementById(`input-${nivel}`);
  if(!txt) return;
  const val = txt.value;
  const bar = document.getElementById(`syntax-${nivel}`);
  let tags = [];
  
  if (val.length < 5) {
    txt.classList.remove('syntax-ok','syntax-error');
    bar.innerHTML = '<span class="syntax-chip chip-info">Escribe tu código para analizar...</span>';
    return;
  }

  let ok = true;
  if(val.includes('setup()') && val.includes('loop()')) tags.push('<span class="syntax-chip chip-ok"><i data-lucide="check"></i> Estructura</span>');
  else { tags.push('<span class="syntax-chip chip-error"><i data-lucide="x"></i> Falta setup/loop</span>'); ok = false; }
  
  if ((val.match(/{/g) || []).length !== (val.match(/}/g) || []).length) { tags.push('<span class="syntax-chip chip-warn"><i data-lucide="alert-triangle"></i> Llaves {}</span>'); ok = false; }
  if ((val.match(/\(/g) || []).length !== (val.match(/\)/g) || []).length) { tags.push('<span class="syntax-chip chip-warn"><i data-lucide="alert-triangle"></i> Paréntesis ()</span>'); ok = false; }

  if (ok) { txt.classList.add('syntax-ok'); txt.classList.remove('syntax-error'); } 
  else { txt.classList.add('syntax-error'); txt.classList.remove('syntax-ok'); }
  
  bar.innerHTML = tags.join('');
  lucide.createIcons();
}

function verifyCode(nivel) {
  if (vidas[nivel] <= 0) return;

  const btn = document.getElementById(`btn-${nivel}`);
  btn.innerHTML = `<i data-lucide="loader-2" class="lucide-spin"></i> Analizando...`;
  btn.disabled = true;

  setTimeout(() => {
    const code = document.getElementById(`input-${nivel}`).value;
    const cleanCode = code.replace(/\s+/g, '');
    const reto = weeks[currentRetoId].retos[nivel];
    let success = true;

    if (reto.match) {
      reto.match.forEach(str => {
        if (str.startsWith('__OR__')) {
          const parts = str.split('__').filter(Boolean);
          parts.shift(); // Remove OR
          if (!parts.some(p => cleanCode.includes(p.replace(/\s+/g, '')))) success = false;
        } else {
          if(!cleanCode.includes(str.replace(/\s+/g, ''))) success = false;
        }
      });
    }

    if (reto.minCount) {
      for (const [key, val] of Object.entries(reto.minCount)) {
        const regex = new RegExp(key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&').replace(/\s+/g, '\\s*'), 'g');
        if ((cleanCode.match(regex) || []).length < val) success = false;
      }
    }

    const fb = document.getElementById(`feedback-${nivel}`);
    
    if (success) {
      fb.className = "feedback success";
      fb.innerHTML = `<div class="flex-icon"><i data-lucide="check-circle-2"></i> ${mensajesExito[Math.floor(Math.random()*mensajesExito.length)]}</div>`;
      confetti(); stopTimer(nivel);
      
      localStorage.setItem(`${getPrefix()}reto_${currentRetoId}_${nivel}`, 'true');
      const currentRecord = localStorage.getItem(`${getPrefix()}record_${currentRetoId}_${nivel}`);
      
      if (!currentRecord || timers[nivel] < parseInt(currentRecord)) {
        localStorage.setItem(`${getPrefix()}record_${currentRetoId}_${nivel}`, timers[nivel]);
        fb.innerHTML += `<div style="margin-top:8px;color:var(--warning-color);" class="flex-icon"><i data-lucide="trophy"></i> ¡NUEVO RÉCORD: ${formatTime(timers[nivel])}!</div>`;
      }
      
      updateProgress();
      setTimeout(() => { loadWeek(); }, 3000); 
    } else {
      fallos[nivel]++; vidas[nivel]--;
      let corazones = '';
      for(let i=0; i<3; i++) corazones += (i < vidas[nivel]) ? '❤️' : '🖤';
      document.getElementById(`vidas-${nivel}`).innerHTML = corazones;
      
      fb.className = "feedback error";
      if (vidas[nivel] <= 0) {
        fb.innerHTML = `<div class="flex-icon"><i data-lucide="skull"></i> Sin vidas. Reinicia el nivel.</div>`;
        document.getElementById(`input-${nivel}`).disabled = true; stopTimer(nivel);
      } else {
        fb.innerHTML = `<div class="flex-icon"><i data-lucide="x-circle"></i> ${mensajesFallo[Math.floor(Math.random()*mensajesFallo.length)]}</div>`;
        mostrarPista(nivel, reto);
      }
    }
    
    btn.innerHTML = nivel === 'superior' ? `<i data-lucide="swords"></i> Enfrentar al Boss` : `<i data-lucide="play"></i> Verificar Código`;
    if (vidas[nivel] > 0) btn.disabled = false;
    lucide.createIcons();
    
  }, 800);
}

function mostrarPista(nivel, reto) {
  const pistaBox = document.getElementById(`pista-${nivel}`);
  if (reto.pistas && reto.pistas.length > 0) {
    pistaBox.classList.add('visible');
    const indicePista = Math.min(fallos[nivel] - 1, reto.pistas.length - 1);
    pistaBox.innerHTML = `<strong>Pista ${indicePista + 1}:</strong> ${reto.pistas[indicePista]}`;
  }
}

// BARRA DE PROGRESO Y EXPORTACIÓN
function updateProgress() {
  if (!currentUser) return;
  const totalRetos = Object.keys(weeks).length * 3;
  let completados = 0;
  const container = document.getElementById('progreso-semanas');
  container.innerHTML = '';

  Object.keys(weeks).forEach(sem => {
    let semCompletados = 0;
    ['basico', 'alto', 'superior'].forEach(n => {
      if(localStorage.getItem(`${getPrefix()}reto_${sem}_${n}`) === 'true') { completados++; semCompletados++; }
    });

    const dot = document.createElement('div');
    dot.className = 'semana-dot';
    if(semCompletados > 0 && semCompletados < 3) dot.classList.add('parcial');
    else if(semCompletados === 3) dot.classList.add('completa');
    if(sem === currentRetoId) dot.classList.add('activa');
    container.appendChild(dot);
  });

  const pct = (completados / totalRetos) * 100;
  document.getElementById('progreso-fill').style.width = pct + '%';
  document.getElementById('progreso-texto').textContent = `${completados} / ${totalRetos} retos`;
}

document.getElementById('export-btn').addEventListener('click', () => {
  if(!currentUser) return alert('Inicia sesión para exportar');
  const exportData = {};
  for(let i=0; i<localStorage.length; i++) {
    const key = localStorage.key(i);
    if(key.startsWith(getPrefix())) exportData[key.replace(getPrefix(), '')] = localStorage.getItem(key);
  }
  const blob = new Blob([JSON.stringify(exportData)], {type: "application/json"});
  const a = document.createElement('a'); a.href = URL.createObjectURL(blob);
  a.download = `Wokwi_V6_${currentUser.email.split('@')[0]}.json`;
  a.click();
});

document.getElementById('import-btn').addEventListener('click', () => { document.getElementById('import-file').click(); });
document.getElementById('import-file').addEventListener('change', (e) => {
  if(!currentUser) return alert('Inicia sesión para importar');
  const file = e.target.files[0]; if(!file) return;
  const reader = new FileReader();
  reader.onload = function(event) {
    try {
      const data = JSON.parse(event.target.result);
      Object.keys(data).forEach(key => localStorage.setItem(getPrefix() + key, data[key]));
      alert('✅ Progreso importado correctamente');
      loadWeek(); updateProgress();
    } catch(err) { alert('❌ Archivo inválido'); }
  };
  reader.readAsText(file);
});

// AUTO INICIO
window.onload = () => {
  sessionCheck();
  lucide.createIcons();
};
