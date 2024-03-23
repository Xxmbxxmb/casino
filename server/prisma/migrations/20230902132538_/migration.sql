/*
  Warnings:

  - A unique constraint covering the columns `[id_player]` on the table `Wallet` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Wallet_id_player_key" ON "Wallet"("id_player");
