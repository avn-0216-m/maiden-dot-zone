<?php

ini_set('display_errors', 1);

$url1 = "https://";
$url2 = ".tumblr.com";

$req = curl_init($url1 . $_GET["name"] . $url2);
curl_setopt($req, CURLOPT_HEADER, true);
curl_setopt($req, CURLOPT_NOBODY, true);
curl_setopt($req, CURLOPT_RETURNTRANSFER, true);
curl_exec($req);

if(curl_getinfo($req, CURLINFO_HTTP_CODE) == "200"){
    echo 1;
} else {
    echo 0;
}
?>