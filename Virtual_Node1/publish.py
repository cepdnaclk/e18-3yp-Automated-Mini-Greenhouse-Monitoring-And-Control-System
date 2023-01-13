from AWSIoTPythonSDK.MQTTLib import AWSIoTMQTTClient
import sys
import json
import random

myMQTTClient = AWSIoTMQTTClient("Virtual_Node1")
myMQTTClient.configureEndpoint("a3q3jx9o7mtrb4-ats.iot.ap-southeast-1.amazonaws.com", 8883)
myMQTTClient.configureCredentials("./AmazonRootCA1.pem","./bd648acfd48820a57a49a909e9cc14260b029c940313ec21d500bd207256d25b-private.pem.key", "./bd648acfd48820a57a49a909e9cc14260b029c940313ec21d500bd207256d25b-certificate.pem.crt")

myMQTTClient.connect()
print("Client Connected")

msg = "Sample data from the device";

temperature = random.random() * 100
humidity = random.random() * 100
soil_moisture = random.random() * 100


message = {
        "temperature":temperature,
        "humidity":humidity,
        "soil_moisture":soil_moisture
    }

example = json.dumps(message)
    


#data = json.loads(message)
topic = "general/inbound"
myMQTTClient.publish(topic, example, 0) 
print("Message Sent")

myMQTTClient.disconnect()
print("Client Disconnected")