import React,  {useEffect}  from 'react';
import './App.css';
import '@aws-amplify/ui-react/styles.css';
import '@fontsource/inter/variable.css';
import { Amplify } from 'aws-amplify';
import { AmplifyChatbot } from '@aws-amplify/ui-react/legacy';


Amplify.configure({
  Auth: {
    identityPoolId: 'xxxx',
    region: 'us-east-1'
  },
  Interactions: {
    bots: {
      BookTrip: {
        name: 'bookTrip',
        alias: '$LATEST',
        region: 'us-east-1'
      }
    }
  }
});


function App() {
  // const handleChatComplete = (event) => {
  //   const { data, err } = event.detail;
  //   if (data) console.log('Chat fulfilled!', JSON.stringify(data));
  //   if (err) console.error('Chat failed:', err);
  // };

  // useEffect(() => {
  //   const chatbotElement = document.querySelector('AmplifyChatbot');
  //   chatbotElement.addEventListener('chatCompleted', handleChatComplete);
  //   return function cleanup() {
  //     chatbotElement.removeEventListener('chatCompleted', handleChatComplete);
  //   };
  // }, []);
  return (
    <div className="App">
        <AmplifyChatbot
    botName="bookTrip"
    botTitle="aaaa"
    welcomeMessage="Hello, how can I help you?"
    bot-background-color="black"	
  />
    </div>
  );
}

export default App;
