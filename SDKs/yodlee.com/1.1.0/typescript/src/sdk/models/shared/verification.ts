import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VerificationAccount } from "./verificationaccount";


export enum VerificationVerificationTypeEnum {
    Matching = "MATCHING",
    ChallengeDeposit = "CHALLENGE_DEPOSIT"
}

export enum VerificationReasonEnum {
    DataNotAvailable = "DATA_NOT_AVAILABLE",
    AccountHolderMismatch = "ACCOUNT_HOLDER_MISMATCH",
    FullAccountNumberAndBankTransferCodeNotAvailable = "FULL_ACCOUNT_NUMBER_AND_BANK_TRANSFER_CODE_NOT_AVAILABLE",
    FullAccountNumberNotAvailable = "FULL_ACCOUNT_NUMBER_NOT_AVAILABLE",
    BankTransferCodeNotAvailable = "BANK_TRANSFER_CODE_NOT_AVAILABLE",
    Expired = "EXPIRED",
    DataMismatch = "DATA_MISMATCH",
    InstructionGenerationError = "INSTRUCTION_GENERATION_ERROR"
}

export enum VerificationVerificationStatusEnum {
    Initiated = "INITIATED",
    Deposited = "DEPOSITED",
    Success = "SUCCESS",
    Failed = "FAILED"
}


export class VerificationInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account" })
  account?: VerificationAccount;

  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId?: number;

  @SpeakeasyMetadata({ data: "json, name=providerAccountId" })
  providerAccountId?: number;

  @SpeakeasyMetadata({ data: "json, name=verificationType" })
  verificationType?: VerificationVerificationTypeEnum;
}


export class Verification extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account" })
  account?: VerificationAccount;

  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId?: number;

  @SpeakeasyMetadata({ data: "json, name=providerAccountId" })
  providerAccountId?: number;

  @SpeakeasyMetadata({ data: "json, name=reason" })
  reason?: VerificationReasonEnum;

  @SpeakeasyMetadata({ data: "json, name=verificationDate" })
  verificationDate?: string;

  @SpeakeasyMetadata({ data: "json, name=verificationId" })
  verificationId?: number;

  @SpeakeasyMetadata({ data: "json, name=verificationStatus" })
  verificationStatus?: VerificationVerificationStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=verificationType" })
  verificationType?: VerificationVerificationTypeEnum;
}
