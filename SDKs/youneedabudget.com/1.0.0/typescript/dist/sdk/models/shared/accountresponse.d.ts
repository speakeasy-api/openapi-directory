import { SpeakeasyBase } from "../../../internal/utils";
import { Account } from "./account";
export declare class AccountResponseData extends SpeakeasyBase {
    account: Account;
}
/**
 * The account was successfully created
 */
export declare class AccountResponse extends SpeakeasyBase {
    data: AccountResponseData;
}
