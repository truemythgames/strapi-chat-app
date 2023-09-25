import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { List as AntdList, Avatar } from "antd";
import socket from "socket.io-client";

function AdList(props) {
    const ads = props.ads.data;
    const username = props.username;
    const callerId = props.callerId;
    const [users, setUsers] = useState([]);
    const [done, setDone] = useState("");

    const io = socket("http://localhost:1337");
    io.on("roomData", async (data) => {
        console.log(data.chatRoomId);
        let chatRoomId = data.chatRoomId;
        await fetch("http://localhost:1337/api/chat-rooms/" + chatRoomId + "?populate=*").then(async (e) => {
            console.log(e.json());
            props.parentCallback();

            // setUsers(await e.json());
        });
    });

    const handleClick = async (adId, username, callerId) => {

        io.emit("join", { username, adId, callerId }, (error) => {
            if (error) return alert(error);
        });
        // await fetch("http://localhost:1337/api/ads/" + id, {
        //     method: "Join",
        //     headers: {
        //         "Content-type": "application/json",
        //     },
        // })
        // .then(async (e) => {

        // })
        // .catch((e) => location.reload());
        // setTimeout(() => location.reload(), 3000);

    };
    return (
        <StyledList>
            <ListHeading>Ads</ListHeading>
            <AntdList
                itemLayout="horizontal"
                dataSource={ads}
                renderItem={(ad) => (
                    <AntdList.Item>
                        <AntdList.Item.Meta

                            title={ad.attributes.title}
                        />
                        <button

                            onClick={() => handleClick(ad.id, username, callerId)}
                        >
                            Chat
                        </button>
                    </AntdList.Item>
                )}
            />
        </StyledList>
    );
}

export default AdList;

const StyledList = styled(AntdList)`
  margin-right: 10px;
  flex: 0 0 35%;
  padding: 20px;
//   .ant-list-item-meta-content {
//     flex-grow: 0;
//   }
  h4 {
    font-size: 25px;
  }
  a {
    color: #097ef0;
  }
`;

const ListHeading = styled.div`
  color: #757591;
  font-size: 20px;
  font-style: oblique;
  border-bottom: 1px solid #757591;
`;
