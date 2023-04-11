import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetCalculatorConfigurationByIdRequest extends SpeakeasyBase {
    /**
     * HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.
     */
    accept: string;
    /**
     * Type of the content being sent.
     */
    contentType: string;
    /**
     * Promotion ID or tax ID.
     */
    idCalculatorConfiguration: string;
}
/**
 * Object with information of the affiliate.
 */
export declare class GetCalculatorConfigurationById200PromotionAffiliates extends SpeakeasyBase {
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
export declare class GetCalculatorConfigurationById200PromotionBrands extends SpeakeasyBase {
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
export declare class GetCalculatorConfigurationById200PromotionCategories extends SpeakeasyBase {
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
export declare class GetCalculatorConfigurationById200PromotionCollections extends SpeakeasyBase {
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
export declare class GetCalculatorConfigurationById200PromotionPaymentsMethods extends SpeakeasyBase {
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
export declare class GetCalculatorConfigurationById200PromotionProducts extends SpeakeasyBase {
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
export declare class GetCalculatorConfigurationById200PromotionSkus extends SpeakeasyBase {
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
export declare class GetCalculatorConfigurationById200PromotionSkusGift extends SpeakeasyBase {
    /**
     * Array with SKU Gifts IDs.
     */
    gifts?: number;
    /**
     * Quantity of SKU Gifts.
     */
    quantitySelectable?: number;
}
export declare class GetCalculatorConfigurationById200PromotionZipCodeRanges extends SpeakeasyBase {
    /**
     * Defines if the zip code range is included in the promotion.
     */
    inclusive?: boolean;
    /**
     * Initial Zip Code.
     */
    zipCodeFrom?: string;
    /**
     * Final Zip Code.
     */
    zipCodeTo?: string;
}
/**
 * OK
 */
export declare class GetCalculatorConfigurationById200Promotion extends SpeakeasyBase {
    /**
     * Maximum value for the shipping.
     */
    absoluteShippingDiscountValue?: number;
    /**
     * Allows the promotion to apply to products whose prices have been manually added by a call center operator.
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
    affiliates?: GetCalculatorConfigurationById200PromotionAffiliates[];
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
    brands?: GetCalculatorConfigurationById200PromotionBrands[];
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
    categories?: GetCalculatorConfigurationById200PromotionCategories[];
    /**
     * If set to `true`, this promotion will be applied to any category present on the `categories` field. If set to `false`, categories present on that field will make this promotion not to be applied.
     */
    categoriesAreInclusive?: boolean;
    /**
     * An expression to use with clusters.
     */
    clusterExpressions?: string[];
    /**
     * Array composed by the collections that will be activated or deactivated the promotion.
     */
    collections?: GetCalculatorConfigurationById200PromotionCollections[];
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
     * If set to `true`, this promotion will be applied to any seller present on the idSeller field. If set to `false`, sellers present on that field will make this promotion not to be applied.
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
     * Object composed by a list of SKUs on a Multiple Effects promotion. Structure: `"{SkuId}": {PercentageDiscount}`. There is a limit of 400 SKUs for this type of promotion.
     */
    multipleSkusCause?: Record<string, string>;
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
     * Origin of the promotion, `marketplace` or `Fulfillment`. Read [Difference between orders with marketplace and fulfillment sources](https://help.vtex.com/en/tutorial/what-are-orders-with-marketplace-source-and-orders-with-fulfillment-source--6eVYrmUAwMOeKICU2KuG06) for more information.
     */
    origin?: string;
    /**
     * Array composed by all the Payments Methods.
     */
    paymentsMethods?: GetCalculatorConfigurationById200PromotionPaymentsMethods[];
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
    products?: GetCalculatorConfigurationById200PromotionProducts[];
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
    skus?: GetCalculatorConfigurationById200PromotionSkus[];
    /**
     * If set to `true`, this promotion will be applied to any SKU present on the `skus` field. If set to `false`, SKUs present on that field will make this promotion not to be applied.
     */
    skusAreInclusive?: boolean;
    /**
     * SKU Gift Object. Total discount on the product value set as a gift.
     */
    skusGift?: GetCalculatorConfigurationById200PromotionSkusGift;
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
     * If products that already are receiving a promotion, will be considered on the chart total value. There are three options available: `IncludeMatchedItems`, `ExcludeMatchedItems`, `AllItems`.
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
    zipCodeRanges?: GetCalculatorConfigurationById200PromotionZipCodeRanges[];
}
export declare class GetCalculatorConfigurationByIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
