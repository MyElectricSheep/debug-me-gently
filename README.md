# Debug Me Gently

- ##### This is an exercise I created for the [WBS Coding School](https://www.wbscodingschool.com/) to make web dev students practice their **debugging** skills in a fullstack NodeJS / React context.
- ##### This repo contains the correction of the exercise.

This is a workshop to learn `debugging`!

You are given a React application and a Node application.

The front-end's purpose is to let the user upload a profile picture, store it in the back-end, which, in return, should send a reference pointing to that picture back to the client which can in return display it proudly!

--> Problem: Both of the front-end and the back-end are broken! 

##### Your goal: make them work again!  

### Step 1: Initialize the project

`git clone` the project onto your computer

### Step 2: Fix the back-end

It's a good idea to fix the back-end first, since the front-end relies on it.

`cd` into the back-end part of the app
run `npm install`
try to run `npm start`

You'll get your first error. It's important you read thoroughly the error messages you're given if you want to move on to the next error!

The back-end will be considered fixed when, and only when:
- The server runs without crashing
- You can upload a picture using Postman (hint; target the /upload-profile-pic route with a POST request, and using Postman, send a picture in the body of the request using `form-data` and selecting a file; don't forget to give it the name Multer is expecting: `profile_pic`)
- The picture gets saved in the public folder
- The server send back a reference to where the picture is stored correctly (eg: with the correct file extension)
- You can access that file without problem by inputing its URL in the browser (eg: `http://localhost:3000/public/myImage.jpg`)

### Step 3: Fix the front-end

`cd` into the front-end part of the app
run `npm install`
run `npm start`

You'll get your first error. It's important you read thoroughly the error messages you're given if you want to move on to the next error!

The front-end will be considered fixed when, and only when:
- The React application runs without crashing
- You can successfully select a picture, send it to the server, and get the reference of that picture back
- You can display the uploaded picture
