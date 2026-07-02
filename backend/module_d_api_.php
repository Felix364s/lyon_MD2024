<?php

header("Content-Type: application/json");

$path = $_SERVER["REQUEST_URI"];

if (str_contains($path, "carparks")) {
    readfile("carparks.json");
}
elseif (str_contains($path, "events")) {
    readfile("events.json");
}
elseif (str_contains($path, "weather")) {
    readfile("weather.json");
}
else {
    echo json_encode([
        "message" => "API funcionando correctamente"
    ]);
}