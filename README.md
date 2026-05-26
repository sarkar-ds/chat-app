# Chatty — Real-Time Communication Platform

Chatty is a full-stack real-time chat application built to provide seamless communication between users through instant messaging, live updates, and modern user interaction features.

The application focuses on creating a fast, scalable, and responsive messaging experience using modern web technologies and real-time communication architecture.

It supports user authentication, one-to-one messaging, online presence indicators, image sharing, and responsive UI optimized for both desktop and mobile devices.

---

# Project Vision

The main goal behind building Chatty was to understand how modern real-time communication systems work internally and how scalable chat applications like WhatsApp, Messenger, or Discord manage live interactions.

This project helped in exploring:

* Real-time bidirectional communication
* WebSocket architecture
* Authentication systems
* State synchronization
* Scalable backend design
* Modern frontend UI/UX practices

Instead of building just a CRUD-based project, the focus was on simulating production-level real-time behavior.

---

# Core Features

## Real-Time Messaging

The application supports instant messaging using Socket.IO for real-time communication.

### Features Included

* Instant message delivery
* Real-time conversation updates
* Typing indicators
* Online/offline user status
* Message synchronization
* Live notifications
* Auto-scroll behavior
* Optimized socket event handling

---

## Authentication & Security

The platform includes a secure authentication system to protect user sessions and private conversations.

### Security Features

* JWT-based authentication
* Password hashing using bcrypt
* Protected routes
* Token verification middleware
* Secure API communication
* Persistent login sessions
* Environment variable protection

---

## User Management

Users can create personalized accounts and manage their communication environment.

### User Features

* User registration and login
* Profile image support
* User search functionality
* Active users list
* Conversation history
* Recent chats section

---

## Media Sharing

The chat system supports media sharing functionality for better interaction.

### Supported Features

* Image sharing
* File preview support
* Cloud storage integration (optional)
* Responsive media rendering

---

## Responsive Modern UI

The frontend is designed with modern UI/UX principles.

### Frontend Experience

* Fully responsive layouts
* Clean chat interface
* Sidebar conversation navigation
* Mobile-friendly design
* Dynamic loading states
* Reusable component architecture
* Smooth transitions and animations

---

# Tech Stack

## Frontend

| Technology       | Purpose                             |
| ---------------- | ----------------------------------- |
| React.js         | Frontend UI                         |
| Tailwind CSS     | Styling and responsiveness          |
| Axios            | API requests                        |
| React Router DOM | Routing                             |
| Zustand          | Lightweight global state management |
| Socket.IO Client | Real-time communication             |

---

## Backend

| Technology | Purpose                 |
| ---------- | ----------------------- |
| Node.js    | Runtime environment     |
| Express.js | Backend framework       |
| MongoDB    | Database                |
| Mongoose   | Database modeling       |
| Socket.IO  | WebSocket communication |
| JWT        | Authentication          |
| bcrypt     | Password encryption     |

---

## Deployment & Services

| Service               | Usage               |
| --------------------- | ------------------- |
| MongoDB Atlas         | Cloud database      |
| Render                | Backend hosting     |
| Vercel                | Frontend deployment |
| Cloudinary (Optional) | Media storage       |

---

# System Architecture

The application follows a modular client-server architecture.

```bash
Chatty/
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   ├── hooks/
│   │   ├── services/
│   │   ├── sockets/
│   │   └── utils/
│   │
│   └── public/
│
├── server/
│   ├── controllers/
│   ├── routes/
│   ├── middleware/
│   ├── models/
│   ├── socket/
│   ├── config/
│   └── utils/
│
└── README.md
```

---

# How Real-Time Messaging Works

The application uses Socket.IO to establish persistent connections between client and server.

### Workflow

1. User authenticates using JWT
2. Frontend establishes socket connection
3. Server tracks active users
4. Messages are emitted through socket events
5. Receiver gets updates instantly without refreshing
6. Database stores message history for persistence

This architecture enables low-latency communication similar to production messaging platforms.

---

# Installation Guide

## Clone Repository

```bash
git clone https://github.com/sarkar-ds/chatty.git
cd chatty
```

---

# Backend Setup

```bash
cd server
npm install
```

## Create Environment Variables

