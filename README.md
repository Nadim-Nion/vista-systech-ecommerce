# Vista SysTech E-commerce

**Vista SysTech E-commerce** is a full-featured e-commerce backend web application built using the Express.js, Node.js, MongoDB with Mongoose and TypeScript. This platform enables users to browse products, manage a shopping cart, place orders, and process payments securely.

---

## Table of Contents

- [Features](#features)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

---

## Features

### User Features

- Browse products with categories and search functionality
- View product details with images, descriptions, and prices
- Add products to cart and update quantities
- Place orders and complete payments via Stripe
- View order history and track order status
- User authentication with JWT (sign up / login / logout)

### Admin Features

- Manage products (create, read, update, delete)
- View all user orders and update order status
- Manage users and roles
- Access admin dashboard with statistics and insights

---

## Technology Stack

- **Backend:** Node.js, Express.js, TypeScript
- **Database:** MongoDB, Mongoose
- **Authentication:** JWT
- **Deployment:** Vercel (Backend)
- **Tools:** Git, GitHub, VS Code

---

## Project Structure

```bash
.
├── .vercel
├── dist
├── node_modules
├── src
│   ├── app
│   │   ├── builder
│   │   │   └── QueryBuilder.ts
│   │   ├── config
│   │   │   └── index.ts
│   │   ├── errors
│   │   │   ├── AppError.ts
│   │   │   ├── handleCastError.ts
│   │   │   ├── handleDuplicateError.ts
│   │   │   ├── handleValidationError.ts
│   │   │   └── handleZodError.ts
│   │   ├── interface
│   │   │   ├── error.ts
│   │   │   └── index.d.ts
│   │   ├── middlewares
│   │   │   ├── auth.ts
│   │   │   ├── globalErrorHandler.ts
│   │   │   ├── notFound.ts
│   │   │   └── validateRequest.ts
│   │   └── modules
│   │       ├── cart
│   │       │   ├── cart.interface.ts
│   │       │   ├── cart.model.ts
│   │       │   └── cart.validation.ts
│   │       ├── product
│   │       │   ├── product.constant.ts
│   │       │   ├── product.controller.ts
│   │       │   ├── product.interface.ts
│   │       │   ├── product.model.ts
│   │       │   ├── product.route.ts
│   │       │   └── product.service.ts
│   │       └── user
│   │           ├── user.constant.ts
│   │           ├── user.controller.ts
│   │           ├── user.interface.ts
│   │           ├── user.model.ts
│   │           ├── user.route.ts
│   │           ├── user.service.ts
│   │           ├── user.utils.ts
│   │           └── user.validation.ts
│   ├── routes
│   │   └── index.ts
│   └── utils
│       ├── catchAsync.ts
│       └── sendResponse.ts
├── app.ts
├── server.ts
├── .env
├── .gitignore
├── .prettierignore
├── .prettierrc
├── eslint.config.mts
├── package-lock.json
├── package.json
├── tsconfig.json
├── vercel.json
└── README.md
```

---


---

## Installation

### Prerequisites
- Node.js >= 18.x
- npm >= 9.x
- MongoDB Atlas account or local MongoDB
- Stripe account for payment integration

### Steps

1. **Clone the repository**
```bash
git clone https://github.com/Nadim-Nion/vista-systech-ecommerce.git
cd vista-systech-ecommerce
```

2. **Install dependencies**
```bash
cd backend
npm install
```
3. **Set up environment variables**
Create a `.env` file in the `backend` directory and add the following variables:
```env      
PORT=5000
DATABASE_URL=your_mongodb_connection_string
JWT_ACCESS_SECRET=your_jwt_secret
JWT_ACCESS_EXPIRES_IN=1d
```

4. **Run the application**
```bash 
cd backend
npm run start:dev
```
----

##  Usage

- Register as a user to browse and purchase products.

- Admins can log in using admin credentials to manage products and orders.

- Add products to cart, adjust quantities, and proceed to checkout using Stripe.

- View order history and track order status.

---

## API Endpoints

### Authentication

- `POST /api/auth/register` – User registration

- `POST /api/auth/login` – User login

### Products

- `GET /api/products` – Get all products

- `POST /api/products` – Add new product (Admin)

- `PUT /api/products/:id` – Update product (Admin)

- `DELETE /api/products/:id` – Delete product (Admin)

### Orders

- `GET /api/orders` – Get all orders (Admin)

- `POST /api/orders` – Place an order (User)

- `PUT /api/orders/:id` – Update order status (Admin)

- `DELETE /api/orders/:id` – Delete an order (Admin)

### Payments

- `POST /api/payments/create` – Create Stripe payment intent

---

## Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository

2. Create a feature branch: git checkout -b feature/feature-name

3. Commit your changes: git commit -m "Add new feature"

4. Push to the branch: git push origin feature/feature-name

5. Create a Pull Request

---

## License

This project is licensed under the MIT License. See the LICENSE
 file for details.