import { SpeakeasyBase } from "../../../internal/utils";
export declare class PutSubscriptionSuspendType extends SpeakeasyBase {
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
    resume?: boolean;
    resumePeriods?: string;
    resumePeriodsType?: string;
    resumePolicy?: string;
    resumeSpecificDate?: Date;
    runBilling?: boolean;
    suspendPeriods?: string;
    suspendPeriodsType?: string;
    suspendPolicy: string;
    suspendSpecificDate?: Date;
    targetDate?: Date;
}
