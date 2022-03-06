import validator from "validator";

export function localDto({
    titulo,
    descripcion,
    precio_alquiler,
    medida,
    categoria,
    direccion,
    localidad,
    ciudad,



}) {
    if (validator.isEmpty(titulo)) {
        throw Error("el titulo no puede estar vacio");
    }
    if (!validator.isEmpty(categoria)) {
        throw Error("Selecione una categoría");
    }

    if (!validator.isEmpty(localidad)) {
        throw Error("Introduzca localidad");
    }

    if (!validator.isEmpty(ciudad)) {
        throw Error("Selecione ciudad");
    }

    if (!validator.isEmpty(pais)) {
        throw Error("Selecione pais");
    }
    return {
        titulo,
        descripcion,
        precio_alquiler,
        medida,
        categoria,
        direccion,
        localidad,
        ciudad,
        pais
    };
}