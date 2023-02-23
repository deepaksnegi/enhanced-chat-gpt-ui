import "./chatbox.style.scss";
import React, { useState } from "react";
type Props = {};

type Chat = {
  user: string;
  text: string;
};

const initialState = [
  {
    user: "chatgpt",
    text: "Hello world!",
  },
];

const delay = (time: number) =>
  new Promise((resolve) =>
    setTimeout(() => {
      resolve("done");
    }, time)
  );

const ChatBox = (props: Props) => {
  const [message, setMessage] = useState("");
  const [chats, setChats] = useState<Chat[]>(initialState);

  const handleFormSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setChats([...chats, { user: "me", text: message }]);
    setMessage("");
    await delay(1000);

    setChats((prevChat) => [
      ...prevChat,
      { user: "chatgpt", text: "Some response from chat gpt..." },
    ]);
  };
  return (
    <>
      <div className="chat-container">
        {chats.map((chat, i) => (
          <div
            key={i}
            className={`message-container ${
              chat.user === "chatgpt" ? "chat-gpt" : ""
            }`}
          >
            <div
              className={`avatar ${
                chat.user === "chatgpt" ? "chat-gpt-avatar" : ""
              }`}
            ></div>
            <div className="message">{chat.text}</div>
          </div>
        ))}
      </div>
      <form onSubmit={handleFormSubmit}>
        <div className="chat-input-container">
          <input
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            className="chat-input"
          />
        </div>
      </form>
    </>
  );
};

export default ChatBox;
