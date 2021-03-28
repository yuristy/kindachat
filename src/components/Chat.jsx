import React from 'react';
import socket from '../socket';

function Chat() {
  const [messageValue, setMessageValue] = React.useState('');

  return (
    <div className="chat">
      <div className="chat-users">
        Комната: <b>123</b>
        <hr />
        <b>Онлайн (123):</b>
        <ul>
          <li>Test</li>
        </ul>
      </div>
      <div className="chat-messages">
        <div className="messages">
          <div className="message">
            <p>123</p>
            <div>
              <span>123</span>
            </div>
          </div>
        </div>
        <form>
          <textarea
            value={messageValue}
            onChange={(e) => setMessageValue(e.target.value)}
            className="form-control"
            rows="3"
          ></textarea>
          <button type="button" className="btn btn-primary">
            Отправить
          </button>
        </form>
      </div>
    </div>
  );
}

export default Chat;