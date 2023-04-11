import { SpeakeasyBase } from "../../../internal/utils";
export declare class ProxyGetPaymentMethodTransactionLog extends SpeakeasyBase {
    gateway?: string;
    gatewayReasonCode?: string;
    gatewayReasonCodeDescription?: string;
    gatewayTransactionType?: string;
    /**
     * Object identifier.
     */
    id?: string;
    paymentMethodId?: string;
    paymentMethodType?: string;
    requestString?: string;
    responseString?: string;
    transactionDate?: Date;
    transactionId?: string;
}
