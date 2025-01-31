# Meesho Admin Panel

This project is an Admin Panel for the Meesho e-commerce platform. The Admin Panel allows the admin to perform CRUD (Create, Read, Update, Delete) operations on products, categories, and users. The project is built using **React** for the frontend and integrates with an external API for managing the data.

## Features

- **Authentication:** Admin can log in and log out.
- **Sidebar Navigation:** Easily navigate between different sections like products, categories, and users.
- **Product Management:**
  - View a list of all products.
  - Add, update, and delete products.
  - View product details including ID, image, name, price, and category.
- **Category Management:**
  - View all categories.
  - Add, update, and delete categories.
- **User Management:** View a list of all users.
- **Responsive Design:** Optimized for both desktop and mobile devices.

## Tech Stack

- **Frontend:** React, React Router, Redux (for state management)
- **Backend:** External API (provided by `Escuelajs` for product and category management)
- **Styling:** CSS, possibly with frameworks like Tailwind CSS or Bootstrap
- **Authentication:** JWT or similar for session management (depending on your implementation)

## API Endpoints Used

### Products API
- **Get All Products**  
  `GET https://api.escuelajs.co/api/v1/products`
  
- **Create a Product**  
  `POST https://api.escuelajs.co/api/v1/products/`
  ```json
  {
    "title": "New Product",
    "price": 10,
    "description": "A description",
    "categoryId": 1,
    "images": ["https://placeimg.com/640/480/any"]
  }

- **Update a Product**
  `PUT https://api.escuelajs.co/api/v1/products/{id}`

```json
    {
    "title": "Updated Title",
    "price": 100
    }

- **Delete a Product**
    `DELETE https://api.escuelajs.co/api/v1/products/{id}`

Categories API
Get All Categories
GET https://api.escuelajs.co/api/v1/categories

Create a Category
POST https://api.escuelajs.co/api/v1/categories/

json
Copy
Edit
{
  "name": "New Category",
  "image": "https://placeimg.com/640/480/any"
}
Update a Category
PUT https://api.escuelajs.co/api/v1/categories/{id}

json
Copy
Edit
{
  "name": "Updated Category Name"
}
Delete a Category
DELETE https://api.escuelajs.co/api/v1/categories/{id}

Users API
Get All Users
GET https://api.escuelajs.co/api/v1/users
File Upload API
Upload a File
POST https://api.escuelajs.co/api/v1/files/upload
Content-Type: multipart/form-data
json
{
  "file": "<Binary File>"
}
Setup
Prerequisites
Node.js >= 14.x
npm or yarn for package management
Installation
Clone the repository:

bash
git clone https://github.com/yourusername/meesho-admin-panel.git
Navigate to the project folder:

bash
cd meesho-admin-panel
Install dependencies:

bash
npm install
Development
To start the development server, run:

bash
npm start
This will open the app in your browser at http://localhost:3000.

Production
To create a production build, run:

bash
npm run build
This will generate the optimized production build in the build/ directory.

Contributing
We welcome contributions! Feel free to fork the repository, submit issues, and open pull requests.

Fork the repository.
Create a new branch (git checkout -b feature-branch).
Make your changes.
Commit your changes (git commit -am 'Add new feature').
Push to the branch (git push origin feature-branch).
Open a pull request.