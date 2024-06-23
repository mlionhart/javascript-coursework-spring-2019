<?php
// CTEC 126
// Bruce Elgort
// Clark College

// This program receives data and display a response

if (isset($_GET['rating'])){
   $rating = $_GET['rating'];
   echo "<p>Thanks for your rating of " . $rating . " stars for the CTEC 126 class!</p><p>We have stored our vote in our system</p>"; 
} else {
   echo "Don't play with matches";
} // end if

?>