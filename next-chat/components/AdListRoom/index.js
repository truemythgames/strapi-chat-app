import React, { useEffect, useState } from "react";
import { Input } from "antd";
import "antd/dist/antd.css";
import "font-awesome/css/font-awesome.min.css";
import Header from "./../Header";
import AdList from "./../AdList";
import {
    ChatContainer,
    StyledContainer,
} from "../../pages/chat/styles";
import ChatRoom from "../../components/index";

function AdListRoom(props) {

    const [ads, setAds] = useState([]);
    useEffect(() => {
        fetch('http://localhost:1337/api/ads/')
            .then((res) => res.json())
            .then((data) => {
                setAds(data);
                console.log(data);

            })
    }, [])

    // const handleChange = (e) => {
    //     setMessage(e.target.value);
    // };

    // const handleClick = () => {
    //     sendMessage(message);
    // };


    const handleCallback = (data) => {
        console.log("parentcallback")
        return (
            <ChatContainer>
                <ChatRoom username={username} />
            </ChatContainer>
        )   
    }

    return (
        <ChatContainer>
            <AdList ads={ads} username={props.username} callerId={props.callerId} parentCallback={handleCallback} />
            {/* <ChatRoom username={username} /> */}

        </ChatContainer>
    );
}

export default AdListRoom;
