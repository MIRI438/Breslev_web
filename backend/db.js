const sql = require('mssql');


const config = {
    user: 'Breslev',
    password: '1480',
    server: 'localhost',
    port: 63007, // <--- Use the correct port here
    database: 'Breslev',
    options: {
        trustServerCertificate: true
    }
};


async function connectAndQuery() {
    try {
        let pool = await sql.connect(config);
        console.log("conect to SQL");
        
       let result = await pool.request().query('SELECT * FROM [Breslev].[dbo].[nerLemaor]');
        console.log(result.recordset);
    } catch (err) {
        console.error('Error connecting to DB:', err);
    }
}

connectAndQuery();
