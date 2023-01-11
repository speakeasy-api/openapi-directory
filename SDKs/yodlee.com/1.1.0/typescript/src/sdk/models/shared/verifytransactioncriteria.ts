import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Transaction } from "./transaction";


export enum VerifyTransactionCriteriaBaseTypeEnum {
    Credit = "CREDIT",
    Debit = "DEBIT"
}

export enum VerifyTransactionCriteriaMatchedEnum {
    Complete = "COMPLETE",
    None = "NONE"
}


export class VerifyTransactionCriteriaInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount: number;

  @SpeakeasyMetadata({ data: "json, name=baseType" })
  baseType?: VerifyTransactionCriteriaBaseTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=date" })
  date: string;

  @SpeakeasyMetadata({ data: "json, name=dateVariance" })
  dateVariance?: string;

  @SpeakeasyMetadata({ data: "json, name=keyword" })
  keyword?: string;
}


export class VerifyTransactionCriteria extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount: number;

  @SpeakeasyMetadata({ data: "json, name=baseType" })
  baseType?: VerifyTransactionCriteriaBaseTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=date" })
  date: string;

  @SpeakeasyMetadata({ data: "json, name=dateVariance" })
  dateVariance?: string;

  @SpeakeasyMetadata({ data: "json, name=keyword" })
  keyword?: string;

  @SpeakeasyMetadata({ data: "json, name=matched" })
  matched?: VerifyTransactionCriteriaMatchedEnum;

  @SpeakeasyMetadata({ data: "json, name=verifiedTransaction", elemType: Transaction })
  verifiedTransaction?: Transaction[];
}
