<?php
// SQLite connection
try {
    $conn = new PDO("sqlite:" . __DIR__ . "/database.db");
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Create users table if not exists
    $conn->exec("CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT UNIQUE,
        password TEXT
    )");

} catch (PDOException $e) {
    die("Database connection failed: " . $e->getMessage());
}
?>