import { useChatStore } from "../store/useChatStore";
import { useAuthStore } from "../store/useAuthStore";
import { useState, useRef } from "react";

const MessageInput = () => {
  const { selectedUser, sendMessage } = useChatStore();
  const { authUser, socket } = useAuthStore();
  const [message, setMessage] = useState("");
  const typingTimeoutRef = useRef(null);

  const handleChange = (e) => {
    const newMessage = e.target.value;
    setMessage(newMessage);

    // Emit "typing" to receiver
    socket.emit("typing", {
      roomId: selectedUser._id,
      sender: authUser.username,
    });

    // Clear and reset "stop typing" timer
    if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current);

    typingTimeoutRef.current = setTimeout(() => {
      socket.emit("stop typing", {
        roomId: selectedUser._id,
        sender: authUser.username,
      });
    }, 2000); // 2 seconds after last keystroke
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = message.trim();
    if (!trimmed) return;

    // Send the message through Zustand
    sendMessage({ text: trimmed });
    setMessage("");

    // Emit "stop typing" after sending
    socket.emit("stop typing", {
      roomId: selectedUser._id,
      sender: authUser.username,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border-t flex">
      <input
        type="text"
        value={message}
        onChange={handleChange}
        placeholder="Type your message..."
        className="flex-1 p-2 rounded border outline-none"
      />
      <button
        type="submit"
        className="ml-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded"
      >
        Send
      </button>
    </form>
  );
};

export default MessageInput;
