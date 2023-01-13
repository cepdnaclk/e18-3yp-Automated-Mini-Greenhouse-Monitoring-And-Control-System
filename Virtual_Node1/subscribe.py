import time

def customCallback(client,userdata,message):
    print("callback came...")
    print(message.payload)

from AWSIoTPythonSDK.MQTTLib import AWSIoTMQTTClient

myMQTTClient = AWSIoTMQTTClient("Virtual_Node1")
myMQTTClient.configureEndpoint("a3q3jx9o7mtrb4-ats.iot.ap-southeast-1.amazonaws.com", 8883)
myMQTTClient.configureCredentials("./AmazonRootCA1.pem","./bd648acfd48820a57a49a909e9cc14260b029c940313ec21d500bd207256d25b-private.pem.key", "./bd648acfd48820a57a49a909e9cc14260b029c940313ec21d500bd207256d25b-certificate.pem.crt")

myMQTTClient.connect()
print("Client Connected")

myMQTTClient.subscribe("general/outbound", 1, customCallback)
print('waiting for the callback. Click to conntinue...')
x = input()

myMQTTClient.unsubscribe("general/outbound")
print("Client unsubscribed") 


myMQTTClient.disconnect()
print("Client Disconnected")