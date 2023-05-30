# Burger Api
==========

This is a sample project for a burger app built with NestJS and MongoDB. The app allows users to browse different types. This an online REST API that you can use whenever you need Pseudo-real data for your app without running any server-side code. It's awesome for teaching purposes, sample codes, tests and etc.

### Requirements
------------

-   Node.js 
-   MongoDB

### Installation
------------

1.  Clone the repository:

    Copy

    ```
    git clone https://github.com/luisregardiz/burger-api
    ```

    ```

2.  Install dependencies:

    Copy

    ```
    npm install
    ```

    ```

3.  Set up a MongoDB database and provide the connection string in the `.env` file and server PORT:

    Copy

    ```
    MONGO_DB_URI=XXXXXXX
    PORT=XXXXXXX

    ```

    ```

5.  Start the development app:

    Copy

    ```
    npm run start:dev
    ```

    The app will be available at `http://localhost:4000`.

    ```

### API Endpoints
-------------

The API provides the following endpoints:

-   `GET /burgers`: Get a list of all burgers
-   `GET /burgers/:id`: Get a single burger by ID
-   `POST /burgers`: Add a burger to the list
-   `PATCH /burgers/:id`: Update burger information by ID 
-   `DELETE /burgers/:id`: Remove a burger

### Testing
-------

To run the tests, use the following command:

Copy

```
npm run test

```

### Contributing
------------

Contributions are welcome! Please fork the repository and submit a pull request.

### License
-------

This project is licensed under the MIT License - see the LICENSE file for details.
