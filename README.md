<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User Management System</title>
</head>
<body>
    <h1>User Management System</h1>

    <p>Welcome to the <strong>User Management System</strong>! This project is a web application built to manage user data, allowing administrators to add, edit, delete, and view users in the database. The application is structured using <strong>Next.js</strong> for server-side rendering, React for modular components, and a MongoDB backend for data storage.</p>

    <h2>🎯 Features</h2>
    <ul>
        <li><strong>Add New User</strong>: Create a new user with details such as first name, last name, email, and address.</li>
        <li><strong>Edit User</strong>: Modify existing user data.</li>
        <li><strong>Delete User</strong>: Remove a user from the system.</li>
        <li><strong>View Users</strong>: Fetch and display a list of all users.</li>
    </ul>

    <h2>📦 Direct Download</h2>
    <p>Download the latest version of the project as a ZIP file:  
        <a href="https://github.com/yourusername/User-Management-System/archive/refs/heads/main.zip">Download ZIP</a>
    </p>

    <h2>🚀 Getting Started</h2>
    <ol>
        <li><strong>Clone the Repository</strong>  
            <p>Clone the repository to your local machine:</p>
            <pre><code>git clone https://github.com/yourusername/User-Management-System.git</code></pre>
        </li>

        <li><strong>Navigate to the Project Directory</strong>
            <pre><code>cd User-Management-System</code></pre>
        </li>

        <li><strong>Install the Required Packages</strong>  
            <p>Install all necessary dependencies:</p>
            <pre><code>npm install</code></pre>
        </li>

        <li><strong>Set Up the Database Connection</strong>  
            <p>Configure your MongoDB connection URL in the environment file to connect to the database.</p>
        </li>

        <li><strong>Start the Development Server</strong>  
            <p>Launch the application in development mode:</p>
            <pre><code>npm run dev</code></pre>
        </li>

        <li><strong>View the Application</strong>  
            <p>Open the project in your browser at <a href="http://localhost:3000">http://localhost:3000</a> to use the User Management System.</p>
        </li>

        <li><strong>Build for Production</strong>  
            <p>To prepare the application for production:</p>
            <pre><code>npm run build</code></pre>
        </li>
    </ol>

    <h2>🛠 Project Structure</h2>
    <ul>
        <li><strong>Actions</strong>
            <ul>
                <li><code>addNewUserAction</code>: Adds a new user to the database and refreshes the view.</li>
                <li><code>fetchUserAction</code>: Retrieves all users from the database.</li>
                <li><code>deleteUserAction</code>: Deletes a user by ID and refreshes the view.</li>
                <li><code>editUserAction</code>: Updates user information based on the provided user ID.</li>
            </ul>
        </li>
        <li><strong>Components</strong>
            <ul>
                <li><code>AddNewUser</code>: A form component that allows the addition and editing of users. Contains fields for user details and a save button that validates input.</li>
                <li><code>CommonLayout</code>: Provides a layout that wraps components within the user context.</li>
            </ul>
        </li>
        <li><strong>State Management</strong>
            <p>Uses context to manage user states across components, including handling the visibility of the Add/Edit User dialog and managing form data.</p>
        </li>
    </ul>

    <h2>🤝 Contributing</h2>
    <p>Contributions to this project are welcome! If you have suggestions, improvements, or encounter issues, please open an issue or submit a pull request.</p>
</body>
</html>
