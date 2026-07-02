<?php

$request = $_SERVER['PATH_INFO'] ?? '';

switch ($request) {

    case '/carparks.json':
        header('Content-Type: application/json');
        readfile('data/carparks.json');
        break;

    case '/weather.json':
        header('Content-Type: application/json');
        readfile('data/weather.json');
        break;

    case '/events.json':
        header('Content-Type: application/json');
        readfile('data/events.json');
        break;

    default:
        http_response_code(404);
        echo json_encode([
            "error"=>"Not Found"
        ]);
}