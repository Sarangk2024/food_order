<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>register and login</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
    <link rel="stylesheet" href="style.css">
</head>
<body>
   <div class="container" id="signup" style="display:none">
        <h1 class ="form-title">Register</h1>
            <form  action="register.php" method="post">
               <div class="input_group">  
                 <i class="fas fa-user"></i>    
                 <input type="text" name="fName" id="fName" placeholder="First Name"required>
                 <label for ="fname">First name</label>
               </div>
               <div class="input_group">
                 <i class="fas fa-user"></i>
                 <input type="text" name="lName" id="lName" placeholder="Last Name"required>
                 <label for ="lname">Last name</label>
               </div>
               <div class="input_group">                 
                 <i class="fas fa-envelope"></i>
                 <input type="email" name="email" id="email" placeholder="Email"required>    
                 <label for ="email">E-mail</label>       
               </div>
               <div class="input_group">                
                <i class="fas fa-lock"></i>
                <input type="password" name="password" id="password" placeholder="password"required>   
                <label for ="password">Password</label>
                <div>
                    <input type="submit" class="btn" value="Sign Up"name="signUp">
                </div>       
              </div>
            </form>
        <p class="or">
          <hr color="white">
          <br>
        </p>
        <div class="icon">
            <i class="fab fa-google"></i>
            <i class="fab fa-facebook"></i>
            <i class="fab fa-twitter"></i>
            <i class="fab fa-instagram"></i>
        </div>
        <div class="links">
            <p>Already Have Account?</p>
            <button id="SignInButton">Sign In</button>
        </div>
    </div> 

    <div class="container" id="signIn">
        <h1 class ="form-title">Sign In</h1>
            <form  action="login.php" method="post">
               <div class="input_group">                 
                 <i class="fas fa-envelope"></i>
                 <input type="email" name="email" id="email" placeholder="email"required>
                 <label for ="E-mail">E-mail</label>           
               </div>
               <div class="input_group">               
                <i class="fas fa-lock"></i>
                <input type="password" name="password" id="password" placeholder="password"required>   
                <label for ="password">Password</label>
                <p class ="recover">
                    <a href="#">Recover password</a>
                </p>
                <div>
                    <input type="submit" class="btn" value="sign In"name="signIn">
                </div>       
              </div>
            </form>
        <p class="or">
          <hr color="white">
          <br>
        </p>
        <div class="icon">
            <i class="fab fa-google"></i>
            <i class="fab fa-facebook"></i>
            <i class="fab fa-twitter"></i>
            <i class="fab fa-instagram"></i>
        </div>
        <div class="links">
            <p>Don't  Have Account Yet?</p>
            <button id="SignUpButton">Sign Up</button>
        </div>
    </div> 
    <script src="script.js"></script>
     </body>
</html>