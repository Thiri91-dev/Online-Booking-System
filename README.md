# Online Booking System

A full-stack web-based booking system that allows users to browse services, make reservations, and manage bookings efficiently.

---

## 🚀 Features

- User Registration & Login (Authentication)
- Create, Update, and Cancel Bookings
- Admin Booking Management
- RESTful API
- Secure Backend Validation
- Responsive Design

---

## 🛠 Tech Stack


### Backend
- Node.js
- Express.js

### Database
- MongoDB


---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Thiri91-dev/Online-Booking-System.git
cd Online-Booking-System
```
---
##  Install Dependencies

```bash
npm install
```
---
##  Configure Environment Variables

```bash
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```
---

##  Run the Application
For production:
```bash

npm start
```
For development:
```bash


npm run dev
```
---

## 📌 API Endpoints

### Authentication Routes

| Method | Endpoint | Description |
|--------|----------|------------|
| POST   | /api/auth/register | Register a new user |
| POST   | /api/auth/login | User login |

---

### Booking Routes

| Method | Endpoint | Description |
|--------|----------|------------|
| GET    | /api/bookings/bookNO | Get bookings detail by bookNo |
| POST   | /api/bookings | Create a booking |

---

### Car Routes

| Method | Endpoint | Description |
|--------|----------|------------|
| GET    | /api/car/vehicleNo | Get cars detail by vehicleNo|
| GET   | /api/cars | Get all cars list |
