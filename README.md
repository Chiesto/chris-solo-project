
# Pantry Pal!

## Description

_Duration: 2 Week Sprint_


Many of my friends and I have been noticing that we throw out a lot of left over food that went bad after our last grocery trip. I figured there had to be a solution I could create for this. This is where I got the main idea for Pantry Pal!. I wanted to create an app that allows the user to find out what could be made with the leftovers in their fridge or pantry. With this app, the user can enter the remaining items in their fridge and with the press of a button, the app will pull up a list of available recipes that contain their leftover items. 

To see the fully functional site, please visit: [DEPLOYED VERSION OF APP](https://pantrypal123-a45f7622635d.herokuapp.com/#/home)

## Screen Shot

![Picture](/ScreenShots/Screen%20Shot%202023-07-12%20at%205.53.53%20PM.png)
![Picture](/ScreenShots/Screen%20Shot%202023-07-12%20at%205.54.35%20PM.png)
![Picture](/ScreenShots/Screen%20Shot%202023-07-12%20at%205.54.48%20PM.png)

### Prerequisites

Link to software that is required to install the app (e.g. node).

- [Node.js](https://nodejs.org/en/)
- [Postgres](https://www.postgresql.org/download/)
- Running NPM install should catch you up to date. Required database inputs are in the database.sql file. 

## Installation

How do you get your application up and running? This is a step by step list for how another developer could get this project up and running. The good target audience in terms of knowledge, would be a fellow Primer from another cohort being able to spin up this project. Note that you do not need a paragraph here to intro Installation. It should be step-by-step.

If your application has secret keys (for example --  Twilio), make sure you tell them how to set that up, both in getting the key and then what to call it in the `.env` file.

1. Create a database named `pantry_pal`,
2. The queries in the `database.sql` file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly. The project is built on [Postgres](https://www.postgresql.org/download/), so you will need to make sure to have that installed. We recommend using Postico to run those queries as that was used to create the queries, 
3. Open up your editor of choice and run an `npm install`
4. Run `npm run server` in your terminal
5. Run `npm run client` in your terminal
6. The `npm run client` command will open up a new browser tab for you!

## Usage
How does someone use this application? Tell a user story here.

1. Log in or Register with a username and password.
2. If you are on a new account, the fridge will be empty, otherwise your fridge will populate. 
3. If you would like to add to your fridge, click on the `Add to fridge` button.
    This will bring you to a form that has 4 inputs (name, food group, amount, and expiration date). All inputs are required.
4. If you wish to edit something in your fridge, simply click on that item's box and that will allow you to edit any of the values. On this page you can also delete that item from your fridge.
5. Whenever you want to search for recipes, press the `find recipes` button.
6. That will bring you to a scrollable list of recipes that you can make with your given ingredients
7. Click on a recipe picture to view the instructions and required ingredients for that recipe. 
8. Once you are finished, you may log out or continue to add/edit/delete items in your fridge. 


## Built With

- HTML
- CSS
- JavaScript
    - node.js
    - React.js
- Spoonacular API



## Acknowledgement
Thanks to [Prime Digital Academy](www.primeacademy.io) and my wonderful classmates and instructors who equipped and helped me to make this application a reality. (Thank your people)

## Support
If you have suggestions or issues, please email me at [xchrisck@gmail.com](www.google.com)