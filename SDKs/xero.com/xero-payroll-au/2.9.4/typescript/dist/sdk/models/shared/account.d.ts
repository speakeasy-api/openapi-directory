import { SpeakeasyBase } from "../../../internal/utils";
import { AccountTypeEnum } from "./accounttypeenum";
export declare class Account extends SpeakeasyBase {
    /**
     * Xero identifier for accounts
     */
    accountID?: string;
    /**
     * Customer defined account code
     */
    code?: string;
    /**
     * Name of account
     */
    name?: string;
    /**
     * See Account Types
     */
    type?: AccountTypeEnum;
}
