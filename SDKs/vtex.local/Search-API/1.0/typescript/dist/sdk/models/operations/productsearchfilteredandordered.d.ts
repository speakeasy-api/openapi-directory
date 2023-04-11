import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const ProductSearchFilteredandOrderedServerList: readonly ["http://example.com/.{environment}.com.br"];
export declare class ProductSearchFilteredandOrderedRequest extends SpeakeasyBase {
    /**
     * HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.
     */
    accept: string;
    /**
     * Describes the type of the content being sent.
     */
    contentType: string;
    /**
     * Sorting method. It can be by Price (`O=OrderByPriceDESC` or `O=OrderByPriceASC`), by Top Selling Products (`O=OrderByTopSaleDESC`), by Best Reviews (`O=OrderByReviewRateDESC`), by Name (`O=OrderByNameASC` or `O=OrderByNameDESC`), by Release Date (`O=OrderByReleaseDateDESC`), by Best Discounts (`O=OrderByBestDiscountDESC`), by Score (`O=OrderByScoreDESC`)
     */
    o?: string;
    /**
     * Starter page range. These parameters allow the API to be paginated. Take into account that the initial and final pages cannot have a separation superior to 50 pages. Thus, it will be displayed 50 items per page.
     */
    from?: string;
    /**
     * Finisher page range. These parameters allow the API to be paginated. Take into account that the initial and final pages cannot have a separation superior to 50 pages. Thus, it will be displayed 50 items per page.
     */
    to?: string;
    /**
     * General filter. It can be by category (`fq=C:/{a}/{b}`), by specification (`fq=specificationFilter_{a}:{b}`),  by price range (`fq=P:[{a} TO {b}]`), by collection (`fq=productClusterIds:{{productClusterId}}`), by product ID (`fq=productId:{{productId}}`),  by SKU ID (`fq=skuId:{{skuId}}`), by Reference ID (`fq=alternateIds_RefId:{{referenceId}}`), by EAN13 (`fq=alternateIds_Ean:{{ean13}}`), by availability at a specific sales channel (`fq=isAvailablePerSalesChannel_{{sc}}:{{bool}}`), by available at a specific seller (`fq=sellerId:{{sellerId}}`)
     */
    fq?: string;
    /**
     * Filter by full text. The form is`ft={searchWord}`
     */
    ft?: string;
}
export declare class ProductSearchFilteredandOrdered200ApplicationJSONItemsImages extends SpeakeasyBase {
    /**
     * Image ID.
     */
    imageId: string;
    /**
     * Image label.
     */
    imageLabel: string;
    /**
     * Date and time of the last update of the image.
     */
    imageLastModified: string;
    /**
     * Image tag.
     */
    imageTag: string;
    /**
     * Image text.
     */
    imageText: string;
    /**
     * Image URL.
     */
    imageUrl: string;
}
export declare class ProductSearchFilteredandOrdered200ApplicationJSONItemsKitItems extends SpeakeasyBase {
    /**
     * Amount of the SKU component in the kit.
     */
    amount: number;
    /**
     * SKU kit component ID.
     */
    itemId: string;
}
export declare class ProductSearchFilteredandOrdered200ApplicationJSONItemsReferenceId extends SpeakeasyBase {
    /**
     * Reference Code.
     */
    key: string;
    /**
     * Unique reference code used internally for organizational purposes.
     */
    value: string;
}
export declare class ProductSearchFilteredandOrdered200ApplicationJSONItemsSellersCommertialOfferDeliverySlaSamples extends SpeakeasyBase {
    /**
     * Delivery SLA per types.
     */
    deliverySlaPerTypes: any[];
    /**
     * Region.
     */
    region: string;
}
/**
 * Delivery SLA ID.
 */
