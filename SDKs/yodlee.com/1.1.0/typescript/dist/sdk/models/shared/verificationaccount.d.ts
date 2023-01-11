import { SpeakeasyBase } from "../../../internal/utils";
import { VerificationBankTransferCode } from "./verificationbanktransfercode";
export declare enum VerificationAccountAccountTypeEnum {
    Savings = "SAVINGS",
    Checking = "CHECKING"
}
export declare class VerificationAccount extends SpeakeasyBase {
    accountName?: string;
    accountNumber: string;
    accountType: VerificationAccountAccountTypeEnum;
    bankTransferCode: VerificationBankTransferCode;
}
