# Contact Management System

A simple Contact Management System built using Node.js, Express.js, MongoDB, and Mongoose. The application provides CRUD APIs to create, read, update, and delete contact records.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- dotenv

## Features

- Add a new contact
- Get all contacts
- Get a contact by contact ID
- Update an existing contact
- Delete a contact
- Phone number validation
- Email validation
- Unique contact ID
- Unique email address
- Error handling

## Project Structure

```text
my-project/
│
├── src/
│   ├── models/
│   │   └── contact.js
│   ├── routes/
│   │   └── contactRoute.js
│   ├── app.js
│   └── index.html
│
├── .gitignore
├── Dockerfile
├── package.json
├── package-lock.json
└── README.md
```

## Database

The project uses MongoDB with the database name:

```text
contact_management
```

Mongoose is used to connect the Node.js application with MongoDB.

## Contact Fields

| Field | Type | Required | Description |
|---|---|---|---|
| contactId | String | Yes | Unique ID of the contact |
| name | String | Yes | Name of the contact |
| phone | String | Yes | 10-digit phone number |
| email | String | Yes | Valid and unique email address |

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/sastha-06/contact-management-system.git
```

Go to the project folder:

```bash
cd contact-management-system
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the project root.

Add:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

Replace `your_mongodb_connection_string` with your MongoDB connection string.

### 4. Start the Application

```bash
node src/app.js
```

The server runs on:

```text
http://localhost:5000
```

For development using nodemon:

```bash
npm run dev
```

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| POST | `/contacts` | Add a new contact |
| GET | `/contacts` | Get all contacts |
| GET | `/contacts/:id` | Get a contact by contact ID |
| PUT | `/contacts/:id` | Update a contact |
| DELETE | `/contacts/:id` | Delete a contact |

## API Examples

### 1. Add a Contact

**Method:** `POST`

**Endpoint:**

```text
/contacts
```

**Request Body:**

```json
{
    "contactId": "C003",
    "name": "Priya",
    "phone": "9876543212",
    "email": "priya@gmail.com"
}
```

**Response:**

```json
{
    "message": "Contact created successfully",
    "contact": {
        "contactId": "C003",
        "name": "Priya",
        "phone": "9876543212",
        "email": "priya@gmail.com"
    }
}
```

### 2. Get All Contacts

**Method:** `GET`

**Endpoint:**

```text
/contacts
```

**Example Response:**

```json
[
    {
        "_id": "6ac3dc9d2619003ef75bb222",
        "contactId": "C001",
        "name": "Sastha",
        "phone": "9876543210",
        "email": "sastha@gmail.com",
        "__v": 0
    },
    {
        "_id": "6ac3de342619003ef75bb223",
        "contactId": "C002",
        "name": "Navitha",
        "phone": "9876543270",
        "email": "navitha@gmail.com",
        "__v": 0
    }
]
```

### 3. Get a Contact by ID

**Method:** `GET`

**Endpoint:**

```text
/contacts/C001
```

**Example Response:**

```json
{
    "_id": "6ac3dc9d2619003ef75bb222",
    "contactId": "C001",
    "name": "Sastha",
    "phone": "9876543210",
    "email": "sastha@gmail.com",
    "__v": 0
}
```

### 4. Update a Contact

**Method:** `PUT`

**Endpoint:**

```text
/contacts/C003
```

**Request Body:**

```json
{
    "name": "Priya Kumar",
    "phone": "9876543299",
    "email": "priya@gmail.com"
}
```

**Response:**

```json
{
    "message": "Contact updated successfully",
    "contact": {
        "contactId": "C003",
        "name": "Priya Kumar",
        "phone": "9876543299",
        "email": "priya@gmail.com"
    }
}
```

### 5. Delete a Contact

**Method:** `DELETE`

**Endpoint:**

```text
/contacts/C003
```

**Response:**

```json
{
    "message": "Contact deleted successfully",
    "contact": {
        "contactId": "C003",
        "name": "Priya Kumar",
        "phone": "9876543299",
        "email": "priya@gmail.com"
    }
}
```

## Validation

The application includes the following validations:

### Contact ID

- Required
- Must be unique

### Name

- Required

### Phone

- Required
- Must contain exactly 10 digits

Example:

```text
9876543210
```

### Email

- Required
- Must have a valid email format
- Must be unique

Example:

```text
example@gmail.com
```

## Error Handling

The application uses appropriate HTTP status codes for different situations.

| Status Code | Meaning |
|---|---|
| 200 | Request successful |
| 201 | Contact created successfully |
| 400 | Invalid request or validation error |
| 404 | Contact not found |
| 500 | Server or database error |

## Testing

The APIs can be tested using:

- Postman
- Thunder Client
- cURL
- Browser for GET requests

Example:

```text
GET http://localhost:5000/contacts
```

## Security

The MongoDB connection string is stored in the `.env` file and is not included in the GitHub repository.

The following files are ignored using `.gitignore`:

```text
node_modules
.env
```

## GitHub Repository

https://github.com/sastha-06/contact-management-system

## Author

Sastha Jeyasri A.
