/* ====================================================
   MENSAJES
   ==================================================== */
const mensajesExito = [
  "¡Excelente deducción! La lógica es impecable.",
  "¡Felicidades! Entendiste perfectamente cómo funciona.",
  "¡Muy bien hecho! Aprender haciendo es el mejor camino.",
  "¡Brillante! Has manipulado el código como un experto."
];

const mensajesFallo = [
  "No te desanimes. Todo gran programador aprende depurando.",
  "A veces un pequeño detalle cambia todo. ¡Revisa con calma!",
  "El código hace lo que escribimos, no lo que pensamos. ¡Intenta de nuevo!"
];

const competenciasMapa = {
  1: "Fundamentos de Electrónica y Pines Digitales", 2: "Lógica Condicional y Secuencias Temporales",
  3: "Lectura de Sensores y Entradas Digitales", 4: "Modulación por Ancho de Pulsos (PWM)",
  5: "Generación de Frecuencias y Sonido", 6: "Cálculo de Distancias con Ultrasonido",
  7: "Control de Actuadores y Servomotores", 8: "Lectura de Sensores Climáticos (DHT11)",
  9: "Comunicación I2C y Pantallas LCD", 10: "Integración de Sistemas (Proyecto Final)"
};

/* --- BASE DE DATOS ENRIQUECIDA (PISTAS PROGRESIVAS Y MATCH FLEXIBLE) --- */
const weeks = {
  1: {
    title: "Primer Contacto (LED)", 
    introduccion: "Aprenderás cómo Arduino envía electricidad al mundo físico. Conoceremos qué es un Pin Digital y cómo configurarlo.",
    challenge: "Simula el código base. Luego supera los retos modificando el parpadeo.", components: ["Arduino UNO", "LED", "Resistor 220Ω"], wiring: ["PIN 13 → Ánodo LED", "Cátodo LED → Resistencia → GND"], code: `void setup() {\n  pinMode(13, OUTPUT);\n}\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(1000);\n  digitalWrite(13, LOW);\n  delay(1000);\n}`, 
    teoria: {
      basico: { titulo: "Básico: Señales Digitales", contenido: "Un pin digital solo tiene dos estados: HIGH (5V) o LOW (0V). Usamos pinMode() para prepararlo.", ejemplo: "pinMode(13, OUTPUT);\ndigitalWrite(13, HIGH);", monedas: 10 },
      alto: { titulo: "Alto: Resistencias", contenido: "Si conectas un LED a 5V directo se quema. Usamos una resistencia para limitar la corriente.", ejemplo: "// La resistencia absorbe voltaje extra", monedas: 15 },
      superior: { titulo: "Superior: Control de Tiempo", contenido: "Usamos delay() para pausar el código. El tiempo se mide en milisegundos (1000ms = 1s).", ejemplo: "delay(500); // Pausa medio segundo", monedas: 20 }
    },
    explicacion: [ { codigo: "pinMode(13, OUTPUT);", texto: "⚙️ <strong>Configuración:</strong> El pin 13 enviará energía." } ], 
    retos: { 
      basico: { desc: "Agrega un 2do LED en el PIN 12. Enciéndelos a la vez.", match: ["12", "OUTPUT", "HIGH"], pistas: ["Piensa: Primero debes preparar el pin en el setup().", "Usa la función pinMode(12, OUTPUT);", "En el loop(), usa digitalWrite(12, HIGH);"] }, 
      alto: { desc: "Haz que parpadeen ALTERNADOS: uno prendido mientras el otro apagado.", match: ["13", "12", "HIGH", "LOW"], pistas: ["Si el pin 13 está en HIGH, ¿cómo debería estar el 12?", "Escribe digitalWrite(12, LOW); justo después del 13.", "Invierte los estados después del primer delay()."] }, 
      superior: { desc: "Efecto 'Latido': dos parpadeos rápidos (50ms) y una pausa larga.", match: ["delay(50)"], minCount: { "delay(50": 2 }, pistas: ["Un latido es Rápido -> Rápido -> Pausa Larga.", "Cambia los delay a 50ms para que sea muy rápido.", "Asegúrate de copiar el bloque de encender/apagar dos veces seguidas."] } 
    }
  },
  2: {
    title: "Semáforo Inteligente", 
    introduccion: "Aprenderás sobre lógica secuencial. Entenderás cómo el programa lee el código línea por línea.",
    challenge: "Programa la secuencia correcta de un semáforo de 3 colores.", components: ["3x LED (Verde, Amarillo, Rojo)", "3x Resistor 220Ω"], wiring: ["Verde→PIN 2", "Amarillo→PIN 3", "Rojo→PIN 4"], code: `int verde=2, amarillo=3, rojo=4;\nvoid setup() {\n  pinMode(verde, OUTPUT);\n  pinMode(amarillo, OUTPUT);\n  pinMode(rojo, OUTPUT);\n}\nvoid loop() {\n  digitalWrite(verde, HIGH);\n  delay(3000);\n  digitalWrite(verde, LOW);\n}`, 
    teoria: {
      basico: { titulo: "Básico: Bucle Loop", contenido: "Todo dentro de loop() se repite infinitamente.", ejemplo: "digitalWrite(verde, HIGH);\ndelay(1000);", monedas: 10 },
      alto: { titulo: "Alto: Variables", contenido: "En lugar de escribir números de pines todo el tiempo, les ponemos un nombre.", ejemplo: "int verde = 2;", monedas: 15 },
      superior: { titulo: "Superior: Tiempos Diferenciales", contenido: "Los semáforos no tienen el mismo tiempo. Usa delays diferentes para cada color.", ejemplo: "delay(3000); // Verde largo\ndelay(1000); // Amarillo corto", monedas: 20 }
    },
    explicacion: [ { codigo: "int verde=2;", texto: "📦 <strong>Variables:</strong> Guardamos el pin en un nombre." } ], 
    retos: { 
      basico: { desc: "El Verde debe parpadear antes de pasar al amarillo.", match: ["delay("], minCount: {"delay(": 3}, pistas: ["Haz que el verde se apague y prenda rápidamente.", "Pon un delay(200); después de apagar el verde.", "Asegúrate de repetir el encendido y apagado del verde."] }, 
      alto: { desc: "Añade una luz de giro (PIN 5) que parpadee junto al verde.", match: ["5", "OUTPUT", "HIGH"], pistas: ["Declara el pin 5 como variable en la parte de arriba.", "Añade pinMode(5, OUTPUT) en el setup.", "Escribe digitalWrite(5, HIGH) junto al verde."] }, 
      superior: { desc: "Agrega un Buzzer (PIN 9) que pite solo en luz Roja.", match: ["9", "OUTPUT", "tone("], pistas: ["Prepara el pin 9 como OUTPUT.", "Cuando el rojo sea HIGH, lanza el comando tone(9, 440);", "No olvides usar noTone(9); cuando el rojo se apague."] } 
    }
  },
  3: {
    title: "Botón de Pánico", 
    introduccion: "Empezaremos a recibir energía (INPUT) usando resistencias PULLUP internas para leer botones.",
    challenge: "Lee el estado de un botón (Entrada digital) para encender un LED.", components: ["Pushbutton", "LED"], wiring: ["LED→PIN 8", "Botón→PIN 7 (usar GND)"], code: `void setup() {\n  pinMode(8, OUTPUT);\n  pinMode(7, INPUT_PULLUP);\n}\nvoid loop() {\n  if(digitalRead(7) == LOW) {\n    digitalWrite(8, HIGH);\n  } else {\n    digitalWrite(8, LOW);\n  }\n}`, 
    teoria: {
      basico: { titulo: "Básico: Lectura Digital", contenido: "Usamos digitalRead() para leer pines. INPUT_PULLUP evita ruidos eléctricos (falsas lecturas).", ejemplo: "int estado = digitalRead(7);", monedas: 10 },
      alto: { titulo: "Alto: IF/ELSE", contenido: "Permite decidir qué hacer. Si (IF) pasa esto, haz X. Si no (ELSE), haz Y.", ejemplo: "if (estado == LOW) { }", monedas: 15 },
      superior: { titulo: "Superior: Variables Booleanas", contenido: "Un booleano es 'true' o 'false'. Sirve para guardar estados temporales.", ejemplo: "bool prendido = false;\nprendido = !prendido;", monedas: 20 }
    },
    explicacion: [ { codigo: "if(digitalRead(7) == LOW)", texto: "🔄 <strong>Lógica:</strong> Si el botón es presionado, ejecuta las llaves." } ], 
    retos: { 
      basico: { desc: "Agrega otro LED (PIN 9). Si presionas: prende 9 y apaga 8.", match: ["9", "OUTPUT", "HIGH"], pistas: ["Añade el pinMode para el 9 en el setup.", "Dentro del bloque IF, prende el 9 y apaga el 8.", "En el bloque ELSE, haz lo contrario."] }, 
      alto: { desc: "Al presionar, el LED debe parpadear simulando una alarma policial.", match: ["delay("], pistas: ["Necesitas pausas de tiempo dentro del IF.", "Agrega digitalWrite y delay intercalados.", "delay(100) es ideal para una alarma."] }, 
      superior: { desc: "Hazlo un interruptor (una pulsación prende, otra apaga).", match: ["bool", "!"], pistas: ["Crea una variable booleana arriba (fuera del loop).", "Usa la exclamación (!) para invertir la variable: estado = !estado;", "Usa otro IF para evaluar si 'estado' es verdadero o falso."] } 
    }
  },
  4: {
    title: "Dimmer Analógico (PWM)", 
    introduccion: "Aprenderás la Modulación por Ancho de Pulsos (PWM) para simular valores intermedios (brillo).",
    challenge: "Usa un potenciómetro para variar el brillo de un LED suavemente.", components: ["Potenciómetro", "LED (en Pin PWM ~)"], wiring: ["Potenciómetro→A0", "LED→PIN 9"], code: `int pot = A0;\nint led = 9;\nvoid setup() {\n  pinMode(led, OUTPUT);\n}\nvoid loop() {\n  int val = analogRead(pot);\n  int brillo = map(val, 0, 1023, 0, 255);\n  analogWrite(led, brillo);\n}`, 
    teoria: {
      basico: { titulo: "Básico: Entradas Analógicas", contenido: "El potenciómetro envía niveles de voltaje que analogRead() lee de 0 a 1023.", ejemplo: "int val = analogRead(A0);", monedas: 10 },
      alto: { titulo: "Alto: La función MAP", contenido: "MAP convierte proporcionalmente una escala a otra de forma automática.", ejemplo: "map(valor, 0, 1023, 0, 255);", monedas: 15 },
      superior: { titulo: "Superior: Salidas PWM", contenido: "Los pines con '~' simulan voltajes intermedios parpadeando muy rápido con analogWrite().", ejemplo: "analogWrite(9, 127);", monedas: 20 }
    },
    explicacion: [ { codigo: "map(val, 0, 1023, 0, 255);", texto: "📏 <strong>Mapeo:</strong> Convierte la escala de 1023 a 255." } ], 
    retos: { 
      basico: { desc: "Imprime el valor del potenciómetro en el Monitor Serie.", match: ["Serial.begin", "Serial.print"], pistas: ["Necesitas iniciar la consola en el setup().", "Usa Serial.begin(9600);", "Usa Serial.println(val); en el loop()."] }, 
      alto: { desc: "Agrega un segundo LED (PIN 10) que funcione al revés (inversamente proporcional).", match: ["10", "OUTPUT", "255-"], pistas: ["Declara el pin 10.", "Si el brillo del 9 sube, el del 10 debe bajar.", "Usa analogWrite(10, 255 - brillo);"] }, 
      superior: { desc: "Crea una 'zona muerta'. Si el valor analógico es menor a 100, ambos LEDs se apagan.", match: ["if", "100", "0"], pistas: ["Usa un IF para evaluar la variable 'val'.", "Si val < 100, pon analogWrite a 0.", "Pon el código original dentro de un ELSE."] } 
    }
  },
  5: {
    title: "Sintetizador (Buzzer)", 
    introduccion: "Exploraremos el mundo de las frecuencias de sonido convirtiendo señales en notas usando tone().",
    challenge: "Genera frecuencias y melodías utilizando código.", components: ["Buzzer Piezoeléctrico"], wiring: ["Buzzer Positivo→PIN 8", "Negativo→GND"], code: `int buzzer = 8;\nvoid setup() {\n  pinMode(buzzer, OUTPUT);\n}\nvoid loop() {\n  tone(buzzer, 440);\n  delay(500);\n  noTone(buzzer);\n  delay(1000);\n}`, 
    teoria: {
      basico: { titulo: "Básico: Frecuencias (Hz)", contenido: "tone() envía pulsos eléctricos al Buzzer. 440Hz equivale a la nota 'La'.", ejemplo: "tone(8, 440);", monedas: 10 },
      alto: { titulo: "Alto: Silencios Obligatorios", contenido: "Para separar notas se necesita pausarlo usando noTone().", ejemplo: "noTone(8);", monedas: 15 },
      superior: { titulo: "Superior: Ciclo FOR", contenido: "Para no repetir código, usamos bucles (FOR) que repiten las acciones.", ejemplo: "for(int i=0; i<3; i++) { }", monedas: 20 }
    },
    explicacion: [ { codigo: "tone(buzzer, 440);", texto: "🎵 <strong>Frecuencia:</strong> Vibra 440 veces por segundo." } ], 
    retos: { 
      basico: { desc: "Toca 3 notas distintas creando una pequeña melodía (ej: 440, 523, 659).", match: ["tone(", "delay("], minCount: {"tone(": 3}, pistas: ["Copia y pega el bloque tone y delay 3 veces.", "Cambia los números (440) por otros valores.", "Usa noTone() al final de cada nota para separarlas."] }, 
      alto: { desc: "Conecta un LED (PIN 7) que se encienda SOLO cuando esté sonando la melodía.", match: ["7", "OUTPUT", "HIGH"], pistas: ["Declara el pin 7 en el setup.", "Usa digitalWrite(7, HIGH) justo antes del primer tone.", "Apágalo en LOW justo después de la melodía."] }, 
      superior: { desc: "Reproduce la melodía usando un bucle FOR.", match: ["for("], pistas: ["La estructura es: for(int i=0; i<3; i++) { ... }", "Pon tu tone() dentro de las llaves del for.", "Esto repetirá ese sonido varias veces automáticamente."] } 
    }
  },
  6: {
    title: "Radar Automotriz", 
    introduccion: "Aprenderemos sobre ecolocalización para calcular distancias enviando pulsos ultrasónicos.",
    challenge: "Mide distancias usando un sensor ultrasónico HC-SR04.", components: ["Sensor HC-SR04"], wiring: ["Trig→PIN 3", "Echo→PIN 2"], code: `int trig=3; int echo=2;\nvoid setup() {\n Serial.begin(9600);\n pinMode(trig, OUTPUT);\n pinMode(echo, INPUT);\n}\nvoid loop() {\n digitalWrite(trig, LOW); delayMicroseconds(2);\n digitalWrite(trig, HIGH); delayMicroseconds(10);\n digitalWrite(trig, LOW);\n long t = pulseIn(echo, HIGH);\n long d = t / 59;\n Serial.println(d);\n delay(100);\n}`, 
    teoria: {
      basico: { titulo: "Básico: Disparo Ultrasónico", contenido: "El pin 'Trig' envía un pulso de solo 10 microsegundos.", ejemplo: "delayMicroseconds(10);", monedas: 10 },
      alto: { titulo: "Alto: Recepción y pulseIn()", contenido: "El pin 'Echo' cuenta el tiempo que tarda el eco en regresar.", ejemplo: "long tiempo = pulseIn(echo, HIGH);", monedas: 15 },
      superior: { titulo: "Superior: La Matemática", contenido: "Dividimos el tiempo de vuelo entre 59 para obtener los centímetros.", ejemplo: "long d = t / 59;", monedas: 20 }
    },
    explicacion: [ { codigo: "pulseIn(echo, HIGH);", texto: "⏱️ <strong>Escucha:</strong> Cuenta el tiempo del eco." } ], 
    retos: { 
      basico: { desc: "Enciende un LED de alerta (PIN 4) si un objeto está a menos de 20cm.", match: ["if", "20", "4", "HIGH"], pistas: ["Necesitas un condicional IF evaluando la variable 'd'.", "La condición es: if (d < 20)", "Dentro del if, enciende el pin 4."] }, 
      alto: { desc: "Agrega un Buzzer (PIN 5) que pite solo si la distancia es menor a 10cm.", match: ["5", "OUTPUT", "10", "tone("], pistas: ["Agrega el pin 5 en el setup.", "Crea un if secundario que pregunte si d < 10.", "Usa tone(5, 1000) dentro de ese IF."] }, 
      superior: { desc: "Sensor de reversa real: Haz que el delay del pitido dependa de la distancia.", match: ["*"], pistas: ["Busca la línea del delay() normal del final.", "Cambia ese número fijo por una fórmula.", "Usa algo como: delay(d * 10); para que el tiempo cambie dinámicamente."] } 
    }
  },
  7: {
    title: "Barrera de Peaje (Servo)", 
    introduccion: "Descubrirás cómo incluir Librerías para controlar motores indicándoles un ángulo exacto.",
    challenge: "Usa librerías para controlar un motor con precisión milimétrica.", components: ["Micro Servo SG90"], wiring: ["Cable Naranja (Señal) → PIN 9"], code: `#include <Servo.h>\nServo miServo;\nvoid setup() {\n miServo.attach(9);\n}\nvoid loop() {\n miServo.write(0);\n delay(1000);\n miServo.write(90);\n delay(1000);\n}`, 
    teoria: {
      basico: { titulo: "Básico: Librerías", contenido: "Las librerías enseñan a Arduino comandos complejos nuevos.", ejemplo: "#include <Servo.h>", monedas: 10 },
      alto: { titulo: "Alto: Objetos", contenido: "Debemos crear un 'objeto' (clon) del motor para darle órdenes.", ejemplo: "Servo miServo;", monedas: 15 },
      superior: { titulo: "Superior: write()", contenido: "Los servos se mueven de 0° a 180° grados exactos.", ejemplo: "miServo.write(90);", monedas: 20 }
    },
    explicacion: [ { codigo: "miServo.write(90);", texto: "📐 <strong>Ángulo:</strong> Gira el eje a 90 grados." } ], 
    retos: { 
      basico: { desc: "Modifica la barrera para que se abra totalmente (hasta 180 grados).", match: ["180"], pistas: ["Solo tienes que cambiar un número.", "Busca el comando .write()", "Cambia el 90 por 180."] }, 
      alto: { desc: "Conecta un Botón (PIN 7). Si lo presionas abre a 90, si lo sueltas vuelve a 0.", match: ["digitalRead(7)"], pistas: ["Usa pinMode(7, INPUT_PULLUP);", "Crea un if (digitalRead(7) == LOW) para abrir.", "Usa un ELSE para devolverlo a 0."] }, 
      superior: { desc: "Haz que la barrera suba LENTAMENTE usando un bucle FOR.", match: ["for(", "++"], pistas: ["El for() repite una acción incrementando un número paso a paso.", "La estructura es: for(int i=0; i<=90; i++)", "Dentro del for pon: miServo.write(i); delay(15);"] } 
    }
  },
  8: {
    title: "Estación Climática", 
    introduccion: "Usaremos Operadores Lógicos como AND (&&) y OR (||) para múltiples condiciones en sensores digitales.",
    challenge: "Lee la temperatura de tu entorno utilizando el DHT11.", components: ["Sensor DHT11"], wiring: ["Data (OUT) → PIN 2"], code: `#include <DHT.h>\nDHT dht(2, DHT11);\nvoid setup() {\n Serial.begin(9600);\n dht.begin();\n}\nvoid loop() {\n float t = dht.readTemperature();\n Serial.println(t);\n delay(2000);\n}`, 
    teoria: {
      basico: { titulo: "Básico: Sensores de Datos", contenido: "El DHT11 envía un 'paquete' de datos decodificado por su librería.", ejemplo: "dht.readTemperature();", monedas: 10 },
      alto: { titulo: "Alto: Variables Float", contenido: "'float' permite guardar decimales para datos no enteros.", ejemplo: "float t = 24.5;", monedas: 15 },
      superior: { titulo: "Superior: Operadores Lógicos", contenido: "Usamos && (Y) para requerir dos condiciones obligatorias simultáneas.", ejemplo: "if (temp > 30 && hum > 70)", monedas: 20 }
    },
    explicacion: [ { codigo: "float t = dht.readTemperature();", texto: "🌡️ <strong>Lectura:</strong> Guarda los grados con decimales." } ], 
    retos: { 
      basico: { desc: "Imprime también la humedad (h) usando dht.readHumidity().", match: ["readHumidity", "Serial.print"], pistas: ["Crea una variable llamada 'h' tipo float.", "Usa h = dht.readHumidity();", "Agrega Serial.println(h);"] }, 
      alto: { desc: "Agrega un ventilador (LED en PIN 5) que se encienda si la temperatura supera 30°C.", match: ["if", "30", "5", "HIGH"], pistas: ["Prepara el pin 5 en el setup.", "Usa la condicional: if(t > 30)", "Prende el 5 dentro de ese IF."] }, 
      superior: { desc: "Alerta climática: El LED parpadea SÓLO si temperatura > 30 Y humedad > 70.", match: ["&&", "70"], pistas: ["Combina dos condiciones en el mismo IF.", "Usa && entre las dos preguntas lógicas.", "if (t > 30 && h > 70) { parpadeo }"] } 
    }
  },
  9: {
    title: "Panel Publicitario", 
    introduccion: "Aprenderás sobre el protocolo de comunicación serial I2C para controlar múltiples píxeles con solo 2 cables.",
    challenge: "Muestra texto en una pantalla LCD 16x2 vía I2C.", components: ["Pantalla LCD 16x2 I2C"], wiring: ["SDA→A4", "SCL→A5"], code: `#include <LiquidCrystal_I2C.h>\nLiquidCrystal_I2C lcd(0x27, 16, 2);\nvoid setup() {\n lcd.init();\n lcd.backlight();\n lcd.setCursor(0,0);\n lcd.print("Hola Mundo");\n}\nvoid loop() {\n}`, 
    teoria: {
      basico: { titulo: "Básico: Protocolo I2C", contenido: "I2C reduce cables a 2 (SDA y SCL). Cada pantalla tiene una dirección (0x27).", ejemplo: "LiquidCrystal_I2C lcd(0x27, 16, 2);", monedas: 10 },
      alto: { titulo: "Alto: El Cursor", contenido: "Debes indicarle columna (0-15) y fila (0-1) para ubicar el lápiz invisible.", ejemplo: "lcd.setCursor(0, 1);", monedas: 15 },
      superior: { titulo: "Superior: Limpiar (Clear)", contenido: "Si no borras el texto anterior, las letras nuevas se enciman como una sopa.", ejemplo: "lcd.clear();", monedas: 20 }
    },
    explicacion: [ { codigo: "lcd.setCursor(0,0);", texto: "📍 <strong>Cursor:</strong> Lápiz en columna 0, fila 0 (arriba)." } ], 
    retos: { 
      basico: { desc: "Escribe tu nombre abajo: Muévelo a la Fila 1 (setCursor(0,1)).", match: ["setCursor(0,1)", "print"], pistas: ["Añade comandos nuevos justo después del 'Hola Mundo'.", "Usa lcd.setCursor(0, 1);", "Usa lcd.print(\"Tu Nombre\");"] }, 
      alto: { desc: "Haz que el texto parpadee en el loop() limpiando la pantalla con lcd.clear().", match: ["clear()", "delay("], pistas: ["Corta los comandos del setup() y pásalos al loop().", "Agrega delay(500) y luego el comando lcd.clear()", "Añade otro delay para que quede apagado un rato."] }, 
      superior: { desc: "Haz un mensaje marquesina deslizándose a la izquierda usando scrollDisplayLeft().", match: ["scrollDisplayLeft()"], pistas: ["No necesitas borrar la pantalla.", "Dentro del loop, solo debes poner lcd.scrollDisplayLeft();", "Agrega un pequeño delay(300) para ver la animación suave."] } 
    }
  },
  10: {
    title: "BOSS FINAL", 
    introduccion: "¡Llegó la hora de la verdad! En este proyecto integrador tendrás que combinar TODO tu conocimiento.",
    challenge: "Integra radar, servo, luces y sonido en un solo código maestro.", components: ["Radar", "Servo", "Buzzer", "Botón", "2x LED"], wiring: ["Radar(3,2)", "Servo(9)", "Buzzer(8)", "Boton(7)", "LEDs(5,4)"], code: `// ⚠️ BOSS FINAL ⚠️\n// Crea tu propia lógica desde cero.\nvoid setup() {\n  \n}\nvoid loop() {\n  \n}`, 
    teoria: {
      basico: { titulo: "Básico: Planificación", contenido: "Imagina: ¿Qué lee datos (INPUT)? ¿Qué actúa (OUTPUT)?", ejemplo: "// 1. Leer radar\n// 2. Decidir\n// 3. Mover motor", monedas: 10 },
      alto: { titulo: "Alto: Modularidad", contenido: "No escribas todo de golpe. Primero radar, comprueba. Luego servo.", ejemplo: "Serial.println(distancia);", monedas: 15 },
      superior: { titulo: "Superior: Lógica Maestra", contenido: "Unirás compuertas (&&) y condicionales gigantes para gobernar el circuito.", ejemplo: "if (d < 20 && boton == LOW)", monedas: 20 }
    },
    explicacion: [ { codigo: "// ¡Todo depende de ti!", texto: "🏆 <strong>Evaluación Final:</strong> Integra librerías, configura pines y haz la lógica." } ], 
    retos: { 
      basico: { desc: "Abre la talanquera (Servo a 90°) SOLO si el radar lee menos de 15cm.", match: ["pulseIn", "write(90)", "15"], pistas: ["Necesitas la librería #include <Servo.h> y crear el objeto Servo.", "Agrega el código completo del Radar de la Semana 6.", "Usa if (distancia < 15) { miServo.write(90); }"] }, 
      alto: { desc: "La talanquera solo abre si el auto está cerca Y presionan el botón.", match: ["&&", "digitalRead"], pistas: ["Necesitas preparar el pin del botón con INPUT_PULLUP.", "En el mismo IF de la distancia, usa &&.", "La condición debe ser: if(distancia < 15 && digitalRead(7) == LOW)"] }, 
      superior: { desc: "Sistema Full: LED Verde al abrir, LED Rojo y pitido al cerrar.", match: ["tone", "HIGH", "LOW"], pistas: ["El LED Verde es cuando se abre (dentro del IF).", "El LED Rojo y el sonido es cuando se cierra (dentro del ELSE o de otra lógica de cerrado).", "Recuerda apagar el verde cuando enciendas el rojo."] } 
    }
  }
};

