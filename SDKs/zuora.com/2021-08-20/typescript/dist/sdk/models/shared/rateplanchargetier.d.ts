import { SpeakeasyBase } from "../../../internal/utils";
/**
 *  Indicates if the price is a flat fee or is per unit.
 *
 * @remarks
 *
 *
 * **Character limit**: 8
 *
 *
 * **Values**: `FlatFee`, `PerUnit`
 */
export declare enum RatePlanChargeTierPriceFormatEnum {
    FlatFee = "FlatFee",
    PerUnit = "PerUnit"
}
export declare class RatePlanChargeTier extends SpeakeasyBase {
    /**
     * The ID of the Zuora user who created the RatePlanChargeTier object.
     *
     * @remarks
     *
     * **Character limit**: 32
     *
     *
     * **Values**: automatically generated
     */
    createdById?: string;
    /**
     *  The date when the RatePlanChargeTier object was created.
     *
     * @remarks
     *
     *
     * **Character limit**: 29
     *
     *
     * **Values**: automatically generated
     */
    createdDate?: Date;
    /**
     *  The end number of a range of units for the tier. This field is only required if the charge mode is `Tiered Pricing` or `Tierred with Overage Pricing`.
     *
     * @remarks
     *
     *
     * **Character limit**: 16
     *
     *
     * **Values**: any positive decimal value
     */
    endingUnit?: number;
    /**
     *  Indicates if the price is an overage price. An overage occurs when usage surpasses the last defined tier. This field is applicable only to tier pricing and volume pricing models.
     *
     * @remarks
     *
     *
     *
     * **Values**: true, false
     */
    isOveragePrice?: boolean;
    /**
     *  The price of the tier if the charge is a flat fee, or the price of each unit in the tier if the change model is tiered pricing.
     *
     * @remarks
     *
     *
     * **Character limit**: 16
     *
     *
     * **Values**: any positive decimal value
     */
    price?: number;
    /**
     *  Indicates if the price is a flat fee or is per unit.
     *
     * @remarks
     *
     *
     * **Character limit**: 8
     *
     *
     * **Values**: `FlatFee`, `PerUnit`
     */
    priceFormat?: RatePlanChargeTierPriceFormatEnum;
    /**
     *  The ID of the subscription or amendment rate plan charge associated with this tier. You can't create an unassociated tier.
     *
     * @remarks
     *
     *
     * **Character limit**: 32
     *
     *
     * **Values**: inherited from `RatePlanCharge`.`Id`
     */
    ratePlanChargeId: string;
    /**
     *  The start number of a range of units for the tier. This field is only required if the charge mode is `Tiered Pricing` or `Tierred with Overage Pricing`.
     *
     * @remarks
     *
     *
     * **Character limit**: 16
     *
     *
     * **Values**: any positive decimal value
     */
    startingUnit?: number;
    /**
     *  A unique number that identifies the tier that the price applies to.
     *
     * @remarks
     *
     *
     * **Character limit**: 20
     *
     *
     * **Values**: automatically generated
     */
    tier?: number;
    /**
     * The ID of the last user to update the object.
     *
     * @remarks
     *
     * **Character limit**: 32
     *
     *
     * **Values**: automatically generated
     */
    updatedById?: string;
    /**
     *  The date when the object was last updated.
     *
     * @remarks
     *
     *
     * **Character limit**: 29
     *
     *
     * **Values**: automatically generated
     */
    updatedDate?: Date;
}
