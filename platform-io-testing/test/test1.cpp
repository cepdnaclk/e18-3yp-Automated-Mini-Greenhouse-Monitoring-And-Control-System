#include <Arduino.h>
#include <unity.h>

#include <Adafruit_Sensor.h>
#include <DHT.h>
#include <DHT_U.h>

#define DHTPIN 2
#define DHTTYPE DHT22 // DHT 22

#define TRIGPIN 8
#define ECHOPIN 10

DHT_Unified dht(DHTPIN, DHTTYPE);

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

void test_dht22(void)
{
    sensors_event_t event;
    dht.temperature().getEvent(&event);
    TEST_ASSERT_NOT_EQUAL(true, isnan(event.temperature));
}

void test_ultrasonic_sensor(void)
{
    digitalWrite(TRIGPIN, LOW);
    delayMicroseconds(2);
    // Sets the trigPin on HIGH state for 10 micro seconds
    digitalWrite(TRIGPIN, HIGH);
    delayMicroseconds(10);
    digitalWrite(TRIGPIN, LOW);
    // Reads the echoPin, returns the sound wave travel time in microseconds
    long duration = pulseIn(ECHOPIN, HIGH);
    // Calculating the distance
    // int distance = duration * 0.034 / 2;
    // Prints the distance on the Serial Monitor
    // Serial.print("Distance: ");
    // Serial.println(distance);

    TEST_ASSERT_EQUAL(false, isnan(duration));
}

void test_led_builtin_pin_number(void)
{
    TEST_ASSERT_EQUAL(13, LED_BUILTIN);
}

void test_led_state_high(void)
{
    digitalWrite(LED_BUILTIN, HIGH);
    TEST_ASSERT_EQUAL(HIGH, digitalRead(LED_BUILTIN));
}

void test_led_state_low(void)
{
    digitalWrite(LED_BUILTIN, LOW);
    TEST_ASSERT_EQUAL(LOW, digitalRead(LED_BUILTIN));
}

void setup()
{
    // NOTE!!! Wait for >2 secs
    // if board doesn't support software reset via Serial.DTR/RTS
    delay(2000);

    pinMode(LED_BUILTIN, OUTPUT);

    UNITY_BEGIN(); // IMPORTANT LINE!
    RUN_TEST(test_led_builtin_pin_number);
}

uint8_t i = 0;
uint8_t max_blinks = 5;

void loop()
{
    if (i < max_blinks)
    {
        RUN_TEST(test_dht22);
        delay(1000);
        RUN_TEST(test_led_state_high);
        delay(500);
        RUN_TEST(test_led_state_low);
        delay(500);
        RUN_TEST(test_ultrasonic_sensor);
        delay(1000);
        i++;
    }
    else if (i == max_blinks)
    {
        UNITY_END(); // stop unit testing
    }
}
