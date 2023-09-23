/*
  Warnings:

  - You are about to drop the column `first` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `last` on the `User` table. All the data in the column will be lost.
  - The `active` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "first",
DROP COLUMN "last",
DROP COLUMN "active",
ADD COLUMN     "active" BOOLEAN NOT NULL DEFAULT false;
