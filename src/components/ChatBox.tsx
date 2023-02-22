import "./chatbox.style.scss";

type Props = {};

const ChatBox = (props: Props) => {
  return (
    <>
      <div className="chat-container">
        <div className="message-container">
          <div className="avatar"></div>
          <div className="message">My message</div>
        </div>

        <div className="message-container chat-gpt">
          <div className="avatar chat-gpt-avatar"></div>
          <div className="message">Response message from Bot</div>
        </div>
      </div>
      <div className="chat-input-container">
        <textarea rows={1} className="chat-input"></textarea>
      </div>
    </>
  );
};

export default ChatBox;
