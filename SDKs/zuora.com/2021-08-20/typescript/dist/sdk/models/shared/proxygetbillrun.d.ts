import { SpeakeasyBase } from "../../../internal/utils";
export declare class ProxyGetBillRun extends SpeakeasyBase {
    accountId?: string;
    autoEmail?: boolean;
    autoPost?: boolean;
    autoRenewal?: boolean;
    batch?: string;
    billCycleDay?: string;
    billRunNumber?: string;
    createdById?: string;
    createdDate?: Date;
    executedDate?: Date;
    id?: string;
    invoiceDate?: Date;
    invoicesEmailed?: boolean;
    lastEmailSentTime?: Date;
    noEmailForZeroAmountInvoice?: boolean;
    numberOfAccounts?: number;
    numberOfInvoices?: number;
    status?: string;
    targetDate?: Date;
    updatedById?: string;
    updatedDate?: Date;
}
