
#include <ESP8266WiFi.h>
#include <WiFiClientSecure.h>
#include <PubSubClient.h>
#include <ArduinoJson.h>
#include <time.h>
#include "secrets.h"
#include "DHT.h"

//DHT22
#define DHTPIN 16        // Digital pin connected to the DHT sensor
#define DHTTYPE DHT22   // DHT 11

//Soil Moisture
int SMPINA = A0;    // select the input pin for the soil moisture   sensor pin
int SMPIN = 13;   //earlier was digitalPin soil moisture

//Ultrasonic 
#define UStrigPin 12
#define USechoPin 14
//const int UStrigPin = D5;  //trigPin 
//const int USechoPin = D6;  //echoPin  
 
int soilmoistureD = 0;  //soil moisture digital value
int soilmoistureA = 0;  // Soil moisture analog value

int ledPin = 13;      // select the pin for the LED

DHT dht(DHTPIN, DHTTYPE);
 
float humidity ;
float temperature;
unsigned long lastMillis = 0;
unsigned long previousMillis = 0;
const long interval = 5000;
long duration;  
int distance;  
 
#define AWS_IOT_PUBLISH_TOPIC   "esp8266/pub"
#define AWS_IOT_SUBSCRIBE_TOPIC "esp8266/sub"
 
WiFiClientSecure net;
 
BearSSL::X509List cert(cacert);
BearSSL::X509List client_crt(client_cert);
BearSSL::PrivateKey key(privkey);
 
PubSubClient client(net);
 
time_t now;
time_t nowish = 1510592825;
 
 
void NTPConnect(void)
{
  Serial.print("Setting time using SNTP");
  configTime(TIME_ZONE * 3600, 0 * 3600, "pool.ntp.org", "time.nist.gov");
  now = time(nullptr);
  while (now < nowish)
  {
    delay(500);
    Serial.print(".");
    now = time(nullptr);
  }
  Serial.println("done!");
  struct tm timeinfo;
  gmtime_r(&now, &timeinfo);
  Serial.print("Current time: ");
  Serial.print(asctime(&timeinfo));
}
 
 
void messageReceived(char *topic, byte *payload, unsigned int length)
{
  Serial.print("Received [");
  Serial.print(topic);
  Serial.print("]: ");
  for (int i = 0; i < length; i++)
  {
    Serial.print((char)payload[i]);
  }
  Serial.println();
}
 
 
void connectAWS()
{
  delay(3000);
  WiFi.mode(WIFI_STA);
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
 
  Serial.println(String("Attempting to connect to SSID: ") + String(WIFI_SSID));
 
  while (WiFi.status() != WL_CONNECTED)
  {
    Serial.print(".");
    delay(1000);
  }
 
  NTPConnect();
 
  net.setTrustAnchors(&cert);
  net.setClientRSACert(&client_crt, &key);
 
  client.setServer(MQTT_HOST, 8883);
  client.setCallback(messageReceived);
 
 
  Serial.println("Connecting to AWS IOT");
 
  while (!client.connect(THINGNAME))
  {
    Serial.print(".");
    delay(1000);
  }
 
  if (!client.connected()) {
    Serial.println("AWS IoT Timeout!");
    return;
  }
  // Subscribe to a topic
  client.subscribe(AWS_IOT_SUBSCRIBE_TOPIC);
 
  Serial.println("AWS IoT Connected!");
}
 
 
void publishMessage()
{
  StaticJsonDocument<200> doc;
  doc["time"] = millis();
  doc["humidity"] = humidity;
  doc["temperature"] = temperature;
  doc["Soil Moisture"] = soilmoistureA;
  doc["Ultrasonic sensor"] = distance;
  char jsonBuffer[512];
  serializeJson(doc, jsonBuffer); // print to client
 
  client.publish(AWS_IOT_PUBLISH_TOPIC, jsonBuffer);
}
 
 
void setup()
{
  Serial.begin(115200);
  connectAWS();
  dht.begin();
  pinMode(DHTPIN, OUTPUT);  //DHT
  pinMode(ledPin, OUTPUT);  //Soilmoisture

  //ultrasonic
  pinMode(UStrigPin, OUTPUT); // Sets the trigPin as an Output  
  pinMode(USechoPin, INPUT); // Sets the echoPin as an Input 
}
 
 
void loop()
{
  //temperature and humidity - DHT22 sensor
  humidity = dht.readHumidity();
  temperature = dht.readTemperature();
  delay(500);  

  //soil moisture

  soilmoistureA = analogRead(SMPINA);
  soilmoistureD = digitalRead(SMPIN);
  delay(500);  

  //ultrasonic
    
 digitalWrite(UStrigPin, LOW);   // Clears the trigPin 
 delayMicroseconds(2);  
 // Sets the trigPin on HIGH state for 10 micro seconds  
 digitalWrite(UStrigPin, HIGH);  
 delayMicroseconds(10);  
 digitalWrite(UStrigPin, LOW);  
 // Reads the echoPin, returns the sound wave travel time in microseconds  
 duration = pulseIn(USechoPin, HIGH);  
 // Calculating the distance  
 distance= duration*0.034/2;   
 delay(500);  

  //ERROR CHECKING---------------------------
  if (isnan(humidity) || isnan(temperature) )  // Check if any reads failed and exit early (to try again).
  {
    Serial.println(F("Failed to read from DHT sensor!"));
//    return;
  }

  if (isnan(soilmoistureA) || isnan(soilmoistureD) )  // Check if any reads failed and exit early (to try again).
  {
    Serial.println(F("Failed to read from Soil Moisture sensor!"));
    return;
  }

  if (isnan(distance))  // Check if any reads failed and exit early (to try again).
  {
    Serial.println(F("Failed to read from Ultrasonic sensor!"));
    return;
  }

  //----------------------------------------------


  //PRINTING
  Serial.print("Soil Moisture Analog : "); 
  Serial.print(soilmoistureA); 
  Serial.print(" Digital: "); 
  Serial.println(soilmoistureD);
  Serial.print(F("Humidity: "));
  Serial.print(humidity);
  Serial.print(F("%  Temperature: "));
  Serial.print(temperature);
  Serial.println(F("°C "));  
  Serial.print("Distance: ");  
  Serial.println(distance);  
  delay(4000);  

 //--------------
 
  now = time(nullptr);
 
  if (!client.connected())
  {
    connectAWS();
  }
  else
  {
    client.loop();
    if (millis() - lastMillis > 5000)
    {
      lastMillis = millis();
      publishMessage();
    }
  }
}
