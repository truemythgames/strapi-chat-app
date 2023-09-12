import React from "react";
import styled from "styled-components";
import { List as AntdList, Avatar } from "antd";

function AdList(props) {
  const ads = props.ads.data;
//   const handleClick = async (id, socketid) => {
//     const io = socket("http://localhost:1337");
//     await fetch("http://localhost:1337/api/ads/", {
//       method: "Delete",
//       headers: {
//         "Content-type": "application/json",
//       },
//     })
//       .then(async (e) => {
//         io.emit("kick", { socketid }, (error) => {
//           if (error) return alert(error);
//         });
//         setTimeout(() => location.reload(), 3000);
//       })
//       .catch((e) => location.reload());
//   };
  return (
    <StyledList>
      <ListHeading>Ads</ListHeading>
      <AntdList
        itemLayout="horizontal"
        dataSource={ads}
        renderItem={(ad) => (
          <AntdList.Item>
            <AntdList.Item.Meta
             
              title={ad.attributes.ads}
            />
            <button
            
              onClick={() => handleClick(user.id, user.attributes.socketid)}
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
  .ant-list-item-meta-content {
    flex-grow: 0;
  }
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
