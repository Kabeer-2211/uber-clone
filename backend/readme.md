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

#### Body
The request body must be sent as JSON with the following structure:

- `fullname` (object)
    - `firstname` (string, required): users first name (minimum 3 characters).
    - `lastname` (string, optional): users last name (minimum 3 characters).
- `email` (string, required): users email address (must be valid email).
- `password` (string), required: users password address (minimum 6 characters).

#### Example Response

- `token` (string): jwt token
- `user` (object):
    - `fullname` (object)
        - `firstname` (string): users first name (minimum 3 characters).
        - `lastname` (string): users last name (minimum 3 characters).
    - `email` (string): users email address (must be valid email).
    - `password` (string): users password address (minimum 6 characters).

## Endpoint: `POST /user/login`

### Description
This endpoint allows existing users to log in by providing their email address and password. Upon successful login, a unique JWT token and user data are returned.

---

### Request Format

#### URL
`/user/login`

#### HTTP Method
`POST`

#### Body
The request body must be sent as JSON with the following structure:

- `email` (string, required): users email address (must be valid email).
- `password` (string), required: users password address (minimum 6 characters).

#### Example Response

- `token` (string): jwt token
- `user` (object):
    - `fullname` (object)
        - `firstname` (string): users first name (minimum 3 characters).
        - `lastname` (string): users last name (minimum 3 characters).
    - `email` (string): users email address (must be valid email).
    - `password` (string): users password address (minimum 6 characters).

## Endpoint: `POST /user/logout`

### Description
This endpoint allows users to log out by invalidating their JWT token. It ensures that the user session is securely terminated.

---

### Request Format

#### URL
`/user/logout`

#### HTTP Method
`GET`

#### Headers
`Authorization: Bearer <token>`

#### Body
No body is required for this request.

#### Example Response

- `message` (string): logged out.

## Endpoint: `GET /user/profile`

### Description
This endpoint allows users to retrieve their profile information. It requires a valid JWT token for authentication.

---

### Request Format

#### URL
`/user/profile`

#### HTTP Method
`GET`

#### Headers
`Authorization: Bearer <token>`

#### Body
No body is required for this request.

#### Example Response

- `user` (object):
    - `fullname` (object)
        - `firstname` (string): users first name.
        - `lastname` (string): users last name.
    - `email` (string): users email address.
    - `createdAt` (string): account creation timestamp.
    - `updatedAt` (string): last update timestamp.
