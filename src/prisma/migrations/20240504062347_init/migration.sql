-- AlterTable
ALTER TABLE `History` MODIFY `status` ENUM('WAIT', 'PROCESS', 'FINISH', 'SKIP', 'STOP', 'CANCEL') NOT NULL;

-- AlterTable
ALTER TABLE `Queue` MODIFY `status` ENUM('WAIT', 'PROCESS', 'FINISH', 'SKIP', 'STOP', 'CANCEL') NOT NULL;