/* ====================================================
   ESTADO GLOBAL Y GAMIFICACIÓN 🔥⚡🪙
   ==================================================== */
let currentUser = null; let currentRetoId = '1';
let timers = {}; let intervalos = {}; 
let fallos = { basico: 0, alto: 0, superior: 0 };
let pistasDesbloqueadas = { basico: 0, alto: 0, superior: 0 };
let vidas = { basico: 3, alto: 3, superior: 3 };

let userVolts = 0; let userStreak = 0; let monedasUsuario = 0; let audioCtx; 

function getPrefix() { return currentUser ? `its_v6_${currentUser.email.toLowerCase()}_` : ''; }
function simpleHash(str) { let hash = 0; for (let i = 0; i < str.length; i++) { hash = ((hash << 5) - hash) + str.charCodeAt(i); hash |= 0; } return 'hs_' + Math.abs(hash).toString(16); }

/* --- SISTEMA DE TEORÍA Y MONEDAS --- */
function cargarTeoriaGamificada(semanaId) {
  const datosTeoria = weeks[semanaId].teoria;
  const container = document.getElementById('teoria-container');
  container.innerHTML = ''; 

  ['basico', 'alto', 'superior'].forEach(nivel => {
    const t = datosTeoria[nivel];
    const claveReclamada = `${getPrefix()}teoria_leida_${semanaId}_${nivel}`;
    const yaReclamado = localStorage.getItem(claveReclamada) === 'true';

    const tarjeta = document.createElement('div');
    tarjeta.className = `teoria-card border-${nivel}`;
    tarjeta.innerHTML = `
      <div class="teoria-header">
        <h4><i data-lucide="book-open"></i> ${t.titulo}</h4>
        <span class="recompensa-badge">🪙 +${t.monedas}</span>
      </div>
      <p class="teoria-texto">${t.contenido}</p>
      <div class="teoria-ejemplo">${t.ejemplo}</div>
      <button id="btn-teoria-${nivel}" class="btn-reclamar ${yaReclamado ? 'reclamado' : ''}" 
        onclick="reclamarMonedas('${semanaId}', '${nivel}', ${t.monedas})">
        ${yaReclamado ? '✔️ Recompensa Reclamada' : 'Marcar como leído y ganar 🪙'}
      </button>
    `;
    container.appendChild(tarjeta);
  });
  if (window.lucide) lucide.createIcons();
}

