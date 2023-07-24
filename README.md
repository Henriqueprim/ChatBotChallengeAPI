# Loan ChatBot Challenge - API
## About

This is the back-end part of a Full Stack application developed during a technical test for a Full Stack role in Lexart Labs. 

The challenge was creating a chatbot with the following features:
- Interpret some greeting terms and initiate a conversation with the user;
- Require a 'username' and a 'password' to continue the conversation;
- Upon encountering the term "loan" display three options in the conversation:
    - "Do you want to apply for a loan?"
    - "Loan conditions"
    - "Help"
- These loan options should, when clicked, display relevant information about the topic with a link for reference;
- Interpret some "goodbye" terms and finish the conversation storing it in the database;
- Create a page to display the user conversations history ordering them by date and exporting in a CSV file.

In the end I was asked to create this public repository and deploy the full project in a free hosting environment.

The result final result you can visit [here](https://chat-bot-challenge-client-side.vercel.app).

And [here](https://github.com/Henriqueprim/ChatBotChallengeClient) you can find the front-end repository.

---
## Technologies used

- Vanilla Javascript
- Node.js
- Express.js
- MongoDB
- Mongoose
- dotenv
- cors
- fast-csv

---
## Routes

Chat routes `./chat` + :
  - `/` - (POST) Receives the 'chat_id', 'username' and 'userMessages' in the body, interprets the 'userMessage', stores the 'user' and 'system' messages in database and then sends back the 'system' response;
  - `/conversations/:username` - (GET) Receives the 'username' in the params and agregates all the user conversations grouping by 'chat_id' and listing them by the most recent on top;
  - `/conversations/:username/:chat_id` - (GET) Receives the 'chat_id' in the params, finds the conversation and transforms it in a CSV file and exports the file as an attachment.

User routes:
- `/register` - (POST) Receives the 'username' and 'password' in the body, creates a new User in the database and responds with the user info;
- `/login` - (POST) Receives the 'username' and 'password' in the body and finds the user in the database responding with the user info; 


## Future improvements and corrections

Due to the limited duration of the challenge there were some tasks I had to prioritize over others while developing, so these are some of the things that I would like to improve or correct in the project:

* [ ] Encrypt users data;
    * Add a secure way of storing users data in the database by encrypting key informations like the password.
* [ ] Variables and functions names;
    * Review the variables and functions names making sure they are simple to understand, tell what they do and are not repeating.
* [ ] Function complexity;
    * Make sure the functions are not more complex than they need to be by trying to find more simple and safer solutions.

