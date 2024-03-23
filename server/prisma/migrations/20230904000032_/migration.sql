/*
  Warnings:

  - You are about to drop the column `id_game` on the `Hand` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[id_hand]` on the table `Game` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `id_hand` to the `Game` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Hand" DROP CONSTRAINT "Hand_id_game_fkey";

-- DropIndex
DROP INDEX "Hand_id_game_key";

-- AlterTable
ALTER TABLE "Game" ADD COLUMN     "id_hand" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Hand" DROP COLUMN "id_game";

-- CreateIndex
CREATE UNIQUE INDEX "Game_id_hand_key" ON "Game"("id_hand");

-- AddForeignKey
ALTER TABLE "Game" ADD CONSTRAINT "Game_id_hand_fkey" FOREIGN KEY ("id_hand") REFERENCES "Hand"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
