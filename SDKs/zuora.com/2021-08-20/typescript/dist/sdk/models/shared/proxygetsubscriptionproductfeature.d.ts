import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Container for custom fields of a Subscription Product Feature object.
 *
 * @remarks
 *
 */
export declare class ProxyGetSubscriptionProductFeature extends SpeakeasyBase {
    createdById?: string;
    /**
     *  Date and time when the product feature was added to the subscription.
     *
     * @remarks
     * **Character limit**: 29 **Values**:
     */
    createdDate?: Date;
    /**
     *  Description of the subscription product feature.
     *
     * @remarks
     * **Character limit**: 500 **Values**:
     */
    description?: string;
    /**
     *  Unique code of the feature.
     *
     * @remarks
     * **Character limit**: 255 **Values**:
     */
    featureCode?: string;
    /**
     *  Internal Zuora ID of the feature.
     *
     * @remarks
     * **Character limit**: 32 **Values**:
     */
    featureId?: string;
    /**
     * Object identifier.
     */
    id?: string;
    /**
     *  Name of the feature.
     *
     * @remarks
     * **Character limit**: 255 **Values**:
     */
    name?: string;
    /**
     *  Id of the product rate plan to which the feature belongs.
     *
     * @remarks
     * **Character limit**: 32 **Values**:
     */
    ratePlanId?: string;
    /**
     *  Internal Zuora ID of the user who last updated the subscription product feature.
     *
     * @remarks
     * **Character limit**: 32 **Values**:
     */
    updatedById?: string;
    /**
     *  Date and time when the subscription product feature was last updated.
     *
     * @remarks
     * **Character limit**: 29 **Values**:
     */
    updatedDate?: Date;
}
