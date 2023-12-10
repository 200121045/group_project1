<?php
    $con = mysqli_connect("localhost" , "root" ,"" ,"teachert_db"  );
    $qr = "select * from tech_data";
  $st =   mysqli_query($con , $qr);
  ?>
   <table>
  <tr>
  <th>studnt id</th>
    <th>name</th>
     
    <th>password</th>
    <th>confirmpassword</th>

    <th>email</th>
  <th>college name</th>
  <th>  subject_id</th>

  </tr>
  <?php
  while($x=mysqli_fetch_array($st)){
       
?>
<tr><td> <?php echo $x['user_id'] ?></td>

    <td><?php echo $x['uname'] ?></td> 
<td> <?php echo $x['psame'] ?></td>
<td> <?php echo $x['cpsame'] ?></td>

<td> <?php echo $x['email'] ?></td>
<td> <?php echo $x['clg'] ?></td>
<td><?php echo $x['subject_id'] ?></td> 

</tr>
<?php

  }

  ?>