//import { localDto } from "../services/dtos/request/local.dto.js";
import { localService } from "../services/local.service.js";

export async function crear(req, res) {
  // crear el archivo local.dto.js en los dtos/request y agregar las validaciones que vean pertinentes
  try {
    // const data = localDto(req.body);
    const data = req.body;
    const resultado = await localService.crearLocal(data);

    return res.status(201).json(resultado);
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }

}

export async function listar(req, res) {

  try {

    //const data = req.body;
    const resultado = await localService.listarLocal();

    return res.status(201).json(resultado);
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
}

export async function elimina(req, res) {

  try {
    const { id } = req.params
    const resultado = await localService.EliminaLocal(id);

    return res.status(201).json(resultado);
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
}