# GravityFlow - Team Task Management System

## Overview

GravityFlow is a modern full stack MERN based Team Task Management platform designed for collaborative project management. The platform allows Admins to create projects, assign tasks, manage team members, and track project progress through a clean and responsive dashboard.

The system includes secure JWT authentication, role based access control, project management, task assignment, searchable member management, and an admin promotion system.

---

# Features

## Authentication System

* User Registration
* User Login
* JWT Authentication
* Protected Routes
* Persistent Login using Local Storage
* Role Based Access Control

---

## Admin Features

### Admin Dashboard

Admins get access to a complete management dashboard where they can:

* Create Projects
* Create Tasks
* Assign Tasks to Members
* Search Team Members
* Search Assign Users
* Promote Members to Admin
* Track Task Progress
* Delete Tasks
* Move Tasks Between Status Columns

---

## Member Features

### Member Dashboard

Members can:

* View Assigned Tasks
* Track Task Status
* Update Task Progress
* Work on Assigned Projects

---

## Task Management

The platform supports complete task lifecycle management.

Each task contains:

* Task Title
* Description
* Priority
* Status
* Assigned User
* Project Association

Task statuses:

* Todo
* In Progress
* Completed

Priority levels:

* Low
* Medium
* High

---

## Project Management

Admins can create multiple projects.

Tasks are connected to projects so teams can organize work efficiently.

Example:

Project:

* E-Commerce Website

Tasks:

* Frontend UI
* Backend API
* Authentication System
* Payment Gateway

---

## Admin Promotion System

Admins can promote members into admins dynamically from the dashboard.

The system includes:

* Search Members Feature
* Make Admin Button
* Protected Admin Route
* Role Validation

---

## Search Features

### Member Search

Admins can search members dynamically.

The member list appears only while typing for a cleaner and modern UI experience.

### Assign User Search

Task assignment includes a modern searchable autocomplete system.

Features:

* Search While Typing
* Hidden Suggestions Initially
* Click To Select Member
* Dynamic Dropdown

---

## Responsive UI

The platform is fully responsive.

Works on:

* Desktop
* Tablet
* Mobile Devices

Built using:

* React
* Tailwind CSS

---

# Tech Stack

## Frontend

* React.js
* React Router DOM
* Axios
* Tailwind CSS
* Vite

## Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* bcrypt.js

## Deployment

* Railway
* MongoDB Atlas

---

# Folder Structure

```bash
gravityflow-task-manager/
│
├── client/
│   ├── src/
│   │   ├── api/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── assets/
│   │   └── App.jsx
│
├── server/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   └── server.js
│
├── .node-version
├── nixpacks.toml
└── README.md
```

---

# Installation Guide

## Clone Repository

```bash
git clone https://github.com/Harsh-coder320/gravityflow-task-manager.git
```

---

# Install Frontend

```bash
cd client
npm install
npm run dev
```

---

# Install Backend

```bash
cd server
npm install
npm start
```

---

# Environment Variables

Create `.env` file inside server folder.

```env
PORT=5000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_jwt_secret
ADMIN_SECRET=your_admin_secret
```

---

# Admin Secret

The project includes an Admin Secret system for secure admin registration.

Example:

```env
ADMIN_SECRET=your_admin_secret
```

Important:

* Never expose your real admin secret publicly.
* Never commit actual secrets to GitHub.
* Use environment variables for security.

---

# API Routes

## Authentication Routes

```bash
POST /api/auth/register
POST /api/auth/login
GET /api/auth/users
PUT /api/auth/make-admin/:id
```

---

## Task Routes

```bash
GET /api/tasks
POST /api/tasks
PUT /api/tasks/:id
DELETE /api/tasks/:id
```

---

## Project Routes

```bash
GET /api/projects
POST /api/projects
```

---

# Deployment

The application is deployed using Railway.

## Frontend Deployment

* Railway Static Deployment
* Vite Production Build

## Backend Deployment

* Railway Node Server
* MongoDB Atlas Database

---

# Future Improvements

Planned features:

* Multi Member Task Assignment
* File Uploads
* Real Time Notifications
* Drag And Drop Kanban Board
* Team Chat System
* Deadline Tracking
* Activity Logs
* Email Notifications
* Dark/Light Theme Toggle
* Task Comments

---

# Learning Outcomes

This project demonstrates:

* Full Stack MERN Development
* REST API Design
* JWT Authentication
* Role Based Authorization
* MongoDB Database Design
* Railway Deployment
* Responsive UI Design
* State Management
* Secure Backend Architecture

---

# Author

## Kapil Sharma

Full Stack Developer

GitHub:
[https://github.com/Harsh-coder320](https://github.com/Harsh-coder320)

---

# Conclusion

GravityFlow is a scalable and modern team collaboration platform designed to simplify project and task management.

The project combines secure authentication, project organization, task assignment, and modern dashboard features into a clean full stack MERN architecture.

It is designed as a professional portfolio project showcasing real world full stack development skills.
