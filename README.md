Spacebook - Tech Blog Platform
Welcome to Spacebook, the one-stop tech blog platform to share, collaborate, and chit-chat about tech-related items!

Table of Contents
Features
Installation
Usage
Project Structure
Technologies Used
License
Features
User Authentication: Sign up, log in, and log out functionality.
Create, Read, Update, and Delete (CRUD) blog posts.
Comment on blog posts.
User-specific dashboard to manage posts.
Installation
Clone the repository:

sh
Copy code
git clone <repository-url>
Navigate to the project directory:

sh
Copy code
cd Spacebook
Install the dependencies:

sh
Copy code
npm install
Set up the database:

Configure your database connection in config/config.json.
Run the migrations:
sh
Copy code
npx sequelize-cli db:migrate
Start the server:

sh
Copy code
node server.js
Usage
Open your browser and navigate to http://localhost:3000.
Sign up for a new account or log in with an existing account.
Create, update, or delete blog posts from your dashboard.
Comment on existing blog posts.

Technologies Used
Node.js: JavaScript runtime.
Express.js: Web framework for Node.js.
Sequelize: ORM for SQL databases.
Passport.js: Authentication middleware for Node.js.
Handlebars: Templating engine.
MySQL: Relational database.
Bootstrap: CSS framework for responsive design.
License
This project is licensed under the MIT License.
