import { MigrationInterface, QueryRunner } from 'typeorm';

export class SeedDb1646594874636 implements MigrationInterface {
  name = 'SeedDb1646594874636';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`INSERT INTO tags (name) VALUES("dragons")`);
  }
  public async down(queryRunner: QueryRunner): Promise<void> {}
}
