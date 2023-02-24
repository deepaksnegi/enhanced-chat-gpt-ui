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
    text: `Go to OpenAI's website. If you don't have an account, you will need to create one or sign up using your Google or Microsoft account.
    Click on the Create new secret key button.
    Copy the key and paste it into the API Key field in the extension settings.`,
  },
];

const delay = (time: number) =>
  new Promise((resolve) =>
    setTimeout(() => {
      resolve("done");
    }, time)
  );

const ChatBox = (props: Props) => {
  const key = "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";

  const [message, setMessage] = useState("");
  const [chats, setChats] = useState<Chat[]>(initialState);

  const handleFormSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setChats([...chats, { user: "me", text: message }]);
    setMessage("");

    setChats((prevChat) => [
      ...prevChat,
      { user: "chatgpt", text: "generating response...." },
    ]);

    await delay(1000);

    setChats((prevChat) => [
      ...prevChat,
      { user: "chatgpt", text: "Nice try but you have to enter keys..." },
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
            className="input chat-input"
          />
        </div>
      </form>
    </>
  );
};

export default ChatBox;
