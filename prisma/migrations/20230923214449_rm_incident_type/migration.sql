/*
  Warnings:

  - You are about to drop the column `Created` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `LastLogin` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `IncidentType` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_IncidentToIncidentType` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `lastLogin` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "IncidentTypes" AS ENUM ('Collision', 'Pollution', 'Fatality', 'Heavy_Traffic', 'Road_Works');

-- DropForeignKey
ALTER TABLE "_IncidentToIncidentType" DROP CONSTRAINT "_IncidentToIncidentType_A_fkey";

-- DropForeignKey
ALTER TABLE "_IncidentToIncidentType" DROP CONSTRAINT "_IncidentToIncidentType_B_fkey";

-- AlterTable
ALTER TABLE "Incident" ADD COLUMN     "IncidentTypes" "IncidentTypes"[];

-- AlterTable
ALTER TABLE "User" DROP COLUMN "Created",
DROP COLUMN "LastLogin",
ADD COLUMN     "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "lastLogin" TIMESTAMP(3) NOT NULL;

-- DropTable
DROP TABLE "IncidentType";

-- DropTable
DROP TABLE "_IncidentToIncidentType";
