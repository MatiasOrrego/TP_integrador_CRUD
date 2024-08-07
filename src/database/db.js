import mysql2 from "mysql2/promise"; //importamos la libreria mysql2/promise

export const db = async () => {

    const connection = await mysql2.createConnection ({
        host: "localhost",
        user:"root",
        database:"tasks_db", //nombre de la base de datos.
    })

    return connection
}
