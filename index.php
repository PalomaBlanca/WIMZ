<?php
$servername = "localhost";
$username = "USER402452";
$password = "37Hombre!#";
$dbname = "db_402452_1";

$_POST = json_decode(file_get_contents('php://input'), true);
$query = json_decode($_POST["data"])->query->getTrainInputValue;

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$sql = "SELECT * FROM trainsOfUsers WHERE name = '$query' LIMIT 5";


if (mysqli_query($conn, $sql)) {
    $result = $conn->query($sql);
    if ($result->num_rows > 0) {
        // output data of each row
        while($row = $result->fetch_assoc()) {
            echo "{ \"label\": \"".$row['name']."\", \"lat\": ".$row['lat'].", \"lng\": ".$row['lng'].", \"lastUpdate\": \"".$row['lastUpdate']."\", \"userIsInTrain\": \"".$row['userIsInTrain']."\", \"to\": \"".$row['targetStation']."\"}";
        }
    } else {
        echo "0 results";
    }
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

mysqli_close($conn);
?>