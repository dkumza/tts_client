import { createContext, useContext, useState } from 'react';

import { v4 as uuid } from 'uuid';

const MsgContext = createContext({
  messages: [],
});

MsgContext.displayName = 'MsgCTX';

export const MsgContextProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);

  const addMsg = (type, text) => {
    const id = uuid();
    setMessages((msg) => [{ id, type, text }, ...msg]);
    setTimeout(() => {
      setMessages((msg) => msg.filter((message) => message.id !== id));
    }, 3000);
  };

  const msgCtxValues = {
    messages,
    addMsg,
  };
  return <MsgContext.Provider value={msgCtxValues}>{children}</MsgContext.Provider>;
};

export function useMsgContext() {
  return useContext(MsgContext);
}
