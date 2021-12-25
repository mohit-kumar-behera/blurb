import React from 'react';

// import components
import MessageCard from './MessageCard';

const MessageModalBody = ({ messages }) => {
  return (
    <div className="message-body">
      {messages.map(message => (
        <MessageCard key={message.id} message={message.content} />
      ))}
    </div>
  );
};

export default MessageModalBody;
