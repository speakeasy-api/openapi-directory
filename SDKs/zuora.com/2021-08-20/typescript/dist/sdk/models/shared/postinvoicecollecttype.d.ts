import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostInvoiceCollectType extends SpeakeasyBase {
    accountKey: string;
    documentDate?: Date;
    invoiceDate?: Date;
    invoiceId?: string;
    invoiceTargetDate?: Date;
    paymentGateway?: string;
    targetDate?: Date;
}
