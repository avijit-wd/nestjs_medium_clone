import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateFollows1647630526800 implements MigrationInterface {
    name = 'CreateFollows1647630526800'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`follows\` (\`id\` int NOT NULL AUTO_INCREMENT, \`followerId\` int NOT NULL, \`followingId\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`follows\``);
    }

}
