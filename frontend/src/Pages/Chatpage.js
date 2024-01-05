import React, { useEffect } from 'react'
import axios from 'axios';

const Chatpage = () => {
    const fetchChats = async()=> {
        const data = await axios.get('/api/chat')
    };
    //
    useEffect(()=>{
        fetchChats(); 
        
    }, [])
    return (
        <div>
        Chats
        </div>
    )
}

export default Chatpage
