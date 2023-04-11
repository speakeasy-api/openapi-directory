import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Type of item that is created in NetSuite for the product. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).
 *
 * @remarks
 *
 */
export declare enum ProxyModifyProductItemTypeNSEnum {
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
export declare class ProxyModifyProduct extends SpeakeasyBase {
    /**
     *  Controls whether to allow your users to add or remove features while creating or amending a subscription.
     *
     * @remarks
     * **Character** **limit**: n/a
     * **Values**: true, false (default)
     */
    allowFeatureChanges?: boolean;
    /**
     *  Category of the product. Used by Zuora Quotes Guided Product Selector.
     *
     * @remarks
     * **Character** **limit**: 100
     * **Values**: One of the following:
     *
     * - Base Products
     * - Add On Services
     * - Miscellaneous Products
     *
     */
    category?: string;
    /**
     *  A descriptionof the product. **Character limit**: 500 **Values**: a string of 500 characters or fewer
     */
    description?: string;
    /**
     * The date when the product expires and can't be subscribed to anymore, in `yyyy-mm-dd` format.
     *
     * @remarks
     *
     */
    effectiveEndDate?: Date;
    /**
     * The date when the product becomes available and can be subscribed to, in `yyyy-mm-dd` format.
     *
     * @remarks
     *
     */
    effectiveStartDate?: Date;
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
    itemTypeNS?: ProxyModifyProductItemTypeNSEnum;
    /**
     * The name of the product. This information is displayed in the product catalog pages in the web-based UI. **Character limit**: 100 **Values**: a string of 100 characters or fewer
     */
    name?: string;
    /**
     * The unique SKU for the product. **Character limit**: 50 **Values**: one of the following:
     *
     * @remarks
     *
     * - leave null for automatic generated
     * - an alphanumeric string of 50 characters or fewer
     *
     */
    sku?: string;
    /**
     * Date when the product was synchronized with NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).
     *
     * @remarks
     *
     */
    syncDateNS?: string;
}
