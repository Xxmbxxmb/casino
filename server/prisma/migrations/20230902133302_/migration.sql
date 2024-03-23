/*
  Warnings:

  - A unique constraint covering the columns `[id_game]` on the table `Bet` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id_game]` on the table `Hand` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Bet_id_game_key" ON "Bet"("id_game");

-- CreateIndex
CREATE UNIQUE INDEX "Hand_id_game_key" ON "Hand"("id_game");
