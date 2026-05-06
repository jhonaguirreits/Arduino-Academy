/* ====================================================
   MENSAJES PEDAGÓGICOS
   ==================================================== */
const mensajesExito = [
  "¡Excelente deducción! Conectaste los conceptos correctamente.",
  "¡Felicidades! Resolviste el problema analizando la lógica paso a paso.",
  "¡Muy bien hecho! Aprender haciendo es el mejor camino.",
  "¡Brillante! Modificaste el código entendiendo cada pieza.",
  "¡Lo lograste! Cada reto superado construye tu mentalidad de programador."
];

const mensajesFallo = [
  "¡Casi lo tienes! Recuerda que el error es tu mejor maestro.",
  "No te desanimes. Todo gran programador aprende depurando.",
  "A veces un pequeño detalle cambia todo. Revisa cada instrucción.",
  "¡Sigue intentándolo! El aprendizaje real ocurre corrigiendo fallos.",
  "El código hace exactamente lo que le decimos. ¿Escribiste la instrucción correcta?"
];

/* ====================================================
   BASE DE DATOS: 10 SEMANAS DE CLASE COMPLETAS
   ==================================================== */
const weeks = {
  1: {
    title: "Primer Contacto (LED)",
    challenge: "Simula el código base. Luego supera los retos modificando el parpadeo.",
    components: ["Arduino UNO", "LED", "Resistor 220Ω"],
    wiring: ["PIN 13 → Ánodo LED", "Cátodo LED → Resistencia → GND"],
    code: `void setup() {\n  pinMode(13, OUTPUT);\n}\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(1000);\n  digitalWrite(13, LOW);\n  delay(1000);\n}`,
    explicacion: [
      { codigo: "void setup() {\n  pinMode(13, OUTPUT);\n}", texto: "⚙️ <strong>Configuración:</strong> Le decimos al cerebro de Arduino que el pin 13 enviará energía (OUTPUT)." },
      { codigo: "digitalWrite(13, HIGH);\ndelay(1000);", texto: "💡 <strong>Acción:</strong> Enviamos 5 Voltios (HIGH) para encender, y pausamos (delay) por 1000ms." }
    ],
    retos: {
      basico: { desc: "Agrega un 2do LED en el PIN 12. Enciéndelos a la vez.", match: ["12,OUTPUT","digitalWrite(12,HIGH)"], pistas: ["💡 Pista 1: Agrega pinMode(12, OUTPUT) en setup().", "💡 Pista 2: Pon digitalWrite(12, HIGH) justo después del 13."] },
      alto: { desc: "Haz que parpadeen ALTERNADOS: uno prendido mientras el otro apagado.", match: ["digitalWrite(13,HIGH)","digitalWrite(12,LOW)"], pistas: ["💡 Pista 1: Cuando el 13 es HIGH, el 12 debe ser LOW."] },
      superior: { desc: "Efecto 'Latido': dos parpadeos rápidos (50ms) y una pausa larga.", match: ["delay(50)"], minCount: { "delay(50)": 2 }, pistas: ["💡 Pista 1: Un 'latido' tiene dos pulsos rápidos de 50ms (HIGH->LOW->HIGH->LOW)."] }
    }
  },
  2: {
    title: "Semáforo Inteligente",
    challenge: "Programa la secuencia correcta de un semáforo de 3 colores.",
    components: ["3x LED (Verde, Amarillo, Rojo)", "3x Resistor 220Ω"],
    wiring: ["Verde→PIN 2", "Amarillo→PIN 3", "Rojo→PIN 4"],
    code: `int verde=2, amarillo=3, rojo=4;\nvoid setup() {\n  pinMode(verde, OUTPUT);\n  pinMode(amarillo, OUTPUT);\n  pinMode(rojo, OUTPUT);\n}\nvoid loop() {\n  digitalWrite(verde, HIGH);\n  delay(3000);\n  digitalWrite(verde, LOW);\n}`,
    explicacion: [
      { codigo: "int verde=2;", texto: "📦 <strong>Variables:</strong> Guardamos el pin en un nombre fácil de recordar." }
    ],
    retos: {
      basico: { desc: "El Verde debe parpadear antes de pasar al amarillo.", match: ["__OR__delay(200)__delay(300)__"], pistas: ["💡 Pista: Apaga y prende el verde con delay cortos (ej: 200) antes del amarillo."] },
      alto: { desc: "Añade una luz de giro (PIN 5) que parpadee junto al verde.", match: ["5,OUTPUT","digitalWrite(5,HIGH)"], pistas: ["💡 Pista: Recuerda declarar el pin 5 como OUTPUT en el setup."] },
      superior: { desc: "Agrega un Buzzer (PIN 9) que pite solo en luz Roja.", match: ["9,OUTPUT","tone(9"], pistas: ["💡 Pista: Usa tone(9, 440) cuando prendas el rojo, y noTone(9) al apagarlo."] }
    }
  },
  3: {
    title: "Botón de Pánico",
    challenge: "Lee el estado de un botón (Entrada digital) para encender un LED.",
    components: ["Pushbutton", "LED"],
    wiring: ["LED→PIN 8", "Botón→PIN 7 (usar GND)"],
    code: `void setup() {\n  pinMode(8, OUTPUT);\n  pinMode(7, INPUT_PULLUP);\n}\nvoid loop() {\n  if(digitalRead(7) == LOW) {\n    digitalWrite(8, HIGH);\n  } else {\n    digitalWrite(8, LOW);\n  }\n}`,
    explicacion: [
      { codigo: "pinMode(7, INPUT_PULLUP);", texto: "⚙️ <strong>Entrada PULLUP:</strong> Activa una resistencia interna de Arduino. El botón leerá LOW cuando se presione." },
      { codigo: "if(digitalRead(7) == LOW)", texto: "🔄 <strong>Lógica (Condicional):</strong> 'Si' el botón es presionado, ejecuta lo que está en las llaves." }
    ],
    retos: {
      basico: { desc: "Agrega otro LED (PIN 9). Si presionas: prende 9 y apaga 8.", match: ["9,OUTPUT","digitalWrite(9,HIGH)"], pistas: ["💡 Pista: En if(LOW), pon el 8 LOW y el 9 HIGH."] },
      alto: { desc: "Al presionar, el LED debe parpadear simulando una alarma policial.", match: ["delay("], pistas: ["💡 Pista: Agrega delays y cambia el estado del LED varias veces dentro del IF."] },
      superior: { desc: "Hazlo un interruptor (una pulsación prende, otra apaga).", match: ["__OR__boolean__bool__", "!"], pistas: ["💡 Pista: Crea bool estado = false; e inviértelo (estado = !estado;) al presionar."] }
    }
  },
  4: {
    title: "Dimmer Analógico (PWM)",
    challenge: "Usa un potenciómetro para variar el brillo de un LED suavemente.",
    components: ["Potenciómetro", "LED (en Pin PWM ~)"],
    wiring: ["Potenciómetro→A0", "LED→PIN 9"],
    code: `int pot = A0;\nint led = 9;\nvoid setup() {\n  pinMode(led, OUTPUT);\n}\nvoid loop() {\n  int val = analogRead(pot);\n  int brillo = map(val, 0, 1023, 0, 255);\n  analogWrite(led, brillo);\n}`,
    explicacion: [
      { codigo: "analogRead(pot);", texto: "🎛️ <strong>Entrada Analógica:</strong> Lee valores del 0 al 1023 en lugar de solo HIGH/LOW." },
      { codigo: "map(val, 0, 1023, 0, 255);", texto: "📏 <strong>Mapeo:</strong> Convierte la gran escala del sensor (0-1023) a la escala de brillo (0-255)." },
      { codigo: "analogWrite(led, brillo);", texto: "🔆 <strong>Salida PWM:</strong> Envia pulsos rápidos para simular distintos niveles de voltaje." }
    ],
    retos: {
      basico: { desc: "Imprime el valor del potenciómetro en el Monitor Serie.", match: ["Serial.begin", "Serial.println(val)"], pistas: ["💡 Pista: Usa Serial.begin(9600) en el setup y Serial.println(val) en el loop."] },
      alto: { desc: "Agrega un segundo LED (PIN 10) que funcione al revés (inversamente proporcional).", match: ["10,OUTPUT", "255-brillo"], pistas: ["💡 Pista: Su brillo debe ser (255 - brillo). Si uno es 255, el otro es 0."] },
      superior: { desc: "Crea una 'zona muerta'. Si el valor analógico es menor a 100, ambos LEDs se apagan.", match: ["if(val<100"], pistas: ["💡 Pista: Rodea el analogWrite con un if(val >= 100) y un else que los apague."] }
    }
  },
  5: {
    title: "Sintetizador (Buzzer)",
    challenge: "Genera frecuencias y melodías utilizando código.",
    components: ["Buzzer Piezoeléctrico"],
    wiring: ["Buzzer Positivo→PIN 8", "Negativo→GND"],
    code: `int buzzer = 8;\nvoid setup() {\n  pinMode(buzzer, OUTPUT);\n}\nvoid loop() {\n  tone(buzzer, 440);\n  delay(500);\n  noTone(buzzer);\n  delay(1000);\n}`,
    explicacion: [
      { codigo: "tone(buzzer, 440);", texto: "🎵 <strong>Frecuencia:</strong> Hace vibrar el buzzer 440 veces por segundo (Nota musical La)." },
      { codigo: "noTone(buzzer);", texto: "🔇 <strong>Silencio:</strong> Detiene la vibración del pin especificado." }
    ],
    retos: {
      basico: { desc: "Toca 3 notas distintas creando una pequeña melodía (ej: 440, 523, 659).", match: ["tone(buzzer,523)", "tone(buzzer,659)"], pistas: ["💡 Pista: Duplica los bloques tone() y delay() con diferentes números de Hz."] },
      alto: { desc: "Conecta un LED (PIN 7) que se encienda SOLO cuando esté sonando la melodía.", match: ["7,OUTPUT", "digitalWrite(7,HIGH)"], pistas: ["💡 Pista: Prénde el 7 antes del primer tone() y apágalo junto al noTone()."] },
      superior: { desc: "Reproduce la melodía usando un arreglo (Array) y un bucle FOR.", match: ["for(", "[]"], pistas: ["💡 Pista: int notas[] = {440, 523, 659}; for(int i=0; i<3; i++) { tone(buzzer, notas[i]); }"] }
    }
  },
  6: {
    title: "Radar Automotriz",
    challenge: "Mide distancias usando un sensor ultrasónico HC-SR04.",
    components: ["Sensor HC-SR04"],
    wiring: ["Trig→PIN 3", "Echo→PIN 2"],
    code: `int trig=3; int echo=2;\nvoid setup() {\n Serial.begin(9600);\n pinMode(trig, OUTPUT);\n pinMode(echo, INPUT);\n}\nvoid loop() {\n digitalWrite(trig, LOW); delayMicroseconds(2);\n digitalWrite(trig, HIGH); delayMicroseconds(10);\n digitalWrite(trig, LOW);\n long t = pulseIn(echo, HIGH);\n long d = t / 59;\n Serial.println(d);\n delay(100);\n}`,
    explicacion: [
      { codigo: "digitalWrite(trig, HIGH);", texto: "📡 <strong>Disparo:</strong> Envía un pulso de sonido inaudible (Trigger) por 10 microsegundos." },
      { codigo: "pulseIn(echo, HIGH);", texto: "⏱️ <strong>Escucha:</strong> Cuenta el tiempo que tardó el eco en chocar y regresar." },
      { codigo: "t / 59;", texto: "📏 <strong>Matemáticas:</strong> La velocidad del sonido divide el tiempo en 59 para darnos centímetros reales." }
    ],
    retos: {
      basico: { desc: "Enciende un LED de alerta (PIN 4) si un objeto está a menos de 20cm.", match: ["if(d<20", "digitalWrite(4,HIGH)"], pistas: ["💡 Pista: Usa if(d < 20) { digitalWrite(4, HIGH); }"] },
      alto: { desc: "Agrega un Buzzer (PIN 5) que pite solo si la distancia es menor a 10cm.", match: ["5,OUTPUT", "if(d<10"], pistas: ["💡 Pista: Usa otro if anidado o separado para d < 10 con la función tone(5, 1000)."] },
      superior: { desc: "Sensor de reversa real: Haz que el delay del pitido dependa de la distancia.", match: ["delay(d*"], pistas: ["💡 Pista: Cambia el delay fijo por delay(d * 10); para que pite más rápido al acercarse."] }
    }
  },
  7: {
    title: "Barrera de Peaje (Servo)",
    challenge: "Usa librerías para controlar un motor con precisión milimétrica.",
    components: ["Micro Servo SG90"],
    wiring: ["Cable Naranja (Señal) → PIN 9"],
    code: `#include <Servo.h>\nServo miServo;\nvoid setup() {\n miServo.attach(9);\n}\nvoid loop() {\n miServo.write(0);\n delay(1000);\n miServo.write(90);\n delay(1000);\n}`,
    explicacion: [
      { codigo: "#include <Servo.h>", texto: "📚 <strong>Librería:</strong> Importamos un 'diccionario' de comandos especiales para motores." },
      { codigo: "miServo.attach(9);", texto: "🔗 <strong>Asignación:</strong> Le decimos a Arduino en qué pin está conectado nuestro brazo robótico." },
      { codigo: "miServo.write(90);", texto: "📐 <strong>Ángulo:</strong> Gira el eje exactamente a 90 grados." }
    ],
    retos: {
      basico: { desc: "Modifica la barrera para que se abra totalmente (hasta 180 grados).", match: ["write(180)"], pistas: ["💡 Pista: Solo debes cambiar el número 90 por 180 en el write()."] },
      alto: { desc: "Conecta un Botón (PIN 7). Si lo presionas abre a 90, si lo sueltas vuelve a 0.", match: ["digitalRead(7)"], pistas: ["💡 Pista: pinMode(7, INPUT_PULLUP); y envuelve los write() en un if(digitalRead(7)==LOW)."] },
      superior: { desc: "Haz que la barrera suba LENTAMENTE (grado a grado) usando un bucle FOR.", match: ["for(", "++"], pistas: ["💡 Pista: for(int pos = 0; pos <= 90; pos++) { miServo.write(pos); delay(15); }"] }
    }
  },
  8: {
    title: "Estación Climática",
    challenge: "Lee la temperatura de tu entorno utilizando el DHT11.",
    components: ["Sensor DHT11"],
    wiring: ["Data (OUT) → PIN 2"],
    code: `#include <DHT.h>\nDHT dht(2, DHT11);\nvoid setup() {\n Serial.begin(9600);\n dht.begin();\n}\nvoid loop() {\n float t = dht.readTemperature();\n Serial.println(t);\n delay(2000);\n}`,
    explicacion: [
      { codigo: "DHT dht(2, DHT11);", texto: "🛠️ <strong>Configuración Objeto:</strong> Creamos el sensor 'dht' conectado al pin 2 y le decimos que es modelo 11." },
      { codigo: "float t = dht.readTemperature();", texto: "🌡️ <strong>Lectura:</strong> Guarda los grados centígrados. Se usa 'float' porque tiene decimales." }
    ],
    retos: {
      basico: { desc: "Imprime también la humedad (h) usando dht.readHumidity().", match: ["readHumidity()", "Serial.println(h)"], pistas: ["💡 Pista: float h = dht.readHumidity(); y hazle print."] },
      alto: { desc: "Agrega un ventilador (LED en PIN 5) que se encienda si la temperatura supera los 30°C.", match: ["if(t>30", "digitalWrite(5,HIGH)"], pistas: ["💡 Pista: if(t > 30) enciende el pin 5, si no, apágalo."] },
      superior: { desc: "Alerta climática: El LED parpadea SÓLO si temperatura > 30 Y humedad > 70.", match: ["&&", "h>70"], pistas: ["💡 Pista: if(t > 30 && h > 70) { ...parpadeo... }"] }
    }
  },
  9: {
    title: "Panel Publicitario",
    challenge: "Muestra texto en una pantalla LCD 16x2 vía I2C.",
    components: ["Pantalla LCD 16x2 I2C"],
    wiring: ["SDA→A4", "SCL→A5"],
    code: `#include <LiquidCrystal_I2C.h>\nLiquidCrystal_I2C lcd(0x27, 16, 2);\nvoid setup() {\n lcd.init();\n lcd.backlight();\n lcd.setCursor(0,0);\n lcd.print("Hola Mundo");\n}\nvoid loop() {\n}`,
    explicacion: [
      { codigo: "LiquidCrystal_I2C lcd(0x27, 16, 2);", texto: "🖥️ <strong>Configuración:</strong> Preparamos la pantalla con dirección 0x27, que tiene 16 columnas y 2 filas." },
      { codigo: "lcd.setCursor(0,0);", texto: "📍 <strong>Cursor:</strong> Ponemos el lápiz invisible en la columna 0, fila de arriba (0)." },
      { codigo: "lcd.print(\"Texto\");", texto: "📝 <strong>Imprimir:</strong> Muestra las letras en la pantalla." }
    ],
    retos: {
      basico: { desc: "Escribe tu nombre abajo: Muévelo a la Fila 1 (setCursor(0,1)).", match: ["setCursor(0,1)"], pistas: ["💡 Pista: Usa lcd.setCursor(0, 1); antes de hacer tu segundo print()."] },
      alto: { desc: "Haz que el texto parpadee en el loop() limpiando la pantalla con lcd.clear().", match: ["lcd.clear()", "delay("], pistas: ["💡 Pista: Mueve el print al loop(), pon un delay, luego lcd.clear(); y otro delay."] },
      superior: { desc: "Haz un mensaje marquesina deslizándose a la izquierda usando scrollDisplayLeft().", match: ["scrollDisplayLeft()"], pistas: ["💡 Pista: En el loop() pon lcd.scrollDisplayLeft(); delay(300);"] }
    }
  },
  10: {
    title: "BOSS FINAL: Parqueadero Automático",
    challenge: "Integra botón, radar, servo, luces y sonido en un solo código maestro.",
    components: ["Radar", "Servo", "Buzzer", "Botón", "2x LED"],
    wiring: ["Radar(3,2)", "Servo(9)", "Buzzer(8)", "Boton(7)", "LEDs(5,4)"],
    code: `// ⚠️ BOSS FINAL ⚠️\n// Ya no hay código base. Es hora de crear tu propia lógica desde cero.\nvoid setup() {\n  \n}\nvoid loop() {\n  \n}`,
    explicacion: [
      { codigo: "// ¡Todo depende de ti!", texto: "🏆 <strong>Evaluación Final:</strong> Tienes que recordar e integrar librerías (#include), configurar pines en el setup y crear la lógica en el loop." }
    ],
    retos: {
      basico: { desc: "Abre la talanquera (Servo a 90°) SOLO si el radar lee menos de 15cm.", match: ["pulseIn", "write(90)", "if(d<15"], pistas: ["💡 Pista: Fusiona el código de la semana 6 (radar) con la 7 (servo)."] },
      alto: { desc: "Agrega el Botón: La talanquera solo abre si el auto está cerca Y presionan el botón.", match: ["&&", "digitalRead(7)"], pistas: ["💡 Pista: if(d < 15 && digitalRead(7) == LOW) { abrir servo }"] },
      superior: { desc: "Sistema Full: LED Verde al abrir, LED Rojo y pitido al cerrar (Buzzer).", match: ["tone", "digitalWrite(5,HIGH)"], pistas: ["💡 Pista: ¡Agrega digitalWrite y tone al abrir, y noTone y luces contrarias al cerrar!"] }
    }
  }
};

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
  return currentUser ? `its_v6_${currentUser.email.toLowerCase()}_` : '';
}

