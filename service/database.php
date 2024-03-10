<?php 

$hostname = "localhost";
$username = "root";
$paswword = "";
$database_name = "buku_tamu";

$db = mysqli_connect($hostname, $username, $paswword, $database_name);

if ($db->connect_error) {
    echo "koneksi databse eror";
    die("error!");
}
?>