window.reclamarMonedas = function(semanaId, nivel, cantidad) {
  const claveReclamada = `${getPrefix()}teoria_leida_${semanaId}_${nivel}`;
  if (localStorage.getItem(claveReclamada) === 'true') return;

  monedasUsuario += cantidad;
  localStorage.setItem(`${getPrefix()}monedas`, monedasUsuario);
  localStorage.setItem(claveReclamada, 'true');
  document.getElementById('user-monedas').innerText = monedasUsuario;
  
  const btn = document.getElementById(`btn-teoria-${nivel}`);
  btn.classList.add('reclamado'); btn.innerText = '✔️ Recompensa Reclamada'; btn.onclick = null;

  playCoinSound(); confetti({ particleCount: 50, spread: 60, origin: { y: 0.8 } });
};

/* --- SONIDOS --- */
function initAudio() {
  if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  if (audioCtx.state === 'suspended') audioCtx.resume();
}
function playCoinSound() {
  initAudio(); const osc = audioCtx.createOscillator(); const gainNode = audioCtx.createGain();
  osc.connect(gainNode); gainNode.connect(audioCtx.destination); osc.type = 'square';
  osc.frequency.setValueAtTime(987.77, audioCtx.currentTime); osc.frequency.setValueAtTime(1318.51, audioCtx.currentTime + 0.1);
  gainNode.gain.setValueAtTime(0.1, audioCtx.currentTime); gainNode.gain.exponentialRampToValueAtTime(0.00001, audioCtx.currentTime + 0.4);
  osc.start(audioCtx.currentTime); osc.stop(audioCtx.currentTime + 0.4);
}
function playErrorSound() {
  initAudio(); const osc = audioCtx.createOscillator(); const gainNode = audioCtx.createGain();
  osc.connect(gainNode); gainNode.connect(audioCtx.destination); osc.type = 'sawtooth';
  osc.frequency.setValueAtTime(150, audioCtx.currentTime); osc.frequency.exponentialRampToValueAtTime(80, audioCtx.currentTime + 0.3);
  gainNode.gain.setValueAtTime(0.1, audioCtx.currentTime); gainNode.gain.exponentialRampToValueAtTime(0.00001, audioCtx.currentTime + 0.3);
  osc.start(audioCtx.currentTime); osc.stop(audioCtx.currentTime + 0.3);
}
function playLifeSound() {
  initAudio(); const osc = audioCtx.createOscillator(); const gainNode = audioCtx.createGain();
  osc.connect(gainNode); gainNode.connect(audioCtx.destination); osc.type = 'sine';
  osc.frequency.setValueAtTime(523.25, audioCtx.currentTime); osc.frequency.setValueAtTime(659.25, audioCtx.currentTime + 0.1); osc.frequency.setValueAtTime(783.99, audioCtx.currentTime + 0.2);
  gainNode.gain.setValueAtTime(0.1, audioCtx.currentTime); gainNode.gain.exponentialRampToValueAtTime(0.00001, audioCtx.currentTime + 0.5);
  osc.start(audioCtx.currentTime); osc.stop(audioCtx.currentTime + 0.5);
}

