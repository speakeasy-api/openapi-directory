import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Status of the account
 */
export declare enum AccountStatusEnum {
    Pending = "PENDING",
    Active = "ACTIVE",
    Deleted = "DELETED",
    Archived = "ARCHIVED"
}
export declare class AccountUcisHealth extends SpeakeasyBase {
    message?: string;
    status?: string;
}
export declare class AccountUcis extends SpeakeasyBase {
    health?: AccountUcisHealth;
    id?: number;
    type?: string;
    ucpAccountId?: string;
    ucpLabel?: string;
}
/**
 * Successful
 */
export declare class Account extends SpeakeasyBase {
    /**
     * Unique identifier of the account
     */
    id?: number;
    /**
     * Name of the account
     */
    name?: string;
    /**
     * Organization of the account
     */
    org?: string;
    /**
     * Status of the account
     */
    status?: AccountStatusEnum;
    ucis?: AccountUcis[];
}
