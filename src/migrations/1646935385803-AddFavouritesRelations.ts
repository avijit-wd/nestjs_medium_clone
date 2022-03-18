import {MigrationInterface, QueryRunner} from "typeorm";

export class AddFavouritesRelations1646935385803 implements MigrationInterface {
    name = 'AddFavouritesRelations1646935385803'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`users_favourites_articles\` (\`usersId\` int NOT NULL, \`articlesId\` int NOT NULL, INDEX \`IDX_eae017be85b24a65cc7e7c7409\` (\`usersId\`), INDEX \`IDX_5079edf4805dd662e42221df22\` (\`articlesId\`), PRIMARY KEY (\`usersId\`, \`articlesId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`users_favourites_articles\` ADD CONSTRAINT \`FK_eae017be85b24a65cc7e7c74092\` FOREIGN KEY (\`usersId\`) REFERENCES \`users\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`users_favourites_articles\` ADD CONSTRAINT \`FK_5079edf4805dd662e42221df221\` FOREIGN KEY (\`articlesId\`) REFERENCES \`articles\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`users_favourites_articles\` DROP FOREIGN KEY \`FK_5079edf4805dd662e42221df221\``);
        await queryRunner.query(`ALTER TABLE \`users_favourites_articles\` DROP FOREIGN KEY \`FK_eae017be85b24a65cc7e7c74092\``);
        await queryRunner.query(`DROP INDEX \`IDX_5079edf4805dd662e42221df22\` ON \`users_favourites_articles\``);
        await queryRunner.query(`DROP INDEX \`IDX_eae017be85b24a65cc7e7c7409\` ON \`users_favourites_articles\``);
        await queryRunner.query(`DROP TABLE \`users_favourites_articles\``);
    }

}
