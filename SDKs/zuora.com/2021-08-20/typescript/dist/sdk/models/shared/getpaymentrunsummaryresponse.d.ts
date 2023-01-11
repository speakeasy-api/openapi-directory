import { SpeakeasyBase } from "../../../internal/utils";
import { GetPaymentRunSummaryTotalValues } from "./getpaymentrunsummarytotalvalues";
export declare class GetPaymentRunSummaryResponse extends SpeakeasyBase {
    numberOfCreditBalanceAdjustments?: number;
    numberOfCreditMemos?: number;
    numberOfDebitMemos?: number;
    numberOfErrorInputData?: number;
    numberOfErrors?: number;
    numberOfInputData?: number;
    numberOfInvoices?: number;
    numberOfPayments?: number;
    numberOfProcessedInputData?: number;
    numberOfReceivables?: number;
    numberOfUnappliedPayments?: number;
    numberOfUnprocessedDebitMemos?: number;
    numberOfUnprocessedInvoices?: number;
    numberOfUnprocessedReceivables?: number;
    success?: boolean;
    totalValues?: GetPaymentRunSummaryTotalValues[];
}
