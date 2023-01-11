import { SpeakeasyBase } from "../../../internal/utils";
import { VerificationAccount } from "./verificationaccount";
export declare enum VerificationVerificationTypeEnum {
    Matching = "MATCHING",
    ChallengeDeposit = "CHALLENGE_DEPOSIT"
}
export declare enum VerificationReasonEnum {
    DataNotAvailable = "DATA_NOT_AVAILABLE",
    AccountHolderMismatch = "ACCOUNT_HOLDER_MISMATCH",
    FullAccountNumberAndBankTransferCodeNotAvailable = "FULL_ACCOUNT_NUMBER_AND_BANK_TRANSFER_CODE_NOT_AVAILABLE",
    FullAccountNumberNotAvailable = "FULL_ACCOUNT_NUMBER_NOT_AVAILABLE",
    BankTransferCodeNotAvailable = "BANK_TRANSFER_CODE_NOT_AVAILABLE",
    Expired = "EXPIRED",
    DataMismatch = "DATA_MISMATCH",
    InstructionGenerationError = "INSTRUCTION_GENERATION_ERROR"
}
export declare enum VerificationVerificationStatusEnum {
    Initiated = "INITIATED",
    Deposited = "DEPOSITED",
    Success = "SUCCESS",
    Failed = "FAILED"
}
export declare class VerificationInput extends SpeakeasyBase {
    account?: VerificationAccount;
    accountId?: number;
    providerAccountId?: number;
    verificationType?: VerificationVerificationTypeEnum;
}
export declare class Verification extends SpeakeasyBase {
    account?: VerificationAccount;
    accountId?: number;
    providerAccountId?: number;
    reason?: VerificationReasonEnum;
    verificationDate?: string;
    verificationId?: number;
    verificationStatus?: VerificationVerificationStatusEnum;
    verificationType?: VerificationVerificationTypeEnum;
}
