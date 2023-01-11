import { SpeakeasyBase } from "../../../internal/utils";
import { VerifiedAccount } from "./verifiedaccount";
import { VerifyTransactionCriteria } from "./verifytransactioncriteria";
export declare class VerifyAccount extends SpeakeasyBase {
    account?: VerifiedAccount[];
    transactionCriteria?: VerifyTransactionCriteria[];
}