/* ====================================================
   AUTENTICACIÓN Y MULTI-USUARIO
   ==================================================== */
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
  document.getElementById('login-success').textContent = '✅ Registrado. Inicia sesión arriba.';
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
    
    // Crear Badge de Usuario
    const oldBadge = document.querySelector('.user-badge');
    if(oldBadge) oldBadge.remove();
    
    const badge = document.createElement('div');
    badge.className = 'user-badge flex-icon';
    badge.innerHTML = `<i data-lucide="user"></i> <span>${currentUser.nombres}</span> <button class="btn-logout flex-icon" onclick="logout()" title="Cerrar Sesión"><i data-lucide="log-out"></i> Salir</button>`;
    document.getElementById('header-buttons').appendChild(badge);

    loadWeek();
    updateProgress();
    lucide.createIcons();
  } else {
    document.getElementById('login-error').style.display = 'block';
    document.getElementById('login-error').textContent = 'Credenciales incorrectas o partida no cargada en este PC.';
  }
}

function logout() {
  if (confirm('¿Seguro que deseas salir? Exporta tu partida si te cambias de computador.')) {
    currentUser = null;
    document.querySelector('.user-badge')?.remove();
    document.getElementById('email-input').value = ''; 
    document.getElementById('clave-input').value = '';
    document.getElementById('screen-app').classList.remove('active');
    document.getElementById('screen-login').classList.add('active');
    document.getElementById('login-success').style.display = 'none';
    document.getElementById('login-error').style.display = 'none';
  }
}

