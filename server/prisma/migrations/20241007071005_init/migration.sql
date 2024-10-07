/*
  Warnings:

  - You are about to drop the column `bakeryProfileId` on the `Admin` table. All the data in the column will be lost.
  - Added the required column `adminId` to the `BakeryProfile` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Admin" DROP CONSTRAINT "Admin_bakeryProfileId_fkey";

-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_bakeryId_fkey";

-- DropIndex
DROP INDEX "Admin_bakeryProfileId_key";

-- AlterTable
ALTER TABLE "Admin" DROP COLUMN "bakeryProfileId";

-- AlterTable
ALTER TABLE "BakeryProfile" ADD COLUMN     "adminId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "BakeryProfile" ADD CONSTRAINT "BakeryProfile_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "Admin"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_bakeryId_fkey" FOREIGN KEY ("bakeryId") REFERENCES "BakeryProfile"("id") ON DELETE CASCADE ON UPDATE CASCADE;