/* --- VOLTS, RACHAS Y ENERGÍA --- */
function cargarDatosGamificacion() {
  document.getElementById('stats-panel').style.display = 'flex';
  userVolts = parseInt(localStorage.getItem(`${getPrefix()}volts`) || "0");
  document.getElementById('volts-count').innerText = userVolts;
  monedasUsuario = parseInt(localStorage.getItem(`${getPrefix()}monedas`) || "0");
  document.getElementById('user-monedas').innerText = monedasUsuario;

  const hoy = new Date().toDateString();
  const lastLogin = localStorage.getItem(`${getPrefix()}lastLogin`);
  userStreak = parseInt(localStorage.getItem(`${getPrefix()}streak`) || "0");

  if (lastLogin !== hoy) {
    if (lastLogin) {
      const diffDias = Math.ceil(Math.abs(new Date(hoy) - new Date(lastLogin)) / (1000 * 60 * 60 * 24));
      if (diffDias === 1) userStreak += 1; else userStreak = 1; 
    } else userStreak = 1; 
    localStorage.setItem(`${getPrefix()}lastLogin`, hoy);
    localStorage.setItem(`${getPrefix()}streak`, userStreak);
  }
  document.getElementById('streak-count').innerText = userStreak;
}

function ganarVolts(cantidad) {
  userVolts += cantidad; localStorage.setItem(`${getPrefix()}volts`, userVolts);
  document.getElementById('volts-count').innerText = userVolts; playCoinSound();
}

