/*
  Warnings:

  - You are about to drop the column `incidentTypeId` on the `Incident` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Incident" DROP COLUMN "incidentTypeId";

-- CreateTable
CREATE TABLE "_IncidentToIncidentType" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_IncidentToIncidentType_AB_unique" ON "_IncidentToIncidentType"("A", "B");

-- CreateIndex
CREATE INDEX "_IncidentToIncidentType_B_index" ON "_IncidentToIncidentType"("B");

-- AddForeignKey
ALTER TABLE "_IncidentToIncidentType" ADD CONSTRAINT "_IncidentToIncidentType_A_fkey" FOREIGN KEY ("A") REFERENCES "Incident"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_IncidentToIncidentType" ADD CONSTRAINT "_IncidentToIncidentType_B_fkey" FOREIGN KEY ("B") REFERENCES "IncidentType"("id") ON DELETE CASCADE ON UPDATE CASCADE;