export declare class ProductSearchFilteredandOrdered200ApplicationJSONItemsSellersCommertialOfferDeliverySlaSamplesPerRegion0 extends SpeakeasyBase {
    /**
     * Delivery SLA per types.
     */
    deliverySlaPerTypes: any[];
    /**
     * Region.
     */
    region: string;
}
/**
 * Delivery SLA samples per region.
 */
export declare class ProductSearchFilteredandOrdered200ApplicationJSONItemsSellersCommertialOfferDeliverySlaSamplesPerRegion extends SpeakeasyBase {
    /**
     * Delivery SLA ID.
     */
    zero?: ProductSearchFilteredandOrdered200ApplicationJSONItemsSellersCommertialOfferDeliverySlaSamplesPerRegion0;
}
export declare class ProductSearchFilteredandOrdered200ApplicationJSONItemsSellersCommertialOfferInstallments extends SpeakeasyBase {
    /**
     * Interest rate of the installment.
     */
    interestRate: number;
    /**
     * Name of the installment.
     */
    name: string;
    /**
     * Number of the installment.
     */
    numberOfInstallments: number;
    /**
     * Payment system group name of the installment.
     */
    paymentSystemGroupName: string;
    /**
     * Payment system name of the installment.
     */
    paymentSystemName: string;
    /**
     * Total value plus interest rate of the installment.
     */
    totalValuePlusInterestRate: number;
    /**
     * Value of the installment.
     */
    value: number;
}
export declare class ProductSearchFilteredandOrdered200ApplicationJSONItemsSellersCommertialOfferPaymentOptionsInstallmentOptionsInstallmentsSellerMerchantInstallments extends SpeakeasyBase {
    /**
     * Count.
     */
    count: number;
    /**
     * Has interest rate.
     */
    hasInterestRate: boolean;
    /**
     * ID.
     */
    id: string;
    /**
     * Interest rate.
     */
    interestRate: number;
    /**
     * Total.
     */
    total: number;
    /**
     * Value.
     */
    value: number;
}
export declare class ProductSearchFilteredandOrdered200ApplicationJSONItemsSellersCommertialOfferPaymentOptionsInstallmentOptionsInstallments extends SpeakeasyBase {
    /**
     * Count.
     */
    count: number;
    /**
     * Has interest rate.
     */
    hasInterestRate: boolean;
    /**
     * Interest rate.
     */
    interestRate: number;
    /**
     * Seller merchant installments.
     */
    sellerMerchantInstallments: ProductSearchFilteredandOrdered200ApplicationJSONItemsSellersCommertialOfferPaymentOptionsInstallmentOptionsInstallmentsSellerMerchantInstallments[];
    /**
     * Total.
     */
    total: number;
    /**
     * Value.
     */
    value: number;
}
export declare class ProductSearchFilteredandOrdered200ApplicationJSONItemsSellersCommertialOfferPaymentOptionsInstallmentOptions extends SpeakeasyBase {
    /**
     * Bin.
     */
    bin: string;
    /**
     * Installments.
     */
    installments: ProductSearchFilteredandOrdered200ApplicationJSONItemsSellersCommertialOfferPaymentOptionsInstallmentOptionsInstallments[];
    /**
     * Payment group name.
     */
    paymentGroupName: string;
    /**
     * Payment name.
     */
    paymentName: string;
    /**
     * Payment system.
     */
    paymentSystem: string;
    /**
     * Value.
     */
    value: number;
}
export declare class ProductSearchFilteredandOrdered200ApplicationJSONItemsSellersCommertialOfferPaymentOptionsPaymentSystems extends SpeakeasyBase {
    /**
     * Available payments.
     */
    availablePayments: string;
    /**
     * Description.
     */
    description: string;
    /**
     * Due date.
     */
    dueDate: string;
    /**
     * Group name.
     */
    groupName: string;
    /**
     * ID.
     */
    id: number;
    /**
     * If is custom or not.
     */
    isCustom: boolean;
    /**
     * Name.
     */
    name: string;
    /**
     * If requires authentication.
     */
    requiresAuthentication: boolean;
    /**
     * If requires document or not.
     */
    requiresDocument: boolean;
    /**
     * String ID.
     */
    stringId: string;
    /**
     * Template.
     */
    template: string;
    /**
     * Validator.
     */
    validator: string;
}
/**
 * Payment options.
 */