window.comprarEnergia = function(nivel) {
  if (monedasUsuario >= 10) {
    monedasUsuario -= 10;
    localStorage.setItem(`${getPrefix()}monedas`, monedasUsuario);
    document.getElementById('user-monedas').innerText = monedasUsuario;
    
    vidas[nivel] = 3;
    document.getElementById(`vidas-${nivel}`).innerHTML = '❤️❤️❤️';
    document.getElementById(`input-${nivel}`).disabled = false;
    document.getElementById(`feedback-${nivel}`).style.display = 'none';
    
    const btnContainer = document.getElementById(`btn-container-${nivel}`);
    btnContainer.innerHTML = `<button id="btn-${nivel}" class="btn-verify flex-icon" onclick="verifyCode('${nivel}')"><i data-lucide="play"></i> Verificar Código</button>`;
    
    playLifeSound(); lucide.createIcons();
  } else {
    playErrorSound();
    alert("🪙 No tienes suficientes Monedas (Necesitas 10). ¡Lee y marca la teoría para ganar más!");
  }
};

window.comprarPista = function(nivel) {
  const reto = weeks[currentRetoId].retos[nivel];
  const maxPistas = reto.pistas.length;
  
  if (pistasDesbloqueadas[nivel] >= maxPistas) return;

  if (userVolts >= 5) {
    userVolts -= 5;
    localStorage.setItem(`${getPrefix()}volts`, userVolts);
    document.getElementById('volts-count').innerText = userVolts;
    playCoinSound(); 
    
    pistasDesbloqueadas[nivel]++;
    renderPistas(nivel, reto);
  } else {
    playErrorSound();
    alert("⚡ No tienes suficientes Volts (Necesitas 5). Resuelve un reto más fácil para acumular Volts.");
  }
};

