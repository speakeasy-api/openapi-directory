import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Billing period associated with the corresponding item in NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).
 *
 * @remarks
 *
 */
export declare enum ProxyModifyProductRatePlanBillingPeriodNSEnum {
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
export declare enum ProxyModifyProductRatePlanIncludeChildrenNSEnum {
    Yes = "Yes",
    No = "No"
}
/**
 * Type of item that is created in NetSuite for the product rate plan. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).
 *
 * @remarks
 *
 */
export declare enum ProxyModifyProductRatePlanItemTypeNSEnum {
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
export declare class ProxyModifyProductRatePlan extends SpeakeasyBase {
    /**
     * A list of 3-letter currency codes representing active currencies for the product rate plan. Use a comma to separate each currency code.
     *
     * @remarks
     *
     * If the request body contains this field, the value of this field must contain the desired list of active currencies. The new list can never have more than four differences from the existing list.
     *
     * This field cannot be used to modify the status of more than four currencies in a single request. For example, in a single request, you can only activate four currencies, or deactivate four currencies, or activate two and deactivate two. Making more than four changes to currencies always requires more than one call.
     *
     * When specifying this field in the update request, you must provide the full list of active currencies you want, not just incremental changes. For each active currency update, provide the following currencies in the list:
     *
     * Current active currencies + at most four changes (additions or deletions)
     *
     */
    activeCurrencies?: string[];
    /**
     * Billing period associated with the corresponding item in NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).
     *
     * @remarks
     *
     */
    billingPeriodNS?: ProxyModifyProductRatePlanBillingPeriodNSEnum;
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
    includeChildrenNS?: ProxyModifyProductRatePlanIncludeChildrenNSEnum;
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
    itemTypeNS?: ProxyModifyProductRatePlanItemTypeNSEnum;
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
    name?: string;
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
    productId?: string;
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