function recuperarClave() {
  const email = prompt("Ingresa tu correo institucional:");
  if (!email) return;
  const storedHash = localStorage.getItem(`its_v6_${email.toLowerCase()}_hash`);
  const nombres = localStorage.getItem(`its_v6_${email.toLowerCase()}_nombres`);
  if (storedHash && nombres) {
    alert(`📧 ${nombres}\n🔑 Tu hash inicia en: ${storedHash.substring(0,8)}...\n💡 Usa la clave con la que te registraste.`);
  } else {
    alert('❌ Usuario no encontrado.');
  }
}

/* ====================================================
   SISTEMA DE GUARDADO (EXPORT / IMPORT)
   ==================================================== */
document.getElementById('export-btn').addEventListener('click', () => {
  if(!currentUser) return alert('Inicia sesión para exportar');
  const exportData = {};
  const userPrefix = `its_v6_${currentUser.email.toLowerCase()}`;
  for(let i=0; i<localStorage.length; i++) {
    const key = localStorage.key(i);
    if(key.startsWith(userPrefix)) exportData[key] = localStorage.getItem(key);
  }
  const blob = new Blob([JSON.stringify(exportData, null, 2)], {type: "application/json"});
  const a = document.createElement('a'); 
  a.href = URL.createObjectURL(blob);
  a.download = `Wokwi_SaveData_${currentUser.email.split('@')[0]}.json`;
  a.click();
});

