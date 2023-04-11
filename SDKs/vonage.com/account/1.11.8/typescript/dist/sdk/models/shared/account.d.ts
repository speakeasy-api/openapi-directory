import { SpeakeasyBase } from "../../../internal/utils";
import { Address } from "./address";
export declare class Account extends SpeakeasyBase {
    address?: Address;
    /**
     * Unique identifier of the account
     */
    id?: number;
    /**
     * Name of the account
     */
    name?: string;
    /**
     * Status of the account
     */
    status?: string;
}
