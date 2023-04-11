import { SpeakeasyBase } from "../../../internal/utils";
import { Account } from "./account";
export declare class AccountsResponseData extends SpeakeasyBase {
    accounts: Account[];
    /**
     * The knowledge of the server
     */
    serverKnowledge: number;
}
/**
 * The list of requested accounts
 */
export declare class AccountsResponse extends SpeakeasyBase {
    data: AccountsResponseData;
}
