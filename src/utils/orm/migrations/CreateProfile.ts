import { MigrationInterface, QueryRunner } from 'typeorm';

// Migrations example
export class CreateProfile21012025111435 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE "profiles" ("id" SERIAL NOT NULL, "user_tg_id" TEXT NOT NULL, "username" TEXT,
             "is_premium" BOOLEAN, "photo_url" TEXT, "language_code" TEXT, "status" TEXT)`
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `DROP TABLE "profiles"`
        )
    }
}