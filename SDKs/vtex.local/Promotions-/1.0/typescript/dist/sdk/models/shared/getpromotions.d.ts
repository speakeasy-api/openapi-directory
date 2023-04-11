import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Scope of the promotion.
 */
export declare class GetPromotionsScope extends SpeakeasyBase {
    /**
     * Determines if the promotion applies to all products in the Catalog (`true`) or not (`false`).
     */
    allCatalog?: boolean;
    /**
     * Quantity of brands which activate or deactivate the promotion.
     */
    brands?: number;
    /**
     * If set to `true`, this promotion will be applied to any brand present on the `brands` field. If set to `false`, brands present on that field will make this promotion not to be applied.
     */
    brandsAreInclusive?: boolean;
    /**
     * Quantity of categories which activate or deactivate the promotion.
     */
    categories?: number;
    /**
     * If set to `true`, this promotion will be applied to any category present on the `categories` field. If set to `false`, categories present on that field will make this promotion not to be applied.
     */
    categoriesAreInclusive?: boolean;
    /**
     * Quantity of collections which activate or deactivate the promotion.
     */
    collections?: number;
    /**
     * If set to `true`, this promotion will be applied to any collection present on the `collections` field. If set to `false`, collections present on that field will make this promotion not to be applied.
     */
    collectionsAreInclusive?: boolean;
    /**
     * Quantity of products which activate or deactivate the promotion.
     */
    products?: number;
    /**
     * If set to `true`, this promotion will be applied to any product present on the `products` field. If set to `false`, products present on that field will make this promotion not to be applied.
     */
    productsAreInclusive?: boolean;
    /**
     * Quantity of sellers which activate or deactivate the promotion.
     */
    sellers?: number;
    /**
     * If set to `true`, this promotion will be applied to any seller present on the `sellers` field. If set to `false`, sellers present on that field will make this promotion not to be applied.
     */
    sellersAreInclusive?: boolean;
    /**
     * Quantity of SKUs which activate or deactivate the promotion.
     */
    skus?: number;
    /**
     * If set to `true`, this promotion will be applied to any SKU present on the `skus` field. If set to `false`, SKUs present on that field will make this promotion not to be applied.
     */
    skusAreInclusive?: boolean;
}
/**
 * Object with information about a promotion.
 */
export declare class GetPromotions extends SpeakeasyBase {
    /**
     * Array with campaign audiences that activate this promotion.
     */
    campaigns?: string[];
    /**
     * If set as `true`, it activates gifts Multiplier.
     */
    activateGiftsMultiplier?: boolean;
    /**
     * If set to `false`, this promotion will be applied to any trade policies present on the `idsSalesChannel` field. If set to `true`, trade policies present on that field will make this promotion not to be applied.
     */
    areSalesChannelIdsExclusive?: boolean;
    /**
     * Promotion Begin Date (UTC).
     */
    beginDate?: string;
    /**
     * Promotion internal description.
     */
    description?: string;
    /**
     * Promotion End Date (UTC).
     */
    endDate?: string;
    /**
     * Defines if there is a maximum price per item.
     */
    hasMaxPricePerItem?: boolean;
    /**
     * Promotion ID.
     */
    idCalculatorConfiguration?: string;
    /**
     * List of Trade Policies that activate this promotion.
     */
    idsSalesChannel?: string[];
    /**
     * If set as `true` the promotion is activated. If set as `false` the promotion is deactivated.
     */
    isActive?: boolean;
    /**
     * If set as `true` the Promotion is archived. If set as `false` the Promotion is not archived.
     */
    isArchived?: boolean;
    /**
     * Defines if it is a tax.
     */
    isTax?: boolean;
    /**
     * Date and time when the promotion was last modified (UTC).
     */
    lastModifiedUtc?: string;
    /**
     * Defines how many times the promotion can be used.
     */
    maxUsage?: number;
    /**
     * Promotion Name.
     */
    name?: string;
    /**
     * Percentual tax applied.
     */
    percentualTax?: number;
    /**
     * Scope of the promotion.
     */
    scope?: GetPromotionsScope;
    /**
     * Status of the promotion.
     */
    status?: string;
    /**
     * Defines the type of promotion.
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
