import { useState } from 'react';
import { Box, TextField, Typography, CircularProgress } from '@mui/material';
import axios from 'axios';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';

const SYSTEM_MESSAGE = { 
  "role": "system", 
  "content": "you only generate react code no extra text"
};

function ChatInterface() {
  const [messages, setMessages] = useState([
    {
      message: "Hello, I'm here to help! Ask me anything.",
      sentTime: "just now",
      sender: "Qwen"
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [userMessage, setUserMessage] = useState("");

  const handleSendMessage = () => {
    if (!userMessage.trim()) return;

    const newMessage = {
      message: userMessage,
      sentTime: "just now",
      sender: "User"
    };

    setMessages([...messages, newMessage]);
    setUserMessage(""); // Clear input field after sending message

    // Send the message to your Flask API
    setIsTyping(true);
    processMessageToFlask([...messages, newMessage]);
  };

  const processMessageToFlask = async (chatMessages) => {
    // Format messages for the Flask API
    const apiMessages = chatMessages.map((messageObject) => {
      let role = messageObject.sender === "Qwen" ? "assistant" : "user";
      return { role: role, content: messageObject.message };
    });

    const apiRequestBody = {
      prompt: apiMessages.map((msg) => msg.content).join("\n"),
    };

    try {
      const response = await axios.post(
        'https://sultan-api-zrhp.onrender.com/generate', // Replace with your Flask API endpoint
        apiRequestBody
      );
      const modelReply = response.data.response; // Adjust based on your Flask response format
      setMessages([...chatMessages, { message: modelReply, sender: "Qwen" }]);
      setIsTyping(false);
    } catch (error) {
      console.error("Error:", error);
      setMessages([
        ...chatMessages,
        { message: "Error occurred while fetching data.", sender: "Qwen" }
      ]);
      setIsTyping(false);
    }
  };

  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5F5F6',
      }}
    >
      <Box
        sx={{
          height: '500px', // Increased height
          width: '700px', // Increased width
          display: 'flex',
          flexDirection: 'column',
          p: 2,
          backgroundColor: '#F5F5F6',
          borderRadius: 2,
          boxShadow: 3,
          fontFamily: '"Fira Sans", sans-serif',
        }}
      >
        <Typography
          variant="h5"
          align="center"
          sx={{ mb: 2, color: '#1B374C' }}
        >
          Chat with Sultan
        </Typography>

        <Box
          sx={{
            flex: 1,
            overflowY: 'auto',
            mb: 2,
            p: 2,
            border: '1px solid #ccc',
            borderRadius: 1,
            backgroundColor: '#FFFFFF',
          }}
        >
          {messages.map((message, i) => (
            <Box
              key={i}
              sx={{
                mb: 2,
                display: 'flex',
                flexDirection: message.sender === 'Qwen' ? 'row' : 'row-reverse',
              }}
            >
              <Box sx={{ maxWidth: '70%', display: 'flex', flexDirection: 'column', wordBreak: 'break-word' }}>
                <Typography variant="body2" color="textSecondary">
                  {message.sender}
                </Typography>
                <Box
                  sx={{
                    backgroundColor: message.sender === 'Qwen' ? '#F0F0F0' : '#1B374C',
                    padding: '8px',
                    borderRadius: 1,
                    wordBreak: 'break-word', // Ensure long text breaks to fit in container
                    whiteSpace: 'normal', // Allow the text to wrap properly
                  }}
                >
                  <Typography
                    variant="body1"
                    color={message.sender === 'Qwen' ? 'textSecondary' : '#FFFFFF'}
                  >
                    {message.message}
                  </Typography>
                </Box>
              </Box>
            </Box>
          ))}
          {isTyping && (
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
              <CircularProgress size={24} sx={{ color: '#F39325' }} />
            </Box>
          )}
        </Box>

        <Box sx={{ display: 'flex', gap: 1 }}>
          <TextField
            label="Type a message"
            variant="outlined"
            fullWidth
            value={userMessage}
            onChange={(e) => setUserMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            sx={{
              backgroundColor: '#FFFFFF',
              '& .MuiOutlinedInput-root': {
                borderColor: '#1B374C',
              },
              '& .MuiOutlinedInput-input': {
                color: '#000000',
              },
              '& .MuiFormLabel-root': {
                color: '#1B374C',
              },
            }}
          />
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Typography
              variant="h6"
              sx={{
                cursor: 'pointer',
                color: '#F39325',
                '&:hover': {
                  color: '#1B374C',
                },
              }}
              onClick={handleSendMessage}
            >
              Send
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default ChatInterface;
