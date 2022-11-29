# Travel Planner Backend

## Description
This is the thirteenth mini-project in the Northwestern Coding Bootcamp (Module 13). It is the back-end functionality for a travel planner, where a user can access traveler information, location information, and trip information associated with the traveler and/or location. A user can also post new information for the above 3 categories, as well as delete information.

We were required to use express package for routing and server-side functionality, mysql for database storage, sequelize package as our ORM to allow for database manipulation and mapping directly from our JS file, and dotenv package to hide our mysql connection information.

Along with many others "firsts", this was the first time we implemented sequelize's table associations and joining functions, which was challenging to grasp, but once they were correctly linked, it was really cool to see the connection in the objects through Insomnia.

Because this is all currently back-end code, access is only available through the Insomnia interface (or similar application).


## User Stories
* As a traveller, I want to be able to create an account.

* As a traveller, I want to be able to create a new trip for myself using a location from a list.

* As a traveller, I want to be able to create and view location data.

* As a traveller, I want to be able to view all of the trips I'm taking, along with their locations.


## Acceptance Criteria
* It's done when the GET route `/api/travellers` returns all traveller data without associated trips in Insomnia.

* It's done when the POST route `/api/travellers` creates traveller data and returns a successful response in Insomnia.

* It's done when the GET route `/api/travellers/:id` returns a single traveller's data with their associated trips and a list of locations in Insomnia. 

* It's done when the DELETE route `/api/travellers/:id` removes a traveller and any trips associated with them and returns a successful response in Insomnia.

* It's done when the GET route `/api/locations` returns all location data in Insomnia.

* It's done when the POST route `/api/locations` creates location data and returns a successful response in Insomnia.

* It's done when the GET route `/api/locations/:id` returns a single location's data, with its associated trips, in Insomnia. 

* It's done when the DELETE route `/api/locations/:id` removes a location and any trips associated with it and returns a successful response in Insomnia.

* It's done when the POST route `/api/trips` creates trip data between associated travellers and locations.

* It's done when the DELETE route `/api/trips/:id` removes a trip and returns a successful response in Insomnia.

* It's done when the API is successfully deployed to Heroku with a MySQL database.