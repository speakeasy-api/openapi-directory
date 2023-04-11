import { SpeakeasyBase } from "../../../internal/utils";
export declare class ProxyGetProductRatePlanChargeTier extends SpeakeasyBase {
    /**
     * The ID of the Zuora user who created the ProductRatePlanChargeTier object. **Character limit**: 32 **Values**: automatically generated
     */
    createdById?: string;
    /**
     * The date when the ProductRatePlanChargeTier object was created. **Character limit**: 29 **Values**: automatically generated
     */
    createdDate?: Date;
    /**
     * The code corresponding to the currency for the tier's price. **Character limit**: 3 **Values**: a valid currency code
     */
    currency?: string;
    /**
     * The end number of a range of units for the tier. **Character limit**: 16 **Values**: any positive decimal value
     */
    endingUnit?: number;
    /**
     * Object identifier.
     */
    id?: string;
    /**
     *  The price of the tier if the charge is a flat fee, or the price of each unit in the tier if the charge model is tiered pricing.
     *
     * @remarks
     * **Character limit**: 16 **Values**: a valid currency value
     */
    price?: number;
    /**
     * Indicates if pricing is a flat fee or is per unit. This field is for tiered and volume pricing models only. **Character limit**: 8 **Values**: `FlatFee`, `PerUnit` **Note:** The values `Flat Fee` and `Per Unit` (with spaces) is valid for create or update calls.
     */
    priceFormat?: string;
    /**
     *  The starting number of a range of units for the tier.
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
     *  The ID of the user who last updated the product rate plan charge tier.
     *
     * @remarks
     * **Character limit**: 32 **Values**: automatically generated
     */
    updatedById?: string;
    /**
     *  The date when the product rate plan charge tier was last updated.
     *
     * @remarks
     * **Character limit**: 29 **Values**: automatically generated
     */
    updatedDate?: Date;
}
