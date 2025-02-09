--Objective
Using React, build the client-side for an app called myFlix based on its existing server-side code (REST API and database).

--Design Criteria - User Stories
1.As a user, I want to be able to access information about movies so that I can learn more about movies I’ve watched or am interested in.

2.As a user, I want to be able to create a profile so I can save data about my favorite movies.

--Features & Requirements
Main View
Returns ALL movies to the user (each movie item with an image, title, and description)
Filtering the list of movies with a “search” feature
Ability to select a movie for more details
Ability to log out
Ability to navigate to Profile view

Single Movie view
Returns data (description, genre, director, image) about a single movie to the user
Allows users to add a movie to their list of favorites

Login view
Alowws users to log in with a username and password

Signup view
Allow new users to register (username, password, emailm date of birth)

Profile View
Dispaly user registration details
Allows users to update their info(username, password, email, date of birth)
Display favorite movies
Allows users to remove a movie from their list of favorites
Allow existing users to deregister

--Teacnical Requirements
The application must be a singele-page application(SPA)
The application must use state routing to navigate between views and share URLs
The application must give users the option to filter movies using "search" feature
The application must use Parcel as its build tool
The application must be written using the React library and in ES2015+
The application must use Bootstrap as UI library for styling and responsivness
The application must contain function concept
The application must be located online
The application must use React Redux state management of at least one feature(i.e., filtering)