-- CreateEnum
CREATE TYPE "Market" AS ENUM ('FOREX', 'CRYPTO', 'ENERGY', 'METAL', 'STOCK');

-- CreateEnum
CREATE TYPE "Impact" AS ENUM ('LOW', 'MEDIUM', 'HIGH', 'HOLIDAY');

-- CreateEnum
CREATE TYPE "Currency" AS ENUM ('USD', 'EUR', 'GBP', 'JPY', 'CHF', 'AUD', 'CAD', 'CNY', 'NZD');

-- CreateEnum
CREATE TYPE "NewsScope" AS ENUM ('DAILY', 'WEEKLY', 'TOMORROW');

-- CreateEnum
CREATE TYPE "Frequency" AS ENUM ('DAILY', 'WEEKDAYS', 'WEEKENDS', 'EVERY_OTHER_DAY', 'WEEKLY', 'MONTHLY');

-- CreateEnum
CREATE TYPE "Timezone" AS ENUM ('DEFAULT', 'UTC_0', 'UTC_1', 'UTC_2', 'UTC_3', 'UTC_4', 'UTC_5', 'UTC_6', 'UTC_7', 'UTC_8', 'UTC_9', 'UTC_10', 'UTC_11', 'UTC_12', 'UTC_N1', 'UTC_N2', 'UTC_N3', 'UTC_N4', 'UTC_N5', 'UTC_N6', 'UTC_N7', 'UTC_N8', 'UTC_N9', 'UTC_N10', 'UTC_N11', 'UTC_N12');

-- CreateEnum
CREATE TYPE "TimeDisplay" AS ENUM ('FIXED', 'RELATIVE');

-- CreateTable
CREATE TABLE "DiscordServer" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "guildId" TEXT NOT NULL,

    CONSTRAINT "DiscordServer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DiscordChannel" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "channelId" TEXT NOT NULL,
    "serverId" TEXT NOT NULL,

    CONSTRAINT "DiscordChannel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Schedule" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "timeZone" "Timezone" NOT NULL DEFAULT 'DEFAULT',
    "hour" INTEGER NOT NULL,
    "minute" INTEGER NOT NULL,
    "hourServerTime" INTEGER NOT NULL,
    "minuteServerTime" INTEGER NOT NULL,
    "timeDisplay" "TimeDisplay" NOT NULL DEFAULT 'FIXED',
    "newsScope" "NewsScope" NOT NULL,
    "frequency" "Frequency" NOT NULL,
    "market" "Market" NOT NULL,
    "impact" "Impact"[],
    "currency" "Currency"[],
    "serverId" TEXT NOT NULL,
    "channelId" TEXT NOT NULL,

    CONSTRAINT "Schedule_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "DiscordServer_guildId_key" ON "DiscordServer"("guildId");

-- CreateIndex
CREATE UNIQUE INDEX "DiscordChannel_channelId_key" ON "DiscordChannel"("channelId");

-- AddForeignKey
ALTER TABLE "DiscordChannel" ADD CONSTRAINT "DiscordChannel_serverId_fkey" FOREIGN KEY ("serverId") REFERENCES "DiscordServer"("guildId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Schedule" ADD CONSTRAINT "Schedule_serverId_fkey" FOREIGN KEY ("serverId") REFERENCES "DiscordServer"("guildId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Schedule" ADD CONSTRAINT "Schedule_channelId_fkey" FOREIGN KEY ("channelId") REFERENCES "DiscordChannel"("channelId") ON DELETE RESTRICT ON UPDATE CASCADE;
