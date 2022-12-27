# Flipkart

# Requirements 
* Layout Creation
    - Header
        - Logo
        - Search 
        - Dropdown Menu
            - Profile
            - Logout
            - My Orders
        - Cart
            - Show Count

    - Left Panel
        - Price Range Filter
    
    - Right Panel
        - Cart Summary / Cart Total
    
    3 Types of Layouts
    - Without Side Panels
    - With Left Panel
    - With Right Panel

    - Footer

    - Inner Pages
        - Products List
            - Get list of products from API
            - Add to cart
        - Cart Summary
            - Edit Cart (quantity of products)
            - Delete item from cart
            - Update Cart Total

        - Checkout Process
            - Capture Address
            - Virtual Payment Page

        - Place Order
            - Create Order ID
            - Save order details on DB using API
            - Show order details

        - Orders Page (Past Orders)
            - Get list of orders by user using API

* Signup / Registration Page
    - Form Design
    - Form Validations
    - Capturing Data 
    - Send data to API

* Login
    - Login Form
    - Validations
    - Authentication
    - Session Management
    - Redirect to inner pages

* Profile Page
    - View Profile
    - Edit Profile
        - Retrive existing data using API

* Logout
    - Clear the session data
    - Redirect to login page

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
