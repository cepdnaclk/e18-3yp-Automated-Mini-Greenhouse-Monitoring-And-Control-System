 import { useState,useEffect,useCallback } from 'react';
// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
// import { GiftedChat } from 'react-native-gifted-chat';
// import axios from 'axios';

// const ChatScreen=() => {

//     const [messages, setMessages] = useState([]);

//   // useEffect(() => {
//   //   setMessages([
//   //     {
//   //       _id: 1,
//   //       text: 'Hello developer',
//   //       image:'',
//   //       createdAt: new Date(),
//   //       user: {
//   //         _id: 2,
//   //         name: 'Haritha Gunaratne',
//   //         //avatar: 'https://placeimg.com/140/140/any',
//   //         //avatar: null,
//   //         renderUsernameOnMessage:true,
          
//   //       },
//   //     },
//   //     // {
//   //     //   _id: 1,
//   //     //   username : "haritha",
//   //     //   messege:"helloTest"
//   //     // }
//   //   ])
//   // }, [])

//   const onSend = useCallback((messages = []) => {
//     console.log("ins")
//     setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
//     console.log("New_Message "+messages[0])
//     postdata()
//   }, [])

//   async function postdata (){
//     // const token = userInfo.token;
//     console.log("post data")

//     console.log(messages) 
    
//     const Test = {
//       username: messages.text,
//       messege: messages.text
//     }
//     console.log(Test)
    
//     await axios
//     .post(
//         `http://54.254.3.101:5000/messeges/add`,
//         Test,
//         {
            
//             headers: {
//                 'Content-Type': 'application/json',
//                 // 'Authorization': 'Bearer '+token,
//             },
//             transformResponse:(res)=> {
//                 return JSON.parse(res)
//             },
//             responseType: 'json'
//         }
//         )
//     .then(res =>{
//          let sensorInfo1 = res.data;
//         //  console.log("here")
//           console.log(sensorInfo1)
         

//     }).catch(err =>{
//         console.log(err.res)
//     })
// }

//   return (
//     <GiftedChat
//       messages={messages}
//       onSend={messages => onSend(messages)}
//       user={{
//         _id: 1,
//       }}
//     />
//   );
// }

// export default ChatScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

import axios from 'axios';
import { GiftedChat } from 'react-native-gifted-chat';

function ChatScreen() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Fetch previous messages from backend
    axios.get('https://172.20.10.11:5000/messages')
      .then(response => {
        setMessages(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const sendMessageToBackend = async (messages) => {
    try {
      const response = await axios.post('https://172.20.10.11:5000/messages', {
        messages,
      });
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  const onSend = (messages) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages));
    sendMessageToBackend(messages);
  }

  return (
    <GiftedChat
        onSend={onSend}
        messages={messages}
        user={{
          _id: 1,
        }}
    />
  );
}

export default ChatScreen;
