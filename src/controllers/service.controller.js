import { localDto } from "../services/dtos/request/local.dto.js";
import { localService } from "../services/local.service.js";

export async function crear(req, res) {
  // crear el archivo producto.dto.js en los dtos/request y agregar las validaciones que vean pertinentes
  try {
    const data = localDto(req.body);

    const resultado = await localService.crearlocal(data);

    return res.status(201).json(resultado);
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
}
