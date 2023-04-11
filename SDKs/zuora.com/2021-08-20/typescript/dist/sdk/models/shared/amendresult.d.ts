import { SpeakeasyBase } from "../../../internal/utils";
import { ActionAmendCreditMemoData } from "./actionamendcreditmemodata";
import { ActionAmendInvoiceData } from "./actionamendinvoicedata";
import { ActionsErrorResponse } from "./actionserrorresponse";
import { ChargeMetricsData } from "./chargemetricsdata";
export declare class AmendResult extends SpeakeasyBase {
    /**
     * A list of the IDs of the associated amendments. There can be as many as three amendment IDs. Use a comma to separate each amendment ID.
     *
     * @remarks
     *
     */
    amendmentIds?: string[];
    chargeMetricsData?: ChargeMetricsData;
    creditMemoDatas?: ActionAmendCreditMemoData[];
    creditMemoId?: string;
    errors?: ActionsErrorResponse[];
    gatewayResponse?: string;
    gatewayResponseCode?: string;
    /**
     * This array of invoices contains one invoice only as one invoice is generated for one subscription.
     *
     * @remarks
     *
     */
    invoiceDatas?: ActionAmendInvoiceData[];
    invoiceId?: string;
    paymentId?: string;
    paymentTransactionNumber?: string;
    subscriptionId?: string;
    success?: boolean;
    totalDeltaMrr?: number;
    totalDeltaTcv?: number;
}
