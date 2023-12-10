<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<?php
    $con = mysqli_connect("localhost" , "root" ,"" ,"hr_db"  );
    $qr = "select * from hr_data";
  $st =   mysqli_query($con , $qr);
  ?>
   <table>
  <tr>
  <th>HR id</th>
    <th>first name</th>
     
    <th>password</th>
    <th>confirm password</th>

    <th>email</th>


  </tr>
  <?php
  while($x=mysqli_fetch_array($st)){
       
?>
<tr><td> <?php echo $x['user_id'] ?></td>

    <td><?php echo $x['uname'] ?></td> 
<td> <?php echo $x['psame'] ?></td>
<td> <?php echo $x['cpsame'] ?></td>

<td> <?php echo $x['email'] ?></td>

</tr>
<?php

  }

  ?>

  </table>


    
</body>
</html>