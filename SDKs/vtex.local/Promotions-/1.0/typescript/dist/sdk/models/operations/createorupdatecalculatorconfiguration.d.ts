import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Object with information of the affiliate.
 */
export declare class CreateOrUpdateCalculatorConfigurationRequestBodyAffiliates extends SpeakeasyBase {
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
export declare class CreateOrUpdateCalculatorConfigurationRequestBodyBrands extends SpeakeasyBase {
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
export declare class CreateOrUpdateCalculatorConfigurationRequestBodyCategories extends SpeakeasyBase {
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
export declare class CreateOrUpdateCalculatorConfigurationRequestBodyCollections extends SpeakeasyBase {
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
export declare class CreateOrUpdateCalculatorConfigurationRequestBodyPaymentsMethods extends SpeakeasyBase {
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
export declare class CreateOrUpdateCalculatorConfigurationRequestBodyProducts extends SpeakeasyBase {
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
export declare class CreateOrUpdateCalculatorConfigurationRequestBodySkus extends SpeakeasyBase {
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
 * SKU Gift Object. Total discount on the product value set as a gift.
 */
export declare class CreateOrUpdateCalculatorConfigurationRequestBodySkusGift extends SpeakeasyBase {
    /**
     * Array with SKU Gifts IDs.
     */
    gifts?: any[];
    /**
     * Quantity of SKU Gifts.
     */
    quantitySelectable?: number;
}
/**
 * Zip code that applies the promotion.
 */
export declare class CreateOrUpdateCalculatorConfigurationRequestBodyZipCodeRanges extends SpeakeasyBase {
    /**
     * Defines if the zip code applies the promotion.
     */
    inclusive?: boolean;
}
export declare class CreateOrUpdateCalculatorConfigurationRequestBody extends SpeakeasyBase {
    /**
     * Maximum shipping value.
     */
    absoluteShippingDiscountValue?: number;
    /**
     * Allows the promotion to apply to products whose prices have been manually added by a call-center operator.
     */
    accumulateWithManualPrice?: boolean;
    /**
     * If set as `true`, it activates gifts Multiplier.
     */
    activateGiftsMultiplier?: boolean;
    /**
     * Defines which days of the week the Promotion or Tax will applied.
     */
    activeDaysOfWeek?: string[];
    /**
     * Marketplace order identifier. The discount will apply to selected affiliates.
     */
    affiliates?: CreateOrUpdateCalculatorConfigurationRequestBodyAffiliates[];
    /**
     * Promotion or Tax will be applied to all kind of shipping.
     */
    applyToAllShippings?: boolean;
    /**
     * If set to `false`, this Promotion or Tax will be applied to any trade policies present on the `idsSalesChannel` field. If set to `true`, trade policies present on that field will make this Promotion or Tax not to be applied.
     */
    areSalesChannelIdsExclusive?: boolean;
    /**
     * Promotion or Tax Begin Date (UTC).
     */
    beginDateUtc?: string;
    /**
     * Object composed by the brands that will activate or deactivate the Promotion or Tax.
     */
    brands?: CreateOrUpdateCalculatorConfigurationRequestBodyBrands[];
    /**
     * If set to `true`, this Promotion or Tax will be applied to any brand present on the `brands` field. If set to `false`, brands present on that field will make this Promotion or Tax not to be applied.
     */
    brandsAreInclusive?: boolean;
    /**
     * Campaign Audiences that activate this Promotion or Tax.
     */
    campaigns?: any[];
    cardIssuers?: any[];
    /**
     * Object composed by the categories that will activate or deactivate the Promotion or Tax.
     */
    categories?: CreateOrUpdateCalculatorConfigurationRequestBodyCategories[];
    /**
     * If set to `true`, this Promotion or Tax will be applied to any category present on the `categories` field. If set to `false`, categories present on that field will make this Promotion or Tax not to be applied.
     */
    categoriesAreInclusive?: boolean;
    /**
     * An expression to use with clusters.
     */
    clusterExpressions?: string[];
    /**
     * Object composed by the collections that will activate or deactivate the Promotion or Tax.
     */
    collections?: CreateOrUpdateCalculatorConfigurationRequestBodyCollections[];
    /**
     * Collections that will generate the Promotion, type **Buy Together**, **More for less**, **Progressive Discount**, **Buy One Get One**.
     */
    collections1BuyTogether?: string[];
    collections2BuyTogether?: any[];
    /**
     * If set to `true`, this Promotion or Tax will be applied to any collection present on the `collections` field. If set to `false`, collections present on that field will make this Promotion or Tax not to be applied.
     */
    collectionsIsInclusive?: boolean;
    /**
     * If the **List Price** and **Price** are the same.
     */
    compareListPriceAndPrice?: boolean;
    /**
     * Array with conditions IDs.
     */
    conditionsIds?: string[];
    coupon?: any[];
    /**
     * Defines if a Promotion or Tax can accumulate with another one. (`true`) or not (`false`).
     */
    cumulative?: boolean;
    /**
     * Number of days that are considered to add the purchase history.
     */
    daysAgoOfPurchases?: number;
    /**
     * Internal description of the Promotion or Tax.
     */
    description?: string;
    disableDeal?: boolean;
    /**
     * The type of discount that will apply to the promotion.
     */
    discountType?: string;
    /**
     * Enable **Buy Together** per SKU.
     */
    enableBuyTogetherPerSku?: boolean;
    /**
     * Promotion or Tax End Date (UTC).
     */
    endDateUtc?: string;
    /**
     * Applies the discount even if the user is not logged.
     */
    firstBuyIsProfileOptimistic?: boolean;
    /**
     * Gifts List Type.
     */
    giftListTypes?: string[];
    /**
     * Promotion ID or Tax ID.
     */
    idCalculatorConfiguration?: string;
    /**
     * Seller Name.
     */
    idSeller?: string;
    /**
     * If set to `true`, this Promotion or Tax will be applied to any seller present on the `idSeller` field. If set to `false`, sellers present on that field will make this Promotion or Tax not to be applied.
     */
    idSellerIsInclusive?: boolean;
    /**
     * List of Trade Policies that activate this Promotion or Tax.
     */
    idsSalesChannel?: string[];
    installment?: number;
    /**
     * If set as `true` the Promotion or Tax is activated. If set as `false` the Promotion or Tax is deactivated.
     */
    isActive?: boolean;
    /**
     * If set as `true` the Promotion or Tax is archived. If set as `false` the Promotion or Tax is not archived.
     */
    isArchived?: boolean;
    /**
     * Applies the Promotion or Tax only if the list price and price is different.
     */
    isDifferentListPriceAndPrice?: boolean;
    /**
     * Insert a flag with the promotion name used in the product's window display and page.
     */
    isFeatured?: boolean;
    /**
     * Applies the discount only if it's a first buy.
     */
    isFirstBuy?: boolean;
    /**
     * Set if the Promotion or Tax will be applied considering a minimum and maximum values for installments.
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
     * Date when the Promotion or Tax was last modified.
     */
    lastModified?: string;
    /**
     * SKU first list for the promotion **Buy Together**.
     */
    listSku1BuyTogether?: any[];
    /**
     * SKU second list for the promotion **Buy Together**.
     */
    listSku2BuyTogether?: any[];
    /**
     * Promotion or Tax Marketing tags.
     */
    marketingTags?: string[];
    /**
     * If set to `false`, this Promotion or Tax will be applied to any marketing tag present on the `marketingTags` field. If set to `true`, marketing tags present on that field will make this Promotion or Tax not to be applied.
     */
    marketingTagsAreNotInclusive?: boolean;
    /**
     * Maximum value for installment.
     */
    maxInstallment?: number;
    /**
     * The maximum number of affected items for a promotion.
     */
    maxNumberOfAffectedItems?: number;
    /**
     * The maximum number of affected items by group key for a promotion.
     */
    maxNumberOfAffectedItemsGroupKey?: string;
    maxPricesPerItems?: any[];
    /**
     * Defines how many times the Promotion or Tax can be used.
     */
    maxUsage?: number;
    /**
     * Defines if the promotion can be used multiple times per client.
     */
    maxUsagePerClient?: number;
    /**
     * The maximum price for each item of the purchase will be the price set up.
     */
    maximumUnitPriceDiscount?: number;
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
     * Defines if the promotion can be used multiple times per client.
     */
    multipleUsePerClient?: boolean;
    /**
     * Promotion name or Tax name.
     */
    name?: string;
    /**
     * New time offset from UTC in seconds.
     */
    newOffset?: number;
    /**
     * Exact discount to be applied for the total purchase value.
     */
    nominalDiscountValue?: number;
    /**
     * Nominal value for rewards program.
     */
    nominalRewardValue?: number;
    /**
     * Exact discount to be applied for the shipping value.
     */
    nominalShippingDiscountValue?: number;
    /**
     * Nominal Tax.
     */
    nominalTax?: number;
    /**
     * Time offset from UTC in seconds.
     */
    offset?: number;
    /**
     * Order status reward value.
     */
    orderStatusRewardValue?: string;
    /**
     * Origin of the Promotion or Tax, `marketplace` or `Fulfillment`.  Read [Difference between orders with marketplace and fulfillment sources](https://help.vtex.com/en/tutorial/what-are-orders-with-marketplace-source-and-orders-with-fulfillment-source--6eVYrmUAwMOeKICU2KuG06) for more information.
     */
    origin?: string;
    /**
     * Array composed by all the Payments Methods that activate this Promotion or Tax.
     */
    paymentsMethods?: CreateOrUpdateCalculatorConfigurationRequestBodyPaymentsMethods[];
    paymentsRules?: any[];
    /**
     * Percentage discount to be applied for total purchase value.
     */
    percentualDiscountValue?: number;
    /**
     * Percentual discount value list.
     */
    percentualDiscountValueList?: number[];
    /**
     * Valid discounts for the SKUs in `listSku1BuyTogether`, discount list used for Buy Together Promotions.
     */
    percentualDiscountValueList1?: number;
    /**
     * Equivalent to `percentualDiscountValueList1`.
     */
    percentualDiscountValueList2?: number;
    /**
     * Percentage value for rewards program.
     */
    percentualRewardValue?: number;
    /**
     * Percentage discount to be applied for shipping value.
     */
    percentualShippingDiscountValue?: number;
    /**
     * Percentual Tax over purchase total value.
     */
    percentualTax?: number;
    /**
     * Object composed by the products that will activate or deactivate the Promotion or Tax.
     */
    products?: CreateOrUpdateCalculatorConfigurationRequestBodyProducts[];
    /**
     * If set to `true`, this Promotion or Tax will be applied to any product present on the `products` field. If set to `false`, products present on that field will make this Promotion or Tax not to be applied.
     */
    productsAreInclusive?: boolean;
    productsSpecifications?: any[];
    /**
     * Quantity to affect **Buy Together** promotion.
     */
    quantityToAffectBuyTogether?: number;
    /**
     * Percentual Shipping Discount Value.
     */
    rebatePercentualDiscountValue?: number;
    /**
     * The discount will be granted if the card's BIN is given.
     */
    restrictionsBins?: string[];
    /**
     * Shipping Percentual Tax over purchase total value.
     */
    shippingPercentualTax?: number;
    /**
     * Should distribute discount among matched items.
     */
    shouldDistributeDiscountAmongMatchedItems?: boolean;
    /**
     * Object composed by the SKUs that will activate or deactivate the Promotion or Tax.
     */
    skus?: CreateOrUpdateCalculatorConfigurationRequestBodySkus[];
    /**
     * If set to `true`, this Promotion or Tax will be applied to any SKU present on the `skus` field. If set to `false`, SKUs present on that field will make this Promotion or Tax not to be applied.
     */
    skusAreInclusive?: boolean;
    /**
     * SKU Gift Object. Total discount on the product value set as a gift.
     */
    skusGift?: CreateOrUpdateCalculatorConfigurationRequestBodySkusGift;
    /**
     * The discount will be granted if the shipping method is the same as the one given.
     */
    slasIds?: string[];
    stores?: any[];
    storesAreInclusive?: boolean;
    /**
     * Maximum chart value to activate the Promotion or Tax.
     */
    totalValueCeling?: number;
    /**
     * Minimum chart value to activate the Promotion or Tax.
     */
    totalValueFloor?: number;
    totalValueIncludeAllItems?: boolean;
    /**
     * Defines if products that already are receiving a promotion will be considered on the chart total value. There are three options available: `IncludeMatchedItems`, `ExcludeMatchedItems`, `AllItems`.
     */
    totalValueMode?: string;
    /**
     * Total value a client must have in past orders to activate the Promotion or Tax.
     */
    totalValuePurchase?: number;
    /**
     * Defines what is the type of the promotion or indicates if it is a tax. Possible values: `regular` ([Regular Promotion](https://help.vtex.com/tutorial/regular-promotion--tutorials_327)), `combo` ([Buy Together](https://help.vtex.com/en/tutorial/buy-together--tutorials_323)), `forThePriceOf` ([More for Less](https://help.vtex.com/en/tutorial/creating-a-more-for-less-promotion--tutorials_325)), `progressive` ([Progressive Discount](https://help.vtex.com/en/tutorial/progressive-discount--tutorials_324)), `buyAndWin` ([Buy One Get One](https://help.vtex.com/en/tutorial/buy-one-get-one--tutorials_322)), `maxPricePerItem` (Deprecated), `campaign` ([Campaign Promotion](https://help.vtex.com/en/tutorial/campaign-promotion--1ChYXhK2AQGuS6wAqS8Ume)), `tax` (Tax), `multipleEffects` (Multiple Effects).
     */
    type?: string;
    /**
     * Use new progressive algorithm.
     */
    useNewProgressiveAlgorithm?: boolean;
    /**
     * Coupon utmCampaign code.
     */
    utmCampaign?: string;
    /**
     * Coupon utmSource code.
     */
    utmSource?: string;
    /**
     * Range of the zip code that applies the promotion.
     */
    zipCodeRanges?: CreateOrUpdateCalculatorConfigurationRequestBodyZipCodeRanges[];
}
export declare class CreateOrUpdateCalculatorConfigurationRequest extends SpeakeasyBase {
    /**
     * HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.
     */
    accept: string;
    /**
     * Type of the content being sent.
     */
    contentType: string;
    requestBody: CreateOrUpdateCalculatorConfigurationRequestBody;
}
/**
 * Object with information of the affiliate.
 */
export declare class CreateOrUpdateCalculatorConfiguration200ApplicationJSONAffiliates extends SpeakeasyBase {
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
export declare class CreateOrUpdateCalculatorConfiguration200ApplicationJSONBrands extends SpeakeasyBase {
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
export declare class CreateOrUpdateCalculatorConfiguration200ApplicationJSONCategories extends SpeakeasyBase {
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
export declare class CreateOrUpdateCalculatorConfiguration200ApplicationJSONCollections extends SpeakeasyBase {
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
export declare class CreateOrUpdateCalculatorConfiguration200ApplicationJSONPaymentsMethods extends SpeakeasyBase {
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
export declare class CreateOrUpdateCalculatorConfiguration200ApplicationJSONProducts extends SpeakeasyBase {
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
export declare class CreateOrUpdateCalculatorConfiguration200ApplicationJSONSkus extends SpeakeasyBase {
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
 * SKU Gift Object. Total discount on the product value set as a gift.
 */
export declare class CreateOrUpdateCalculatorConfiguration200ApplicationJSONSkusGift extends SpeakeasyBase {
    /**
     * Array with SKU Gifts IDs.
     */
    gifts?: number;
    /**
     * Quantity of SKU Gifts.
     */
    quantitySelectable?: number;
}
/**
 * OK
 */
export declare class CreateOrUpdateCalculatorConfiguration200ApplicationJSON extends SpeakeasyBase {
    /**
     * Maximum shipping value.
     */
    absoluteShippingDiscountValue?: number;
    /**
     * Allows the promotion to apply to products whose prices have been manually added by a call-center operator.
     */
    accumulateWithManualPrice?: boolean;
    /**
     * If set as `true`, it activates gifts Multiplier.
     */
    activateGiftsMultiplier?: boolean;
    /**
     * Defines which days of the week the promotion will applied.
     */
    activeDaysOfWeek?: string[];
    /**
     * Marketplace order identifier. The discount will apply to selected affiliates.
     */
    affiliates?: CreateOrUpdateCalculatorConfiguration200ApplicationJSONAffiliates[];
    /**
     * Promotion will be applied to all kind of shipping.
     */
    applyToAllShippings?: boolean;
    /**
     * If set to `false`, this promotion will be applied to any trade policies present on the `idsSalesChannel` field. If set to `true`, trade policies present on that field will make this promotion not to be applied.
     */
    areSalesChannelIdsExclusive?: boolean;
    /**
     * Promotion Begin Date (UTC).
     */
    beginDateUtc?: string;
    /**
     * Object composed by the brands that will activate or deactivate the promotion.
     */
    brands?: CreateOrUpdateCalculatorConfiguration200ApplicationJSONBrands[];
    /**
     * If set to `true`, this promotion will be applied to any brand present on the `brands` field. If set to `false`, brands present on that field will make this promotion not to be applied.
     */
    brandsAreInclusive?: boolean;
    /**
     * Campaign Audiences that activate this promotion.
     */
    campaigns?: any[];
    cardIssuers?: any[];
    /**
     * Object composed by the categories that will activate or deactivate the promotion.
     */
    categories?: CreateOrUpdateCalculatorConfiguration200ApplicationJSONCategories[];
    /**
     * If set to `true`, this promotion will be applied to any category present on the `categories` field. If set to `false`, categories present on that field will make this promotion not to be applied.
     */
    categoriesAreInclusive?: boolean;
    /**
     * An expression to use with clusters.
     */
    clusterExpressions?: string[];
    /**
     * Object composed by the collections that will activate or deactivate the promotion.
     */
    collections?: CreateOrUpdateCalculatorConfiguration200ApplicationJSONCollections[];
    /**
     * Collections that will generate the promotion, type **Buy Together**, **More for less**, **Progressive Discount**, **Buy One Get One**.
     */
    collections1BuyTogether?: string[];
    collections2BuyTogether?: any[];
    /**
     * If set to `true`, this promotion will be applied to any collection present on the `collections` field. If set to `false`, collections present on that field will make this promotion not to be applied.
     */
    collectionsIsInclusive?: boolean;
    /**
     * If the **List Price** and **Price** are the same.
     */
    compareListPriceAndPrice?: boolean;
    /**
     * Array with conditions IDs.
     */
    conditionsIds?: string[];
    coupon?: any[];
    /**
     * Defines if a promotion can accumulate with another one. (`true`) or not (`false`).
     */
    cumulative?: boolean;
    /**
     * Number of days that are considered to add the purchase history.
     */
    daysAgoOfPurchases?: number;
    /**
     * Promotion internal description.
     */
    description?: string;
    disableDeal?: boolean;
    /**
     * The type of discount that will apply to the promotion.
     */
    discountType?: string;
    /**
     * Enable **Buy Together** per SKU.
     */
    enableBuyTogetherPerSku?: boolean;
    /**
     * Promotion End Date (UTC).
     */
    endDateUtc?: string;
    /**
     * Applies the discount even if the user is not logged.
     */
    firstBuyIsProfileOptimistic?: boolean;
    /**
     * Gifts List Type.
     */
    giftListTypes?: string[];
    /**
     * Promotion ID.
     */
    idCalculatorConfiguration?: string;
    /**
     * Seller Name.
     */
    idSeller?: string;
    /**
     * If set to `true`, this promotion will be applied to any seller present on the `idSeller` field. If set to `false`, sellers present on that field will make this promotion not to be applied.
     */
    idSellerIsInclusive?: boolean;
    /**
     * List of Trade Policies that activate this promotion.
     */
    idsSalesChannel?: string[];
    installment?: number;
    /**
     * If set as `true` the Promotion is activated. If set as `false` the Promotion is deactivated.
     */
    isActive?: boolean;
    /**
     * If set as `true` the Promotion is archived. If set as `false` the Promotion is not archived.
     */
    isArchived?: boolean;
    /**
     * Applies the promotion only if the list price and price is different.
     */
    isDifferentListPriceAndPrice?: boolean;
    /**
     * Insert a flag with the promotion name used in the product's window display and page.
     */
    isFeatured?: boolean;
    /**
     * Applies the discount only if it's a first buy.
     */
    isFirstBuy?: boolean;
    /**
     * Set if the promotion will be applied considering a minimum and maximum values for installments.
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
     * When the Promotion was last modified.
     */
    lastModified?: string;
    /**
     * SKU first list for the promotion **Buy Together**.
     */
    listSku1BuyTogether?: any[];
    /**
     * SKU second list for the promotion **Buy Together**.
     */
    listSku2BuyTogether?: any[];
    /**
     * Promotion Marketing tags.
     */
    marketingTags?: string[];
    /**
     * If set to `false`, this promotion will be applied to any marketing tag present on the `marketingTags` field. If set to `true`, marketing tags present on that field will make this promotion not to be applied.
     */
    marketingTagsAreNotInclusive?: boolean;
    /**
     * Maximum value for installment.
     */
    maxInstallment?: number;
    /**
     * The maximum number of affected items for a promotion.
     */
    maxNumberOfAffectedItems?: number;
    /**
     * The maximum number of affected items by group key for a promotion.
     */
    maxNumberOfAffectedItemsGroupKey?: string;
    maxPricesPerItems?: any[];
    /**
     * Defines how many times the promotion can be used.
     */
    maxUsage?: number;
    /**
     * Defines if the promotion can be used multiple times per client.
     */
    maxUsagePerClient?: number;
    /**
     * The maximum price for each item of the purchase will be the price set up.
     */
    maximumUnitPriceDiscount?: number;
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
     * Defines if the promotion can be used multiple times per client.
     */
    multipleUsePerClient?: boolean;
    /**
     * Promotion Name.
     */
    name?: string;
    /**
     * New time offset from UTC in seconds.
     */
    newOffset?: number;
    /**
     * Exact discount to be applied for the total purchase value.
     */
    nominalDiscountValue?: number;
    /**
     * Nominal value for rewards program.
     */
    nominalRewardValue?: number;
    /**
     * Exact discount to be applied for the shipping value.
     */
    nominalShippingDiscountValue?: number;
    /**
     * Nominal Tax.
     */
    nominalTax?: number;
    /**
     * Time offset from UTC in seconds.
     */
    offset?: number;
    /**
     * Order status reward value.
     */
    orderStatusRewardValue?: string;
    /**
     * Origin of the promotion, `marketplace` or `Fulfillment`.  Read [Difference between orders with marketplace and fulfillment sources](https://help.vtex.com/en/tutorial/what-are-orders-with-marketplace-source-and-orders-with-fulfillment-source--6eVYrmUAwMOeKICU2KuG06) for more information.
     */
    origin?: string;
    /**
     * Array composed by all the Payments Methods.
     */
    paymentsMethods?: CreateOrUpdateCalculatorConfiguration200ApplicationJSONPaymentsMethods[];
    paymentsRules?: any[];
    /**
     * Percentage discount to be applied for total purchase value.
     */
    percentualDiscountValue?: number;
    /**
     * Percentual discount value list.
     */
    percentualDiscountValueList?: number[];
    /**
     * Valid discounts for the SKUs in `listSku1BuyTogether`, discount list used for Buy Together Promotions.
     */
    percentualDiscountValueList1?: number;
    /**
     * Equivalent to `percentualDiscountValueList1`.
     */
    percentualDiscountValueList2?: number;
    /**
     * Percentage value for rewards program.
     */
    percentualRewardValue?: number;
    /**
     * Percentage discount to be applied for shipping value.
     */
    percentualShippingDiscountValue?: number;
    /**
     * Percentual Tax over purchase total value.
     */
    percentualTax?: number;
    /**
     * Object composed by the products that will activate or deactivate the promotion.
     */
    products?: CreateOrUpdateCalculatorConfiguration200ApplicationJSONProducts[];
    /**
     * If set to `true`, this promotion will be applied to any product present on the `products` field. If set to `false`, products present on that field will make this promotion not to be applied.
     */
    productsAreInclusive?: boolean;
    productsSpecifications?: any[];
    /**
     * Quantity to affect **Buy Together** promotion.
     */
    quantityToAffectBuyTogether?: number;
    /**
     * Percentual Shipping Discount Value.
     */
    rebatePercentualDiscountValue?: number;
    /**
     * The discount will be granted if the card's BIN is given.
     */
    restrictionsBins?: string[];
    /**
     * Shipping Percentual Tax over purchase total value.
     */
    shippingPercentualTax?: number;
    /**
     * Should distribute discount among matched items.
     */
    shouldDistributeDiscountAmongMatchedItems?: boolean;
    /**
     * Object composed by the SKUs that will activate or deactivate the promotion.
     */
    skus?: CreateOrUpdateCalculatorConfiguration200ApplicationJSONSkus[];
    /**
     * If set to `true`, this promotion will be applied to any SKU present on the `skus` field. If set to `false`, SKUs present on that field will make this promotion not to be applied.
     */
    skusAreInclusive?: boolean;
    /**
     * SKU Gift Object. Total discount on the product value set as a gift.
     */
    skusGift?: CreateOrUpdateCalculatorConfiguration200ApplicationJSONSkusGift;
    /**
     * The discount will be granted if the shipping method is the same as the one given.
     */
    slasIds?: string[];
    stores?: any[];
    storesAreInclusive?: boolean;
    /**
     * Maximum chart value to activate the promotion.
     */
    totalValueCeling?: number;
    /**
     * Minimum chart value to activate the promotion.
     */
    totalValueFloor?: number;
    totalValueIncludeAllItems?: boolean;
    /**
     * Defines if products that already are receiving a promotion will be considered on the chart total value. There are three options available: `IncludeMatchedItems`, `ExcludeMatchedItems`, `AllItems`.
     */
    totalValueMode?: string;
    /**
     * Total value a client must have in past orders to active the promotion.
     */
    totalValuePurchase?: number;
    /**
     * Defines what is the type of the promotion or indicates if it is a tax. Possible values: `regular` ([Regular Promotion](https://help.vtex.com/tutorial/regular-promotion--tutorials_327)), `combo` ([Buy Together](https://help.vtex.com/en/tutorial/buy-together--tutorials_323)), `forThePriceOf` ([More for Less](https://help.vtex.com/en/tutorial/creating-a-more-for-less-promotion--tutorials_325)), `progressive` ([Progressive Discount](https://help.vtex.com/en/tutorial/progressive-discount--tutorials_324)), `buyAndWin` ([Buy One Get One](https://help.vtex.com/en/tutorial/buy-one-get-one--tutorials_322)), `maxPricePerItem` (Deprecated), `campaign` ([Campaign Promotion](https://help.vtex.com/en/tutorial/campaign-promotion--1ChYXhK2AQGuS6wAqS8Ume)), `tax` (Tax), `multipleEffects` (Multiple Effects).
     */
    type?: string;
    /**
     * Use new progressive algorithm.
     */
    useNewProgressiveAlgorithm?: boolean;
    /**
     * Coupon utmCampaign code.
     */
    utmCampaign?: string;
    /**
     * Coupon utmSource code.
     */
    utmSource?: string;
    /**
     * Range of the zip code that applies the promotion.
     */
    zipCodeRanges?: any[];
}
export declare class CreateOrUpdateCalculatorConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    createOrUpdateCalculatorConfiguration200ApplicationJSONObject?: CreateOrUpdateCalculatorConfiguration200ApplicationJSON;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
