<?php
$con = mysqli_connect("localhost" , "root" ,"" ,"test"  );
if(isset($_POST['subm']))
{
	$id = $_POST['student_id'];

  $fname = $_POST['fname'];
//   $lname = $_POST['lname'];
$email = $_POST['email'];
$pass = $_POST['psame'];
$cpass = $_POST['cpsame'];
$colg = $_POST['clg'];
$slquery = "SELECT 1 FROM register WHERE email = '$email'";

$selectresult = mysql_query($slquery);
if(mysql_num_rows($selectresult)>0)
{
    die('email already exists');
}
// echo "<script>alert('".$lname.$fname."')</script>";

$query = "INSERT INTO stud_data (id,fname, psame,cpsame,clg, email) VALUES ('$id',$fname', '$pass', '$cpass',$colg, '$email')";
    mysqli_query($con , $query); 
}
//   echo "<script>alert('".$lname.$fname."')</script>";
  // cout<<"my name is "
//   $q  = "INSERT INTO DATA_STORE( FIRSTNAME , LASTNAME ) VALUES ('$fname' , '$lname')";
//   mysqli_query($con , $q);
  

?>