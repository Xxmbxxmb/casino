/*
  Warnings:

  - You are about to drop the column `handId` on the `Card` table. All the data in the column will be lost.
  - Added the required column `name` to the `Card` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `value` on the `Card` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "Card" DROP CONSTRAINT "Card_handId_fkey";

-- AlterTable
ALTER TABLE "Card" DROP COLUMN "handId",
ADD COLUMN     "name" "CardValues" NOT NULL,
DROP COLUMN "value",
ADD COLUMN     "value" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Hand" ADD COLUMN     "cards" INTEGER[];
