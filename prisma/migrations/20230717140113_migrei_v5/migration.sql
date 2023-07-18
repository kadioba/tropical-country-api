-- CreateTable
CREATE TABLE "StayImage" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "stayId" INTEGER NOT NULL,

    CONSTRAINT "StayImage_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "StayImage" ADD CONSTRAINT "StayImage_stayId_fkey" FOREIGN KEY ("stayId") REFERENCES "Stay"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
