import { SpeakeasyBase } from "../../../internal/utils";
import { PostTaxationItemType } from "./posttaxationitemtype";
/**
 * The date when revenue recognition is triggered.
 *
 * @remarks
 *
 */
export declare enum PostInvoiceItemTypeRevRecTriggerConditionEnum {
    ContractEffectiveDate = "ContractEffectiveDate",
    ServiceActivationDate = "ServiceActivationDate",
    CustomerAcceptanceDate = "CustomerAcceptanceDate"
}
/**
 * The tax mode of the invoice item, indicating whether the amount of the invoice item includes tax.
 *
 * @remarks
 *
 * **Note** This field is only available only when Taxation enabled.
 *
 */
export declare enum PostInvoiceItemTypeTaxModeEnum {
    TaxInclusive = "TaxInclusive",
    TaxExclusive = "TaxExclusive"
}
/**
 * Container for custom fields of an Invoice Item object.
 *
 * @remarks
 *
 */
export declare class PostInvoiceItemType extends SpeakeasyBase {
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
     *
     * @remarks
     *
     */
    accountingCode?: string;
    /**
     * The amount of the invoice item.
     *
     * @remarks
     *
     * - For tax-inclusive invoice items, the amount indicates the invoice item amount including tax.
     * - For tax-exclusive invoice items, the amount indicates the invoice item amount excluding tax.
     *
     */
    amount: string;
    /**
     * The booking reference of the invoice item.
     *
     * @remarks
     *
     */
    bookingReference?: string;
    /**
     * The date when the invoice item is charged.
     *
     * @remarks
     *
     */
    chargeDate?: Date;
    /**
     * The name of the charge associated with the invoice item.
     *
     * @remarks
     *
     * This field is required if the `productRatePlanChargeId` field is not specified in the request.
     *
     */
    chargeName?: string;
    /**
     * The accounting code for the deferred revenue, such as Monthly Recurring Liability.
     *
     * @remarks
     *
     * **Note:** This field is only available if you have Zuora Finance enabled.
     *
     */
    deferredRevenueAccountingCode?: string;
    /**
     * The description of the invoice item.
     *
     * @remarks
     *
     */
    description?: string;
    /**
     * The type of the invoice item.
     *
     * @remarks
     *
     */
    itemType?: string;
    /**
     * The ID of the product rate plan charge that the invoice item is created from.
     *
     * @remarks
     *
     * If you specify a value for the `productRatePlanChargeId` field in the request, Zuora directly copies the values of the following fields from the corresponding product rate plan charge, regardless of the values specified in the request body:
     * - `chargeName`
     * - `sku`
     * - `uom`
     * - `taxCode`
     * - `taxMode`
     * - `accountingCode`
     * - `deferredRevenueAccountingCode`
     * - `recognizedRevenueAccountingCode`
     *
     */
    productRatePlanChargeId?: string;
    /**
     * The purchase order number associated with the invoice item.
     *
     * @remarks
     *
     */
    purchaseOrderNumber?: string;
    /**
     * The number of units for the invoice item.
     *
     * @remarks
     *
     */
    quantity?: string;
    /**
     * The accounting code for the recognized revenue, such as Monthly Recurring Charges or Overage Charges.
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
     */
    revRecCode?: string;
    /**
     * The date when revenue recognition is triggered.
     *
     * @remarks
     *
     */
    revRecTriggerCondition?: PostInvoiceItemTypeRevRecTriggerConditionEnum;
    /**
     * The name of the revenue recognition rule governing the revenue schedule.
     *
     * @remarks
     *
     * **Note:** This field is only available if you have Zuora Finance enabled.
     *
     */
    revenueRecognitionRuleName?: string;
    /**
     * The service end date of the invoice item.
     *
     * @remarks
     *
     */
    serviceEndDate?: Date;
    /**
     * The service start date of the invoice item.
     *
     * @remarks
     *
     */
    serviceStartDate: Date;
    /**
     * The SKU of the invoice item.
     *
     * @remarks
     *
     */
    sku?: string;
    /**
     * The tax code identifies which tax rules and tax rates to apply to the invoice item.
     *
     * @remarks
     *
     * **Note** This field is only available only when Taxation enabled.
     *
     */
    taxCode?: string;
    /**
     * Container for taxation items. The maximum number of taxation items is 5.
     *
     * @remarks
     *
     */
    taxItems?: PostTaxationItemType[];
    /**
     * The tax mode of the invoice item, indicating whether the amount of the invoice item includes tax.
     *
     * @remarks
     *
     * **Note** This field is only available only when Taxation enabled.
     *
     */
    taxMode?: PostInvoiceItemTypeTaxModeEnum;
    /**
     * The per-unit price of the invoice item.
     *
     * @remarks
     *
     */
    unitPrice?: string;
    /**
     * The unit of measure.
     *
     * @remarks
     *
     */
    uom?: string;
}
