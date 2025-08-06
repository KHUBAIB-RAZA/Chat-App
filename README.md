# Chat-App 💬

A modern, real-time chat application built with React, Node.js, Socket.io, and MongoDB. Features include instant messaging, image sharing, user authentication, online status tracking, and a beautiful responsive UI.

## ✨ Features

- **Real-time Messaging**: Instant message delivery using Socket.io
- **Image Sharing**: Upload and share images in conversations
- **User Authentication**: Secure signup/login with JWT tokens
- **Online Status**: See who's online in real-time
- **Message Status**: Track seen/unseen messages
- **Profile Management**: Update profile picture, name, and bio
- **Responsive Design**: Works seamlessly on desktop and mobile
- **Message Search**: Find users quickly with search functionality
- **Beautiful UI**: Modern glass-morphism design with smooth animations

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern React with hooks
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first styling
- **React Hot Toast** - Beautiful notifications
- **Lucide React** - Modern icon library

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **Socket.io** - Real-time communication
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - Authentication tokens
- **Bcrypt** - Password hashing
- **Cloudinary** - Image upload and storage

## 📁 Project Structure

```
quickchat/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   ├── pages/         # Page components
│   │   ├── assets/        # Static assets
│   │   └── lib/           # Utility functions
│   └── context/           # React context providers
└── server/                # Node.js backend
    ├── controllers/       # Route handlers
    ├── models/           # Database models
    ├── routes/           # API routes
    ├── middleware/       # Custom middleware
    └── libs/             # Utilities & config
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or cloud)
- Cloudinary account (for image uploads)

### Installation

1. **Clone the repository**

2. **Install server dependencies**
   ```bash
   cd server
   npm install
   ```

3. **Install client dependencies**
   ```bash
   cd ../client
   npm install
   ```

4. **Environment Setup**
   
   Create a `.env` file in the `server` directory:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   PORT=5000
   JWT_SECRET=your_jwt_secret_key
   CLOUDINARY_NAME=your_cloudinary_name
   CLOUDINARY_KEY=your_cloudinary_api_key
   CLOUDINARY_SECRET=your_cloudinary_api_secret
   ```

5. **Start the application**
   
   Terminal 1 (Server):
   ```bash
   cd server
   npm run server
   ```
   
   Terminal 2 (Client):
   ```bash
   cd client
   npm run dev
   ```

The application will be available at:
- Frontend: `http://localhost:5173`
- Backend: `http://localhost:5000`

## 🔧 API Endpoints

### Authentication
- `POST /api/auth/signup` - User registration
- `POST /api/auth/login` - User login
- `PUT /api/auth/update-profile` - Update user profile
- `GET /api/auth/check` - Check authentication status

### Messages
- `GET /api/messages/users` - Get all users for sidebar
- `GET /api/messages/:id` - Get messages with specific user
- `POST /api/messages/send/:id` - Send message to user
- `PUT /api/messages/mark/:id` - Mark message as seen

## 🏗️ Key Components

### Frontend Components
- **ChatContainer**: Main chat interface
- **Sidebar**: User list and search
- **RightSidebar**: User profile and media gallery
- **LoginPage**: Authentication forms
- **ProfilePage**: User profile management

### Backend Models
- **User**: User profiles and authentication
- **Message**: Chat messages with metadata

### Real-time Features
- Socket.io connection management
- Online user tracking
- Instant message delivery
- Real-time typing indicators

## 🎨 UI/UX Features

- **Glass-morphism Design**: Modern translucent elements
- **Smooth Animations**: Fluid transitions and interactions
- **Responsive Layout**: Adapts to all screen sizes
- **Dark Theme**: Easy on the eyes
- **Message Bubbles**: WhatsApp-style chat interface
- **Online Indicators**: Green dots for online users
- **Image Gallery**: View shared images in conversations

## 🔐 Security Features

- **JWT Authentication**: Secure token-based auth
- **Password Hashing**: Bcrypt for secure password storage
- **Protected Routes**: Middleware for route protection
- **Input Validation**: Server-side validation
- **CORS Configuration**: Proper cross-origin setup

## 📱 Mobile Responsive

The application is fully responsive and works seamlessly on:
- Desktop computers
- Tablets
- Mobile phones
- Various screen orientations

## 🚀 Deployment

### Vercel Deployment (Recommended)

The project includes `vercel.json` for easy deployment:

1. **Deploy Backend**:
   - Push to GitHub
   - Connect to Vercel
   - Add environment variables
   - Deploy

2. **Deploy Frontend**:
   - Build the React app
   - Deploy to Vercel/Netlify
   - Update API endpoints

### Environment Variables for Production
```env
NODE_ENV=production
MONGODB_URI=your_production_mongodb_uri
JWT_SECRET=your_production_jwt_secret
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_KEY=your_cloudinary_key
CLOUDINARY_SECRET=your_cloudinary_secret
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Socket.io for real-time communication
- Cloudinary for image management
- Tailwind CSS for styling
- React team for the amazing framework
- MongoDB for the flexible database

## 📞 Support

If you have any questions or need help, please:
- Open an issue on GitHub
- Contact the maintainers
- Check the documentation

---


**Live Demo**: https://chat-app-zeta-three-24.vercel.app/login

