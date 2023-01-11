import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetAccountBillingInvoicePathParams extends SpeakeasyBase {
    accountId: string;
    invoiceId: string;
}
export declare class GetAccountBillingInvoice200ApplicationJsonInvoiceItems extends SpeakeasyBase {
    chargeName?: string;
    chargeNumber?: string;
    chargeType?: string;
    endDate?: Date;
    quantity?: number;
    startDate?: Date;
    taxAmount?: number;
    totalAmount?: number;
}
export declare class GetAccountBillingInvoice200ApplicationJson extends SpeakeasyBase {
    balance?: number;
    currency?: string;
    dueDate?: string;
    id?: string;
    invoiceDate?: string;
    invoiceItems?: GetAccountBillingInvoice200ApplicationJsonInvoiceItems[];
    invoiceNumber?: string;
    status?: string;
    targetDate?: string;
    taxAmount?: number;
    totalAmount?: number;
}
export declare class GetAccountBillingInvoiceRequest extends SpeakeasyBase {
    pathParams: GetAccountBillingInvoicePathParams;
}
export declare class GetAccountBillingInvoiceResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    getAccountBillingInvoice200ApplicationJSONObject?: GetAccountBillingInvoice200ApplicationJson;
}
