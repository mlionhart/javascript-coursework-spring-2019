<?php
// sendData.php

// process all data received from the web page 

foreach ($_POST as $key => $value){
     echo "<p>" .$key . " = ". $value . "</p>";
}
?>