import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { STATUSES } from './types';

/**
 * Example Entity
 */
@Entity('profiles')
export class Profile extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        unique: true
    })
    user_tg_id: string;

    @Column({
        default: null
    })
    username: string;

    @Column({
        default: null
    })
    is_premium: boolean;

    @Column({
        default: null
    })
    photo_url: string;

    @Column({
        default: null
    })
    language_code: string;

    @Column({
        type: "enum",
        enum: STATUSES,
        default: STATUSES.BASE
    })
    status: STATUSES
}