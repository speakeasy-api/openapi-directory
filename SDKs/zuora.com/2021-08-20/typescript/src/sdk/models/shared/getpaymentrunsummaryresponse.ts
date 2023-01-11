import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GetPaymentRunSummaryTotalValues } from "./getpaymentrunsummarytotalvalues";



export class GetPaymentRunSummaryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=numberOfCreditBalanceAdjustments" })
  numberOfCreditBalanceAdjustments?: number;

  @SpeakeasyMetadata({ data: "json, name=numberOfCreditMemos" })
  numberOfCreditMemos?: number;

  @SpeakeasyMetadata({ data: "json, name=numberOfDebitMemos" })
  numberOfDebitMemos?: number;

  @SpeakeasyMetadata({ data: "json, name=numberOfErrorInputData" })
  numberOfErrorInputData?: number;

  @SpeakeasyMetadata({ data: "json, name=numberOfErrors" })
  numberOfErrors?: number;

  @SpeakeasyMetadata({ data: "json, name=numberOfInputData" })
  numberOfInputData?: number;

  @SpeakeasyMetadata({ data: "json, name=numberOfInvoices" })
  numberOfInvoices?: number;

  @SpeakeasyMetadata({ data: "json, name=numberOfPayments" })
  numberOfPayments?: number;

  @SpeakeasyMetadata({ data: "json, name=numberOfProcessedInputData" })
  numberOfProcessedInputData?: number;

  @SpeakeasyMetadata({ data: "json, name=numberOfReceivables" })
  numberOfReceivables?: number;

  @SpeakeasyMetadata({ data: "json, name=numberOfUnappliedPayments" })
  numberOfUnappliedPayments?: number;

  @SpeakeasyMetadata({ data: "json, name=numberOfUnprocessedDebitMemos" })
  numberOfUnprocessedDebitMemos?: number;

  @SpeakeasyMetadata({ data: "json, name=numberOfUnprocessedInvoices" })
  numberOfUnprocessedInvoices?: number;

  @SpeakeasyMetadata({ data: "json, name=numberOfUnprocessedReceivables" })
  numberOfUnprocessedReceivables?: number;

  @SpeakeasyMetadata({ data: "json, name=success" })
  success?: boolean;

  @SpeakeasyMetadata({ data: "json, name=totalValues", elemType: GetPaymentRunSummaryTotalValues })
  totalValues?: GetPaymentRunSummaryTotalValues[];
}
