/*
  Warnings:

  - You are about to drop the column `baths` on the `Stay` table. All the data in the column will be lost.
  - You are about to drop the column `bedrooms` on the `Stay` table. All the data in the column will be lost.
  - You are about to drop the column `beds` on the `Stay` table. All the data in the column will be lost.
  - You are about to drop the column `location` on the `Stay` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Stay" DROP COLUMN "baths",
DROP COLUMN "bedrooms",
DROP COLUMN "beds",
DROP COLUMN "location";
