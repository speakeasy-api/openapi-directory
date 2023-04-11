import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Object with information about the last update of the campaign audience.
 */
export declare class SetcampaignconfigurationRequestBodyLastModified extends SpeakeasyBase {
    /**
     * Date of the last update in UTC format.
     */
    dateUtc?: string;
    /**
     * Email of the user who made the last update.
     */
    user?: string;
}
/**
 * Object with information of the affiliate.
 */
export declare class SetcampaignconfigurationRequestBodyTargetConfigurationsAffiliates extends SpeakeasyBase {
    /**
     * Affiliate ID.
     */
    id?: string;
    /**
     * Affiliate Name.
     */
    name?: string;
}
/**
 * Object with information of the brand.
 */
export declare class SetcampaignconfigurationRequestBodyTargetConfigurationsBrands extends SpeakeasyBase {
    /**
     * Brand ID.
     */
    id?: string;
    /**
     * Brand Name.
     */
    name?: string;
}
/**
 * Object with information of the category.
 */
export declare class SetcampaignconfigurationRequestBodyTargetConfigurationsCategories extends SpeakeasyBase {
    /**
     * Category ID.
     */
    id?: string;
    /**
     * Category Name.
     */
    name?: string;
}
/**
 * Object with information of the collection.
 */
export declare class SetcampaignconfigurationRequestBodyTargetConfigurationsCollections extends SpeakeasyBase {
    /**
     * Collection ID.
     */
    id?: string;
    /**
     * Collection Name.
     */
    name?: string;
}
export declare class SetcampaignconfigurationRequestBodyTargetConfigurationsListCategory1BuyTogether extends SpeakeasyBase {
    /**
     * Category ID.
     */
    id?: string;
    /**
     * Category name.
     */
    name?: string;
}
/**
 * Object with information of the Payment Method.
 */
export declare class SetcampaignconfigurationRequestBodyTargetConfigurationsPaymentsMethods extends SpeakeasyBase {
    /**
     * Payment Method ID.
     */
    id?: string;
    /**
     * Payment Method Name.
     */
    name?: string;
}
/**
 * Object with information of the product.
 */
export declare class SetcampaignconfigurationRequestBodyTargetConfigurationsProducts extends SpeakeasyBase {
    /**
     * Product ID.
     */
    id?: string;
    /**
     * Product Name.
     */
    name?: string;
}
/**
 * Object with information of the SKU.
 */
export declare class SetcampaignconfigurationRequestBodyTargetConfigurationsSkus extends SpeakeasyBase {
    /**
     * SKU ID.
     */
    id?: string;
    /**
     * SKU Name.
     */
    name?: string;
}
/**
 * Zip code that applies the campaign audience.
 */
export declare class SetcampaignconfigurationRequestBodyTargetConfigurationsZipCodeRanges extends SpeakeasyBase {
    /**
     * Defines if the zip code applies the campaign audience.
     */
    inclusive?: boolean;
}
/**
 * Object with information about the target audience.
 */
