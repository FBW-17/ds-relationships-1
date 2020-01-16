# Date Modelling - Exercise #1 - Schema nesting

In this exercise we want to train document nesting in a schema.

## Task: Provide a customer address

* Create a file server.js
* Install packages express and mongoose
* Setup an Express app in server.js
* Import mongoose and setup a mongoose connection
    * Connect to a database "pizza_db" using
        `mongooose.connect("mongodb://localhost/pizza_db")`
        * => remember: The pizza_db does not need to exist yet. It will be created automaticaly once we create / write our first document to a collection
* Create a customer schema with these basic fields: 
    * firstname, lastname, gender
    * add the customer address as nested type to your customer schema
        * fields: street, zipcode, city
    * Create a Customer model using that schema
          

## BONUS

* Make the nested address document required 
    * => Research how to make nested fields (subdocuments) required in Mongoose

