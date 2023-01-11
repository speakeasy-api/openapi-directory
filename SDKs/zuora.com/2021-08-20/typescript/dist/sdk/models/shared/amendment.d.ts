import { SpeakeasyBase } from "../../../internal/utils";
import { RatePlan } from "./rateplan";
import { RatePlanChargeDataInRatePlanData } from "./rateplanchargedatainrateplandata";
import { SubscriptionProductFeatureList } from "./subscriptionproductfeaturelist";
/**
 * A container for one `RatePlanData`. This field is only required if the `Type` field is set to `NewProduct`, `RemoveProduct`, or `UpdateProduct`.
 *
**/
export declare class AmendmentRatePlanData extends SpeakeasyBase {
    ratePlan: RatePlan;
    ratePlanChargeData?: RatePlanChargeDataInRatePlanData[];
    subscriptionProductFeatureList?: SubscriptionProductFeatureList;
}
export declare class Amendment extends SpeakeasyBase {
    autoRenew?: boolean;
    code?: string;
    contractEffectiveDate: Date;
    createdById?: string;
    createdDate?: Date;
    currentTerm?: number;
    currentTermPeriodType?: string;
    customerAcceptanceDate?: Date;
    description?: string;
    destinationAccountId?: string;
    destinationInvoiceOwnerId?: string;
    effectiveDate?: Date;
    name: string;
    ratePlanData?: AmendmentRatePlanData;
    renewalSetting?: string;
    renewalTerm?: number;
    renewalTermPeriodType?: string;
    resumeDate?: Date;
    serviceActivationDate?: Date;
    specificUpdateDate?: Date;
    status?: string;
    subscriptionId: string;
    suspendDate?: Date;
    termStartDate?: Date;
    termType?: string;
    type: string;
    updatedById?: string;
    updatedDate?: Date;
}
