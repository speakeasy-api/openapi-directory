import { SpeakeasyBase } from "../../../internal/utils";
export declare class LicenseItemsProductsEndpoints extends SpeakeasyBase {
    consoleUrl?: string;
    webApiUrl?: string;
}
/**
 * Object representing products of licenses
 */
export declare class LicenseItemsProducts extends SpeakeasyBase {
    domains?: string[];
    endpoints?: LicenseItemsProductsEndpoints;
    /**
     * ID of the product
     */
    id?: number;
    /**
     * Name of the product
     */
    name?: string;
}
/**
 * Object representing licenses
 */
export declare class LicenseItems extends SpeakeasyBase {
    expiration?: Date;
    /**
     * ID of the category of the license
     */
    id?: number;
    /**
     * If the license is purchased
     */
    isPurchased?: boolean;
    /**
     * Name of the category of the license
     */
    name?: string;
    /**
     * Array of products
     */
    products?: LicenseItemsProducts[];
}
