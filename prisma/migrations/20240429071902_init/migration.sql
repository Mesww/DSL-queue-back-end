-- CreateTable
CREATE TABLE `Queue` (
    `queueid` INTEGER NOT NULL AUTO_INCREMENT,
    `datetime` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `studentID` VARCHAR(191) NOT NULL,
    `type` ENUM('ONE', 'TWO', 'OTHER') NOT NULL,
    `orders` INTEGER NOT NULL,
    `channel` INTEGER NOT NULL,
    `status` ENUM('WAIT', 'PROCESS', 'FINISH', 'SKIP', 'STOP') NOT NULL,
    `rate` INTEGER NOT NULL,
    `comment` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Queue_studentID_key`(`studentID`),
    PRIMARY KEY (`queueid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `History` (
    `historyid` INTEGER NOT NULL AUTO_INCREMENT,
    `datetime` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `studentid` VARCHAR(191) NOT NULL,
    `type` ENUM('ONE', 'TWO', 'OTHER') NOT NULL,
    `orders` INTEGER NOT NULL,
    `channel` INTEGER NOT NULL,
    `rate` INTEGER NOT NULL,
    `comment` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`historyid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Queue` ADD CONSTRAINT `Queue_studentID_fkey` FOREIGN KEY (`studentID`) REFERENCES `User`(`studentid`) ON DELETE RESTRICT ON UPDATE CASCADE;
