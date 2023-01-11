import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VerifiedAccount } from "./verifiedaccount";
import { VerifyTransactionCriteria } from "./verifytransactioncriteria";



export class VerifyAccount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account", elemType: VerifiedAccount })
  account?: VerifiedAccount[];

  @SpeakeasyMetadata({ data: "json, name=transactionCriteria", elemType: VerifyTransactionCriteria })
  transactionCriteria?: VerifyTransactionCriteria[];
}
