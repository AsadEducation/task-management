# Food Sharing Website 🍽️

## Project Overview 📊
The **Food Sharing Website** (Client Side) is a React-based web application that enables users to donate or request food. The platform provides a seamless and secure way to manage food listings, food requests, and user authentication. It is built using modern technologies like React, Firebase, and Tailwind CSS.

### Live URL 🌐
[https://food-sharing-32.web.app]

## Key Features 🌟
- **User Authentication** 🔒: Email/password-based login and registration with social login options (Google/GitHub).
- **CRUD Operations** 🛠️: Users can add, view, update, and delete food listings.
- **Food Requests** 🍲: Users can request available food and manage their requests.
- **Responsive Design** 📱💻: The website is fully responsive across mobile, tablet, and desktop devices.
- **Sorting and Search** 🔍: Sort foods by expiration date and search by food name.
- **JWT Authentication** 🛡️: Secure user sessions using JWT for private routes.
- **State Management** ⚡: Utilized Tanstack Query for API fetching and mutation.
  
## Technologies Used ⚙️
- **Frontend**: React.js, Tailwind CSS, DaisyUI
- **Authentication**: Firebase (for user login and registration)
- **API Fetching**: Tanstack Query, Axios
- **Routing**: React Router for handling page navigation
- **State Management**: React's Context API and Tanstack Query for data management

## Layout and Page Structure 🧩

### Navbar
The navbar contains the following links:
- Home 🏠
- Available Foods 🍽️
- Add Food (Private) ➕
- Manage My Foods (Private) 🛠️
- My Food Request (Private) 📝
- Login 🔑
- Signup ✍️

**Note**: If the user is logged in, the navbar will show their profile picture and a logout button. If not, the login and register buttons will appear.

### Pages 📄

- **Home Page**: Displays a banner/slider, featured foods, and extra sections. Includes a "View Details" button for each food item (redirects to the login page if not logged in).
- **Available Foods**: Lists all available food items with a "View Details" button that redirects to the food details page.
- **Food Details**: Displays detailed information of a food item and includes a "Request" button. Users can request the food, which will remove it from the available foods list and add it to "My Food Requests."
- **Add Food (Private)**: A form for logged-in users to add new food listings.
- **Manage My Foods (Private)**: Displays the foods added by the logged-in user, allowing them to update or delete entries.
- **My Food Request (Private)**: Displays all the food requests made by the logged-in user.

### Authentication System 🔑
- **Login**: Users can log in using their email/password or social accounts (Google/GitHub).
- **Register**: Users can register with their name, email, photo URL, and password (password validation required).
- **Password Criteria**: Must include an uppercase letter, a lowercase letter, and be at least 6 characters long.
- **JWT Token**: On successful login, a JWT token is stored on the client side to manage session.

### Optional Features ✨
- **Framer Motion Animations** 🌀: Add animations to enhance user experience.
- **Custom Tailwind CSS Libraries** 🎨: Experiment with libraries like Shadcn, Mamba UI, or Chakra UI for a better design experience.

  
## Conclusion 🌍
This project is a client-side React application that aims to help reduce food waste by providing a platform for users to share and request food. It incorporates modern web technologies to create an interactive, user-friendly, and secure experience. Enjoy contributing to the cause of reducing food waste! 🍽️
