/*
  Warnings:

  - Made the column `quantity` on table `OrderProduct` required. This step will fail if there are existing NULL values in that column.
  - Made the column `unit_amount` on table `Product` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "OrderProduct" ALTER COLUMN "quantity" SET NOT NULL;

-- AlterTable
ALTER TABLE "Product" ALTER COLUMN "unit_amount" SET NOT NULL;
