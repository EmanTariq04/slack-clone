import React, { useState, useRef } from "react";
import styled from "styled-components";
import { Button } from "@mui/material";
import { db } from "./firebase";
import { collection, doc, addDoc, serverTimestamp } from "firebase/firestore";


function ChatInput({ channelName, channelId }) {
  const [input, setInput] = useState("");
    const chatRef = useRef(null);


  const sendMessage = async (e) => {
    e.preventDefault();

    if (!channelId || !input.trim()) {
      return;
    }

    try {
      await addDoc(collection(doc(db, "rooms", channelId), "messages"), {
        message: input.trim(),
        timestamp: serverTimestamp(),
        user: "Eman Tariq",
        userImage:
          "https://i.pinimg.com/236x/a6/43/3f/a6433f55e1ca74e67c9a4f62b6a2d02f.jpg",
      });

      chatRef.current.scrollIntoView({
        behavior: "smooth",
      })
      

      setInput("");
    } catch (error) {
      console.error("Error sending message: ", error);
    }
  };

  return (
    <ChatInputContainer>
      <form>
        <input
          onChange={(e) => setInput(e.target.value)}
          value={input}
          placeholder={`Message #${channelName}`}
        />
        <Button hidden type="submit" onClick={sendMessage}>
          SEND
        </Button>
      </form>
    </ChatInputContainer>
  );
}

export default ChatInput;

const ChatInputContainer = styled.div`
  border-radius: 20px;

  > form {
    position: relative;
    display: flex;
    justify-content: center;
  }

  > form > input {
    position: fixed;
    bottom: 30px;
    width: 60%;
    border: 1px solid gray;
    border-radius: 3px;
    padding: 20px;
    outline: none;
  }

  > form > button {
    display: none !important;
  }
`;
