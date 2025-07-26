import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTablesPetplanner1753541071740 implements MigrationInterface {
    name = 'CreateTablesPetplanner1753541071740'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`activity_completion\` (\`id\` varchar(36) NOT NULL, \`completedAt\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, \`pointsEarned\` int NOT NULL DEFAULT '0', \`wasOnTime\` tinyint NOT NULL DEFAULT 1, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`activityId\` varchar(255) NOT NULL, \`userId\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`activity\` (\`id\` varchar(36) NOT NULL, \`title\` varchar(255) NOT NULL, \`description\` text NOT NULL, \`category\` enum ('work', 'health', 'personal', 'social', 'learning', 'household', 'fitness', 'hobby') NOT NULL, \`priority\` enum ('low', 'medium', 'high') NOT NULL, \`scheduleDate\` timestamp NULL, \`scheduleTime\` timestamp NULL, \`isCompleted\` tinyint NOT NULL DEFAULT 0, \`completedDate\` timestamp NULL, \`activeReminder\` tinyint NOT NULL DEFAULT 0, \`pointsReward\` int NOT NULL DEFAULT '10', \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deletedAt\` datetime(6) NULL, \`userId\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`pet\` (\`id\` varchar(36) NOT NULL, \`name\` varchar(255) NOT NULL, \`type\` enum ('cat', 'dog', 'bird', 'rabbit') NOT NULL, \`color\` varchar(7) NOT NULL DEFAULT '#FFB6C1', \`currentStatus\` enum ('happy', 'sad', 'sick', 'away') NOT NULL DEFAULT 'happy', \`health\` int NOT NULL COMMENT 'Health level 0-100' DEFAULT '100', \`happiness\` int NOT NULL COMMENT 'Happiness level 0-100' DEFAULT '100', \`level\` int NOT NULL, \`lastInteraction\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deletedAt\` datetime(6) NULL, \`userId\` varchar(255) NOT NULL, UNIQUE INDEX \`REL_4eb3b1eeefc7cdeae09f934f47\` (\`userId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`streak_history\` (\`id\` varchar(36) NOT NULL, \`date\` date NOT NULL, \`streakContinue\` tinyint NOT NULL DEFAULT 1, \`completedActivities\` int NOT NULL DEFAULT '0', \`pointsObtained\` int NOT NULL DEFAULT '0', \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deletedAt\` datetime(6) NULL, \`userId\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`achievement\` (\`id\` varchar(36) NOT NULL, \`name\` varchar(255) NOT NULL, \`description\` text NOT NULL, \`icon\` varchar(255) NULL, \`pointsReward\` int NOT NULL DEFAULT '0', \`targetValue\` int NOT NULL COMMENT 'Target value to unlock achievement' DEFAULT '1', \`achievementType\` varchar(255) NOT NULL COMMENT 'Type: tasks_completed, streak, points_earned' DEFAULT 'tasks_completed', \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`user_achievement\` (\`id\` varchar(36) NOT NULL, \`unlockedAt\` timestamp NULL, \`progress\` int NOT NULL DEFAULT '0', \`isCompleted\` tinyint NOT NULL DEFAULT 0, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`userId\` varchar(255) NOT NULL, \`achievementId\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`user\` (\`id\` varchar(36) NOT NULL, \`email\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, \`username\` varchar(255) NOT NULL, \`currentStreak\` int NOT NULL DEFAULT '0', \`points\` int NOT NULL DEFAULT '0', \`level\` int NOT NULL DEFAULT '1', \`lastActiveDate\` timestamp NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deletedAt\` datetime(6) NULL, UNIQUE INDEX \`IDX_e12875dfb3b1d92d7d7c5377e2\` (\`email\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`reward\` (\`id\` varchar(36) NOT NULL, \`name\` varchar(255) NOT NULL, \`description\` text NULL, \`typeOfReward\` enum ('item', 'accessory', 'food', 'unlock') NOT NULL, \`necessaryPoints\` int NOT NULL, \`icon\` varchar(255) NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deletedAt\` datetime(6) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`user_reward\` (\`id\` varchar(36) NOT NULL, \`exchangeDate\` timestamp NULL, \`isUsed\` tinyint NOT NULL DEFAULT 0, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deletedAt\` datetime(6) NULL, \`userId\` varchar(255) NOT NULL, \`rewardId\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`activity_completion\` ADD CONSTRAINT \`FK_01c1e188825fc6f573f8b3e86b9\` FOREIGN KEY (\`activityId\`) REFERENCES \`activity\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`activity_completion\` ADD CONSTRAINT \`FK_cd5193666f6fd9cca40a15ec446\` FOREIGN KEY (\`userId\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`activity\` ADD CONSTRAINT \`FK_3571467bcbe021f66e2bdce96ea\` FOREIGN KEY (\`userId\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`pet\` ADD CONSTRAINT \`FK_4eb3b1eeefc7cdeae09f934f479\` FOREIGN KEY (\`userId\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`streak_history\` ADD CONSTRAINT \`FK_78f8d7369621be7bff4d249974e\` FOREIGN KEY (\`userId\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`user_achievement\` ADD CONSTRAINT \`FK_2a418515c335cab7c5ba70c28b3\` FOREIGN KEY (\`userId\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`user_achievement\` ADD CONSTRAINT \`FK_843ecd1965f1aac694875674a18\` FOREIGN KEY (\`achievementId\`) REFERENCES \`achievement\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`user_reward\` ADD CONSTRAINT \`FK_ef8e443d9a7cd2881b2e75ae35d\` FOREIGN KEY (\`userId\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`user_reward\` ADD CONSTRAINT \`FK_ba319255c60a14b32e078b7350a\` FOREIGN KEY (\`rewardId\`) REFERENCES \`reward\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user_reward\` DROP FOREIGN KEY \`FK_ba319255c60a14b32e078b7350a\``);
        await queryRunner.query(`ALTER TABLE \`user_reward\` DROP FOREIGN KEY \`FK_ef8e443d9a7cd2881b2e75ae35d\``);
        await queryRunner.query(`ALTER TABLE \`user_achievement\` DROP FOREIGN KEY \`FK_843ecd1965f1aac694875674a18\``);
        await queryRunner.query(`ALTER TABLE \`user_achievement\` DROP FOREIGN KEY \`FK_2a418515c335cab7c5ba70c28b3\``);
        await queryRunner.query(`ALTER TABLE \`streak_history\` DROP FOREIGN KEY \`FK_78f8d7369621be7bff4d249974e\``);
        await queryRunner.query(`ALTER TABLE \`pet\` DROP FOREIGN KEY \`FK_4eb3b1eeefc7cdeae09f934f479\``);
        await queryRunner.query(`ALTER TABLE \`activity\` DROP FOREIGN KEY \`FK_3571467bcbe021f66e2bdce96ea\``);
        await queryRunner.query(`ALTER TABLE \`activity_completion\` DROP FOREIGN KEY \`FK_cd5193666f6fd9cca40a15ec446\``);
        await queryRunner.query(`ALTER TABLE \`activity_completion\` DROP FOREIGN KEY \`FK_01c1e188825fc6f573f8b3e86b9\``);
        await queryRunner.query(`DROP TABLE \`user_reward\``);
        await queryRunner.query(`DROP TABLE \`reward\``);
        await queryRunner.query(`DROP INDEX \`IDX_e12875dfb3b1d92d7d7c5377e2\` ON \`user\``);
        await queryRunner.query(`DROP TABLE \`user\``);
        await queryRunner.query(`DROP TABLE \`user_achievement\``);
        await queryRunner.query(`DROP TABLE \`achievement\``);
        await queryRunner.query(`DROP TABLE \`streak_history\``);
        await queryRunner.query(`DROP INDEX \`REL_4eb3b1eeefc7cdeae09f934f47\` ON \`pet\``);
        await queryRunner.query(`DROP TABLE \`pet\``);
        await queryRunner.query(`DROP TABLE \`activity\``);
        await queryRunner.query(`DROP TABLE \`activity_completion\``);
    }

}
