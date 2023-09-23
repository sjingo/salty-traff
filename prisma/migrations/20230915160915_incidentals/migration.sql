/*
  Warnings:

  - You are about to drop the column `types` on the `Incident` table. All the data in the column will be lost.
  - Added the required column `incidentTypeId` to the `Incident` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Incident" DROP COLUMN "types",
ADD COLUMN     "incidentTypeId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Incident" ADD CONSTRAINT "Incident_incidentTypeId_fkey" FOREIGN KEY ("incidentTypeId") REFERENCES "IncidentType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
