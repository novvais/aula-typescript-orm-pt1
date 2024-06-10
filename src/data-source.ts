import { DataSource } from "typeorm";

const port = process.env.DB_PORT as number | undefined

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "121903",
    database: "orm",
    migrations: ["./src/migrations/*.ts"],
    entities: ["./src/model/*.ts"]
})