function renderPistas(nivel, reto) {
  const pistaBox = document.getElementById(`pista-${nivel}`);
  pistaBox.classList.add('visible');
  pistaBox.innerHTML = ''; // Limpiar anterior

  // Mostrar pistas desbloqueadas
  for(let i=0; i < pistasDesbloqueadas[nivel]; i++) {
    pistaBox.innerHTML += `<div class="pista-item"><strong>Pista ${i+1}:</strong> ${reto.pistas[i]}</div>`;
  }

  // Mostrar botón para la siguiente si existe
  if (pistasDesbloqueadas[nivel] < reto.pistas.length) {
    pistaBox.innerHTML += `<button class="btn-comprar-pista flex-icon" onclick="comprarPista('${nivel}')"><i data-lucide="unlock"></i> Comprar Siguiente Pista (5 ⚡)</button>`;
  }
  lucide.createIcons();
}

/* ====================================================
   AUTENTICACIÓN
   ==================================================== */
function toggleNewUser() { const sec = document.getElementById('new-user-section'); sec.style.display = sec.style.display === 'none' ? 'block' : 'none'; }

function registrarNuevo() {
  const email = document.getElementById('email-input').value.trim().toLowerCase();
  const clave1 = document.getElementById('clave1-input').value;
  const clave2 = document.getElementById('clave2-input').value;
  const nombres = document.getElementById('nombres-input').value.trim();
  const grado = document.getElementById('grado-input').value.trim();
  const errorDiv = document.getElementById('login-error');
  if(!email.endsWith('@itspereira.edu.co')) return errorDiv.style.display = 'block', errorDiv.textContent = 'Solo correos @itspereira.edu.co';
  if(clave1.length < 6) return errorDiv.style.display = 'block', errorDiv.textContent = 'La clave debe tener mínimo 6 chars';
  if(clave1 !== clave2) return errorDiv.style.display = 'block', errorDiv.textContent = 'Las claves no coinciden';
  
  const hash = simpleHash(email + clave1);
  localStorage.setItem(`its_v6_${email}_hash`, hash); localStorage.setItem(`its_v6_${email}_nombres`, nombres); localStorage.setItem(`its_v6_${email}_grado`, grado || 'No especificado');
  document.getElementById('login-success').style.display = 'block'; document.getElementById('login-success').textContent = '✅ Registrado. Inicia sesión arriba.'; toggleNewUser();
}

function loginLocal() {
  const email = document.getElementById('email-input').value.trim().toLowerCase();
  const clave = document.getElementById('clave-input').value;
  const hash = simpleHash(email + clave);
  const storedHash = localStorage.getItem(`its_v6_${email}_hash`);
  
  if(storedHash === hash) {
    currentUser = { email, nombres: localStorage.getItem(`its_v6_${email}_nombres`), grado: localStorage.getItem(`its_v6_${email}_grado`) || 'N/A' };
    document.getElementById('screen-login').classList.remove('active'); document.getElementById('screen-app').classList.add('active');
    
    document.querySelector('.user-badge')?.remove();
    const badge = document.createElement('div'); badge.className = 'user-badge flex-icon';
    badge.innerHTML = `<i data-lucide="user"></i> <span>${currentUser.nombres}</span> <button class="btn-logout flex-icon" onclick="logout()" title="Cerrar Sesión"><i data-lucide="log-out"></i> Salir</button>`;
    document.getElementById('header-buttons').appendChild(badge);

    cargarDatosGamificacion(); loadWeek(); updateProgress(); lucide.createIcons();
  } else { document.getElementById('login-error').style.display = 'block'; document.getElementById('login-error').textContent = 'Credenciales incorrectas o no registradas.'; }
}

function logout() {
  if (confirm('¿Exportaste tu partida? Presiona Aceptar para salir.')) {
    currentUser = null; document.querySelector('.user-badge')?.remove();
    document.getElementById('email-input').value = ''; document.getElementById('clave-input').value = '';
    document.getElementById('screen-app').classList.remove('active'); document.getElementById('screen-login').classList.add('active');
  }
}
function recuperarClave() {
  const email = prompt("Ingresa tu correo:"); if (!email) return;
  const storedHash = localStorage.getItem(`its_v6_${email.toLowerCase()}_hash`); const nombres = localStorage.getItem(`its_v6_${email.toLowerCase()}_nombres`);
  if (storedHash) alert(`📧 ${nombres}\n🔑 Tu hash inicia en: ${storedHash.substring(0,8)}...\n💡 Usa la clave con la que te registraste.`); else alert('❌ Usuario no encontrado.');
}

/* ====================================================
   DIPLOMA & EXPORT/IMPORT
   ==================================================== */
