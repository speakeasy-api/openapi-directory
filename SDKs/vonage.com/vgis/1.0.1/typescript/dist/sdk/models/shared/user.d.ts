import { SpeakeasyBase } from "../../../internal/utils";
export declare class UserRoles extends SpeakeasyBase {
    /**
     * Code for the role
     */
    code?: string;
    /**
     * Name for the role
     */
    name?: string;
}
/**
 * Status of the user
 */
export declare enum UserStatusEnum {
    Pending = "PENDING",
    Active = "ACTIVE",
    Deleted = "DELETED",
    Archived = "ARCHIVED"
}
export declare class UserUcisHealth extends SpeakeasyBase {
    message?: string;
    status?: string;
}
export declare class UserUcis extends SpeakeasyBase {
    health?: UserUcisHealth;
    id?: number;
    type?: string;
    ucpLabel?: string;
}
/**
 * Success
 */
export declare class User extends SpeakeasyBase {
    /**
     * Unique identifier of the user's account
     */
    accountId?: number;
    /**
     * The name of the user's account
     */
    acountLabel?: string;
    /**
     * Contact number of the user
     */
    contactNumber?: string;
    /**
     * Email address of the user
     */
    emailAddress?: string;
    /**
     * First name of the user
     */
    firstName?: string;
    /**
     * Unique identifier of the user
     */
    id?: number;
    /**
     * Last name of the user
     */
    lastName?: string;
    roles?: UserRoles[];
    /**
     * Status of the user
     */
    status?: UserStatusEnum;
    ucis?: UserUcis[];
}
