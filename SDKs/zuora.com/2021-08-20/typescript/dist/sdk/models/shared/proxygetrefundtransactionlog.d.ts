import { SpeakeasyBase } from "../../../internal/utils";
export declare class ProxyGetRefundTransactionLog extends SpeakeasyBase {
    batchId?: string;
    gateway?: string;
    gatewayReasonCode?: string;
    gatewayReasonCodeDescription?: string;
    gatewayState?: string;
    gatewayTransactionType?: string;
    /**
     * Object identifier.
     */
    id?: string;
    refundId?: string;
    requestString?: string;
    responseString?: string;
    transactionDate?: Date;
    transactionId?: string;
}