export declare class ProductSearchFilteredandOrdered200ApplicationJSONItemsSellersCommertialOfferPaymentOptions extends SpeakeasyBase {
    /**
     * Available accounts.
     */
    availableAccounts: any[];
    /**
     * Available tokens.
     */
    availableTokens: any[];
    /**
     * GiftCardMessages.
     */
    giftCardMessages: any[];
    /**
     * GiftCards.
     */
    giftCards: any[];
    /**
     * installment options.
     */
    installmentOptions: ProductSearchFilteredandOrdered200ApplicationJSONItemsSellersCommertialOfferPaymentOptionsInstallmentOptions[];
    /**
     * Payment systems.
     */
    paymentSystems: ProductSearchFilteredandOrdered200ApplicationJSONItemsSellersCommertialOfferPaymentOptionsPaymentSystems[];
    /**
     * Payments.
     */
    payments: any[];
}
/**
 * AKA Commertial Condition.
 */
export declare class ProductSearchFilteredandOrdered200ApplicationJSONItemsSellersCommertialOffer extends SpeakeasyBase {
    /**
     * Use the `IsAvailable` field instead.
     */
    availableQuantity: number;
    /**
     * Array of other products that can be bought together with the product in question.
     */
    buyTogether: any[];
    /**
     * Cache version used to call checkout.
     */
    cacheVersionUsedToCallCheckout: string;
    /**
     * Delivery SLA samples.
     */
    deliverySlaSamples: ProductSearchFilteredandOrdered200ApplicationJSONItemsSellersCommertialOfferDeliverySlaSamples[];
    /**
     * Delivery SLA samples per region.
     */
    deliverySlaSamplesPerRegion: ProductSearchFilteredandOrdered200ApplicationJSONItemsSellersCommertialOfferDeliverySlaSamplesPerRegion;
    /**
     * Discount hightlight.
     */
    discountHighLight: any[];
    /**
     * Get info error message.
     */
    getInfoErrorMessage: string;
    /**
     * Array of SKU gifts IDs.
     */
    giftSkuIds: any[];
    /**
     * Installments options.
     */
    installments: ProductSearchFilteredandOrdered200ApplicationJSONItemsSellersCommertialOfferInstallments[];
    /**
     * If the product is available or not.
     */
    isAvailable: boolean;
    /**
     * Item metadata attachment.
     */
    itemMetadataAttachment: any[];
    /**
     * List price of the product.
     */
    listPrice: number;
    /**
     * Payment options.
     */
    paymentOptions: ProductSearchFilteredandOrdered200ApplicationJSONItemsSellersCommertialOfferPaymentOptions;
    /**
     * Price of the product.
     */
    price: number;
    /**
     * Price of the product valid until a certain date.
     */
    priceValidUntil: string;
    /**
     * Price of the product without discount.
     */
    priceWithoutDiscount: number;
    /**
     * Reward value of the product.
     */
    rewardValue: number;
    /**
     * Trade policy which the product is contained.
     */
    saleChannel: number;
    /**
     * Tax of the product.
     */
    tax: number;
    /**
     * Teasers.
     */
    teasers: any[];
}
export declare class ProductSearchFilteredandOrdered200ApplicationJSONItemsSellers extends SpeakeasyBase {
    /**
     * URL to add the product to the cart.
     */
    addToCartLink: string;
    /**
     * AKA Commertial Condition.
     */
    commertialOffer: ProductSearchFilteredandOrdered200ApplicationJSONItemsSellersCommertialOffer;
    /**
     * If the seller is default or not.
     */
    sellerDefault: boolean;
    /**
     * SKU seller ID.
     */
    sellerId: string;
    /**
     * SKU seller name.
     */
    sellerName: string;
}
export declare class ProductSearchFilteredandOrdered200ApplicationJSONItems extends SpeakeasyBase {
    /**
     * Videos.
     */
    videos: any[];
    /**
     * SKU complement name.
     */
    complementName: string;
    /**
     * SKU unique identification code (barcode), accepts up to 13 numerical characters.
     */
    ean: string;
    /**
     * Estimated date arrival.
     */
    estimatedDateArrival: string;
    /**
     * Array of information about the SKU image.
     */
    images: ProductSearchFilteredandOrdered200ApplicationJSONItemsImages[];
    /**
     * If the SKU is part of a kit.
     */
    isKit: boolean;
    /**
     * SKU ID.
     */
    itemId: string;
    /**
     * Array with information of SKUs components from a Kit.
     */
    kitItems: ProductSearchFilteredandOrdered200ApplicationJSONItemsKitItems[];
    /**
     * Used only in cases when you need to convert the unit of measure for sale. In common cases, use 'un'.
     */
    measurementUnit: string;
    /**
     * Modal Type.
     */
    modalType: string;
    /**
     * SKU name.
     */
    name: string;
    /**
     * SKU complete name.
     */
    nameComplete: string;
    /**
     * Reference code ID.
     */
    referenceId: ProductSearchFilteredandOrdered200ApplicationJSONItemsReferenceId[];
    /**
     * Array of SKU sellers.
     */
    sellers: ProductSearchFilteredandOrdered200ApplicationJSONItemsSellers[];
    /**
     * numerical unit that multiplies the selected quantity of the product when it is inserted in the cart.
     */
    unitMultiplier: number;
}
export declare class ProductSearchFilteredandOrdered200ApplicationJSON extends SpeakeasyBase {
    /**
     * Array of the product's specifications.
     */
    allSpecifications: string[];
    /**
     * Array of the product's specifications groups.
     */
    allSpecificationsGroups: string[];
    /**
     * Brand name.
     */
    brand: string;
    /**
     * Product brand ID.
     */
    brandId: number;
    /**
     * Product's brand image URL.
     */
    brandImageUrl: string;
    /**
     * Array of the product's categories URLs.
     */
    categories: any[];
    /**
     * Array of the product's categories IDs.
     */
    categoriesIds: any[];
    /**
     * Product category ID.
     */
    categoryId: string;
    /**
     * Cluster highlight ID and name.
     */
    clusterHighlights: Record<string, any>;
    /**
     * Description of the main information related to the product. A simple and easy to understand summary for the customer.
     */
    description: string;
    /**
     * Array containing the product SKU general information.
     */
    items: ProductSearchFilteredandOrdered200ApplicationJSONItems[];
    /**
     * Product URL.
     */
    link: string;
    /**
     * Product URL.
     */
    linkText: string;
    /**
     * Brief description of the category. It's recommended that you don't exceed 150 characters so that the search engines can display it correctly in the results page.
     */
    metaTagDescription: string;
    /**
     * Product clusters' IDs and names.
     */
    productClusters: Record<string, any>;
    /**
     * Product unique identifier.
     */
    productId: string;
    /**
     * Product name.
     */
    productName: string;
    /**
     * Product reference.
     */
    productReference: string;
    /**
     * Product reference ID.
     */
    productReferenceCode: number;
    /**
     * Text that is in the browser tab and corresponds to the title of the product page. This field is important for SEO.
     */
    productTitle: string;
    /**
     * Product release date.
     */
    releaseDate: string;
    /**
     * Searchable clusters IDs and names
     */
    searchableClusters: Record<string, any>;
}
export declare class ProductSearchFilteredandOrderedResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    productSearchFilteredandOrdered200ApplicationJSONObjects?: ProductSearchFilteredandOrdered200ApplicationJSON[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
