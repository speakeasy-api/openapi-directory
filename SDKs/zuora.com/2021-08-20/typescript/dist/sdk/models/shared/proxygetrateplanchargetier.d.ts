import { SpeakeasyBase } from "../../../internal/utils";
export declare class ProxyGetRatePlanChargeTier extends SpeakeasyBase {
    /**
     * The ID of the Zuora user who created the RatePlanChargeTier object. **Character limit**: 32 **Values**: automatically generated
     */
    createdById?: string;
    /**
     *  The date when the RatePlanChargeTier object was created.
     *
     * @remarks
     * **Character limit**: 29 **Values**: automatically generated
     */
    createdDate?: Date;
    /**
     *  The end number of a range of units for the tier.
     *
     * @remarks
     * **Character limit**: 16 **Values**: any positive decimal value
     */
    endingUnit?: number;
    /**
     * Object identifier.
     */
    id?: string;
    /**
     *  The price of the tier if the charge is a flat fee, or the price of each unit in the tier if the change model is tiered pricing.
     *
     * @remarks
     * **Character limit**: 16 **Values**: any positive decimal value
     */
    price?: number;
    /**
     *  Indicates if the price is a flat fee or is per unit.
     *
     * @remarks
     * **Character limit**: 8 **Values**: `Flat Fee`, `Per Unit`
     */
    priceFormat?: string;
    /**
     *  The ID of the subscription or amendment rate plan charge associated with this tier. You can't create an unassociated tier.
     *
     * @remarks
     * **Character limit**: 32 **Values**: inherited from `RatePlanCharge.Id`.
     */
    ratePlanChargeId?: string;
    /**
     *  The start number of a range of units for the tier.
     *
     * @remarks
     * **Character limit**: 16 **Values**: any positive decimal value
     */
    startingUnit?: number;
    /**
     *  A unique number that identifies the tier that the price applies to.
     *
     * @remarks
     * **Character limit**: 20 **Values**: automatically generated
     */
    tier?: number;
    /**
     * The ID of the last user to update the object. **Character limit**: 32 **Values**: automatically generated
     */
    updatedById?: string;
    /**
     *  The date when the object was last updated.
     *
     * @remarks
     * **Character limit**: 29 **Values**: automatically generated
     */
    updatedDate?: Date;
}
