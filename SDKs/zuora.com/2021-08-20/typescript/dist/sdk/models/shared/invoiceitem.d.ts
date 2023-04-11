import { SpeakeasyBase } from "../../../internal/utils";
import { GETInvoiceTaxItemType } from "./getinvoicetaxitemtype";
/**
 * The date when revenue recognition is triggered.
 *
 * @remarks
 *
 * **Note:** This field is only available if you have Unified Invoicing enabled.
 *
 */
export declare enum InvoiceItemRevRecTriggerConditionEnum {
    ContractEffectiveDate = "ContractEffectiveDate",
    ServiceActivationDate = "ServiceActivationDate",
    CustomerAcceptanceDate = "CustomerAcceptanceDate"
}
/**
 * Container for the taxation items of the invoice item.
 *
 * @remarks
 *
 */
export declare class InvoiceItemTaxationItems extends SpeakeasyBase {
    /**
     * List of taxation items.
     *
     * @remarks
     *
     */
    data?: GETInvoiceTaxItemType[];
    /**
     * URL to retrieve the next page of the response if it exists; otherwise absent.
     *
     * @remarks
     *
     */
    nextPage?: string;
}
/**
 * Container for custom fields of an Invoice Item object.
 *
 * @remarks
 *
 */
export declare class InvoiceItem extends SpeakeasyBase {
    /**
     * ID of the corresponding object in NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).
     *
     * @remarks
     *
     */
    integrationIdNS?: string;
    /**
     * Status of the invoice item's synchronization with NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).
     *
     * @remarks
     *
     */
    integrationStatusNS?: string;
    /**
     * Date when the invoice item was synchronized with NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).
     *
     * @remarks
     *
     */
    syncDateNS?: string;
    /**
     * The accounting code associated with the invoice item.
     */
    accountingCode?: string;
    /**
     * The unique ID of the invoice item that the discount charge is applied to.
     */
    appliedToItemId?: string;
    /**
     * The amount of the invoice item that is available to credit.
     *
     * @remarks
     *
     */
    availableToCreditAmount?: number;
    /**
     * The balance of the invoice item.
     */
    balance?: string;
    /**
     * The booking reference of the invoice item.
     *
     * @remarks
     *
     * **Note:** This field is only available if you have Unified Invoicing enabled.
     *
     */
    bookingReference?: string;
    /**
     * The amount of the charge.
     *
     * @remarks
     *
     * This amount does not include taxes regardless if the charge's tax mode is inclusive or exclusive.
     *
     */
    chargeAmount?: string;
    /**
     * The description of the charge.
     */
    chargeDescription?: string;
    /**
     * The unique ID of the charge.
     */
    chargeId?: string;
    /**
     * The name of the charge.
     */
    chargeName?: string;
    /**
     * The deferred revenue accounting code associated with the invoice item.
     *
     * @remarks
     *
     * **Note:** This field is only available if you have Zuora Finance enabled.
     *
     */
    deferredRevenueAccountingCode?: string;
    /**
     * The description of the invoice item.
     */
    description?: string;
    /**
     * Item ID.
     */
    id?: string;
    /**
     * The type of the invoice item.
     *
     * @remarks
     *
     * **Note:** This field is only available if you have Unified Invoicing enabled.
     *
     */
    itemType?: string;
    /**
     * Name of the product associated with this item.
     */
    productName?: string;
    /**
     * The ID of the product rate plan charge that the invoice item is created from.
     *
     * @remarks
     *
     * **Note:** This field is only available if you have Unified Invoicing enabled.
     *
     */
    productRatePlanChargeId?: string;
    /**
     * The purchase order number associated with the invoice item.
     *
     * @remarks
     *
     * **Note:** This field is only available if you have Unified Invoicing enabled.
     *
     */
    purchaseOrderNumber?: string;
    /**
     * The quantity of this item, in the configured unit of measure for the charge.
     */
    quantity?: string;
    /**
     * The recognized revenue accounting code associated with the invoice item.
     *
     * @remarks
     *
     * **Note:** This field is only available if you have Zuora Finance enabled.
     *
     */
    recognizedRevenueAccountingCode?: string;
    /**
     * The revenue recognition code.
     *
     * @remarks
     *
     * **Note:** This field is only available if you have Unified Invoicing enabled.
     *
     */
    revRecCode?: string;
    /**
     * The date when revenue recognition is triggered.
     *
     * @remarks
     *
     * **Note:** This field is only available if you have Unified Invoicing enabled.
     *
     */
    revRecTriggerCondition?: InvoiceItemRevRecTriggerConditionEnum;
    /**
     * The tevenue recognition rule of the invoice item.
     *
     * @remarks
     *
     * **Note:** This field is only available if you have Zuora Finance enabled.
     *
     */
    revenueRecognitionRuleName?: string;
    /**
     * The end date of the service period for this item, i.e., the last day of the service period, as _yyyy-mm-dd_.
     */
    serviceEndDate?: Date;
    /**
     * The start date of the service period for this item, as _yyyy-mm-dd_. For a one-time fee item, the date of the charge.
     */
    serviceStartDate?: Date;
    /**
     * The SKU of the invoice item.
     *
     * @remarks
     *
     * **Note:** This field is only available if you have Unified Invoicing enabled.
     *
     */
    sku?: string;
    /**
     * The ID of the subscription for this item.
     */
    subscriptionId?: string;
    /**
     * The name of the subscription for this item.
     */
    subscriptionName?: string;
    /**
     * Returns `true` if the request was processed successfully.
     */
    success?: boolean;
    /**
     * Tax applied to the charge.
     */
    taxAmount?: string;
    /**
     * The tax code of the invoice item.
     *
     * @remarks
     * **Note** Only when taxation feature is enabled, this field can be presented.
     *
     */
    taxCode?: string;
    /**
     * The tax mode of the invoice item.
     *
     * @remarks
     * **Note** Only when taxation feature is enabled, this field can be presented.
     *
     */
    taxMode?: string;
    /**
     * Container for the taxation items of the invoice item.
     *
     * @remarks
     *
     */
    taxationItems?: InvoiceItemTaxationItems;
    /**
     * Unit used to measure consumption.
     */
    unitOfMeasure?: string;
    /**
     * The per-unit price of the invoice item.
     */
    unitPrice?: number;
}
