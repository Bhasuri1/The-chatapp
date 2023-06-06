import axios from "axios";
import { useState } from "react";

function Modal()
{
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [error,setError] = useState('');

    const handleSubmit= async(e) => 
    {
        e.preventDefault();
        const authObject = {'Project-ID':"58e6faa3-b87a-4ac4-8702-441c3dc8629d", 'User-Name': username,'User-Secret' : password };
        
        try{
            await axios.get('https://api.chatengine.io/chats',{headers:authObject});
            
            localStorage.setItem('username',username);
            localStorage.setItem('password',password);

            window.location.reload();
        } catch(err) {
            setError('Oops , incorrect credentials');
        }
    };

    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title"> Chat Application </h1>
                <form onSubmit={handleSubmit}>
                  <input type="text" value = {username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required/>
                  <input type="password" value = {password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required/>
                  <div align="center">
                    <button type = "submit" className="button">
                        <span> Start Chatting</span>
                    </button>
                  </div>
                  </form>
                  <h1>{error}</h1>
            </div>
        </div>
    );
};

export default Modal;