function procesarArchivoGuardado(e) {
  const file = e.target.files[0]; 
  if(!file) return;
  const reader = new FileReader();
  reader.onload = function(event) {
    try {
      const data = JSON.parse(event.target.result);
      Object.keys(data).forEach(key => localStorage.setItem(key, data[key]));
      alert('✅ ¡Partida cargada exitosamente!\nYa puedes iniciar sesión con tu correo y clave.');
      e.target.value = ''; 
      if(currentUser) { loadWeek(); updateProgress(); }
    } catch(err) { alert('❌ Archivo inválido o corrupto.'); }
  };
  reader.readAsText(file);
}

const loginImportInput = document.getElementById('import-login-file');
if(loginImportInput) loginImportInput.addEventListener('change', procesarArchivoGuardado);
const appImportInput = document.getElementById('import-app-file');
if(appImportInput) appImportInput.addEventListener('change', procesarArchivoGuardado);

/* ====================================================
   LÓGICA CORE DE RETOS
   ==================================================== */
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
    
    validarSintaxis(nivel); 
  });
}

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

    // Validación Lógica de texto
    if (reto.match) {
      reto.match.forEach(str => {
        if (str.startsWith('__OR__')) {
          const parts = str.split('__').filter(Boolean);
          parts.shift();
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

// AUTO INICIO
window.onload = () => {
  document.getElementById('screen-login').classList.add('active');
  document.getElementById('screen-app').classList.remove('active');
  lucide.createIcons();
};
