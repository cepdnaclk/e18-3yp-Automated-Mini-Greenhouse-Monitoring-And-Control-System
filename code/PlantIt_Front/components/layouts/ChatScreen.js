import { useState,useEffect,useCallback } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { Bubble, GiftedChat } from 'react-native-gifted-chat';
import axios from 'axios';
const image = require("./images/ChatScreen.png");

const ChatScreen=() => {

    const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello I am Haritha',
        image:'',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'Haritha Gunaratne',
          //avatar: 'https://placeimg.com/140/140/any',
          //avatar: null,
          renderUsernameOnMessage:true,

          
        },
      },
      {
        _id: 2,
        text: 'Hello I am Ishta',
        image:'',
        createdAt: new Date(),
        user: {
          _id: 1,
          name: 'Ishta Jayakody',
          //avatar: 'https://placeimg.com/140/140/any',
          //avatar: null,
          renderUsernameOnMessage:true,

          
        },
      },
      {
        _id: 3,
        text: 'What are the plants we can grow in side PlantIt',
        image:'',
        createdAt: new Date(),
        user: {
          _id: 5,
          name: 'Ishta Jayakody',
          //avatar: 'https://placeimg.com/140/140/any',
          //avatar: null,
          renderUsernameOnMessage:true,

          
        },
      },
      {
        _id: 4,
        text: 'We can grow tomato',
        image:'',
        createdAt: new Date(),
        user: {
          _id: 3,
          name: 'Nimuthu',
          //avatar: 'https://placeimg.com/140/140/any',
          //avatar: null,
          renderUsernameOnMessage:true,

          
        },
      },
      {
        _id: 5,
        text: 'My plant is growing well inside PlantIt',
        image:'',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'Haritha Gunaratne',
          //avatar: 'https://placeimg.com/140/140/any',
          //avatar: null,
          renderUsernameOnMessage:true,

          
        },
      },
    ])
  }, [])

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
  }, []);

  const renderBubble=(props)=>{
    return(
      <Bubble
        {...props}
        wrapperStyle={{
          right:{
            backgroundColor:'#372604'
          },

          left:{
            //backgroundColor:'#D28716'
            backgroundColor:'#FFFF'
          }
          
        }}/>

        

        
    );
  }

  return (
    <ImageBackground source={image} style={{flex:1}}>

    <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
        _id: 1,
      }}
      renderBubble={renderBubble}
      
    />

    </ImageBackground>
    
  );
}

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#7DB1FF'
  },
});
