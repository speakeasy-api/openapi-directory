import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostSubscriptionCancellationType extends SpeakeasyBase {
    applicationOrder?: string[];
    applyCredit?: boolean;
    applyCreditBalance?: boolean;
    cancellationEffectiveDate?: Date;
    cancellationPolicy: string;
    collect?: boolean;
    contractEffectiveDate?: Date;
    documentDate?: Date;
    invoice?: boolean;
    invoiceCollect: boolean;
    invoiceTargetDate?: Date;
    runBilling?: boolean;
    targetDate?: Date;
}
