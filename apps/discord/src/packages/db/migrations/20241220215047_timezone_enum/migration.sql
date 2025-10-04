/*
  Warnings:

  - The values [UTC_0,UTC_1,UTC_2,UTC_3,UTC_4,UTC_5,UTC_6,UTC_7,UTC_8,UTC_9,UTC_10,UTC_11,UTC_12,UTC_N1,UTC_N2,UTC_N3,UTC_N4,UTC_N5,UTC_N6,UTC_N7,UTC_N8,UTC_N9,UTC_N10,UTC_N11,UTC_N12] on the enum `Timezone` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Timezone_new" AS ENUM ('DEFAULT', 'GMT_P0', 'GMT_P1', 'GMT_P2', 'GMT_P3', 'GMT_P4', 'GMT_P5', 'GMT_P6', 'GMT_P7', 'GMT_P8', 'GMT_P9', 'GMT_P10', 'GMT_P11', 'GMT_P12', 'GMT_N1', 'GMT_N2', 'GMT_N3', 'GMT_N4', 'GMT_N5', 'GMT_N6', 'GMT_N7', 'GMT_N8', 'GMT_N9', 'GMT_N10', 'GMT_N11', 'GMT_N12');
ALTER TABLE "Schedule" ALTER COLUMN "timeZone" DROP DEFAULT;
ALTER TABLE "Schedule" ALTER COLUMN "timeZone" TYPE "Timezone_new" USING ("timeZone"::text::"Timezone_new");
ALTER TYPE "Timezone" RENAME TO "Timezone_old";
ALTER TYPE "Timezone_new" RENAME TO "Timezone";
DROP TYPE "Timezone_old";
ALTER TABLE "Schedule" ALTER COLUMN "timeZone" SET DEFAULT 'DEFAULT';
COMMIT;
