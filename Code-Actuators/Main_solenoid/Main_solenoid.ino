
/*Developed by M V Subrahmanyam - https://www.linkedin.com/in/veera-subrahmanyam-mediboina-b63997145/
  Project: Controlling LED from AWS</pre>
<pre>  Electronics Innovation - www.electronicsinnovation.com
  
  GitHub - https://github.com/VeeruSubbuAmi
  YouTube - http://bit.ly/Electronics_Innovation
  
  Upload date:  11 December 2019
  
  AWS Iot Core
  
  This example needs https://github.com/esp8266/arduino-esp8266fs-plugin
  It connects to AWS IoT server then:
  - subscribes to the topic "inTopic", and perfprm the action according to the data recieved from the AS
*/
#include "FS.h"
#include <ESP8266WiFi.h>
#include <WiFiClientSecure.h>
#include <PubSubClient.h>
#include <ArduinoJson.h>
#include <NTPClient.h>
#include <WiFiUDP.h>
#include <time.h>
#include "secretsA.h"

#define AWS_IOT_PUBLISH_TOPIC   "esp8266/pub"
#define AWS_IOT_SUBSCRIBE_TOPIC "esp8266/sub"

#define solenoidPin 2

WiFiUDP ntpUDP;

unsigned long lastMillis = 0;
unsigned long previousMillis = 0;
const long interval = 5000;

BearSSL::X509List cert(cacert);
BearSSL::X509List client_crt(client_cert);
BearSSL::PrivateKey key(privkey);

 
time_t now;
time_t nowish = 1510592825;
//NTPClient timeClient(ntpUDP, "pool.ntp.org");

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

void callback(char* topic, byte* payload, unsigned int length) {
  Serial.print("Message arrived [");
  Serial.print(topic);
  Serial.print("] ");
  for (int i = 0; i < length; i++) {
    Serial.print((char)payload[i]); // Pring payload content
  }
    char solenoid_value = (char)payload[62]; // Extracting the controlling command from the Payload to Controlling LED from AWS
    Serial.print("solenoid command=");
    Serial.println(solenoid_value);
    if(solenoid_value==49) // 49 is the ASCI value of 1
    {
      digitalWrite(solenoidPin, HIGH);
      Serial.println("Solenoid turned ON");
    }
    else if(solenoid_value==48) // 48 is the ASCI value of 0
    {
      digitalWrite(solenoidPin, LOW);
      Serial.println("Solenoid turned OFF");
     }          
  Serial.println();
}

WiFiClientSecure net;
long lastMsg = 0;
char msg[50];
int value = 0;
PubSubClient client(MQTT_HOST, 8883, callback, net);

//  espClient.setX509Time(timeClient.getEpochTime());
//}

//void messageReceived(char *topic, byte *payload, unsigned int length)
//{
//  Serial.print("Received [");
//  Serial.print(topic);
//  Serial.print("]: ");
//  for (int i = 0; i < length; i++)
//  {
//    Serial.print((char)payload[i]);
//  }
//  Serial.println();
//}
 
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
  client.setCallback(callback);
 
 
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
//  client.publish(AWS_IOT_PUBLISH_TOPIC);
 
  Serial.println("AWS IoT Connected!");
}

void setup() {
  Serial.begin(9600);
  connectAWS();
  Serial.setDebugOutput(true);
  // initialize digital pin LED_BUILTIN as an output.
  pinMode(solenoidPin, OUTPUT);  //solenoid
  

  delay(1000);
}

void loop() {
  if (!client.connected()) {
    connectAWS();
  }
  client.loop();
}
