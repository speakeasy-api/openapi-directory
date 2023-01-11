import { SpeakeasyBase } from "../../../internal/utils";
import { GetPaymentRunDataTransactionElementResponse } from "./getpaymentrundatatransactionelementresponse";
export declare enum GetPaymentRunDataElementResponseDocumentTypeEnum {
    Invoice = "Invoice",
    DebitMemo = "DebitMemo"
}
export declare enum GetPaymentRunDataElementResponseResultEnum {
    Processed = "Processed",
    Error = "Error"
}
export declare class GetPaymentRunDataElementResponse extends SpeakeasyBase {
    accountId?: string;
    amount?: number;
    amountCollected?: number;
    amountToCollect?: number;
    comment?: string;
    documentId?: string;
    documentType?: GetPaymentRunDataElementResponseDocumentTypeEnum;
    errorCode?: string;
    errorMessage?: string;
    paymentGatewayId?: string;
    paymentMethodId?: string;
    result?: GetPaymentRunDataElementResponseResultEnum;
    transactions?: GetPaymentRunDataTransactionElementResponse[];
}
