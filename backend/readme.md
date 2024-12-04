## Endpoint: `POST /users/register`

### Description
This endpoint allows users to register by providing their full name, email address, and password. It validates the input data, hashes the password, and stores the user's information in the database. A unique JWT token is returned upon successful registration.

---

### Request Format

#### URL
`/users/register`

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

## Endpoint: `POST /users/login`

### Description
This endpoint allows existing users to log in by providing their email address and password. Upon successful login, a unique JWT token and user data are returned.

---

### Request Format

#### URL
`/users/login`

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

## Endpoint: `GET /users/logout`

### Description
This endpoint allows users to log out by invalidating their JWT token. It ensures that the user session is securely terminated.

---

### Request Format

#### URL
`/users/logout`

#### HTTP Method
`GET`

#### Headers
`Authorization: Bearer <token>`

#### Body
No body is required for this request.

#### Example Response

- `message` (string): logged out.

## Endpoint: `GET /users/profile`

### Description
This endpoint allows users to retrieve their profile information. It requires a valid JWT token for authentication.

---

### Request Format

#### URL
`/users/profile`

#### HTTP Method
`GET`

#### Headers
`Authorization: Bearer <token>`

#### Body
No body is required for this request.

#### Example Response

- `fullname` (object)
    - `firstname` (string): users first name.
    - `lastname` (string): users last name.
- `email` (string): users email address.
- `createdAt` (string): account creation timestamp.
- `updatedAt` (string): last update timestamp.

## Endpoint: `POST /captains/register`

### Description
This endpoint allows captains to register by providing their full name, email address, password, and vehicle details. It validates the input data, hashes the password, and stores the captain's information in the database. A unique JWT token is returned upon successful registration.

---

### Request Format

#### URL
`/captains/register`

#### HTTP Method
`POST`

#### Body
The request body must be sent as JSON with the following structure:

- `fullname` (object)
    - `firstname` (string, required): Captain's first name (minimum 3 characters).
    - `lastname` (string, optional): Captain's last name (minimum 3 characters).
- `email` (string, required): Captain's email address (must be valid email).
- `password` (string, required): Captain's password (minimum 6 characters).
- `vehicle` (object)
    - `color` (string, required): Vehicle color (minimum 3 characters).
    - `plate` (string, required): Vehicle plate number (minimum 3 characters).
    - `capacity` (number, required): Vehicle capacity (minimum value 1).
    - `vehicleType` (string, required): Vehicle type (must be one of: `car`, `motorcycle`, `auto`).

#### Example Request Body

- `token` (string)
-`captain`
    - `fullname` (object)
        - `firstname` (string, required): Captain's first name (minimum 3 characters).
        - `lastname` (string, optional): Captain's last name (minimum 3 characters).
    - `email` (string, required): Captain's email address (must be valid email).
    - `password` (string, required): Captain's password (minimum 6 characters).
    - `vehicle` (object)
        - `color` (string, required): Vehicle color (minimum 3 characters).
        - `plate` (string, required): Vehicle plate number (minimum 3 characters).
        - `capacity` (number, required): Vehicle capacity (minimum value 1).
        - `vehicleType` (string, required): Vehicle type (must be one of: `car`, `motorcycle`, `auto`).

## Endpoint: `POST /captains/login`

### Description
This endpoint allows existing captains to log in by providing their email address and password. Upon successful login, a unique JWT token and user data are returned.

---

### Request Format

#### URL
`/captains/login`

#### HTTP Method
`POST`

#### Body
The request body must be sent as JSON with the following structure:

- `email` (string, required): captains email address (must be valid email).
- `password` (string), required: captains password address (minimum 6 characters).

#### Example Response

- `token` (string): jwt token
- `captain` (object):
    - `fullname` (object)
        - `firstname` (string, required): Captain's first name (minimum 3 characters).
        - `lastname` (string, optional): Captain's last name (minimum 3 characters).
    - `email` (string, required): Captain's email address (must be valid email).
    - `password` (string, required): Captain's password (minimum 6 characters).
    - `vehicle` (object)
        - `color` (string, required): Vehicle color (minimum 3 characters).
        - `plate` (string, required): Vehicle plate number (minimum 3 characters).
        - `capacity` (number, required): Vehicle capacity (minimum value 1).
        - `vehicleType` (string, required): Vehicle type (must be one of: `car`, `motorcycle`, `auto`).

## Endpoint: `GET /captains/logout`

### Description
This endpoint allows captains to log out by invalidating their JWT token. It ensures that the user session is securely terminated.

---

### Request Format

#### URL
`/captains/logout`

#### HTTP Method
`GET`

#### Headers
`Authorization: Bearer <token>`

#### Body
No body is required for this request.

#### Example Response

- `message` (string): logged out.

## Endpoint: `GET /captains/profile`

### Description
This endpoint allows captains to retrieve their profile information. It requires a valid JWT token for authentication.

---

### Request Format

#### URL
`/captains/profile`

#### HTTP Method
`GET`

#### Headers
`Authorization: Bearer <token>`

#### Body
No body is required for this request.

#### Example Response

- `fullname` (object)
    - `firstname` (string, required): Captain's first name (minimum 3 characters).
    - `lastname` (string, optional): Captain's last name (minimum 3 characters).
- `email` (string, required): Captain's email address (must be valid email).
- `password` (string, required): Captain's password (minimum 6 characters).
- `vehicle` (object)
    - `color` (string, required): Vehicle color (minimum 3 characters).
    - `plate` (string, required): Vehicle plate number (minimum 3 characters).
    - `capacity` (number, required): Vehicle capacity (minimum value 1).
    - `vehicleType` (string, required): Vehicle type (must be one of: `car`, `motorcycle`, `auto`).