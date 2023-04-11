import { SpeakeasyBase } from "../../../internal/utils";
import { AccountTypeEnum } from "./accounttypeenum";
export declare class SaveAccount extends SpeakeasyBase {
    /**
     * The current balance of the account in milliunits format
     */
    balance: number;
    /**
     * The name of the account
     */
    name: string;
    /**
     * The type of account
     */
    type: AccountTypeEnum;
}
