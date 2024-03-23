/*
  Warnings:

  - You are about to drop the column `cards` on the `Hand` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Hand" DROP COLUMN "cards";

-- CreateTable
CREATE TABLE "CardOnHand" (
    "id_card" INTEGER NOT NULL,
    "id_hand" TEXT NOT NULL,

    CONSTRAINT "CardOnHand_pkey" PRIMARY KEY ("id_card","id_hand")
);

-- AddForeignKey
ALTER TABLE "CardOnHand" ADD CONSTRAINT "CardOnHand_id_card_fkey" FOREIGN KEY ("id_card") REFERENCES "Card"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CardOnHand" ADD CONSTRAINT "CardOnHand_id_hand_fkey" FOREIGN KEY ("id_hand") REFERENCES "Hand"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
