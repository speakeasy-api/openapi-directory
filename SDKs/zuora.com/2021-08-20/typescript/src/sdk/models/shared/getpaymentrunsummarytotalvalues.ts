import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetPaymentRunSummaryTotalValues extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=totalValueOfCreditBalance" })
  totalValueOfCreditBalance?: string;

  @SpeakeasyMetadata({ data: "json, name=totalValueOfCreditMemos" })
  totalValueOfCreditMemos?: string;

  @SpeakeasyMetadata({ data: "json, name=totalValueOfDebitMemos" })
  totalValueOfDebitMemos?: string;

  @SpeakeasyMetadata({ data: "json, name=totalValueOfErrors" })
  totalValueOfErrors?: string;

  @SpeakeasyMetadata({ data: "json, name=totalValueOfInvoices" })
  totalValueOfInvoices?: string;

  @SpeakeasyMetadata({ data: "json, name=totalValueOfPayments" })
  totalValueOfPayments?: string;

  @SpeakeasyMetadata({ data: "json, name=totalValueOfReceivables" })
  totalValueOfReceivables?: string;

  @SpeakeasyMetadata({ data: "json, name=totalValueOfUnappliedPayments" })
  totalValueOfUnappliedPayments?: number;

  @SpeakeasyMetadata({ data: "json, name=totalValueOfUnprocessedDebitMemos" })
  totalValueOfUnprocessedDebitMemos?: string;

  @SpeakeasyMetadata({ data: "json, name=totalValueOfUnprocessedInvoices" })
  totalValueOfUnprocessedInvoices?: string;

  @SpeakeasyMetadata({ data: "json, name=totalValueOfUnprocessedReceivables" })
  totalValueOfUnprocessedReceivables?: string;
}
