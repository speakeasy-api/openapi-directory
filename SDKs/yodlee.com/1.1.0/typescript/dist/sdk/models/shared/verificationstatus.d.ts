import { SpeakeasyBase } from "../../../internal/utils";
import { VerificationAccount } from "./verificationaccount";
export declare enum VerificationStatusReasonEnum {
    DataNotAvailable = "DATA_NOT_AVAILABLE",
    AccountHolderMismatch = "ACCOUNT_HOLDER_MISMATCH",
    FullAccountNumberAndBankTransferCodeNotAvailable = "FULL_ACCOUNT_NUMBER_AND_BANK_TRANSFER_CODE_NOT_AVAILABLE",
    FullAccountNumberNotAvailable = "FULL_ACCOUNT_NUMBER_NOT_AVAILABLE",
    BankTransferCodeNotAvailable = "BANK_TRANSFER_CODE_NOT_AVAILABLE",
    Expired = "EXPIRED",
    DataMismatch = "DATA_MISMATCH",
    InstructionGenerationError = "INSTRUCTION_GENERATION_ERROR"
}
export declare enum VerificationStatusVerificationStatusEnum {
    Initiated = "INITIATED",
    Deposited = "DEPOSITED",
    Success = "SUCCESS",
    Failed = "FAILED"
}
export declare enum VerificationStatusVerificationTypeEnum {
    Matching = "MATCHING",
    ChallengeDeposit = "CHALLENGE_DEPOSIT"
}
export declare class VerificationStatus extends SpeakeasyBase {
    account?: VerificationAccount;
    accountId?: number;
    providerAccountId?: number;
    reason?: VerificationStatusReasonEnum;
    remainingAttempts?: number;
    verificationDate?: string;
    verificationId?: number;
    verificationStatus?: VerificationStatusVerificationStatusEnum;
    verificationType?: VerificationStatusVerificationTypeEnum;
}
