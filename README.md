<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>About Micheal Great</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <div class="profile">
            <img src="your-image.jpg" alt="Micheal Great">
        </div>
        <div class="introduction">
            <h1>Hello, I'm Micheal Great</h1>
            <p>
                I'm a tech entrepreneur, software developer, and IT specialist with a passion for innovation and technology. 
                I excel in developing cutting-edge software solutions and creating engaging digital content. With a deep understanding 
                of programming languages, frameworks, and development methodologies, I design and implement robust, scalable, and user-friendly 
                software applications.
            </p>
        </div>
    </div>
</body>
</html>


/* Basic reset */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    color: #333;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.container {
    background: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    max-width: 800px;
    width: 90%;
    text-align: center;
}

.profile img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 20px;
}

.introduction h1 {
    font-size: 2em;
    margin-bottom: 10px;
}

.introduction p {
    font-size: 1.2em;
    line-height: 1.6;
}

/* Responsive design */
@media (max-width: 600px) {
    .profile img {
        width: 120px;
        height: 120px;
    }

    .introduction h1 {
        font-size: 1.5em;
    }

    .introduction p {
        font-size: 1em;
    }
}
