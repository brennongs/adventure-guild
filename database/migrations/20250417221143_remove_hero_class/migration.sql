/*
  Warnings:

  - You are about to drop the column `classId` on the `Hero` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Hero" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "strength" INTEGER NOT NULL,
    "dexterity" INTEGER NOT NULL,
    "constitution" INTEGER NOT NULL,
    "intelligence" INTEGER NOT NULL,
    "wisdom" INTEGER NOT NULL,
    "charisma" INTEGER NOT NULL
);
INSERT INTO "new_Hero" ("charisma", "constitution", "dexterity", "id", "intelligence", "name", "strength", "wisdom") SELECT "charisma", "constitution", "dexterity", "id", "intelligence", "name", "strength", "wisdom" FROM "Hero";
DROP TABLE "Hero";
ALTER TABLE "new_Hero" RENAME TO "Hero";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