Create a `.env` file inside the `server` directory.

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
CLIENT_URL=http://localhost:5173
```

## Start Backend Server

```bash
npm run dev
```

---

# Frontend Setup

```bash
cd client
npm install
```

## Create Environment Variables

Create a `.env` file inside the `client` directory.

```env
VITE_API_URL=http://localhost:5000/api
```

## Start Frontend

```bash
npm run dev
```

---

# API Overview

## Authentication Routes

| Method | Endpoint             | Description   |
| ------ | -------------------- | ------------- |
| POST   | `/api/auth/register` | Register user |
| POST   | `/api/auth/login`    | Login user    |
| GET    | `/api/auth/profile`  | Get profile   |

---

## Message Routes

| Method | Endpoint                 | Description               |
| ------ | ------------------------ | ------------------------- |
| GET    | `/api/messages/:id`      | Get conversation messages |
| POST   | `/api/messages/send/:id` | Send message              |

---

## User Routes

| Method | Endpoint            | Description   |
| ------ | ------------------- | ------------- |
| GET    | `/api/users`        | Get all users |
| GET    | `/api/users/search` | Search users  |

---

# Socket Events

## Core Socket Events

| Event          | Purpose                        |
| -------------- | ------------------------------ |
| connection     | User connects to socket server |
| sendMessage    | Send message event             |
| receiveMessage | Receive incoming message       |
| typing         | Typing indicator               |
| onlineUsers    | Active users tracking          |
| disconnect     | Handle user disconnection      |

---

# Database Design

The backend uses MongoDB collections for:

* Users
* Conversations
* Messages
* Active sessions

### Message Schema Includes

* Sender ID
* Receiver ID
* Message content
* Timestamps
* Media URL (optional)
* Read status

---

# Security Implementations

Security and privacy were important considerations during development.

### Implemented Measures

* JWT authentication
* Password hashing
* Protected API routes
* Socket authentication
* Secure environment variables
* Request validation
* Error handling middleware

---

# Challenges Faced During Development

Building a real-time chat application introduced several engineering challenges.

## Real-Time State Synchronization

Handling instant updates across multiple users while maintaining frontend consistency.

## Socket Connection Management

Managing user socket IDs, active users, and reconnect logic efficiently.

## Authentication Integration

Synchronizing JWT authentication with socket communication.

## Responsive Chat UI

Designing a clean and scalable chat interface that works smoothly on mobile devices.

## Database Performance

Structuring message storage and retrieval efficiently for conversation history.

---

# Future Improvements

Several advanced features are planned for future versions.

### Planned Features

* Group chats
* Voice and video calling
* Message reactions
* Read receipts
* Push notifications
* End-to-end encryption
* Voice messages
* File sharing
* AI chat assistant integration
* Dark mode
* Message editing and deletion

---

# What I Learned From This Project

This project significantly improved my understanding of:

* Zustand state management patterns

* Real-time communication systems

* WebSocket architecture

* Socket.IO event handling

* Backend scalability concepts

* Authentication workflows

* Frontend state management

* Responsive UI design

* REST API development

* Database schema design

* Full-stack application deployment

---

# Performance Optimizations

Several optimizations were implemented to improve application performance.

### Optimizations Included

* Efficient socket event handling
* Lazy frontend rendering
* Optimized API requests
* Component reusability
* Proper state management
* Reduced unnecessary re-renders

---

# Deployment

## Frontend Deployment

The frontend application is deployed on Vercel for fast global CDN delivery, optimized builds, and seamless React deployment workflows.

* Platform: Vercel

## Backend Deployment

The backend server is deployed on Render to handle REST APIs, authentication services, and Socket.IO real-time communication.

* Platform: Render

## Database

* MongoDB Atlas

---

# Screenshots

## Authentication Page
<img width="959" height="443" alt="chat-app-auth-page" src="https://github.com/user-attachments/assets/fa3ce9f0-5625-484d-9d82-fae514e5e60f" />


## User Profile Setting
<img width="944" height="436" alt="image" src="https://github.com/user-attachments/assets/ba72f06c-6d99-4253-aa9f-80f62474855a" />

## Chat Dashboard
<img width="230" height="323" alt="image" src="https://github.com/user-attachments/assets/609eda58-c3d5-42db-8436-7b7318ce4943" />


## Real-Time Messaging Interface
<img width="701" height="336" alt="image" src="https://github.com/user-attachments/assets/c4697d9f-9502-42d6-9afb-8796d5c02ea3" />


## Mobile Responsive View

Add screenshot here.

---

# Contributing

Contributions and improvements are welcome.

1. Fork the repository
2. Create a new feature branch
3. Commit your changes
4. Push to your branch
5. Open a Pull Request

---

# Author

## Debashish Sarkar

Aspiring Full-Stack Developer focused on building scalable web applications, real-time systems, and modern user experiences.

### Connect With Me

* Portfolio: https://debashishsarkar.dev/
* LinkedIn: https://www.linkedin.com/in/sarkar-ds
* GitHub: https://github.com/sarkar-ds

---

# License

This project is licensed under the MIT License.

---

# Support The Project

If you found this project useful, consider giving it a star on GitHub. It helps support the project and future improvements.
