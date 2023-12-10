<!DOCTYPE html>
<html>
<head>
	<link rel="shortcut icon" type="png" href="images/icon/favicon.png">
	<title>Login SignUp</title>
	<link rel="stylesheet" type="text/css" href="loginStyle.css">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>

  <!-- It will redirect to the Home Page after submitting the form -->
  <script>
  $(document).ready(function(){
    $("form").submit(function(){
      alert("Great Job !");
    });
  });
  </script>
  <?php
$con = mysqli_connect("localhost" , "root" ,"" ,"test"  );
if(isset($_POST['subm']))
{
 
  $fname = $_POST['uname'];
//   $lname = $_POST['lname'];
$email = $_POST['email'];
$pass = $_POST['psame'];
$cpass = $_POST['cpsame'];
 
$user_id = $_POST['user_id'];
 
$slquery = "SELECT 1 FROM register WHERE email = '$email'";

$selectresult = mysql_query($slquery);
if(mysql_num_rows($selectresult)>0)
{
    die('email already exists');
}
echo "<script>alert('".$lname.$fname."')</script>";

$query = "INSERT INTO hr_data (user_id, uname, psame,cpsame, email) VALUES ('$user_id',$fname', '$pass', '$cpass'  '$email' )";
    mysqli_query($con , $query); 
}
//   echo "<script>alert('".$lname.$fname."')</script>";
  // cout<<"my name is "
//   $q  = "INSERT INTO DATA_STORE( FIRSTNAME , LASTNAME ) VALUES ('$fname' , '$lname')";
//   mysqli_query($con , $q);
  

?>
 
</head>
<body>
		<div class="form-box">
			<div class="button-box">
				<div id="btn"></div>
				<button type="button" class="toggle-btn" id="log" onclick="login()" style="color: #fff;">Log In</button>
				<button type="button" class="toggle-btn" id="reg" onclick="register()">Register</button>
			</div>
			<div class="social-icons">
				<img src=" icon/fb2.png">
 
				<img src=" icon/insta2.png">
				<img src=" icon/tt2.png">
			</div>
			
			<!-- Login Form -->
			<form id="login" class="input-group" action="index.html">
				<div class="inp">
					<img src="icon/user.png"><input type="text" id="email" class="input-field" placeholder="Username or Phone Number" style="width: 88%; border:none;" required="required">
				</div>
				<div class="inp">
					<img src="icon/password.png"><input type="password" id="password" class="input-field" placeholder="Password" style="width: 88%; border: none;" required="required">
				</div>
				<!-- <input type="checkbox" class="check-box">Remember Password -->
				<button type="submit" class="submit-btn">Log In</button>
			</form>


			<div class="other" id="other">
				<div class="instead">
					<h3>or</h3>
				</div>
				<button class="connect" onclick="google()">
					<img src="images/icon/google.png"><span>Sign in with Google</span>
				</button>
			</div>
			
			<!-- Registration Form -->
			<form id="register" class="input-group" method="post">
            <input type="number" class="input-field"name="user_id" placeholder="ID" required="required">

				<input type="text" class="input-field" name ="uname"placeholder="Full Name" required="required">
				<input type="email" class="input-field" name="email"placeholder="Email Address" required="required">
				<input type="password" class="input-field" placeholder="Create Password" name="psame" required="required">
				<input type="password" class="input-field" placeholder="Confirm Password" name="psame" required="required">
                <!-- <input type="number" class="input-field" name="subject_id"placeholder="subject-id" required="required"> -->

				<!-- <input type="text" class="input-field" placeholder="college Name" name="clg" required="required"> -->

				<!-- <input type="checkbox" class="check-box" id="chkAgree" onclick="goFurther()">I agree to the Terms & Conditions -->
                <div class="center"  >Available
                                <input type="checkbox" name="">
                </div>
				<button type="submit" name="subm"id="btnSubmit" class="submit-btn reg-btn">Register</button>
			</form>
		</div>
		<script type="text/javascript" src="script.js"></script>
</body>
</html>