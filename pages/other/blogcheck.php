<?php
$req = curl_init("https://doggiewoggiez.tumblr.com");
curl_setopt($req, CURLOPT_HEADER, true);
curl_setopt($req, CURLOPT_NOBODY, true);
curl_setopt($req, CURLOPT_RETURNTRANSFER, true);
curl_exec($req);
echo curl_getinfo($req, CURLINFO_HTTP_CODE);
echo curl_error($req);
?>