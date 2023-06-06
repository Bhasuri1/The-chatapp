import { ChatEngine } from "react-chat-engine";
import './App.css';
import ChatFeed from "./components/ChatFeed";
import LoginForm from "./components/LoginForm";

function App()
{
    if(!localStorage.getItem('username')) return <LoginForm/>
    return (
        <ChatEngine
            height = "100vh"
            projectID = "58e6faa3-b87a-4ac4-8702-441c3dc8629d"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed = {(chatAppProps)=> <ChatFeed {...chatAppProps}/>}
            onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
        />
    );

};

export default App;