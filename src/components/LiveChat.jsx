import React, { useEffect, useState } from "react";
import ChatComment from "./ChatComment";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, makeRandomString } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const i = setInterval(() => {
      // API polling
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomString(25),
        })
      );
    }, 500);
    return () => {
      clearInterval(i);
    };
  }, []);
  return (
    <div className="flex flex-col">
      <div className="m-3 p-2 h-[500px] border border-gray-300 rounded-lg overflow-y-scroll flex flex-col-reverse">
        {chatMessages.map((message, i) => (
          <ChatComment key={i} name={message.name} message={message.message} />
        ))}
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Sarthak Singh",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          className="ml-3 w-9/12 px-2 py-1 border border-gray-300"
          type="text"
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
          placeholder="Say Something :)"
        />
        <button className="bg-green-200 px-2 py-1 mx-2">Send</button>
      </form>
    </div>
  );
};

export default LiveChat;
