/*
  Warnings:

  - You are about to drop the column `id_game` on the `Bet` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[id_bet]` on the table `Game` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Bet" DROP CONSTRAINT "Bet_id_game_fkey";

-- DropIndex
DROP INDEX "Bet_id_game_key";

-- AlterTable
ALTER TABLE "Bet" DROP COLUMN "id_game",
ALTER COLUMN "amount" SET DATA TYPE DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "Game" ADD COLUMN     "id_bet" INTEGER;

-- CreateIndex
CREATE UNIQUE INDEX "Game_id_bet_key" ON "Game"("id_bet");

-- AddForeignKey
ALTER TABLE "Game" ADD CONSTRAINT "Game_id_bet_fkey" FOREIGN KEY ("id_bet") REFERENCES "Bet"("id") ON DELETE SET NULL ON UPDATE CASCADE;
