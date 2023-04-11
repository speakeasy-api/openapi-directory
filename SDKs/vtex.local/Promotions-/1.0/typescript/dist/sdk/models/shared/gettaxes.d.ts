import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Scope of the tax.
 */
export declare class GetTaxesScope extends SpeakeasyBase {
    /**
     * Determines if the tax applies to all products in the Catalog (`true`) or not (`false`).
     */
    allCatalog?: boolean;
    /**
     * Quantity of brands which activate or deactivate the tax.
     */
    brands?: number;
    /**
     * If set to `true`, this tax will be applied to any brand present on the `brands` field. If set to `false`, brands present on that field will make this tax not to be applied.
     */
    brandsAreInclusive?: boolean;
    /**
     * Quantity of categories which activate or deactivate the tax.
     */
    categories?: number;
    /**
     * If set to `true`, this tax will be applied to any category present on the `categories` field. If set to `false`, categories present on that field will make this tax not to be applied.
     */
    categoriesAreInclusive?: boolean;
    /**
     * Quantity of collections which activate or deactivate the tax.
     */
    collections?: number;
    /**
     * If set to `true`, this tax will be applied to any collection present on the `collections` field. If set to `false`, collections present on that field will make this tax not to be applied.
     */
    collectionsAreInclusive?: boolean;
    /**
     * Quantity of products which activate or deactivate the tax.
     */
    products?: number;
    /**
     * If set to `true`, this tax will be applied to any product present on the `products` field. If set to `false`, products present on that field will make this tax not to be applied.
     */
    productsAreInclusive?: boolean;
    /**
     * Quantity of sellers which activate or deactivate the tax.
     */
    sellers?: number;
    /**
     * If set to `true`, this tax will be applied to any seller present on the `sellers` field. If set to `false`, sellers present on that field will make this tax not to be applied.
     */
    sellersAreInclusive?: boolean;
    /**
     * Quantity of SKUs which activate or deactivate the tax.
     */
    skus?: number;
    /**
     * If set to `true`, this tax will be applied to any SKU present on the `skus` field. If set to `false`, SKUs present on that field will make this tax not to be applied.
     */
    skusAreInclusive?: boolean;
}
/**
 * Object with information about a tax.
 */
export declare class GetTaxes extends SpeakeasyBase {
    /**
     * Array with campaign audiences that activate this tax.
     */
    campaigns?: string[];
    /**
     * If set as `true`, it activates gifts Multiplier.
     */
    activateGiftsMultiplier?: boolean;
    /**
     * If set to `false`, this tax will be applied to any trade policies present on the `idsSalesChannel` field. If set to `true`, trade policies present on that field will make this tax not to be applied.
     */
    areSalesChannelIdsExclusive?: boolean;
    /**
     * Tax start date (UTC).
     */
    beginDate?: string;
    /**
     * Tax internal description.
     */
    description?: string;
    /**
     * Tax end date (UTC).
     */
    endDate?: string;
    /**
     * Defines if there is a maximum price per item.
     */
    hasMaxPricePerItem?: boolean;
    /**
     * Tax ID.
     */
    idCalculatorConfiguration?: string;
    /**
     * List of Trade Policies that activate this tax.
     */
    idsSalesChannel?: string[];
    /**
     * If set as `true` the tax is activated. If set as `false` the tax is deactivated.
     */
    isActive?: boolean;
    /**
     * If set as `true` the tax is archived. If set as `false` the tax is not archived.
     */
    isArchived?: boolean;
    /**
     * Defines if it is a tax.
     */
    isTax?: boolean;
    /**
     * Date and time when the tax was last modified (UTC).
     */
    lastModifiedUtc?: string;
    /**
     * Defines how many times the tax can be used.
     */
    maxUsage?: number;
    /**
     * Tax name.
     */
    name?: string;
    /**
     * Percentual tax applied.
     */
    percentualTax?: number;
    /**
     * Scope of the tax.
     */
    scope?: GetTaxesScope;
    /**
     * Status of the tax.
     */
    status?: string;
    /**
     * Defines the type of tax.
     */
    type?: string;
    /**
     * utmCampaign code.
     */
    utmCampain?: string;
    /**
     * utmSource code.
     */
    utmSource?: string;
    /**
     * utmiCampaign code.
     */
    utmiCampaign?: string;
}
