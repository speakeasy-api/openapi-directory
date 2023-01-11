import { SpeakeasyBase } from "../../../internal/utils";
export declare class PutSubscriptionResumeType extends SpeakeasyBase {
    applicationOrder?: string[];
    applyCredit?: boolean;
    applyCreditBalance?: boolean;
    collect?: boolean;
    contractEffectiveDate?: Date;
    documentDate?: Date;
    extendsTerm?: boolean;
    invoice?: boolean;
    invoiceCollect?: boolean;
    invoiceTargetDate?: Date;
    resumePeriods?: string;
    resumePeriodsType?: string;
    resumePolicy: string;
    resumeSpecificDate?: Date;
    runBilling?: boolean;
    targetDate?: Date;
}
