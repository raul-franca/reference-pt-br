---
title: Arduino Programming
date: 2024-05-29 8:58:31
background: bg-[#387f83]
label:
tags: -cpp -I/O
categories:
  - Programação
intro: |
  Cheat sheet de programação do Arduino para programação de I/O e das placas Arduino.

plugins:
  - copyCode
---

## Primeiros passos

### Reúna os materiais necessários

- Placa Arduino: qualquer modelo, como Arduino Uno, Mega, Nano etc.
- Cabo USB: compatível com sua placa Arduino (geralmente USB Type-A para Type-B no Uno).
- Computador: Windows, macOS ou Linux.

### Instale a Arduino IDE

- windows/mac/linux
- Acesse a página do Arduino Software.
- Baixe o instalador do sistema operacional.
- Execute o instalador e siga as instruções.

### Conecte sua placa Arduino

- Conecte a placa Arduino ao computador usando o cabo USB.
- O LED de alimentação do Arduino deve acender, indicando que ele está recebendo energia.

### Configure a Arduino IDE

- Abra a Arduino IDE.
- Selecione sua placa:
- Vá em Tools > Board e selecione o modelo da sua placa Arduino (ex.: Arduino Uno).

- Selecione a porta:

- Vá em Tools > Port e selecione a porta à qual o Arduino está conectado (normalmente aparece como COMx no Windows,
  /dev/cu.usbmodemxxxx no macOS e /dev/ttyUSBx no Linux).

## Estrutura básica

### Setup e Loop

```cpp
void setup() {
  // Code here runs once
}

void loop() {
  // Code here runs repeatedly
}
```

### Comentários

```cpp
// Single-line comment

/*
Multi-line
comment
*/
```

### Variáveis

```cpp
int ledPin = 13; // Integer
float voltage = 5.0; // Floating-point number
char letter = 'A'; // Character
String text = "Hello"; // String
```

### Modos de pin

```cpp
pinMode(pin, mode);
```

### I/O digital

```cpp
digitalWrite(pin, value);
int value = digitalRead(pin);

```

### I/O analógico

```cpp
analogWrite(pin, value);
int value = analogRead(pin);

```

## Comunicação serial

### Iniciar a comunicação serial

```cpp
Serial.begin(baudRate);
```

### Imprimir no monitor serial

```cpp
Serial.print(data);
Serial.println(data);
```

### Ler do monitor serial

```cpp
if (Serial.available()) {
  char data = Serial.read();
}
```

## Estruturas de controle

### Instrução if

```cpp
if (condition) {
  // Code to execute if condition is true
} else {
  // Code to execute if condition is false
}
```

### Laço for

```cpp
for (initialization; condition; increment) {
  // Code to execute
}
```

### Loop while

```cpp
while (condition) {
  // Code to execute
}
```

### Funções

```cpp
returnType functionName(parameters) {
  // Code to execute
  return value;
}
```

## Bibliotecas

### Incluir uma biblioteca

```cpp
#include <LibraryName.h>
```

### Usando uma biblioteca

```cpp
#include <Servo.h>

Servo myServo;

void setup() {
  myServo.attach(9); // Attach servo to pin 9
}

void loop() {
  myServo.write(90); // Set servo to 90 degrees
  delay(1000);
  myServo.write(0); // Set servo to 0 degrees
  delay(1000);
}
```

## Funções comuns

### Delay

```cpp
delay(milliseconds);

```

### Millis

```cpp
unsigned long currentTime = millis();

```

### Map

```cpp
long outputValue = map(inputValue, fromLow, fromHigh, toLow, toHigh);

```

### Random

```cpp
long randomValue = random(max);
long randomValue = random(min, max);

```

### Random Seed

```cpp
randomSeed(analogRead(0)); // Seed from analog pin 0

```

## Sensores e módulos

### Lendo temperatura com o sensor DHT

```cpp
#include <DHT.h>

#define DHTPIN 2     // Pin which is connected to the DHT sensor
#define DHTTYPE DHT11   // DHT 11

DHT dht(DHTPIN, DHTTYPE);

void setup() {
  Serial.begin(9600);
  dht.begin();
}

void loop() {
  float humidity = dht.readHumidity();
  float temperature = dht.readTemperature();

  Serial.print("Humidity: ");
  Serial.print(humidity);
  Serial.print(" %\t");
  Serial.print("Temperature: ");
  Serial.print(temperature);
  Serial.println(" *C");

  delay(2000);
}
```

### Piscar LED

```cpp
const int ledPin = 13;

void setup() {
  pinMode(ledPin, OUTPUT);
}

void loop() {
  digitalWrite(ledPin, HIGH);  // Turn the LED on
  delay(1000);                 // Wait for 1 second
  digitalWrite(ledPin, LOW);   // Turn the LED off
  delay(1000);                 // Wait for 1 second
}

```

### Ler entrada de botão

```cpp
const int buttonPin = 2;  // Pin where the push button is connected
const int ledPin = 13;    // Pin where the LED is connected

void setup() {
  pinMode(buttonPin, INPUT);  // Set the button pin as an input
  pinMode(ledPin, OUTPUT);    // Set the LED pin as an output
}

void loop() {
  int buttonState = digitalRead(buttonPin);  // Read the state of the button

  if (buttonState == HIGH) {
    digitalWrite(ledPin, HIGH);  // Turn the LED on
  } else {
    digitalWrite(ledPin, LOW);   // Turn the LED off
  }
}


```

### Entrada analógica

```cpp
const int potPin = A0;    // Pin where the potentiometer is connected
const int ledPin = 9;     // Pin where the LED is connected

void setup() {
  pinMode(ledPin, OUTPUT);  // Set the LED pin as an output
}

void loop() {
  int potValue = analogRead(potPin);  // Read the potentiometer value
  int ledBrightness = map(potValue, 0, 1023, 0, 255);  // Map the value to a range from 0 to 255

  analogWrite(ledPin, ledBrightness);  // Set the brightness of the LED
  delay(10);  // Small delay to make the LED change smoothly
}


```

### Comunicação serial

```cpp
void setup() {
  Serial.begin(9600);  // Start the serial communication at 9600 baud rate
}

void loop() {
  Serial.println("Hello, world!");  // Send a message to the serial monitor
  delay(1000);  // Wait for 1 second
}


```

### Sensor de temperatura

```cpp
const int tempPin = A0;  // Pin where the TMP36 sensor is connected

void setup() {
  Serial.begin(9600);  // Start the serial communication at 9600 baud rate
}

void loop() {
  int tempValue = analogRead(tempPin);  // Read the sensor value
  float voltage = tempValue * (5.0 / 1023.0);  // Convert the value to voltage
  float temperatureC = (voltage - 0.5) * 100;  // Convert the voltage to temperature in Celsius

  Serial.print("Temperature: ");
  Serial.print(temperatureC);
  Serial.println(" C");
  delay(1000);  // Wait for 1 second
}


```

### Controle de LED RGB

```cpp
const int redPin = 9;
const int greenPin = 10;
const int bluePin = 11;

const int potRedPin = A0;
const int potGreenPin = A1;
const int potBluePin = A2;

void setup() {
  pinMode(redPin, OUTPUT);
  pinMode(greenPin, OUTPUT);
  pinMode(bluePin, OUTPUT);
}

void loop() {
  int redValue = analogRead(potRedPin);
  int greenValue = analogRead(potGreenPin);
  int blueValue = analogRead(potBluePin);

  analogWrite(redPin, map(redValue, 0, 1023, 0, 255));
  analogWrite(greenPin, map(greenValue, 0, 1023, 0, 255));
  analogWrite(bluePin, map(blueValue, 0, 1023, 0, 255));

  delay(10);
}

```

### Sensor ultrassônico

```cpp
const int trigPin = 9;
const int echoPin = 10;

void setup() {
  Serial.begin(9600);
  pinMode(trigPin, OUTPUT);
  pinMode(echoPin, INPUT);
}

void loop() {
  long duration;
  int distance;

  digitalWrite(trigPin, LOW);
  delayMicroseconds(2);
  digitalWrite(trigPin, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin, LOW);

  duration = pulseIn(echoPin, HIGH);
  distance = duration * 0.034 / 2;

  Serial.print("Distance: ");
  Serial.print(distance);
  Serial.println(" cm");
  delay(1000);
}
```

### Controlando um servo motor

```cpp
#include <Servo.h>

Servo myServo;
const int potPin = A0;

void setup() {
  myServo.attach(9);  // Attach the servo to pin 9
}

void loop() {
  int potValue = analogRead(potPin);  // Read the potentiometer value
  int angle = map(potValue, 0, 1023, 0, 180);  // Map the value to an angle between 0 and 180

  myServo.write(angle);  // Set the servo position
  delay(15);  // Small delay for the servo to reach the position
}

```

### Exibindo texto em um LCD

```cpp
#include <LiquidCrystal.h>

// Initialize the library with the numbers of the interface pins
LiquidCrystal lcd(12, 11, 5, 4, 3, 2);

void setup() {
  // Set up the LCD's number of columns and rows
  lcd.begin(16, 2);
  // Print a message to the LCD
  lcd.print("Hello, World!");
}

void loop() {
  // Set the cursor to column 0, line 1 (second row)
  lcd.setCursor(0, 1);
  // Print the number of seconds since reset
  lcd.print(millis() / 1000);
}
```

## Comunicação sem fio com NRF24L01

### Código do transmissor

```cpp
#include <SPI.h>
#include <nRF24L01.h>
#include <RF24.h>

RF24 radio(9, 10);  // CE, CSN pins

const byte address[6] = "00001";  // Address

void setup() {
  radio.begin();
  radio.openWritingPipe(address);
  radio.setPALevel(RF24_PA_MIN);
  radio.stopListening();
}

void loop() {
  const char text[] = "Hello";
  radio.write(&text, sizeof(text));
  delay(1000);
}
```

### Código do receptor

```cpp
#include <SPI.h>
#include <nRF24L01.h>
#include <RF24.h>

RF24 radio(9, 10);  // CE, CSN pins

const byte address[6] = "00001";  // Address

void setup() {
  Serial.begin(9600);
  radio.begin();
  radio.openReadingPipe(0, address);
  radio.setPALevel(RF24_PA_MIN);
  radio.startListening();
}

void loop() {
  if (radio.available()) {
    char text[32] = "";
    radio.read(&text, sizeof(text));
    Serial.println(text);
  }
}

```

## Leia também

- [Arduino](https://www.arduino.cc/en/software)