export declare class SetcampaignconfigurationRequestBodyTargetConfigurations extends SpeakeasyBase {
    /**
     * Marketplace order identifier. The discount will apply to selected affiliates.
     */
    affiliates?: SetcampaignconfigurationRequestBodyTargetConfigurationsAffiliates[];
    /**
     * Shows if the trade policy IDs are exclusive.
     */
    areSalesChannelIdsExclusive?: boolean;
    /**
     * Object composed by the brands that will activate or deactivate the campaign audience.
     */
    brands?: SetcampaignconfigurationRequestBodyTargetConfigurationsBrands[];
    /**
     * If set to `true`, this campaign audience will be applied to any brand present on the `brands` field. If set to `false`, brands present on that field will make this campaign audience not to be applied.
     */
    brandsAreInclusive?: boolean;
    /**
     * Campaign Audiences that activate this promotion.
     */
    campaigns?: any[];
    cardIssuers?: any[];
    /**
     * Object composed by the categories that will activate or deactivate the campaign audience.
     */
    categories?: SetcampaignconfigurationRequestBodyTargetConfigurationsCategories[];
    /**
     * If set to `true`, this campaign audience will be applied to any category present on the `categories` field. If set to `false`, categories present on that field will make this campaign audience not to be applied.
     */
    categoriesAreInclusive?: boolean;
    /**
     * An expression to use with clusters.
     */
    clusterExpressions?: string[];
    clusterOperator?: string;
    /**
     * Object composed by the collections that will activate or deactivate the campaign audience.
     */
    collections?: SetcampaignconfigurationRequestBodyTargetConfigurationsCollections[];
    /**
     * Collections that will generate the promotion, type **Buy Together**, **More for less**, **Progressive Discount**, **Buy One Get One**.
     */
    collections1BuyTogether?: string[];
    collections2BuyTogether?: any[];
    /**
     * If set to `true`, this campaign audience will be applied to any collection present on the `collections` field. If set to `false`, collections present on that field will make this campaign audience not to be applied.
     */
    collectionsIsInclusive?: boolean;
    /**
     * If the **List Price** and **Price** are the same.
     */
    compareListPriceAndPrice?: boolean;
    coupon?: any[];
    /**
     * Number of days that are considered to add the purchase history.
     */
    daysAgoOfPurchases?: number;
    /**
     * Enable **Buy Together** per SKU.
     */
    enableBuyTogetherPerSku?: boolean;
    /**
     * Defines if the target audience is featured (`true`) or not (`false`).
     */
    featured?: boolean;
    /**
     * Applies the discount even if the user is not logged.
     */
    firstBuyIsProfileOptimistic?: boolean;
    /**
     * Gifts List Type.
     */
    giftListTypes?: string[];
    /**
     * Target audience ID.
     */
    id?: string;
    /**
     * Shows if at least one of the sellers must be valid to active the campaign audience.
     */
    idSellerIsInclusive?: boolean;
    /**
     * Shows the trade policies that active the campaign audience.
     */
    idsSalesChannel?: string[];
    installment?: number;
    /**
     * Applies the campaign audience only if the list price and price is different.
     */
    isDifferentListPriceAndPrice?: boolean;
    /**
     * Applies the discount only if it's a first buy.
     */
    isFirstBuy?: boolean;
    /**
     * Set if the campaign audience will be applied considering a minimum and maximum values for installments.
     */
    isMinMaxInstallments?: boolean;
    /**
     * Applies selected discount only when one of the defined shipping method is selected by the customer.
     */
    isSlaSelected?: boolean;
    /**
     * Maximum price of the item.
     */
    itemMaxPrice?: number;
    /**
     * Minimum price of the item.
     */
    itemMinPrice?: number;
    /**
     * Brand first list for the promotion **Buy Together.
     */
    listBrand1BuyTogether?: any[];
    /**
     * Category first list for the promotion **Buy Together**.
     */
    listCategory1BuyTogether?: SetcampaignconfigurationRequestBodyTargetConfigurationsListCategory1BuyTogether[];
    /**
     * SKU first list for the promotion **Buy Together**.
     */
    listSku1BuyTogether?: any[];
    /**
     * SKU second list for the promotion **Buy Together**.
     */
    listSku2BuyTogether?: any[];
    /**
     * Array with all campaign audience's marketing tags.
     */
    marketingTags?: string[];
    /**
     * Shows if marketing tags are not inclusive.
     */
    marketingTagsAreNotInclusive?: boolean;
    /**
     * Maximum value for installment.
     */
    maxInstallment?: number;
    /**
     * Defines how many times the campaign audience can be used.
     */
    maxUsage?: number;
    /**
     * Defines if the campaign audience can be used multiple times per client.
     */
    maxUsagePerClient?: number;
    merchants?: any[];
    /**
     * Minimum value for installment.
     */
    minInstallment?: number;
    /**
     * Minimum quantity for **Buy Together** promotion.
     */
    minimumQuantityBuyTogether?: number;
    /**
     * Defines if the campaign audience can be used multiple times per client.
     */
    multipleUsePerClient?: boolean;
    /**
     * Target audience name.
     */
    name?: string;
    /**
     * Shows the campaign audience origin, `Marketplace` or `Fulfillment`.  Read [Difference between orders with marketplace and fulfillment sources](https://help.vtex.com/en/tutorial/what-are-orders-with-marketplace-source-and-orders-with-fulfillment-source--6eVYrmUAwMOeKICU2KuG06) for more information.
     */
    origin?: string;
    /**
     * Array composed by all the Payments Methods.
     */
    paymentsMethods?: SetcampaignconfigurationRequestBodyTargetConfigurationsPaymentsMethods[];
    paymentsRules?: any[];
    /**
     * Percentual discount value list.
     */
    percentualDiscountValueList?: number[];
    /**
     * Object composed by the products that will activate or deactivate the campaign audience.
     */
    products?: SetcampaignconfigurationRequestBodyTargetConfigurationsProducts[];
    /**
     * If set to `true`, this campaign audience will be applied to any product present on the `products` field. If set to `false`, products present on that field will make this campaign audience not to be applied.
     */
    productsAreInclusive?: boolean;
    productsSpecifications?: any[];
    /**
     * Quantity to affect **Buy Together** promotion.
     */
    quantityToAffectBuyTogether?: number;
    /**
     * The discount will be granted if the card's BIN is given.
     */
    restrictionsBins?: string[];
    /**
     * Should distribute discount among matched items.
     */
    shouldDistributeDiscountAmongMatchedItems?: boolean;
    /**
     * Object composed by the SKUs that will activate or deactivate the campaign audience.
     */
    skus?: SetcampaignconfigurationRequestBodyTargetConfigurationsSkus[];
    /**
     * If set to `true`, this campaign audience will be applied to any SKU present on the `skus` field. If set to `false`, SKUs present on that field will make this campaign audience not to be applied.
     */
    skusAreInclusive?: boolean;
    /**
     * The discount will be granted if the shipping method is the same as the one given.
     */
    slasIds?: string[];
    stores?: any[];
    storesAreInclusive?: boolean;
    /**
     * Maximum chart value to active the campaign audience.
     */
    totalValueCeling?: number;
    /**
     * Minimum chart value to active the campaign audience.
     */
    totalValueFloor?: number;
    totalValueIncludeAllItems?: boolean;
    /**
     * Total chart value to active the campaign audience.
     */
    totalValueMode?: string;
    /**
     * Total value a client must have in past orders to active the campaign audience.
     */
    totalValuePurchase?: number;
    /**
     * Use new progressive algorithm.
     */
    useNewProgressiveAlgorithm?: boolean;
    /**
     * Range of the zip code that applies the campaign audience.
     */
    zipCodeRanges?: SetcampaignconfigurationRequestBodyTargetConfigurationsZipCodeRanges[];
}
export declare class SetcampaignconfigurationRequestBody extends SpeakeasyBase {
    /**
     * Start date of the campaign audience in UTC format.
     */
    beginDateUtc?: string;
    /**
     * End date of the campaign audience in UTC format.
     */
    endDateUtc?: string;
    /**
     * Campaign audience ID.
     */
    id?: string;
    /**
     * Defines if the campaign audience is active (`true`) or not (`false`).
     */
    isActive?: boolean;
    /**
     * When `true`, determines that all the `targetConfigurations` need to be valid for the campaign audience to be active. When `false`, determines that if at least one of the `targetConfigurations` is valid, the campaign audience will be active.
     */
    isAndOperator?: boolean;
    /**
     * Defines if the campaign audience is archived (`true`) or not (`false`).
     */
    isArchived?: boolean;
    /**
     * Object with information about the last update of the campaign audience.
     */
    lastModified?: SetcampaignconfigurationRequestBodyLastModified;
    /**
     * Campaign audience name.
     */
    name?: string;
    /**
     * Array that contains all target audience that the campaign audience will be valid.
     */
    targetConfigurations?: SetcampaignconfigurationRequestBodyTargetConfigurations[];
}
export declare class SetcampaignconfigurationRequest extends SpeakeasyBase {
    /**
     * HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.
     */
    accept: string;
    /**
     * Describes the type of the content being sent.
     */
    contentType: string;
    requestBody: SetcampaignconfigurationRequestBody;
}
/**
 * Object with information about the most recent update of the campaign audience.
 */
