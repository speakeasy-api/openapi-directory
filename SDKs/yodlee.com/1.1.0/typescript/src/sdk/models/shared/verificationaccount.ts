import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VerificationBankTransferCode } from "./verificationbanktransfercode";


export enum VerificationAccountAccountTypeEnum {
    Savings = "SAVINGS",
    Checking = "CHECKING"
}


export class VerificationAccount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountName" })
  accountName?: string;

  @SpeakeasyMetadata({ data: "json, name=accountNumber" })
  accountNumber: string;

  @SpeakeasyMetadata({ data: "json, name=accountType" })
  accountType: VerificationAccountAccountTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=bankTransferCode" })
  bankTransferCode: VerificationBankTransferCode;
}
