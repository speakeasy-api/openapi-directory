import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Container for custom fields of a Product Feature object.
 *
 * @remarks
 *
 */
export declare class ProxyGetProductFeature extends SpeakeasyBase {
    /**
     * The ID of the Zuora user who created the Account object. **Character limit**: 32 **Values**: automatically generated
     */
    createdById?: string;
    /**
     * The date when the Account object was created. **Character limit**: 29 **Values**: automatically generated
     */
    createdDate?: Date;
    /**
     *  Internal Zuora ID of the product feature. This field is not editable.
     *
     * @remarks
     * **Character limit**: 32 **Values**: a string of 32 characters or fewer
     */
    featureId?: string;
    /**
     * Object identifier.
     */
    id?: string;
    /**
     *  Id of the product to which the feature belongs. This field is not editable.
     *
     * @remarks
     * **Character limit**: 32 **Values**: a string of 32 characters or fewer
     */
    productId?: string;
    /**
     * The ID of the user who last updated the account. **Character limit**: 32 **Values**: automatically generated
     */
    updatedById?: string;
    /**
     * The date when the account was last updated. **Character limit**: 29 **Values**: automatically generated
     */
    updatedDate?: Date;
}