function descargarDiploma() {
  if(!currentUser) return;
  const totalRetos = Object.keys(weeks).length * 3; let completados = 0; let semanasSuperadas = new Set(); 
  Object.keys(weeks).forEach(sem => { ['basico', 'alto', 'superior'].forEach(n => { if(localStorage.getItem(`${getPrefix()}reto_${sem}_${n}`) === 'true') { completados++; semanasSuperadas.add(sem); } }); });
  if(completados === 0) return alert('Debes completar al menos 1 reto.');

  document.getElementById('dip-nombre').textContent = currentUser.nombres; document.getElementById('dip-grado').textContent = currentUser.grado;
  document.getElementById('dip-progreso').textContent = `${Math.round((completados / totalRetos) * 100)}%`;
  
  let notaFinal = ((completados / totalRetos) * 5).toFixed(1); 
  document.getElementById('dip-nota').textContent = `${notaFinal == "0.0" ? "1.0" : notaFinal} / 5.0`;

  // ESTADO GRADUADO/REPROBADO
  let notaNumerica = parseFloat(notaFinal);
  const estadoBadge = document.getElementById('dip-estado');
  if(notaNumerica >= 3.0) {
      estadoBadge.textContent = "ESTADO: GRADUADO";
      estadoBadge.style.background = "#238636"; // Verde
  } else {
      estadoBadge.textContent = "ESTADO: REPROBADO";
      estadoBadge.style.background = "#d73a49"; // Rojo
  }

  const ulComps = document.getElementById('dip-competencias'); ulComps.innerHTML = '';
  semanasSuperadas.forEach(sem => { if(competenciasMapa[sem]) ulComps.innerHTML += `<li>✅ ${competenciasMapa[sem]}</li>`; });
  document.getElementById('dip-fecha').textContent = new Date().toLocaleDateString();

  const btn = document.getElementById('btn-diploma'); const originalHTML = btn.innerHTML;
  btn.innerHTML = `<i data-lucide="loader-2" class="lucide-spin"></i> Generando...`; lucide.createIcons();

  html2canvas(document.getElementById('diploma-wrapper'), { scale: 2 }).then(canvas => {
    const link = document.createElement('a'); link.download = `Diploma_${currentUser.nombres}.png`; link.href = canvas.toDataURL('image/png'); link.click();
    btn.innerHTML = originalHTML; lucide.createIcons(); confetti(); playCoinSound();
  });
}

document.getElementById('export-btn').addEventListener('click', () => {
  if(!currentUser) return; const exportData = {}; const userPrefix = `its_v6_${currentUser.email.toLowerCase()}`;
  for(let i=0; i<localStorage.length; i++) { const key = localStorage.key(i); if(key.startsWith(userPrefix)) exportData[key] = localStorage.getItem(key); }
  const blob = new Blob([JSON.stringify(exportData)], {type: "application/json"}); const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = `Wokwi_SaveData_${currentUser.email.split('@')[0]}.json`; a.click();
});

function procesarArchivoGuardado(e) {
  const file = e.target.files[0]; if(!file) return; const reader = new FileReader();
  reader.onload = function(event) {
    try { const data = JSON.parse(event.target.result); Object.keys(data).forEach(key => localStorage.setItem(key, data[key])); alert('✅ ¡Partida cargada exitosamente!'); e.target.value = ''; if(currentUser) { loadWeek(); updateProgress(); cargarDatosGamificacion(); } } catch(err) { alert('❌ Archivo inválido.'); }
  }; reader.readAsText(file);
}
document.getElementById('import-login-file')?.addEventListener('change', procesarArchivoGuardado);
document.getElementById('import-app-file')?.addEventListener('change', procesarArchivoGuardado);

/* ====================================================
   LÓGICA DE RETOS
   ==================================================== */
function loadWeek() {
  currentRetoId = document.getElementById('week-select').value;
  const data = weeks[currentRetoId]; if (!data) return;

  document.getElementById('w-competencia').innerHTML = `<strong style="color:var(--wokwi-blue)">Competencia: ${competenciasMapa[currentRetoId]}</strong><br><span style="color:var(--text-light); font-size:0.95rem; display:block; margin-top:5px;">${data.introduccion}</span>`;
  cargarTeoriaGamificada(currentRetoId);
  document.getElementById('w-challenge').innerHTML = data.challenge; document.getElementById('w-code').textContent = data.code;
  document.getElementById('w-components').innerHTML = data.components.map(c => `<span class="tag">${c}</span>`).join('');
  document.getElementById('w-wiring').innerHTML = data.wiring.map(w => `<li>${w}</li>`).join('');

  const expContainer = document.getElementById('w-explicacion'); expContainer.innerHTML = ''; 
  if (data.explicacion) data.explicacion.forEach(p => expContainer.innerHTML += `<div class="step-card"><div class="step-code">${p.codigo.replace(/\n/g, '<br>')}</div><div class="step-text">${p.texto}</div></div>`);

  ['basico', 'alto', 'superior'].forEach(nivel => {
    if(data.retos[nivel]) {
      document.getElementById(`r-container-${nivel}`).style.display = 'block'; document.getElementById(`r-desc-${nivel}`).innerHTML = data.retos[nivel].desc;
      const isDone = localStorage.getItem(`${getPrefix()}reto_${currentRetoId}_${nivel}`) === 'true';
      if (isDone) {
        document.getElementById(`done-${nivel}`).style.display = 'flex'; document.getElementById(`eval-${nivel}`).style.display = 'none';
        const record = localStorage.getItem(`${getPrefix()}record_${currentRetoId}_${nivel}`);
        if(record) { document.getElementById(`record-done-${nivel}`).style.display = 'inline-block'; document.getElementById(`record-done-${nivel}`).textContent = `⏱ Récord: ${formatTime(parseInt(record))}`; }
      } else {
        document.getElementById(`done-${nivel}`).style.display = 'none'; document.getElementById(`eval-${nivel}`).style.display = 'block';
      }
    } else document.getElementById(`r-container-${nivel}`).style.display = 'none';
  });
  resetProgress(); lucide.createIcons();
}

function copyCode() {
  navigator.clipboard.writeText(document.getElementById('w-code').textContent).then(() => {
    const btn = document.getElementById('btnCopy'); const orig = btn.innerHTML;
    btn.innerHTML = `<i data-lucide="check"></i> Copiado`; lucide.createIcons(); setTimeout(() => { btn.innerHTML = orig; lucide.createIcons(); }, 2000);
  });
}
function formatTime(sec) { return `${Math.floor(sec/60).toString().padStart(2,'0')}:${(sec%60).toString().padStart(2,'0')}`; }

function iniciarTimerSiNecesario(nivel) {
  if (!intervalos[nivel] && vidas[nivel] > 0) {
    timers[nivel] = 0; document.getElementById(`timer-${nivel}`).textContent = `⏱ 00:00`;
    intervalos[nivel] = setInterval(() => { timers[nivel]++; document.getElementById(`timer-${nivel}`).textContent = `⏱ ${formatTime(timers[nivel])}`; }, 1000);
  }
}
function stopTimer(nivel) { if (intervalos[nivel]) { clearInterval(intervalos[nivel]); intervalos[nivel] = null; } }

