<?php
if(isset($_POST['email'])&&!empty($_POST['email'])){
    require_once ("admin/param.php");
    $query="select id  from  user WHERE email='".$_POST['email']."'";
   // echo ($query);
    $rezult=mysqli_query($dbc,$query) or die("error rezult_email");
    if(mysqli_num_rows($rezult)>0){
        echo 1;
    }
    else{
        echo 2;
    }
}else{
    echo(" false");
}

?>