export declare class Setcampaignconfiguration200ApplicationJSONLastModified extends SpeakeasyBase {
    /**
     * Date of the most recent update in UTC format.
     */
    dateUtc?: string;
    /**
     * Email of the user who updated the campaign audience for the latest time.
     */
    user?: string;
}
/**
 * Object with information of the affiliate.
 */
export declare class Setcampaignconfiguration200ApplicationJSONTargetConfigurationsAffiliates extends SpeakeasyBase {
    /**
     * Affiliate ID.
     */
    id?: string;
    /**
     * Affiliate Name.
     */
    name?: string;
}
/**
 * Object with information of the brand.
 */
export declare class Setcampaignconfiguration200ApplicationJSONTargetConfigurationsBrands extends SpeakeasyBase {
    /**
     * Brand ID.
     */
    id?: string;
    /**
     * Brand Name.
     */
    name?: string;
}
/**
 * Object with information of the category.
 */
export declare class Setcampaignconfiguration200ApplicationJSONTargetConfigurationsCategories extends SpeakeasyBase {
    /**
     * Category ID.
     */
    id?: string;
    /**
     * Category Name.
     */
    name?: string;
}
/**
 * Object with information of the collection.
 */
export declare class Setcampaignconfiguration200ApplicationJSONTargetConfigurationsCollections extends SpeakeasyBase {
    /**
     * Collection ID.
     */
    id?: string;
    /**
     * Collection Name.
     */
    name?: string;
}
/**
 * Object with information of the Payment Method.
 */
