import { SpeakeasyBase } from "../../../internal/utils";
/**
 * get billingPreviewRun response
**/
export declare class GetBillingPreviewRunResponse extends SpeakeasyBase {
    assumeRenewal?: string;
    batch?: string;
    chargeTypeToExclude?: string;
    createdById?: string;
    createdDate?: string;
    endDate?: string;
    errorMessage?: string;
    includingEvergreenSubscription?: boolean;
    resultFileUrl?: string;
    runNumber?: string;
    startDate?: string;
    status?: string;
    succeededAccounts?: number;
    success?: boolean;
    targetDate?: Date;
    totalAccounts?: number;
    updatedById?: string;
    updatedDate?: Date;
}
