import { SpeakeasyBase } from "../../../internal/utils";
export declare class AccountBillingInvoicesPathParams extends SpeakeasyBase {
    accountId: string;
}
export declare class AccountBillingInvoicesQueryParams extends SpeakeasyBase {
    from?: Date;
    to?: Date;
}
export declare class AccountBillingInvoices200ApplicationJsonInvoices extends SpeakeasyBase {
    balance?: number;
    dueDate?: string;
    id?: string;
    invoiceDate?: string;
    invoiceNumber?: string;
    status?: string;
    targetDate?: string;
    taxAmount?: number;
    totalAmount?: number;
}
export declare class AccountBillingInvoices200ApplicationJson extends SpeakeasyBase {
    currency?: string;
    invoices?: AccountBillingInvoices200ApplicationJsonInvoices[];
}
export declare class AccountBillingInvoicesRequest extends SpeakeasyBase {
    pathParams: AccountBillingInvoicesPathParams;
    queryParams: AccountBillingInvoicesQueryParams;
}
export declare class AccountBillingInvoicesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    accountBillingInvoices200ApplicationJSONObject?: AccountBillingInvoices200ApplicationJson;
}
