import { SpeakeasyBase } from "../../../internal/utils";
import { VerificationAccount } from "./verificationaccount";
import { VerificationTransaction } from "./verificationtransaction";
export declare enum UpdateVerificationVerificationTypeEnum {
    Matching = "MATCHING",
    ChallengeDeposit = "CHALLENGE_DEPOSIT"
}
export declare class UpdateVerificationInput extends SpeakeasyBase {
    account?: VerificationAccount;
    accountId?: number;
    providerAccountId?: number;
    transaction: VerificationTransaction[];
    verificationType?: UpdateVerificationVerificationTypeEnum;
}
