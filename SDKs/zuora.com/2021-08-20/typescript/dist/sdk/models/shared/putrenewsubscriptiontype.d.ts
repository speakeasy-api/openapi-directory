import { SpeakeasyBase } from "../../../internal/utils";
export declare class PutRenewSubscriptionType extends SpeakeasyBase {
    applicationOrder?: string[];
    applyCredit?: boolean;
    applyCreditBalance?: boolean;
    collect?: boolean;
    documentDate?: Date;
    invoice?: boolean;
    invoiceCollect?: boolean;
    invoiceTargetDate?: Date;
    runBilling?: boolean;
    targetDate?: Date;
}
