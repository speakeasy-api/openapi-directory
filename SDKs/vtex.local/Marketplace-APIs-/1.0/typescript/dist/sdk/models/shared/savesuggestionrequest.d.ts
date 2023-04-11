import { SpeakeasyBase } from "../../../internal/utils";
import { Image } from "./image";
import { ProductSpecification } from "./productspecification";
import { SkuSpecification } from "./skuspecification";
export declare class SaveSuggestionRequestPricing extends SpeakeasyBase {
    currency?: string;
    currencySymbol?: string;
    salePrice?: number;
}
export declare class SaveSuggestionRequest extends SpeakeasyBase {
    availableQuantity: number;
    /**
     * Name of the brand to which this SKU belongs. It must match the brand created in the marketplace.
     */
    brandName: string;
    /**
     * Full path to the SKU's category. It should be written as {department}/{category}. For example: if the department is **Appliances** and the category is **Oven**, the full path should be 'Appliances/Oven'.
     */
    categoryFullPath: string;
    /**
     * SKU reference code. Mandatory if the RefId is not informed.
     */
    ean: string;
    /**
     * Height of the SKU.
     */
    height: number;
    /**
     * Array containing the URLs and names the SKU images.
     */
    images: Image[];
    /**
     * Length of the SKU.
     */
    length: number;
    /**
     * Measurement unit that should be used for this SKU. If this information doesn't apply, you should use the default value `un`.
     */
    measurementUnit?: string;
    pricing: SaveSuggestionRequestPricing;
    /**
     * Product Description containing the main information about the product (not the SKU).
     */
    productDescription: string;
    /**
     * Product ID in seller's account.
     */
    productId: string;
    /**
     * Name of the suggested product. This field has a limit of 150 characters.
     */
    productName: string;
    /**
     * Array containing the names and values of the product specifications.
     */
    productSpecifications?: ProductSpecification[];
    /**
     * SKU reference code. Mandotory if the EAN is not informed.
     */
    refId: string;
    /**
     * ID of the seller in the marketplace. This ID must be created by the marketplace and informed to the seller before the integration is built.
     */
    sellerId: string;
    /**
     * ID of the SKU registered in the seller.
     */
    sellerStockKeepingUnitId?: number;
    /**
     * Name of the suggested SKU.
     */
    skuName: string;
    /**
     * Array containing the names and values of the SKU specifications.
     */
    skuSpecifications?: SkuSpecification[];
    /**
     * Unit multiplier for this SKU. If this information doesn't apply, you should use the default value `1`.
     */
    unitMultiplier?: number;
    /**
     * Weight of the SKU in grams.
     */
    weight: number;
    /**
     * Width of the SKU.
     */
    width: number;
}
