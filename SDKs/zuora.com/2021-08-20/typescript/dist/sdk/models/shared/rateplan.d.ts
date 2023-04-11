import { SpeakeasyBase } from "../../../internal/utils";
export declare class RatePlan extends SpeakeasyBase {
    /**
     *  The ID of the amendment associated with the rate plan. This field only applies to amendment rate plans.
     *
     * @remarks
     *
     *
     * **Character limit**: 32
     *
     * **Values**: a valid amendment ID
     */
    amendmentId?: string;
    /**
     * The ID of the subscription rate plan modified by the amendment. This field only applies to amendment rate plans.
     *
     * @remarks
     *
     * **Character limit**: 32
     *
     * **Values**: a valid rate plan ID
     */
    amendmentSubscriptionRatePlanId?: string;
    /**
     * The type of amendment associated with the rate plan. This field only applies to amendment rate plans.
     *
     * @remarks
     *
     * **Character limit**: 18
     *
     * **Values**: inherited from `Amendment.Type`
     */
    amendmentType?: string;
    /**
     * The ID of the Zuora user who created the RatePlan object.
     *
     * @remarks
     *
     * **Character limit**: 32
     *
     * **Values**: automatically generated
     */
    createdById?: string;
    /**
     * The date when the `RatePlan` object was last updated.
     *
     * @remarks
     *
     * **Character limit**: 29
     *
     * **Values**: automatically generated
     */
    createdDate?: Date;
    /**
     * The name of the rate plan. Leave this null in a subscribe call to inherited the `ProductRatePlan.Name` field value.
     *
     * @remarks
     *
     * **Character limit**: 100
     *
     * **Values**: a string of 100 characters or fewer or inherited from ProductRatePlan.Name
     */
    name?: string;
    /**
     * The ID of the associated product rate plan.
     *
     * @remarks
     *
     * **Character limit**: 32
     *
     * **Values**: a valid product rate plan ID
     */
    productRatePlanId: string;
    /**
     * The ID of the subscription that the rate plan belongs to.
     *
     * @remarks
     *
     * **Character limit**: 32
     *
     * **Values**: a valid subscription ID
     */
    subscriptionId?: string;
    /**
     *  The ID of the user who last updated the rate plan.
     *
     * @remarks
     *
     *
     * **Character limit**: 32
     *
     * **Values**: automatically generated
     */
    updatedById?: string;
    /**
     *  The date when the rate plan was last updated.
     *
     * @remarks
     *
     *
     * **Character limit**: 29
     *
     * **Values**: automatically generated
     */
    updatedDate?: Date;
}
