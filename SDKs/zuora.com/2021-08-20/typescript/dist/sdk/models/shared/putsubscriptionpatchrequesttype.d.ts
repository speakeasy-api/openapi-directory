import { SpeakeasyBase } from "../../../internal/utils";
export declare class PutSubscriptionPatchRequestTypeRatePlansCharges extends SpeakeasyBase {
    chargeId?: string;
    chargeNumber?: string;
    customFields?: Record<string, any>;
}
export declare class PutSubscriptionPatchRequestTypeRatePlans extends SpeakeasyBase {
    charges?: PutSubscriptionPatchRequestTypeRatePlansCharges[];
    customFields?: Record<string, any>;
    ratePlanId: string;
}
export declare class PutSubscriptionPatchRequestType extends SpeakeasyBase {
    customFields?: Record<string, any>;
    ratePlans?: PutSubscriptionPatchRequestTypeRatePlans[];
}
