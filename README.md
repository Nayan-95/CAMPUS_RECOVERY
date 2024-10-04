# CampusRecover

CampusRecover is a web application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). The platform allows students to post items they have found on campus, enabling those who have lost items to recover them by browsing the posts.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Future Development](#future-development)
- [Contributing](#contributing)

## Features

- **User Authentication**: Secure login and registration system.
- **Post Items**: Users can post details of items they have found.
- **Browse Posts**: Users can browse through posts to find lost items.
- **Search Functionality**: Users can search for specific items by keywords.
- **Map Integration**: Users can see the location where items were found using a map.

## Technologies Used

### Frontend

- React.js: A JavaScript library for building user interfaces.
- SCSS: For styling the application.
- Cloudinary: For storing and managing images.
- React-Leaflet: For map integration and displaying locations.

### Backend

- Node.js: A JavaScript runtime built on Chrome's V8 JavaScript engine.
- Express.js: A minimal and flexible Node.js web application framework.
- MongoDB: A NoSQL database for storing application data.
- Mongoose: An ODM (Object Data Modeling) library for MongoDB and Node.js.

## Installation

To run this project locally, follow these steps:

### Prerequisites

- Node.js and npm installed on your machine.
- MongoDB installed and running.

### Clone the Repository

```bash
git clone https://github.com/uditpadhan98/CampusRecover.git
cd campusRecover
```

### Backend Setup

1. Navigate to the `server` directory:

   ```bash
   cd server
   ```

2. Install backend dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the `backend` directory and add the following:

   ```
   MONGO_URL=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   CLIENT_URL=http://localhost:3000
   BASE_URL=http://localhost:3001
   ```

4. Start the backend server:

   ```bash
   npm start
   ```

### Frontend Setup

1. Open a new terminal window and navigate to the `frontend` directory:

   ```bash
   cd frontend
   ```

2. Install frontend dependencies:

   ```bash
   npm install
   ```

3. Start the React development server:

   ```bash
   npm start
   ```

The application should now be running on `http://localhost:3000`.

## Usage

1. Register for an account or log in if you already have one.
2. Post details of any items you have found on campus.
3. Browse or search for items you have lost.
4. Contact the poster to recover your lost item.

## Future Development

- **Mobile Responsiveness**: Enhance the mobile version of the application to ensure a seamless and user-friendly experience on smaller devices.
- **Admin Panel**: Develop an admin panel for better management of posts and users.
- **Advanced Search Filters**: Add advanced search filters to improve the item search experience.
- **User Ratings**: Introduce a user rating system to build trust within the community.
- **Chat Functionality**: Implement a chat system for direct communication between users.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.

Thank you for using CampusRecover! If you have any questions or need further assistance, feel free to contact us.
