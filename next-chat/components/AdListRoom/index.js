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

function AdListRoom(username) {
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

    return (
        <ChatContainer>
            <AdList ads={ads} username={username} />
        </ChatContainer>
    );
}

export default AdListRoom;
