import { SpeakeasyBase } from "../../../internal/utils";
import { GETProductRatePlanChargeType } from "./getproductrateplanchargetype";
/**
 * Billing period associated with the corresponding item in NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).
 *
 * @remarks
 *
 */
export declare enum GETProductRatePlanTypeBillingPeriodNSEnum {
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
export declare enum GETProductRatePlanTypeIncludeChildrenNSEnum {
    Yes = "Yes",
    No = "No"
}
/**
 * Type of item that is created in NetSuite for the product rate plan. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).
 *
 * @remarks
 *
 */
export declare enum GETProductRatePlanTypeItemTypeNSEnum {
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
export declare class GETProductRatePlanType extends SpeakeasyBase {
    /**
     * Billing period associated with the corresponding item in NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).
     *
     * @remarks
     *
     */
    billingPeriodNS?: GETProductRatePlanTypeBillingPeriodNSEnum;
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
     * Specifies whether the corresponding item in NetSuite is visible under child subsidiaries. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).
     *
     * @remarks
     *
     */
    includeChildrenNS?: GETProductRatePlanTypeIncludeChildrenNSEnum;
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
    itemTypeNS?: GETProductRatePlanTypeItemTypeNSEnum;
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
     * Price associated with the corresponding item in NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).
     *
     * @remarks
     *
     */
    priceNS?: string;
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
    /**
     * Rate plan description.
     *
     * @remarks
     *
     */
    description?: string;
    /**
     * Final date the rate plan is active, as `yyyy-mm-dd`. After this date, the rate plan status is `Expired`.
     *
     * @remarks
     *
     */
    effectiveEndDate?: Date;
    /**
     * First date the rate plan is active (i.e., available to be subscribed to), as `yyyy-mm-dd`.  Before this date, the status is `NotStarted`.
     *
     * @remarks
     *
     */
    effectiveStartDate?: Date;
    /**
     * Unique product rate-plan charge ID.
     *
     * @remarks
     *
     */
    id?: string;
    /**
     * Name of the product rate-plan charge. (Not required to be unique.)
     *
     * @remarks
     *
     */
    name?: string;
    /**
     * Field attributes describing the product rate plan charges:
     *
     * @remarks
     *
     */
    productRatePlanCharges?: GETProductRatePlanChargeType[];
    /**
     * Possible vales are: `Active`, `Expired`, `NotStarted`.
     *
     * @remarks
     *
     */
    status?: string;
}
