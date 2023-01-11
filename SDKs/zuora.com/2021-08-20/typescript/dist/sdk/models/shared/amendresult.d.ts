import { SpeakeasyBase } from "../../../internal/utils";
import { ChargeMetricsData } from "./chargemetricsdata";
import { ActionAmendCreditMemoData } from "./actionamendcreditmemodata";
import { ActionsErrorResponse } from "./actionserrorresponse";
import { ActionAmendInvoiceData } from "./actionamendinvoicedata";
export declare class AmendResult extends SpeakeasyBase {
    amendmentIds?: string[];
    chargeMetricsData?: ChargeMetricsData;
    creditMemoDatas?: ActionAmendCreditMemoData[];
    creditMemoId?: string;
    errors?: ActionsErrorResponse[];
    gatewayResponse?: string;
    gatewayResponseCode?: string;
    invoiceDatas?: ActionAmendInvoiceData[];
    invoiceId?: string;
    paymentId?: string;
    paymentTransactionNumber?: string;
    subscriptionId?: string;
    success?: boolean;
    totalDeltaMrr?: number;
    totalDeltaTcv?: number;
}
