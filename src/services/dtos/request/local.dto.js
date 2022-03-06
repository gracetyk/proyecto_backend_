import validator from "validator";

export function localDto({
  titulo_local,
  descrip_local,
  precio_alquiler,
  area_local,
  categoria_id,
  cod_localidad,
  direccion_local,
  latitud_local,
  longitud_local


}) {
  if (validator.isEmpty(titulo_local)) {
    throw Error("Ingrese el titulo");
  }

  if (validator.isEmpty(descrip_local)) {
    throw Error("Ingrese una descripción del local");
  }

  if (!validator.isFloat(precio_alquiler.toString())){
    throw Error("El precio del alquiler solo puede contener números")
  }

  if (!validator.isNumeric(area_local.toString())){
    throw Error("El área solo puede contener números")
  }


  return {
    titulo_local,
    descrip_local,
    precio_alquiler,
    area_local,
    categoriaId: categoria_id,
    codLocalidad: cod_localidad,
    direccion_local,
    latitud_local,
    longitud_local
  };
}