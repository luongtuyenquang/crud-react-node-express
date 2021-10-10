const config = {
    user: 'quang',
    password: '123',
    server: 'TUYENQUANG-PC',
    database: 'ThucTap2021',
    dialect: "mssql",
    options: {
        trustedConnection: true,
        enableArithAbort: true,
        instancename: 'SQLEXPRESS',
        trustServerCertificate: true
    },
    port: 57677
}

module.exports = config