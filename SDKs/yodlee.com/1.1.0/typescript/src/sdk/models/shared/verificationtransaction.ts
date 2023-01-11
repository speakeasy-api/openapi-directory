import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Money } from "./money";


export enum VerificationTransactionBaseTypeEnum {
    Credit = "CREDIT",
    Debit = "DEBIT"
}


export class VerificationTransaction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount: Money;

  @SpeakeasyMetadata({ data: "json, name=baseType" })
  baseType: VerificationTransactionBaseTypeEnum;
}
