import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Container for custom fields of a Rate Plan object.
 *
 * @remarks
 *
 */
export declare class ProxyGetRatePlan extends SpeakeasyBase {
    /**
     *  The ID of the amendment associated with the rate plan. This field only applies to amendment rate plans.
     *
     * @remarks
     * **Character limit**: 32 **Values**: a valid amendment ID
     */
    amendmentId?: string;
    /**
     * The type of amendment associated with the rate plan. This field only applies to amendment rate plans.
     */
    amendmentType?: string;
    /**
     * The ID of the Zuora user who created the RatePlan object. **Character limit**: 32 **Values**: automatically generated
     */
    createdById?: string;
    /**
     * The date when the `RatePlan` object was last updated. **Character limit**: 29 **Values**: automatically generated
     */
    createdDate?: Date;
    /**
     * Object identifier.
     */
    id?: string;
    /**
     * The name of the rate plan.
     *
     * @remarks
     *
     * **Values**: inherited from `ProductRatePlan.Name`
     */
    name?: string;
    /**
     * The ID of the subscription that the rate plan belongs to. **Character limit**: 32 **Values**: a valid subscription ID
     */
    subscriptionId?: string;
    /**
     *  The ID of the user who last updated the rate plan.
     *
     * @remarks
     * **Character limit**: 32 **Values**: automatically generated
     */
    updatedById?: string;
    /**
     *  The date when the rate plan was last updated.
     *
     * @remarks
     * **Character limit**: 29 **Values**: automatically generated
     */
    updatedDate?: Date;
}
