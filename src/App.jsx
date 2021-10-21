import React from 'react'
import {StreamChat} from 'stream-chat';
import {ChannelList, Chat} from 'stream-chat-react';
import Cookies from 'universal-cookie';
import apikey from '../keys'
import ChannelListContainer from './components/ChannelListContainer'
import ChannelContainer from './components/ChannelContainer';
const apiKey = apikey;

const client = StreamChat.getInstance(apiKey);


const App = () => {
    return (
        <div className="app__wrapper">
           <Chat client={client} theme="team light">
               <ChannelListContainer/>

                <ChannelContainer/>
           </Chat>
        </div>
    )
}

export default App
