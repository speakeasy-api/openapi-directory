import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetApiCatalogSystemPubProductsOffersProductIdRequest extends SpeakeasyBase {
    /**
     * HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.
     */
    accept: string;
    /**
     * Describes the type of the content being sent.
     */
    contentType: string;
    /**
     * Product unique number identifier.
     */
    productId: string;
}
/**
 * General information of the main image of the SKU.
 */
export declare class GetApiCatalogSystemPubProductsOffersProductId200ApplicationJSONMainImage extends SpeakeasyBase {
    /**
     * Unique identifier of the association of the Image to the SKU.
     */
    imageId: string;
    /**
     * Image Label.
     */
    imageLabel: string;
    /**
     * Image file path.
     */
    imagePath: string;
    /**
     * Image HTML tag.
     */
    imageTag: string;
    /**
     * General text of the image.
     */
    imageText: string;
    /**
     * If the image is the main image of the SKU or not.
     */
    isMain: boolean;
    /**
     * If the image has zoom applied.
     */
    isZoomSize: boolean;
    /**
     * Time that the image was last modified.
     */
    lastModified: string;
}
export declare class GetApiCatalogSystemPubProductsOffersProductId200ApplicationJSONOffersOffersPerSalesChannel extends SpeakeasyBase {
    /**
     * SKU available quantity.
     */
    availableQuantity: number;
    /**
     * If the SKU is available or not.
     */
    isAvailable: boolean;
    /**
     * SKU list price.
     */
    listPrice: number;
    /**
     * SKU price.
     */
    price: number;
    /**
     * SKU precie without discount.
     */
    priceWithoutDiscount: number;
    /**
     * SKU trade policy.
     */
    saleChannel: number;
}
export declare class GetApiCatalogSystemPubProductsOffersProductId200ApplicationJSONOffers extends SpeakeasyBase {
    /**
     * Trade policy that the SKU in contained.
     */
    availableSalesChannels: string;
    /**
     * Offers per trade policy.
     */
    offersPerSalesChannel: GetApiCatalogSystemPubProductsOffersProductId200ApplicationJSONOffersOffersPerSalesChannel[];
    /**
     * Seller ID.
     */
    sellerId: string;
    /**
     * ID of the association of the SKU with the seller.
     */
    sellerSkuId: string;
}
export declare class GetApiCatalogSystemPubProductsOffersProductId200ApplicationJSON extends SpeakeasyBase {
    /**
     * SKU unique identification code (barcode), accepts up to 13 numerical characters.
     */
    eanId: string;
    /**
     * If the SKU is active or not.
     */
    isActive: boolean;
    /**
     * Time that the offer was last modified.
     */
    lastModified: string;
    /**
     * General information of the main image of the SKU.
     */
    mainImage: GetApiCatalogSystemPubProductsOffersProductId200ApplicationJSONMainImage;
    /**
     * SKU name.
     */
    name: string;
    /**
     * SKU complete name.
     */
    nameComplete: string;
    /**
     * AKA Commertial Condition.
     */
    offers: GetApiCatalogSystemPubProductsOffersProductId200ApplicationJSONOffers[];
    /**
     * Product ID.
     */
    productId: string;
    /**
     * Unique reference code used internally for organizational purposes.
     */
    refId: string;
    /**
     * SKU ID.
     */
    skuId: string;
}
export declare class GetApiCatalogSystemPubProductsOffersProductIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    getApiCatalogSystemPubProductsOffersProductId200ApplicationJSONObjects?: GetApiCatalogSystemPubProductsOffersProductId200ApplicationJSON[];
}
