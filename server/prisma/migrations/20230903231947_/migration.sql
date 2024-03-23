/*
  Warnings:

  - You are about to drop the column `userId` on the `Game` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Game" DROP CONSTRAINT "Game_userId_fkey";

-- AlterTable
ALTER TABLE "Game" DROP COLUMN "userId",
ADD COLUMN     "id_user" TEXT;

-- AddForeignKey
ALTER TABLE "Game" ADD CONSTRAINT "Game_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
