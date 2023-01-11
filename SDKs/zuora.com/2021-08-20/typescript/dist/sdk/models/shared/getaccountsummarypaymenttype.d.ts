import { SpeakeasyBase } from "../../../internal/utils";
import { GetAccountSummaryPaymentInvoiceType } from "./getaccountsummarypaymentinvoicetype";
export declare class GetAccountSummaryPaymentType extends SpeakeasyBase {
    effectiveDate?: Date;
    id?: string;
    paidInvoices?: GetAccountSummaryPaymentInvoiceType[];
    paymentNumber?: string;
    paymentType?: string;
    status?: string;
}