function resetProgress() {
  ['basico', 'alto', 'superior'].forEach(nivel => {
    stopTimer(nivel); timers[nivel] = 0; fallos[nivel] = 0; vidas[nivel] = 3; pistasDesbloqueadas[nivel] = 0;
    document.getElementById(`timer-${nivel}`).textContent = `⏱ 00:00`; document.getElementById(`vidas-${nivel}`).innerHTML = '❤️❤️❤️';
    const input = document.getElementById(`input-${nivel}`); if(input) { input.value = ''; input.disabled = false; input.classList.remove('syntax-ok','syntax-error'); }
    const btnContainer = document.getElementById(`btn-container-${nivel}`);
    if(btnContainer) btnContainer.innerHTML = `<button id="btn-${nivel}" class="btn-verify flex-icon" onclick="verifyCode('${nivel}')"><i data-lucide="play"></i> Verificar Código</button>`;
    document.getElementById(`feedback-${nivel}`).style.display = 'none';
    document.getElementById(`pista-${nivel}`).classList.remove('visible');
    validarSintaxis(nivel); 
  });
}

function validarSintaxis(nivel) {
  const txt = document.getElementById(`input-${nivel}`); if(!txt) return;
  const val = txt.value; const bar = document.getElementById(`syntax-${nivel}`); let tags = [];
  if (val.length < 5) { txt.classList.remove('syntax-ok','syntax-error'); bar.innerHTML = '<span class="syntax-chip chip-info">Escribe para analizar...</span>'; return; }
  let ok = true;
  if(val.includes('setup()') && val.includes('loop()')) tags.push('<span class="syntax-chip chip-ok"><i data-lucide="check"></i> Estructura</span>'); else { tags.push('<span class="syntax-chip chip-error"><i data-lucide="x"></i> Falta setup/loop</span>'); ok = false; }
  if ((val.match(/{/g) || []).length !== (val.match(/}/g) || []).length) { tags.push('<span class="syntax-chip chip-warn"><i data-lucide="alert-triangle"></i> Llaves {}</span>'); ok = false; }
  if ((val.match(/\(/g) || []).length !== (val.match(/\)/g) || []).length) { tags.push('<span class="syntax-chip chip-warn"><i data-lucide="alert-triangle"></i> Paréntesis ()</span>'); ok = false; }
  if (ok) { txt.classList.add('syntax-ok'); txt.classList.remove('syntax-error'); } else { txt.classList.add('syntax-error'); txt.classList.remove('syntax-ok'); }
  bar.innerHTML = tags.join(''); lucide.createIcons();
}

function verifyCode(nivel) {
  if (vidas[nivel] <= 0) return;
  initAudio(); 
  const btn = document.getElementById(`btn-${nivel}`); btn.innerHTML = `<i data-lucide="loader-2" class="lucide-spin"></i> Analizando...`; btn.disabled = true;

  setTimeout(() => {
    // VALIDACIÓN FLEXIBLE: Solo eliminamos espacios para buscar palabras clave dentro
    const code = document.getElementById(`input-${nivel}`).value;
    const cleanCode = code.replace(/\s+/g, '');
    const reto = weeks[currentRetoId].retos[nivel];
    let success = true;

    if (reto.match) {
      reto.match.forEach(str => {
        if (!cleanCode.includes(str)) success = false;
      });
    }

    const fb = document.getElementById(`feedback-${nivel}`);
    
    if (success) {
      fb.className = "feedback success";
      fb.innerHTML = `<div class="flex-icon"><i data-lucide="check-circle-2"></i> ${mensajesExito[Math.floor(Math.random()*mensajesExito.length)]}</div>`;
      confetti(); stopTimer(nivel);
      
      const isAlreadyDone = localStorage.getItem(`${getPrefix()}reto_${currentRetoId}_${nivel}`) === 'true';
      if (!isAlreadyDone) {
        let premio = nivel === 'basico' ? 10 : (nivel === 'alto' ? 20 : 30);
        ganarVolts(premio);
      } else playCoinSound(); 

      localStorage.setItem(`${getPrefix()}reto_${currentRetoId}_${nivel}`, 'true');
      const currentRecord = localStorage.getItem(`${getPrefix()}record_${currentRetoId}_${nivel}`);
      if (!currentRecord || timers[nivel] < parseInt(currentRecord)) localStorage.setItem(`${getPrefix()}record_${currentRetoId}_${nivel}`, timers[nivel]);
      
      updateProgress(); setTimeout(() => { loadWeek(); }, 3500); 
    } else {
      fallos[nivel]++; vidas[nivel]--; playErrorSound(); 
      let corazones = ''; for(let i=0; i<3; i++) corazones += (i < vidas[nivel]) ? '❤️' : '🖤';
      document.getElementById(`vidas-${nivel}`).innerHTML = corazones;
      fb.className = "feedback error";
      
      // SISTEMA DE CORAZONES / ENERGÍA
      if (vidas[nivel] <= 0) {
        fb.innerHTML = `<div class="flex-icon" style="margin-bottom:8px;"><i data-lucide="skull"></i> Sin energía.</div>`;
        document.getElementById(`input-${nivel}`).disabled = true; stopTimer(nivel);
        // Transformar botón para comprar energía
        const btnContainer = document.getElementById(`btn-container-${nivel}`);
        btnContainer.innerHTML = `<button class="btn-comprar-vida flex-icon" onclick="comprarEnergia('${nivel}')"><i data-lucide="battery-charging"></i> Recuperar 3 ❤️ (10 🪙)</button>`;
      } else {
        fb.innerHTML = `<div class="flex-icon"><i data-lucide="x-circle"></i> ${mensajesFallo[Math.floor(Math.random()*mensajesFallo.length)]}</div>`;
        
        // Entregar la primera pista gratis en el primer fallo
        if (pistasDesbloqueadas[nivel] === 0) {
           pistasDesbloqueadas[nivel] = 1;
        }
        renderPistas(nivel, reto);
      }
    }
    if (vidas[nivel] > 0) { btn.innerHTML = `<i data-lucide="play"></i> Verificar Código`; btn.disabled = false; }
    lucide.createIcons();
  }, 800);
}

function updateProgress() {
  if (!currentUser) return;
  const totalRetos = Object.keys(weeks).length * 3; let completados = 0;
  const container = document.getElementById('progreso-semanas'); container.innerHTML = '';
  Object.keys(weeks).forEach(sem => {
    let semCompletados = 0;
    ['basico', 'alto', 'superior'].forEach(n => { if(localStorage.getItem(`${getPrefix()}reto_${sem}_${n}`) === 'true') { completados++; semCompletados++; } });
    const dot = document.createElement('div'); dot.className = 'semana-dot';
    if(semCompletados > 0 && semCompletados < 3) dot.classList.add('parcial'); else if(semCompletados === 3) dot.classList.add('completa');
    if(sem === currentRetoId) dot.classList.add('activa'); container.appendChild(dot);
  });
  document.getElementById('progreso-fill').style.width = (completados / totalRetos) * 100 + '%';
  document.getElementById('progreso-texto').textContent = `${completados} / ${totalRetos} retos`;
}

window.onload = () => {
  document.getElementById('screen-login').classList.add('active'); document.getElementById('screen-app').classList.remove('active'); lucide.createIcons();
};
