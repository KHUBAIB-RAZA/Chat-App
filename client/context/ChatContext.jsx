
import { createContext } from "react";
import { AuthContext } from "./AuthContext";
import { useState, useContext, useEffect } from "react";
import toast from "react-hot-toast";

export const ChatContext = createContext();
export const ChatProvider = ({ children }) => {


    const [users, setusers] = useState([]);
    const [messages, setmessages] = useState([]);
    const [selectedUser, setselectedUser] = useState(null);
    const [unseenmessages, setunseenmessages] = useState({});
    const { socket, axios } = useContext(AuthContext);

    // function to get all users for sidebar
    const getUsers = async () => {
        try {
            const { data } = await axios.get("/api/messages/users");
            //console.log(data)
            if (data.success) {

                setusers(data.user)
                setunseenmessages(data.unseenMessages)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    // function to get messages for selected user
    const getMessages = async (userId) => {
        try {
            const { data } = await axios.get(`/api/messages/${userId}`);
            if (data.success) {

                setmessages(data.messages)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }


    // function to send message to selected user
    const sendMessage = async (messageData) => {
        try {
            const { data } = await axios.post(`/api/messages/send/${selectedUser._id}`, messageData);
            if (data.success) {
                setmessages((prevMessages) => [...prevMessages, data.newMessage])
            } else {

                toast.error(data.message);
            }
        } catch (error) {
            toast.error(error.message);
        }
    }

    // function to subscribe to messages for selected user 
    const subscribeToMessages = () => {
        if (!socket) return;
        socket.on("newMessage",async (newMessage) => {
            if (selectedUser && newMessage.senderId === selectedUser._id) {
                newMessage.seen = true;
                setmessages((prevMessages) => [...prevMessages, newMessage]); 
                await axios.put(`/api/messages/mark/${newMessage._id}`);
            } else {
                setunseenmessages((prevUnseenMessages) => ({

                    ...prevUnseenMessages, [newMessage.senderId]: prevUnseenMessages[newMessage.senderId] ? prevUnseenMessages[newMessage.senderId] + 1 : 1

                }))
            }
        })
    }

    // function to unsubscribe from messages 
    const unsubscribeFromMessages = () => {
        if (socket) socket.off("newMessage");
    }

    useEffect(() => {
        subscribeToMessages();
        return () => unsubscribeFromMessages();
    }, [socket, selectedUser])

    const value = {
        messages, users, selectedUser, getUsers, setmessages, sendMessage,getMessages ,setselectedUser, unseenmessages, setunseenmessages
    }
    return (
        <ChatContext.Provider value={value}> { children } 
        </ChatContext.Provider>
    )

}