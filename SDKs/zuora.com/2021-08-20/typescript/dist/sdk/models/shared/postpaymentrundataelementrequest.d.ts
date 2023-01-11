import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostPaymentRunDataElementRequestDocumentTypeEnum {
    Invoice = "Invoice",
    DebitMemo = "DebitMemo"
}
export declare class PostPaymentRunDataElementRequest extends SpeakeasyBase {
    accountId: string;
    amount?: number;
    comment?: string;
    documentId?: string;
    documentType?: PostPaymentRunDataElementRequestDocumentTypeEnum;
    paymentGatewayId?: string;
    paymentMethodId?: string;
}
