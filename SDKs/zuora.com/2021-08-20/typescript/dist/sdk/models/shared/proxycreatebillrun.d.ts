import { SpeakeasyBase } from "../../../internal/utils";
export declare class ProxyCreateBillRun extends SpeakeasyBase {
    accountId?: string;
    autoEmail?: boolean;
    autoPost?: boolean;
    autoRenewal?: boolean;
    batch?: string;
    billCycleDay?: string;
    chargeTypeToExclude?: string;
    invoiceDate: Date;
    noEmailForZeroAmountInvoice?: boolean;
    targetDate: Date;
}
