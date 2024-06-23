<?php

	// PHP script to return JSON data
	// the page looks for a URL parameter of ?id=XX

	$id = $_GET['id'];

	switch ($id) {
		case 100:
			$bruce = ["id" => 100,"first" => 'Bruce',"last" =>'Elgort'];
			echo json_encode($bruce);
			break;
		case 101:
			$gayle = ["id" => 101,"first" => 'Gayle',"last" =>'Ujifusa'];
			echo json_encode($gayle);
			break;
		case 102:
			$matt = ["id" => 102,"first" => 'Matt',"last" =>'Browne'];
			echo json_encode($matt);
			break;
		default:
			$error = ['errormessage' => "Could not find that ID"];
			echo json_encode($error);
	}

?>