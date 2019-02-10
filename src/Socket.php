<?php
/**
 * Created by PhpStorm.
 * User: Anastasia
 * Date: 29.01.2019
 * Time: 19:11
 */
namespace Socket;

class Socket implements \Ratchet\MessageComponentInterface
{

    protected $clients;
    private $db;

    public function __construct()
    {
        $this->clients = new \SplObjectStorage();
        $this->db = DBConnection::getDBConnection();
        $db = [
            'server'=>'localhost',
            'dbname'=>'project_new',
            'user'=>'root',
            'pwd'=>''
        ];
        $this->db->setConnection($this->config['db']);
    }

    /**
     * When a new connection is opened it will be passed to this method
     * @param  \Ratchet\ConnectionInterface $conn The socket/connection that just connected to your application
     * @throws \Exception
     */
    function onOpen(\Ratchet\ConnectionInterface $conn)
    {
        $this->clients->attach($conn);
        echo "New connection: " . $conn->resourceId;
    }

    /**
     * This is called before or after a socket is closed (depends on how it's closed).  SendMessage to $conn will not result in an error if it has already been closed.
     * @param  \Ratchet\ConnectionInterface $conn The socket/connection that is closing/closed
     * @throws \Exception
     */
    function onClose(\Ratchet\ConnectionInterface $conn)
    {
        $this->clients->detach($conn);
        echo "Disconnect: " . $conn->resourceId;
    }

    /**
     * If there is an error with one of the sockets, or somewhere in the application where an Exception is thrown,
     * the Exception is sent back down the stack, handled by the Server and bubbled back up the application through this method
     * @param  \Ratchet\ConnectionInterface $conn
     * @param  \Exception $e
     * @throws \Exception
     */
    function onError(\Ratchet\ConnectionInterface $conn, \Exception $e)
    {
        echo "Error connection: ". $e->getMessage();
        $conn->close();
    }

    /**
     * Triggered when a client sends data through the socket
     * @param  \Ratchet\ConnectionInterface $from The socket/connection that sent the message to your application
     * @param  string $msg The message received
     * @throws \Exception
     */
    function onMessage(\Ratchet\ConnectionInterface $from, $msg)
    {
        foreach ($this->clients as $client) {
            if ($client !== $from) {
            $client->send($msg);


        }
        }
    }
}