export declare class Setcampaignconfiguration200ApplicationJSONTargetConfigurationsPaymentsMethods extends SpeakeasyBase {
    /**
     * Payment Method ID.
     */
    id?: string;
    /**
     * Payment Method Name.
     */
    name?: string;
}
/**
 * Object with information of the product.
 */
export declare class Setcampaignconfiguration200ApplicationJSONTargetConfigurationsProducts extends SpeakeasyBase {
    /**
     * Product ID.
     */
    id?: string;
    /**
     * Product Name.
     */
    name?: string;
}
/**
 * Object with information of the SKU.
 */
export declare class Setcampaignconfiguration200ApplicationJSONTargetConfigurationsSkus extends SpeakeasyBase {
    /**
     * SKU ID.
     */
    id?: string;
    /**
     * SKU Name.
     */
    name?: string;
}
/**
 * Zip code that applies the campaign audience.
 */
export declare class Setcampaignconfiguration200ApplicationJSONTargetConfigurationsZipCodeRanges extends SpeakeasyBase {
    /**
     * Defines if the zip code applies the campaign audience.
     */
    inclusive?: boolean;
}
/**
 * Object with information about the target audience.
 */
export declare class Setcampaignconfiguration200ApplicationJSONTargetConfigurations extends SpeakeasyBase {
    /**
     * Marketplace order identifier. The discount will apply to selected affiliates.
     */
    affiliates?: Setcampaignconfiguration200ApplicationJSONTargetConfigurationsAffiliates[];
    /**
     * Defines if the trade policy IDs are exclusive.
     */
    areSalesChannelIdsExclusive?: boolean;
    /**
     * Object composed by the brands that will activate or deactivate the campaign audience.
     */
    brands?: Setcampaignconfiguration200ApplicationJSONTargetConfigurationsBrands[];
    /**
     * If set to `true`, this campaign audience will be applied to any brand present on the `brands` field. If set to `false`, brands present on that field will make this campaign audience not to be applied.
     */
    brandsAreInclusive?: boolean;
    /**
     * Campaign Audiences that activate this promotion.
     */
    campaigns?: any[];
    cardIssuers?: any[];
    /**
     * Object composed by the categories that will activate or deactivate the campaign audience.
     */
    categories?: Setcampaignconfiguration200ApplicationJSONTargetConfigurationsCategories[];
    /**
     * If set to `true`, this campaign audience will be applied to any category present on the `categories` field. If set to `false`, categories present on that field will make this campaign audience not to be applied.
     */
    categoriesAreInclusive?: boolean;
    /**
     * An expression to use with clusters.
     */
    clusterExpressions?: string[];
    clusterOperator?: string;
    /**
     * Object composed by the collections that will activate or deactivate the campaign audience.
     */
    collections?: Setcampaignconfiguration200ApplicationJSONTargetConfigurationsCollections[];
    /**
     * Collections that will generate the promotion, type **Buy Together**, **More for less**, **Progressive Discount**, **Buy One Get One**.
     */
    collections1BuyTogether?: string[];
    collections2BuyTogether?: any[];
    /**
     * If set to `true`, this campaign audience will be applied to any collection present on the `collections` field. If set to `false`, collections present on that field will make this campaign audience not to be applied.
     */
    collectionsIsInclusive?: boolean;
    /**
     * If the **List Price** and **Price** are the same.
     */
    compareListPriceAndPrice?: boolean;
    coupon?: any[];
    /**
     * Number of days that are considered to add the purchase history.
     */
    daysAgoOfPurchases?: number;
    /**
     * Enable **Buy Together** per SKU.
     */
    enableBuyTogetherPerSku?: boolean;
    /**
     * Defines if the target audience is feature (`true`) or not (`false`).
     */
    featured?: boolean;
    /**
     * Applies the discount even if the user is not logged.
     */
    firstBuyIsProfileOptimistic?: boolean;
    /**
     * Gifts List Type.
     */
    giftListTypes?: string[];
    /**
     * Target audience ID.
     */
    id?: string;
    /**
     * Defines if at least one of the sellers must be valid to active the campaign audience.
     */
    idSellerIsInclusive?: boolean;
    /**
     * Array with all the trade policies that activate the campaign audience.
     */
    idsSalesChannel?: string[];
    installment?: number;
    /**
     * Applies the campaign audience only if the list price and price is different.
     */
    isDifferentListPriceAndPrice?: boolean;
    /**
     * Applies the discount only if it's a first buy.
     */
    isFirstBuy?: boolean;
    /**
     * Set if the campaign audience will be applied considering a minimum and maximum values for installments.
     */
    isMinMaxInstallments?: boolean;
    /**
     * Applies selected discount only when one of the defined shipping method is selected by the customer.
     */
    isSlaSelected?: boolean;
    /**
     * Maximum price of the item.
     */
    itemMaxPrice?: number;
    /**
     * Minimum price of the item.
     */
    itemMinPrice?: number;
    /**
     * Brand first list for the promotion **Buy Together.
     */
    listBrand1BuyTogether?: any[];
    /**
     * Category first list for the promotion **Buy Together**.
     */
    listCategory1BuyTogether?: any[];
    /**
     * SKU first list for the promotion **Buy Together**.
     */
    listSku1BuyTogether?: any[];
    /**
     * SKU second list for the promotion **Buy Together**.
     */
    listSku2BuyTogether?: any[];
    /**
     * Array with all the campaign audience's marketing tags.
     */
    marketingTags?: string[];
    /**
     * Defines if marketing tags are not inclusive.
     */
    marketingTagsAreNotInclusive?: boolean;
    /**
     * Maximum value for installment.
     */
    maxInstallment?: number;
    /**
     * Defines how many times the campaign audience can be used.
     */
    maxUsage?: number;
    /**
     * Defines if the campaign audience can be used multiple times per client.
     */
    maxUsagePerClient?: number;
    merchants?: any[];
    /**
     * Minimum value for installment.
     */
    minInstallment?: number;
    /**
     * Minimum quantity for **Buy Together** promotion.
     */
    minimumQuantityBuyTogether?: number;
    /**
     * Defines if the campaign audience can be used multiple times per client.
     */
    multipleUsePerClient?: boolean;
    /**
     * Target audience name.
     */
    name?: string;
    /**
     * Shows the campaign audience origin, `Marketplace` or `Fulfillment`.  Read [Difference between orders with marketplace and fulfillment sources](https://help.vtex.com/en/tutorial/what-are-orders-with-marketplace-source-and-orders-with-fulfillment-source--6eVYrmUAwMOeKICU2KuG06) for more information.
     */
    origin?: string;
    /**
     * Array composed by all the Payments Methods.
     */
    paymentsMethods?: Setcampaignconfiguration200ApplicationJSONTargetConfigurationsPaymentsMethods[];
    paymentsRules?: any[];
    /**
     * Percentual discount value list.
     */
    percentualDiscountValueList?: number[];
    /**
     * Object composed by the products that will activate or deactivate the campaign audience.
     */
    products?: Setcampaignconfiguration200ApplicationJSONTargetConfigurationsProducts[];
    /**
     * If set to `true`, this campaign audience will be applied to any product present on the `products` field. If set to `false`, products present on that field will make this campaign audience not to be applied.
     */
    productsAreInclusive?: boolean;
    productsSpecifications?: any[];
    /**
     * Quantity to affect **Buy Together** promotion.
     */
    quantityToAffectBuyTogether?: number;
    /**
     * The discount will be granted if the card's BIN is given.
     */
    restrictionsBins?: string[];
    /**
     * Should distribute discount among matched items.
     */
    shouldDistributeDiscountAmongMatchedItems?: boolean;
    /**
     * Object composed by the SKUs that will activate or deactivate the campaign audience.
     */
    skus?: Setcampaignconfiguration200ApplicationJSONTargetConfigurationsSkus[];
    /**
     * If set to `true`, this campaign audience will be applied to any SKU present on the `skus` field. If set to `false`, SKUs present on that field will make this campaign audience not to be applied.
     */
    skusAreInclusive?: boolean;
    /**
     * The discount will be granted if the shipping method is the same as the one given.
     */
    slasIds?: string[];
    stores?: any[];
    storesAreInclusive?: boolean;
    /**
     * Maximum chart value to active the campaign audience.
     */
    totalValueCeling?: number;
    /**
     * Minimum chart value to active the campaign audience.
     */
    totalValueFloor?: number;
    totalValueIncludeAllItems?: boolean;
    /**
     * Total chart value to active the campaign audience.
     */
    totalValueMode?: string;
    /**
     * Total value a client must have in past orders to active the campaign audience.
     */
    totalValuePurchase?: number;
    /**
     * Use new progressive algorithm.
     */
    useNewProgressiveAlgorithm?: boolean;
    /**
     * Range of the zip code that applies the campaign audience.
     */
    zipCodeRanges?: Setcampaignconfiguration200ApplicationJSONTargetConfigurationsZipCodeRanges[];
}
/**
 * OK
 */
