import { hashSync } from "bcrypt";

export default async (prisma) => {
  const password = hashSync("Superpass34!", 10);

  await prisma.usuario.upsert({
    create: {
      nombre: "Graciela",
      correo: "gnsalcedo@gmail.com",
      password,
      tipoUsuario: "ADMIN",
    },
    update: {
      password,
    },
    where: {
      // solamente se pueden declarar las columnas que sean unicas (unique) o las pk
      correo: "gnsalcedo@gmail.com",
    },
  });
};
