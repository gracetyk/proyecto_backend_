-- CreateTable
CREATE TABLE "categoria" (
    "categoria_id" SERIAL NOT NULL,
    "nom_categ" TEXT NOT NULL,
    "desc_categ" TEXT NOT NULL,

    CONSTRAINT "categoria_pkey" PRIMARY KEY ("categoria_id")
);

-- CreateTable
CREATE TABLE "local" (
    "local_id" SERIAL NOT NULL,
    "titulo_local" TEXT NOT NULL,
    "descrip_local" TEXT NOT NULL,
    "precio_alquiler" DECIMAL(65,30) NOT NULL,
    "area_local" DECIMAL(65,30) NOT NULL,
    "categoria_id" INTEGER NOT NULL,
    "cod_localidad" INTEGER NOT NULL,
    "direccion_local" TEXT NOT NULL,
    "latitud_local" DECIMAL(65,30) NOT NULL,
    "longitud_local" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "local_pkey" PRIMARY KEY ("local_id")
);

-- CreateTable
CREATE TABLE "pais" (
    "cod_pais" SERIAL NOT NULL,
    "nom_pais" TEXT NOT NULL,

    CONSTRAINT "pais_pkey" PRIMARY KEY ("cod_pais")
);

-- CreateTable
CREATE TABLE "localidad" (
    "cod_localidad" SERIAL NOT NULL,
    "nom_localidad" TEXT NOT NULL,
    "cod_ciudad" INTEGER NOT NULL,

    CONSTRAINT "localidad_pkey" PRIMARY KEY ("cod_localidad")
);

-- CreateTable
CREATE TABLE "ciudad" (
    "cod_ciudad" SERIAL NOT NULL,
    "nom_ciudad" TEXT NOT NULL,
    "cod_pais" INTEGER NOT NULL,

    CONSTRAINT "ciudad_pkey" PRIMARY KEY ("cod_ciudad")
);

-- CreateTable
CREATE TABLE "fotos" (
    "fotos_id" SERIAL NOT NULL,
    "foto_url" TEXT NOT NULL,
    "local_id" INTEGER NOT NULL,

    CONSTRAINT "fotos_pkey" PRIMARY KEY ("fotos_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "categoria_categoria_id_key" ON "categoria"("categoria_id");

-- CreateIndex
CREATE UNIQUE INDEX "local_local_id_key" ON "local"("local_id");

-- CreateIndex
CREATE UNIQUE INDEX "pais_cod_pais_key" ON "pais"("cod_pais");

-- CreateIndex
CREATE UNIQUE INDEX "localidad_cod_localidad_key" ON "localidad"("cod_localidad");

-- CreateIndex
CREATE UNIQUE INDEX "ciudad_cod_ciudad_key" ON "ciudad"("cod_ciudad");

-- CreateIndex
CREATE UNIQUE INDEX "fotos_fotos_id_key" ON "fotos"("fotos_id");

-- AddForeignKey
ALTER TABLE "local" ADD CONSTRAINT "local_categoria_id_fkey" FOREIGN KEY ("categoria_id") REFERENCES "categoria"("categoria_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "local" ADD CONSTRAINT "local_cod_localidad_fkey" FOREIGN KEY ("cod_localidad") REFERENCES "localidad"("cod_localidad") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "localidad" ADD CONSTRAINT "localidad_cod_ciudad_fkey" FOREIGN KEY ("cod_ciudad") REFERENCES "ciudad"("cod_ciudad") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ciudad" ADD CONSTRAINT "ciudad_cod_pais_fkey" FOREIGN KEY ("cod_pais") REFERENCES "pais"("cod_pais") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "fotos" ADD CONSTRAINT "fotos_local_id_fkey" FOREIGN KEY ("local_id") REFERENCES "local"("local_id") ON DELETE RESTRICT ON UPDATE CASCADE;
