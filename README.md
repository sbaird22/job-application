# Job Tracker

Job Tracker is a full-stack web application designed to help job seekers stay organized and focused during their job search. By integrating modern tools like the Google Job Search API, Chart.js, and AI features, the application provides a structured and interactive way to track job applications and gain insights into the job search process. This project demonstrates a deep understanding of key technologies and languages used in full-stack development.

## Table of Contents

1. [Purpose](#purpose)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Installation](#installation)
5. [Usage](#usage)
6. [License](#license)
7. [Collaborators](#collaborators)

---

## Purpose

The primary purpose of Job Tracker is to:
- Assist users in tracking their job applications with ease and organization.
- Display a strong understanding of full-stack development concepts and tools, showcasing technical proficiency for potential employers.
- Demonstrate practical implementation of APIs, data visualization, and AI integration.

---

## Features

- **Job Search Integration**: Leverages the Google Job Search API to allow users to find relevant job listings.
- **Interactive Visualizations**: Uses Chart.js to display application trends and insights in an engaging and easy-to-understand format.
- **AI Assistance**: Implements AI to provide helpful suggestions or insights to improve the job search process.
- **Responsive Design**: Ensures a seamless experience across devices, from desktops to mobile phones.
- **Dark Mode**: Offers a toggle to switch between light and dark themes for user convenience.

---

## Technologies Used

This project was built using the following technologies:

### Frontend
- **React**: For building the user interface.
- **TypeScript**: To add static typing and improve code reliability.
- **Chart.js**: For creating interactive and visually appealing charts.

### Backend
- **Node.js**: For server-side scripting.
- **Express.js**: For building the RESTful API.
- **PostgreSQL**: For managing and storing application data.
- **Sequelize**: As an ORM for interacting with the database.
- **Google Job Search API**: For fetching real-time job listings.
- **AI Integration**: To add intelligent suggestions and features.

### Other Tools
- **Vite**: As a fast development server and build tool.
- **CSS**: For styling and ensuring a mobile-friendly design.
- **Environment Variables**: `.env` files are used for API keys and sensitive configurations.

---

## Installation

Follow these steps to set up the project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/job-tracker.git
   cd job-tracker
# Install backend dependencies
cd server
npm install

# Install frontend dependencies
cd ../client
npm install
SERPA_API_KEY=your_google_job_search_api_key
DATABASE_URL=your_postgresql_connection_string
JWT_SECRET=your_jwt_secret
# Start the backend server
cd server
npm run dev

# Start the frontend client
cd ../client
npm run dev  
## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.
## Collaborators

- **Shane Baird**: Bootcamp student, developer, and collaborator.  
- **Drew DeMarois**: Bootcamp student, developer, and collaborator.
