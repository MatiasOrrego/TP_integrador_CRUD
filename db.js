import mysql2 from ("mysql2/promise")

const newConnection = async () => {

    const connection = await mysql2.createConnection ({
        host: "localhost",
        user:"root",
        database:"tasks_db", //nombre de la base de datos.
    })

    return connection
}
exports = {
newConnection
}
