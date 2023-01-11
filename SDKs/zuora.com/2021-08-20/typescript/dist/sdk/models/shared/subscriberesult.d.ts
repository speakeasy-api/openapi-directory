import { SpeakeasyBase } from "../../../internal/utils";
import { NewChargeMetrics } from "./newchargemetrics";
import { ActionSubscribeCreditMemoData } from "./actionsubscribecreditmemodata";
import { ActionsErrorResponse } from "./actionserrorresponse";
import { ActionSubscribeInvoiceData } from "./actionsubscribeinvoicedata";
export declare class SubscribeResultChargeMetricsData extends SpeakeasyBase {
    chargeMetrics?: NewChargeMetrics[];
}
export declare class SubscribeResultCreditMemoResultCreditMemo extends SpeakeasyBase {
    creditMemoNumber?: string;
    id?: string;
}
/**
 * The result of the credit memo.
 *
 * **Note**: This field is only available if you have the Invoice Settlement feature enabled and set the `X-Zuora-WSDL-Version` request header to `107` or later.
 *
**/
export declare class SubscribeResultCreditMemoResult extends SpeakeasyBase {
    creditMemo?: SubscribeResultCreditMemoResultCreditMemo[];
}
export declare class SubscribeResultInvoiceResultInvoice extends SpeakeasyBase {
    id?: string;
    invoiceNumber?: string;
}
export declare class SubscribeResultInvoiceResult extends SpeakeasyBase {
    invoice?: SubscribeResultInvoiceResultInvoice[];
}
export declare class SubscribeResult extends SpeakeasyBase {
    accountId?: string;
    accountNumber?: string;
    chargeMetricsData?: SubscribeResultChargeMetricsData;
    creditMemoData?: ActionSubscribeCreditMemoData[];
    creditMemoId?: string;
    creditMemoNumber?: string;
    creditMemoResult?: SubscribeResultCreditMemoResult;
    errors?: ActionsErrorResponse[];
    gatewayResponse?: string;
    gatewayResponseCode?: string;
    invoiceData?: ActionSubscribeInvoiceData[];
    invoiceId?: string;
    invoiceNumber?: string;
    invoiceResult?: SubscribeResultInvoiceResult;
    paymentId?: string;
    paymentTransactionNumber?: string;
    subscriptionId?: string;
    subscriptionNumber?: string;
    success?: boolean;
    totalMrr?: number;
    totalTcv?: number;
}
