# User Registration Endpoint Documentation

## Endpoint: `POST /user/register`

### Description
This endpoint allows users to register by providing their full name, email address, and password. It validates the input data, hashes the password, and stores the user's information in the database. A unique JWT token is returned upon successful registration.

---

### Request Format

#### URL
`/user/register`

#### HTTP Method
`POST`

#### Headers
`Content-Type: application/json`

#### Body
The request body must be sent as JSON with the following structure:

- `fullname` (object)
    - `firstname` (string, required): users first name (minimum 3 characters).
    - `lastname` (string, optional): users last name (minimum 3 characters).
- `email` (string, required): users email address (must be valid email).
- `email` (string), required: users password address (minimum 6 characters).

#### Example Response

- `user` (object):
    - `fullname` (object)
        - `firstname` (string): users first name (minimum 3 characters).
        - `lastname` (string): users last name (minimum 3 characters).
    - `email` (string): users email address (must be valid email).
    - `email` (string): users password address (minimum 6 characters).
- `token` (string): jwt token