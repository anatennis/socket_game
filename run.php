<?php
require_once 'vendor/autoload.php';

$server = \Ratchet\Server\IoServer::factory(
    new \Ratchet\Http\HttpServer(
        new Ratchet\WebSocket\WsServer(
            new \Socket\Socket()
        )
    ), 8080
);

$server->run();