import { SpeakeasyBase } from "../../../internal/utils";
import { GetProductFeatureType } from "./getproductfeaturetype";
/**
 * Type of item that is created in NetSuite for the product. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).
 *
 * @remarks
 *
 */
export declare enum GETProductTypeItemTypeNSEnum {
    Inventory = "Inventory",
    NonInventory = "Non Inventory",
    Service = "Service"
}
/**
 * Container for custom fields of a Product object.
 *
 * @remarks
 *
 */
export declare class GETProductType extends SpeakeasyBase {
    /**
     * ID of the corresponding object in NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).
     *
     * @remarks
     *
     */
    integrationIdNS?: string;
    /**
     * Status of the product's synchronization with NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).
     *
     * @remarks
     *
     */
    integrationStatusNS?: string;
    /**
     * Type of item that is created in NetSuite for the product. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).
     *
     * @remarks
     *
     */
    itemTypeNS?: GETProductTypeItemTypeNSEnum;
    /**
     * Date when the product was synchronized with NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).
     *
     * @remarks
     *
     */
    syncDateNS?: string;
    /**
     * Category of the product. Used by Zuora Quotes Guided Product Selector.
     *
     * @remarks
     *
     * Possible values are:
     *   - Base Products
     *   - Add On Services
     *   - Miscellaneous Products
     *
     */
    category?: string;
    /**
     * Optional product description.
     *
     * @remarks
     *
     */
    description?: string;
    /**
     * The date when the product expires and cannot be subscribed to anymore, as `yyyy-mm-dd`.
     *
     * @remarks
     *
     */
    effectiveEndDate?: Date;
    /**
     * The date when the product becomes available and can be subscribed to, as `yyyy-mm-dd`.
     *
     * @remarks
     *
     */
    effectiveStartDate?: Date;
    /**
     * Product ID.
     *
     * @remarks
     *
     */
    id?: string;
    /**
     * Product name, up to 100 characters.
     *
     * @remarks
     *
     */
    name?: string;
    /**
     * Container for one or more product features. Only available when the following settings are enabled:
     *
     * @remarks
     * - The Entitlements feature in your tenant
     * - The Enable Feature Specification in Product and Subscriptions setting in Settings > Billing
     *
     */
    productFeatures?: GetProductFeatureType[];
    /**
     * URL to retrieve information about all product rate plans of a specific product. For example, `/v1/rateplan/40289f466463d683016463ef8b7301a0/productRatePlan`. If you want to view the product rate plan details, call [List all product rate plans of a product](https://www.zuora.com/developer/api-reference/#operation/GET_ProductRatePlans) with the returned URL.
     *
     * @remarks
     *
     * This field is in Zuora REST API version control. If you set the `zuora-version` request header to `230.0` or later, the value of this field is a URL. Zuora recommends that you use the latest behavior to retrieve product information.
     *
     * If you do not set the `zuora-version` request header or you set this header to `229.0` or earlier, the value of this field is an array of product rate plan details. For more information about the array, see the response body of [List all product rate plans of a product](https://www.zuora.com/developer/api-reference/#operation/GET_ProductRatePlans). **Note**: The array contains a maximum of 300 product rate plans. Additionally, across all product rate plans, at most 300 product rate plan charges are returned.
     *
     */
    productRatePlans?: string;
    /**
     * Unique product SKU, up to 50 characters.
     *
     * @remarks
     *
     */
    sku?: string;
    tags?: string;
}
