# Spacebook - Tech Blog Platform

Welcome to Spacebook, the one-stop tech blog platform to share, collaborate, and chit-chat about tech-related items!

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [License](#license)

## Features

- User Authentication: Sign up, log in, and log out functionality.
- Create, Read, Update, and Delete (CRUD) blog posts.
- Comment on blog posts.
- User-specific dashboard to manage posts.

## Installation

1. Clone the repository:
    ```sh
    git clone git@github.com:PCast71/Space-book.git
    ```

2. Navigate to the project directory:
    ```sh
    cd Spacebook
    ```

3. Install the dependencies:
    ```sh
    npm install
    ```

4. Set up the database:
    - Configure your database connection in `config/config.json`.
    - Run the migrations:
        ```sh
        npx sequelize-cli db:migrate
        ```

5. Start the server:
    ```sh
    node server.js
    ```

## Usage

1. Open your browser and navigate to `http://localhost:3000`.
2. Sign up for a new account or log in with an existing account.
3. Create, update, or delete blog posts from your dashboard.
4. Comment on existing blog posts.

  ## Technologies Used
Node.js: JavaScript runtime.
Express.js: Web framework for Node.js.
Sequelize: ORM for SQL databases.
Passport.js: Authentication middleware for Node.js.
Handlebars: Templating engine.
MySQL: Relational database.
Bootstrap: CSS framework for responsive design.

## License
This project is licensed under the MIT License.
