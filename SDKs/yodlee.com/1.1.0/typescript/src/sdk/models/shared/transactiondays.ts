import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum TransactionDaysFullAccountNumberFieldsEnum {
    PaymentAccountNumber = "paymentAccountNumber",
    UnmaskedAccountNumber = "unmaskedAccountNumber"
}


export class TransactionDays extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fullAccountNumberFields" })
  fullAccountNumberFields?: TransactionDaysFullAccountNumberFieldsEnum[];

  @SpeakeasyMetadata({ data: "json, name=numberOfTransactionDays" })
  numberOfTransactionDays?: number;
}