export declare class Setcampaignconfiguration200ApplicationJSON extends SpeakeasyBase {
    /**
     * Start date of the campaign audience in UTC format.
     */
    beginDateUtc?: string;
    /**
     * End date of the campaign audience in UTC format.
     */
    endDateUtc?: string;
    /**
     * Campaign audience ID.
     */
    id?: string;
    /**
     * Defines if the campaign audience is active (`true`) or not (`false`).
     */
    isActive?: boolean;
    /**
     * When `true`, determines that all the `targetConfigurations` need to be valid for the campaign audience to be active. When `false`, determines that if at least one of the `targetConfigurations` is valid, the campaign audience will be active.
     */
    isAndOperator?: boolean;
    /**
     * Defines if the campaign audience is archived (`true`) or not (`false`).
     */
    isArchived?: boolean;
    /**
     * Object with information about the most recent update of the campaign audience.
     */
    lastModified?: Setcampaignconfiguration200ApplicationJSONLastModified;
    /**
     * Campaign audience name.
     */
    name?: string;
    /**
     * Array that contains all target audience that the campaign audience will be valid.
     */
    targetConfigurations?: Setcampaignconfiguration200ApplicationJSONTargetConfigurations[];
}
export declare class SetcampaignconfigurationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    setcampaignconfiguration200ApplicationJSONObject?: Setcampaignconfiguration200ApplicationJSON;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
