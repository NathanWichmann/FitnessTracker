# Unit 18: FitnessTracker: NoSQL
This repository (FitnessTracker) is an educational homework assignment from the CARL-OTT-FSF-PT-02-20121-U-C course. It was designed to help students become more familiar with using NoSQL databases. The database used was Mongodb, placed on top of that is Mongoose. Mongoose makes the connection to Mongo Atlas where the database is seeded. This database is then connected to the Heroku through a connection string from Mongo Atlas, placed in the config vars of Heroku. NoSQL means it uses the relational database method loosely. There are no tables or rows or columns, they are replaced with documents and collections. This allows the data to be stored in json format. Being that json has a multitude of options and methods in many languages, it makes for ease of use when retrieving data from a database. 

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://tranquil-eyrie-67751.herokuapp.com/?id=60d79acddce3a10020392803)

## Table of Contents 
- [Unit 18: FitnessTracker: NoSQL](#unit-18-fitnesstracker-nosql)
  - [Table of Contents](#table-of-contents)
- [Pictures](#pictures)
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
  - [Credits](#credits)
  - [Lisence](#lisence)

# Pictures
![fitness-tracker](https://user-images.githubusercontent.com/77902368/123527876-2a2bc880-d6b1-11eb-8bc2-212023448f92.png)
![fitness-tracker2](https://user-images.githubusercontent.com/77902368/123527878-2c8e2280-d6b1-11eb-872f-70e43daa9cef.png)
![fitness-tracker3](https://user-images.githubusercontent.com/77902368/123527880-2e57e600-d6b1-11eb-8420-9560d671857b.png)
![fitness-tracker4](https://user-images.githubusercontent.com/77902368/123527881-3021a980-d6b1-11eb-843f-977ffa3fdd97.png)
![image](https://user-images.githubusercontent.com/77902368/124299069-004c2900-db2b-11eb-87cb-bcf75a0e1a03.png)

# Description
This application allows a single user to track their own physical activity to monitor their progress. It is a simple application that uses many different connected languages. Monngo is connected to mongoose, which is connected to node.js where JavaScript can be used. This all comes together in a format that is like model, view, controller. There is a model file, there is a public file that’s similar to the view and a routes file that is close to the controller. 

# Installation 
This application uses mongodb as the base database. It uses mongoose to interact with the data. It uses Mongo Atlas to put the database on a third-party platform. It then uses Heroku, which is connected to Mongo Atlas to deploy the application to the hosting server. The application also uses, node.js, JavaScript, express, Morgan, bootstrap and chart.js. 

# Usage 
This is a simple exercise tracker that allows a single user to keep a record of their resistance and cardio exercises. It tracks distance and resistance training and aggregates them to give a full total of exercises over a 9-day period. It also gives the user a last workout total so they may challenge themselves for a better personal best. 

## Credits 
<a href="https://github.com/NathanWichmann/">GitHub Link For Nathan Wichmann</a>
Tutor: Joey Rodregez 
Instructor: Adam 
Teachers Assistants: BEN & AIDEN


## Lisence 
MIT License

Copyright (c) [2021] [FitnessTracker]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

