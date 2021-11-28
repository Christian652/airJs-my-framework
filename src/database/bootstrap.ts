import Mysql from "./adapters/Mysql";
import Postgres from "./adapters/Postgres";

export default function bootstrap() {
  const { DB_DATABASE, DB_SGDB, DB_PORT, DB_PASSWORD, DB_USER, DB_HOST } = process.env;

  let connection;
  switch (DB_SGDB) {
    case "mysql":
      connection = new Mysql(DB_USER, DB_HOST, DB_DATABASE, +DB_PORT, DB_PASSWORD);
      break;

    case "postgres":
      connection = new Postgres(DB_USER, DB_HOST, DB_DATABASE, +DB_PORT, DB_PASSWORD);
      break;
  }
  return connection;
}