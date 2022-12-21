#include <Arduino.h>
#include <Adafruit_Sensor.h>
#include <DHT.h>
#include <DHT_U.h>

#define TRIGPIN 8
#define ECHOPIN 10

void setUp(void)
{
  pinMode(TRIGPIN, OUTPUT);
  pinMode(ECHOPIN, INPUT);
  // set stuff up here
}

void tearDown(void)
{
  // clean stuff up here
}

void test_ultrasonic_sensor(void)
{
  setup();
  digitalWrite(TRIGPIN, LOW);
  delayMicroseconds(2);
  // Sets the trigPin on HIGH state for 10 micro seconds
  digitalWrite(TRIGPIN, HIGH);
  delayMicroseconds(10);
  digitalWrite(TRIGPIN, LOW);
  // Reads the echoPin, returns the sound wave travel time in microseconds
  long duration = pulseIn(ECHOPIN, HIGH);
  // Calculating the distance
  int distance = duration * 0.034 / 2;
  // Prints the distance on the Serial Monitor
  Serial.print("Distance: ");
  Serial.println(distance);
}

uint8_t i = 0;
uint8_t max_blinks = 5;

void loop()
{
  if (i < max_blinks)
  {
    test_ultrasonic_sensor();
    delay(1000);
    i++;
  }
}
