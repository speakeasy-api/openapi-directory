import { SpeakeasyBase } from "../../../internal/utils";
export declare class PUTSubscriptionPatchRequestTypeRatePlansCharges extends SpeakeasyBase {
    /**
     * Use either this field or the `chargeNumber` field to specify the charge for which you will be updating the custom fields. By using this field you actually specify a specific charge segment of a charge. See [Segmented rate plan charges](https://knowledgecenter.zuora.com/Central_Platform/API/G_SOAP_API/E1_SOAP_API_Object_Reference/RatePlanCharge#Segmented_rate_plan_charges) for more information about charge segments.
     *
     * @remarks
     *
     */
    chargeId?: string;
    /**
     * Use either this field or the `chargeId` field to specify the charge for which you will be updating the custom fields. By using this field you actually specify the last charge segment of a charge. See [Segmented rate plan charges](https://knowledgecenter.zuora.com/Central_Platform/API/G_SOAP_API/E1_SOAP_API_Object_Reference/RatePlanCharge#Segmented_rate_plan_charges) for more information about charge segments.
     *
     * @remarks
     *
     */
    chargeNumber?: string;
    /**
     * Container for custom fields of a Rate Plan Charge object.
     *
     * @remarks
     *
     */
    customFields?: Record<string, any>;
}
export declare class PUTSubscriptionPatchRequestTypeRatePlans extends SpeakeasyBase {
    charges?: PUTSubscriptionPatchRequestTypeRatePlansCharges[];
    /**
     * Container for custom fields of a Rate Plan object.
     *
     * @remarks
     *
     */
    customFields?: Record<string, any>;
    /**
     * The rate plan id in any version of the subscription. This will be linked to the only one rate plan in the current version.
     */
    ratePlanId: string;
}
export declare class PUTSubscriptionPatchRequestType extends SpeakeasyBase {
    /**
     * Container for custom fields of a Subscription object.
     *
     * @remarks
     *
     */
    customFields?: Record<string, any>;
    ratePlans?: PUTSubscriptionPatchRequestTypeRatePlans[];
}
