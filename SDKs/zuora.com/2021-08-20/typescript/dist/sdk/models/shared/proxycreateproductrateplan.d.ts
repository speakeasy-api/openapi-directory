import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Billing period associated with the corresponding item in NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).
 *
 * @remarks
 *
 */
export declare enum ProxyCreateProductRatePlanBillingPeriodNSEnum {
    Monthly = "Monthly",
    Quarterly = "Quarterly",
    Annual = "Annual",
    SemiAnnual = "Semi-Annual"
}
/**
 * Specifies whether the corresponding item in NetSuite is visible under child subsidiaries. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).
 *
 * @remarks
 *
 */
export declare enum ProxyCreateProductRatePlanIncludeChildrenNSEnum {
    Yes = "Yes",
    No = "No"
}
/**
 * Type of item that is created in NetSuite for the product rate plan. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).
 *
 * @remarks
 *
 */
export declare enum ProxyCreateProductRatePlanItemTypeNSEnum {
    Inventory = "Inventory",
    NonInventory = "Non Inventory",
    Service = "Service"
}
/**
 * Container for custom fields of a Product Rate Plan object.
 *
 * @remarks
 *
 */
export declare class ProxyCreateProductRatePlan extends SpeakeasyBase {
    /**
     * A list of 3-letter currency codes representing active currencies for the product rate plan. Use a comma to separate each currency code.
     *
     * @remarks
     *
     * When creating a product rate plan, you can use this field to specify at most four active currencies.
     *
     */
    activeCurrencies?: string[];
    /**
     * Billing period associated with the corresponding item in NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).
     *
     * @remarks
     *
     */
    billingPeriodNS?: ProxyCreateProductRatePlanBillingPeriodNSEnum;
    /**
     * Class associated with the corresponding item in NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).
     *
     * @remarks
     *
     */
    classNS?: string;
    /**
     * Department associated with the corresponding item in NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).
     *
     * @remarks
     *
     */
    departmentNS?: string;
    /**
     * A description of the product rate plan. **Character limit**: 500 **Values**: a string of 500 characters or fewer
     */
    description?: string;
    /**
     *  The date when the product rate plan expires and can't be subscribed to, in `yyyy-mm-dd` format.
     *
     * @remarks
     * **Character limit**: 29
     */
    effectiveEndDate?: Date;
    /**
     *  The date when the product rate plan becomes available and can be subscribed to, in `yyyy-mm-dd` format.
     *
     * @remarks
     * **Character limit**: 29
     */
    effectiveStartDate?: Date;
    /**
     * Specifies whether the corresponding item in NetSuite is visible under child subsidiaries. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).
     *
     * @remarks
     *
     */
    includeChildrenNS?: ProxyCreateProductRatePlanIncludeChildrenNSEnum;
    /**
     * ID of the corresponding object in NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).
     *
     * @remarks
     *
     */
    integrationIdNS?: string;
    /**
     * Status of the product rate plan's synchronization with NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).
     *
     * @remarks
     *
     */
    integrationStatusNS?: string;
    /**
     * Type of item that is created in NetSuite for the product rate plan. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).
     *
     * @remarks
     *
     */
    itemTypeNS?: ProxyCreateProductRatePlanItemTypeNSEnum;
    /**
     * Location associated with the corresponding item in NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).
     *
     * @remarks
     *
     */
    locationNS?: string;
    /**
     * Multi-currency price associated with the corresponding item in NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).
     *
     * @remarks
     *
     */
    multiCurrencyPriceNS?: string;
    /**
     * The name of the product rate plan. The name doesn't have to be unique in a Product Catalog, but the name has to be unique within a product. **Character limit**: 100 **Values**: a string of 100 characters or fewer
     */
    name: string;
    /**
     * Price associated with the corresponding item in NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).
     *
     * @remarks
     *
     */
    priceNS?: string;
    /**
     * The ID of the product that contains the product rate plan. **Character limit**: 32 **Values**: a string of 32 characters or fewer
     */
    productId: string;
    /**
     * Subsidiary associated with the corresponding item in NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).
     *
     * @remarks
     *
     */
    subsidiaryNS?: string;
    /**
     * Date when the product rate plan was synchronized with NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).
     *
     * @remarks
     *
     */
    syncDateNS?: string;
}
