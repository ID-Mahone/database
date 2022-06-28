const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'david',
    password: 'newpassword',
    database: 'databasename'
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL Server!');
});
app.get("/", (req, res) => {
    connection.query('SELECT * from users LIMIT 1', (err, rows) => {
        if (err) throw err;
        console.log('The data from users table are: \n', rows);
        connection.end();
    });
});

app.listen(3000, () => {
    console.log('Server is running at port 3000');
});