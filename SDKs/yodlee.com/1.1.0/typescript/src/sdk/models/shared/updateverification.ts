import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VerificationAccount } from "./verificationaccount";
import { VerificationTransaction } from "./verificationtransaction";


export enum UpdateVerificationVerificationTypeEnum {
    Matching = "MATCHING",
    ChallengeDeposit = "CHALLENGE_DEPOSIT"
}


export class UpdateVerificationInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account" })
  account?: VerificationAccount;

  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId?: number;

  @SpeakeasyMetadata({ data: "json, name=providerAccountId" })
  providerAccountId?: number;

  @SpeakeasyMetadata({ data: "json, name=transaction", elemType: VerificationTransaction })
  transaction: VerificationTransaction[];

  @SpeakeasyMetadata({ data: "json, name=verificationType" })
  verificationType?: UpdateVerificationVerificationTypeEnum;
}
