import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ProxyGetPaymentTransactionLogGatewayStateEnum {
    MarkedForSubmission = "MarkedForSubmission",
    Submitted = "Submitted",
    Settled = "Settled",
    NotSubmitted = "NotSubmitted",
    FailedToSettle = "FailedToSettle"
}
export declare enum ProxyGetPaymentTransactionLogGatewayTransactionTypeEnum {
    Authorization = "Authorization",
    Sale = "Sale",
    Void = "Void",
    Inquiry = "Inquiry",
    VoidAuth = "VoidAuth"
}
export declare class ProxyGetPaymentTransactionLog extends SpeakeasyBase {
    avsResponseCode?: string;
    batchId?: string;
    cvvResponseCode?: string;
    gateway?: string;
    gatewayReasonCode?: string;
    gatewayReasonCodeDescription?: string;
    gatewayState?: ProxyGetPaymentTransactionLogGatewayStateEnum;
    gatewayTransactionType?: ProxyGetPaymentTransactionLogGatewayTransactionTypeEnum;
    id?: string;
    paymentId?: string;
    requestString?: string;
    responseString?: string;
    transactionDate?: Date;
    transactionId?: string;
}
