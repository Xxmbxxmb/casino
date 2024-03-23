/*
  Warnings:

  - Changed the type of `rs3` on the `Wallet` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Wallet" DROP COLUMN "rs3",
ADD COLUMN     "rs3" DOUBLE PRECISION NOT NULL;
