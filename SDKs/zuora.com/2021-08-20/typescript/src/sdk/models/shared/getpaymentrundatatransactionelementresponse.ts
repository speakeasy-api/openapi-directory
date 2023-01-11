import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetPaymentRunDataTransactionElementResponseStatusEnum {
    Processed = "Processed",
    Processing = "Processing",
    Error = "Error"
}

export enum GetPaymentRunDataTransactionElementResponseTypeEnum {
    Payment = "Payment",
    CreditMemo = "CreditMemo",
    UnappliedPayment = "UnappliedPayment",
    CreditBalanceAdjustment = "CreditBalanceAdjustment"
}


export class GetPaymentRunDataTransactionElementResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount?: number;

  @SpeakeasyMetadata({ data: "json, name=appliedAmount" })
  appliedAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=errorCode" })
  errorCode?: string;

  @SpeakeasyMetadata({ data: "json, name=errorMessage" })
  errorMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: GetPaymentRunDataTransactionElementResponseStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: GetPaymentRunDataTransactionElementResponseTypeEnum;
}
