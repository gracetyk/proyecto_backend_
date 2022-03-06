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


  /*if (!validator.isFloat(precio_alquiler.toString())) {
    throw Error("El precio de alquiler solo puede contener numeros");
  }*/

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