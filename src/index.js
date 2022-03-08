import express, { json } from "express";
import morgan from "morgan";
import { authRouter } from "./routes/auth.routes.js";
import { localRouter } from "./routes/local.routes.js";
import { listaRouter } from "./routes/listar.routes.js"
import { archivoRouter } from "./routes/archivo.routes.js";
import { registroRouter } from "./routes/registro.routes.js";


const app = express();

app.use(morgan("dev"));
app.use(json());

// defino mis rutas
app.use(authRouter);
app.use(localRouter);
app.use(listaRouter);
app.use(archivoRouter);
app.use(registroRouter)
// fin de la definicion

const PORT = process.env.PORT ?? 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo exitosamente en el puerto ${PORT}`);
});
