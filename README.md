![JavaScript](https://img.shields.io/badge/JavaScript-orange) ![Node.js](https://img.shields.io/badge/Node.js-blue) ![Express.js@4.18.2](https://img.shields.io/badge/Express.js@4.18.2-purple) ![MySQL2@3.9.1](https://img.shields.io/badge/MySQL2@3.9.1-lightgreen) ![Sequelize@6.37.1](https://img.shields.io/badge/Sequelize@6.37.1-lightblue) ![Dotenv@16.4.4](https://img.shields.io/badge/Dotenv@16.4.4-grey)

<h1 align = "center">E-Commerce Back-End ORM </h1>

As an internet retail manager, you understand the fierce competition in the e-commerce landscape. To stay ahead of the curve, you need a cutting-edge backend for your website. This document outlines the development of a robust backend using the latest technologies, allowing your company to thrive against online rivals. Leveraging the popular Express.js framework and the industry-standard Sequelize library, this backend will establish a seamless connection with your MySQL database. Not only will this setup ensure swift data processing, but it's also designed to be developer-friendly, adhering to clear acceptance criteria. From effortlessly establishing database connections to efficiently managing categories, products, and tags through intuitive API routes, this backend empowers your team to focus on innovation while delivering a captivating customer experience. Let's unlock the potential of your e-commerce website with this modern and adaptable backend solution.

## Table of Contents

- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Technologies Used](#technologies-used)
- [Installation Instruction](#installation-instruction)
- [Test Instruction](#test-instruction)
- [Video](#video)
- [Output](#output)
- [Deployed Application](#deployed-application)
- [Central Grader Comments](#central-grader-comments)
- [License](#license)

## User Story

```md
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
```

## Acceptance Criteria

```md
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete data in my database
```

## Technologies Used

- JavaScript
- Node.js
- Express.js (version 4.18.2)
- MySQL2 (version 3.9.1)
- Sequelize (version 6.37.1)
- Dotenv (version 16.4.4)

## Installation Instruction

- [Install nodejs and npm](https://nodejs.org/en/download)
- [Install MySQL](https://dev.mysql.com/downloads/mysql/)
- [Install Insomnia](https://insomnia.rest/download)

## Test Instruction

#### Command to install packages and any packages it depends on:

`npm install`

#### Command to install Express dependencies:

`npm i express`

#### Command to install MySQL2 dependencies:

`npm i mysql2`

#### Command to install Sequelize dependencies:

`npm i sequelize`

#### Command to install Dotenv dependencies:

`npm i dotenv`

## Video

A walk through video is [here](https://youtu.be/RTK5aaScofQ).

<br>

These are the commands you need to run to start the server:

![](/assets/videos/commands.gif)

<br>

This demonstrates testing API GET, POST, PUT, and DELETE routes using Insomnia:

![](/assets/videos/insomnia.gif)

## Output

Here's a step-by-step guide to setting up your e-commerce API:

<b> Configure Database Credentials: </b>

- Open the .env.copy file and rename it to .env.
- Locate the placeholders for your MySQL password. Replace them with your actual credentials.

<b> Create the Database Schema: </b>

- Open your integrated terminal within the db folder.
- Type mysql -u root -p and enter the password you set in the .env file.
- Execute the source schema.sql command within the terminal. This creates the database schema based on your defined structure.

<b> Start the Server and Connect to Database: </b>

- Open your integrated terminal within the project directory.
- Install the required dependencies: npm i express mysql2 sequelize dotenv.
- Run npm run seed to populate your database with test data.
- Finally, start the server by running npm start. This will invoke the Express.js API and connect it to the MySQL database using Sequelize.

<b> Test Your API Endpoints: </b>

- Use Insomnia to test your API routes.
- Open GET routes for categories, products, and tags. Verify that the data is displayed in well-formatted JSON, matching your acceptance criteria.
- Test POST, PUT, and DELETE routes to create, update, and delete data. Ensure these actions are successfully reflected in your database.

## Deployed Application

The project was uploaded to [GitHub](https://github.com/) at the following repository:
[https://github.com/yukitoshi12345/E-Commerce-Back-End-ORM/](https://github.com/yukitoshi12345/E-Commerce-Back-End-ORM)

## Central Grader Comments

Grade: 100/100

Hi Yukitoshi,

Congratulations on completing the E-Commerce Back End ORM challenge! Your application successfully meets all the outlined requirements for the Challenge instructions. It impressively includes detailed column definitions for all 4 models and robust implementation of essential API routes. You've effectively integrated GET routes to retrieve data for all categories, all products, all tags, as well as single categories, products, and tags. Moreover, your application seamlessly handles POST routes for creating new categories, products, and tags, along with PUT routes for updating existing data and DELETE routes for removals.

Your walkthrough video was exceptionally well-executed. It provides clear guidance on setting up the database schema from the MySQL shell, seeding the database from the command line, and starting the server. I particularly appreciated the detailed demonstrations of GET routes for products and single products, as well as thorough testing of POST, PUT, and DELETE routes for products using Insomnia.

I'm pleased to note the significant improvements in your video submission, which now includes comprehensive demonstrations of GET routes for all categories, all tags, single categories, and single tags. Additionally, the testing of POST, PUT, and DELETE routes for categories and tags using Insomnia was well-documented and effectively showcased.

Your repository features an exemplary README with a clear project description and a link to the informative walkthrough video.

Your dedication and hard work are evident, and I encourage you to continue your impressive efforts!

- SF, Centralized Grading

## License

This project is licensed under the [MIT License](https://github.com/Yukitoshi12345/E-Commerce-Back-End-ORM/blob/main/LICENSE).
