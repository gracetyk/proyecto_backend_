
export default async (prisma) => {
  const precio_alquiler = "1500";

  await prisma.local.create({
    {
      titulo_local: "Alquilo local listo para reparto",
      descrip_local: "Cocina oculta con area de motos para delivery",
      precio_alquiler,
      area_local: "18.5",
      categoriaId: "1",
      codLocalidad: "3",
      direccion_local: "calle jardines 202",
      latitud_local: "12.12",
      longitud_local: "77.0"
    },
    update: {
    precio_alquiler,
  },
    where: {
    // solamente se pueden declarar las columnas que sean unicas (unique) o las pk
    local_id: 1,
  },
  });
};
