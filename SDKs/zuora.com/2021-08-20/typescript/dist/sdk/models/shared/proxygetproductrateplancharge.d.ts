import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specifies whether the corresponding item in NetSuite is visible under child subsidiaries. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).
 *
 * @remarks
 *
 */
export declare enum ProxyGetProductRatePlanChargeIncludeChildrenNSEnum {
    Yes = "Yes",
    No = "No"
}
/**
 * Type of item that is created in NetSuite for the product rate plan charge. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).
 *
 * @remarks
 *
 */
export declare enum ProxyGetProductRatePlanChargeItemTypeNSEnum {
    Inventory = "Inventory",
    NonInventory = "Non Inventory",
    Service = "Service"
}
/**
 * A rating group based on which usage records are rated. Only applicable to Usage charges.
 *
 * @remarks
 *
 * Possible values:
 *
 * - `ByBillingPeriod`: The rating is based on all the usages in a billing period.
 * - `ByUsageStartDate`: The rating is based on all the usages on the same usage start date.
 * - `ByUsageRecord`: The rating is based on each usage record.
 * - `ByUsageUpload`: The rating is based on all the  usages in a uploaded usage file (`.xls` or `.csv`).
 * - `ByGroupId`: The rating is based on all the usages in a custom group.
 *
 * For more information, see [Usage rating by group](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/J_Billing_Operations/Usage/Usage_Rating_by_Group).
 *
 */
export declare enum ProxyGetProductRatePlanChargeRatingGroupEnum {
    ByBillingPeriod = "ByBillingPeriod",
    ByUsageStartDate = "ByUsageStartDate",
    ByUsageRecord = "ByUsageRecord",
    ByUsageUpload = "ByUsageUpload",
    ByGroupId = "ByGroupId"
}
/**
 * End date condition of the corresponding item in NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).
 *
 * @remarks
 *
 */
export declare enum ProxyGetProductRatePlanChargeRevRecEndNSEnum {
    ChargePeriodStart = "Charge Period Start",
    RevRecTriggerDate = "Rev Rec Trigger Date",
    UseNetSuiteRevRecTemplate = "Use NetSuite Rev Rec Template"
}
/**
 * Start date condition of the corresponding item in NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).
 *
 * @remarks
 *
 */
export declare enum ProxyGetProductRatePlanChargeRevRecStartNSEnum {
    ChargePeriodStart = "Charge Period Start",
    RevRecTriggerDate = "Rev Rec Trigger Date",
    UseNetSuiteRevRecTemplate = "Use NetSuite Rev Rec Template"
}
/**
 * Container for custom fields of a Product Rate Plan Charge object.
 *
 * @remarks
 *
 */
export declare class ProxyGetProductRatePlanCharge extends SpeakeasyBase {
    /**
     * The accounting code for the charge. Accounting codes group transactions that contain similar accounting attributes. **Character limit**: 100 **Values**: an active accounting code in your Zuora Chart of Accounts
     */
    accountingCode?: string;
    /**
     * Specifies the type of charges that you want a specific discount to apply to. All field values are case sensitive: note that these values are in all-caps. **Character limit**: 21 **Values**: one of the following:
     *
     * @remarks
     *
     * - `ONETIME (1)`
     * - `RECURRING (2)`
     * - `USAGE (4)`
     * - `ONETIMERECURRING (3)`
     * - `ONETIMEUSAGE (5)`
     * - `RECURRINGUSAGE (6)`
     * - `ONETIMERECURRINGUSAGE (7)`
     *
     */
    applyDiscountTo?: string;
    /**
     *  Sets the bill cycle day (BCD) for the charge. The BCD determines which day of the month customer is billed. The BCD value in the account can override the BCD in this object.
     *
     * @remarks
     * **Character limit**: 2 **Values**: a valid BCD integer, 1 - 31
     */
    billCycleDay?: number;
    /**
     *  Specifies how to determine the billing day for the charge. **Character limit**: 20 **Values**: one of the following:
     *
     * @remarks
     *
     * - `DefaultFromCustomer`
     * - `SpecificDayofMonth:`
     * - `SubscriptionStartDay`
     * - `ChargeTriggerDay`
     * - `SpecificDayofWeek`
     * **Note**:
     *
     * - If you set this field to `SpecificDayofMonth`, you must specify which day of the month as the billing day for the charge in the BillCycleDay field.
     * - If you set this field to `SpecificDayofWeek`, you must specify which day of the week as the billing day for the charge in the WeeklyBillCycleDay field.
     *
     */
    billCycleType?: string;
    /**
     *  The billing period for the charge. The start day of the billing period is also called the bill cycle day (BCD).
     *
     * @remarks
     * **Character limit**: 15 **Values**: one of the following
     *
     * - `Month`
     * - `Quarter`
     * - `Annual`
     * - `Semi-Annual`
     * - `Specific Months`
     * - `Subscription Term` (This value is in **Limited Availability**.)
     * - `Week`
     * - `Specific Weeks`
     * **Note**: Specify the number of months or weeks in the SpecificBillingPeriod field if you set this field to `Specific Months` or `Specific Weeks`.
     */
    billingPeriod?: string;
    /**
     *  Aligns charges within the same subscription if multiple charges begin on different dates.
     *
     * @remarks
     * **Character limit**: 24 **Values**: one of the following:
     *
     * - `AlignToCharge`
     * - `AlignToSubscriptionStart`
     * - `AlignToTermStart`
     *
     */
    billingPeriodAlignment?: string;
    /**
     *  The billing timing for the charge. You can choose to bill in advance or in arrears for recurring charge types. This field is not used in one-time or usage based charge types.
     *
     * @remarks
     * **Character limit**: **Values**: one of the following:
     *
     * - `In Advance`
     * - `In Arrears`
     *
     * This feature is in **Limited Availability**. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/).
     *
     *
     */
    billingTiming?: string;
    /**
     *  Determines how to calculate charges. Charge models must be individually activated in Zuora Billing administration.
     *
     * @remarks
     * **Character limit**: 27 **Values**: one of the following:
     *
     * - `Discount-Fixed Amount`
     * - `Discount-Percentage`
     * - `Flat Fee Pricing`
     * - `Per Unit Pricing`
     * - `Overage Pricing`
     * - `Tiered Pricing`
     * - `Tiered with Overage Pricing`
     * - `Volume Pricing`
     *
     */
    chargeModel?: string;
    /**
     *  Specifies the type of charge.
     *
     * @remarks
     * **Character limit**: 9 **Values**: one of the following:
     *
     * - `OneTime`
     * - `Recurring`
     * - `Usage`
     *
     */
    chargeType?: string;
    /**
     * Class associated with the corresponding item in NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).
     *
     * @remarks
     *
     */
    classNS?: string;
    /**
     * The ID of the Zuora user who created the `ProductRatePlanCharge` object. **Character limit**: 32 **Values**: automatically generated
     */
    createdById?: string;
    /**
     *  The date when the  `ProductRatePlanCharge` object was created.
     *
     * @remarks
     * **Character limit**: 29 **Values**: automatically generated
     */
    createdDate?: Date;
    /**
     *  The default quantity of units, such as the number of authors in a hosted wiki service. This field is required if you use a per-unit pricing model.
     *
     * @remarks
     * **Character limit**: 16 **Values**: a valid quantity value
     */
    defaultQuantity?: number;
    /**
     * Deferrred revenue account associated with the corresponding item in NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).
     *
     * @remarks
     *
     */
    deferredRevAccountNS?: string;
    /**
     *  The name of the deferred revenue account for this charge.
     *
     * @remarks
     * **Character limit**: 100 **Values**: an active accounting code in your Zuora Chart of Accounts
     * This feature is in **Limited Availability**. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/).
     *
     *
     */
    deferredRevenueAccount?: string;
    /**
     * Department associated with the corresponding item in NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).
     *
     * @remarks
     *
     */
    departmentNS?: string;
    /**
     * A description of the charge. **Character limit**: 500 **Values**: a string of 500 characters or fewer
     */
    description?: string;
    /**
     *  Specifies if the discount applies to just the product rate plan, the entire subscription, or to any activity in the account.
     *
     * @remarks
     * **Character limit**: 12 **Values**: one of the following:
     *
     * - `rateplan`
     * - `subscription`, `account`
     *
     */
    discountLevel?: string;
    /**
     *  Defines when the charge ends after the charge trigger date.
     *
     * @remarks
     * **Values**: one of the following:
     *
     * - `SubscriptionEnd`: The charge ends on the subscription end date after a specified period based on the trigger date of the charge. This is the default value.
     * - `FixedPeriod`: The charge ends after a specified period based on the trigger date of the charge. If you set this field to `FixedPeriod`, you must specify the length of the period and a period type by defining the `UpToPeriods` and `UpToPeriodsType` fields.
     * **Note**: If the subscription ends before the charge end date, the charge ends when the subscription ends. But if the subscription end date is subsequently changed through a Renewal, or Terms and Conditions amendment, the charge will end on the charge end date.
     */
    endDateCondition?: string;
    /**
     * Object identifier.
     */
    id?: string;
    /**
     * Specifies whether the corresponding item in NetSuite is visible under child subsidiaries. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).
     *
     * @remarks
     *
     */
    includeChildrenNS?: ProxyGetProductRatePlanChargeIncludeChildrenNSEnum;
    /**
     * Specifies the number of units in the base set of units. **Character limit**: 16 **Values**: a positive decimal value
     */
    includedUnits?: number;
    /**
     * ID of the corresponding object in NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).
     *
     * @remarks
     *
     */
    integrationIdNS?: string;
    /**
     * Status of the product rate plan charge's synchronization with NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).
     *
     * @remarks
     *
     */
    integrationStatusNS?: string;
    /**
     * Type of item that is created in NetSuite for the product rate plan charge. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).
     *
     * @remarks
     *
     */
    itemTypeNS?: ProxyGetProductRatePlanChargeItemTypeNSEnum;
    legacyRevenueReporting?: boolean;
    /**
     * The list price base for the product rate plan charge. **Values**: one of the following:
     *
     * @remarks
     *
     * - `Per Month`
     * - `Per Billing Period`
     * - `Per Week`
     *
     */
    listPriceBase?: string;
    /**
     * Location associated with the corresponding item in NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).
     *
     * @remarks
     *
     */
    locationNS?: string;
    /**
     *  Specifies the maximum number of units for this charge. Use this field and the `MinQuantity` field to create a range of units allowed in a product rate plan charge.
     *
     * @remarks
     * **Character limit**: 16 **Values**: a positive decimal value
     */
    maxQuantity?: number;
    /**
     * Specifies the minimum number of units for this charge. Use this field and the `MaxQuantity` field to create a range of units allowed in a product rate plan charge. **Character limit**: 16 **Values**: a positive decimal value
     */
    minQuantity?: number;
    /**
     * The name of the product rate plan charge. **Character limit**: 100 **Values**: a string of 100 characters or fewer
     */
    name?: string;
    /**
     * Specifies the number of periods to use when calculating charges in an overage smoothing charge model. **Character limit**: **Values**: a positive whole number
     */
    numberOfPeriod?: number;
    /**
     * Determines when to calculate overage charges. If the value of the SmoothingMode field is not specified, the value of this field is ignored. **Character limit**: 20 **Values**: one of the following:
     *
     * @remarks
     *
     * - `EndOfSmoothingPeriod`: This option is used by default. The overage is charged at the end of the smoothing period.
     * - `PerBillingPeriod`: The overage is charged on-demand rather than waiting until the end of the smoothing period.
     *
     */
    overageCalculationOption?: string;
    /**
     *  Determines whether to credit the customer with unused units of usage.
     *
     * @remarks
     * **Character limit**: 20 **Values**: one of the following:
     *
     * - `NoCredit`
     * - `CreditBySpecificRate`
     *
     */
    overageUnusedUnitsCreditOption?: string;
    /**
     *  Applies an automatic price change when a termed subscription is renewed.
     *
     * @remarks
     * **Character limit**: **Values**: one of the following:
     *
     * - `NoChange` (default)
     * - `SpecificPercentageValue`
     * - `UseLatestProductCatalogPricing`
     *
     */
    priceChangeOption?: string;
    /**
     *  Specifies the percentage to increase or decrease the price of a termed subscription's renewal. Use this field if you set the value to `SpecificPercentageValue`.
     *
     * @remarks
     * **Character limit**: 16 **Values**: a decimal value between -100 and 100
     */
    priceIncreasePercentage?: number;
    /**
     *  The ID of the product rate plan associated with this product rate plan charge.
     *
     * @remarks
     * **Character limit**: 32 **Values**: a valid product rate plan ID
     */
    productRatePlanId?: string;
    /**
     * A rating group based on which usage records are rated. Only applicable to Usage charges.
     *
     * @remarks
     *
     * Possible values:
     *
     * - `ByBillingPeriod`: The rating is based on all the usages in a billing period.
     * - `ByUsageStartDate`: The rating is based on all the usages on the same usage start date.
     * - `ByUsageRecord`: The rating is based on each usage record.
     * - `ByUsageUpload`: The rating is based on all the  usages in a uploaded usage file (`.xls` or `.csv`).
     * - `ByGroupId`: The rating is based on all the usages in a custom group.
     *
     * For more information, see [Usage rating by group](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/J_Billing_Operations/Usage/Usage_Rating_by_Group).
     *
     */
    ratingGroup?: ProxyGetProductRatePlanChargeRatingGroupEnum;
    /**
     * Recognized revenue account associated with the corresponding item in NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).
     *
     * @remarks
     *
     */
    recognizedRevAccountNS?: string;
    /**
     *  The name of the recognized revenue account for this charge.
     *
     * @remarks
     *
     * - Required when the Allow Blank Accounting Code setting is No.
     * - Optional when the Allow Blank Accounting Code setting is Yes.
     *
     * **Character limit**: 100 **Values**: an active accounting code in your Zuora Chart of Accounts
     * This feature is in **Limited Availability**. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/).
     *
     *
     */
    recognizedRevenueAccount?: string;
    /**
     * Associates this product rate plan charge with a specific revenue recognition code. **Character limit**: 70 **Values**: a valid revenue recognition code
     */
    revRecCode?: string;
    /**
     * End date condition of the corresponding item in NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).
     *
     * @remarks
     *
     */
    revRecEndNS?: ProxyGetProductRatePlanChargeRevRecEndNSEnum;
    /**
     * Start date condition of the corresponding item in NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).
     *
     * @remarks
     *
     */
    revRecStartNS?: ProxyGetProductRatePlanChargeRevRecStartNSEnum;
    /**
     * Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).
     *
     * @remarks
     *
     */
    revRecTemplateTypeNS?: string;
    /**
     *  Specifies when revenue recognition begins.
     *
     * @remarks
     * **Character limit**: 22 **Values**: one of the following:
     *
     * - `ContractEffectiveDate`
     * - `ServiceActivationDate`
     * - `CustomerAcceptanceDate`
     *
     */
    revRecTriggerCondition?: string;
    /**
     * Determines when to recognize the revenue for this charge. **Character limit**: 25 **Values**: one of the following:
     *
     * @remarks
     *
     * - `Recognize upon invoicing`
     * - `Recognize daily over time`
     *
     */
    revenueRecognitionRuleName?: string;
    /**
     *  Specifies the smoothing model for an overage smoothing charge model.
     *
     * @remarks
     * **Character limit**: 22 **Values**: one of the following:
     *
     * - `RollingWindow`
     * - `Rollover`
     *
     */
    smoothingModel?: string;
    /**
     *  Customizes the number of months or weeks for the charges billing period. This field is required if you set the value of the BillingPeriod field to `Specific Months` or `Specific Weeks`.
     *
     * @remarks
     * **Values**: a positive integer
     */
    specificBillingPeriod?: number;
    /**
     * Subsidiary associated with the corresponding item in NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).
     *
     * @remarks
     *
     */
    subsidiaryNS?: string;
    /**
     * Date when the product rate plan charge was synchronized with NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).
     *
     * @remarks
     *
     */
    syncDateNS?: string;
    /**
     *  Specifies the tax code for taxation rules. Required when the Taxable field is set to `True`.
     *
     * @remarks
     *
     * **Character limit**: 64
     *
     * **Values**: a valid tax code
     *
     * **Note**: This value affects the tax calculation of rate plan charges that come from the `ProductRatePlanCharge`.
     */
    taxCode?: string;
    /**
     *  Determines how to define taxation for the charge. Required when the Taxable field is set to `True`.
     *
     * @remarks
     *
     * **Character limit**: 12
     *
     * **Values**: one of the following:
     *
     * - `TaxExclusive`
     * - `TaxInclusive`
     *
     * **Note**: This value affects the tax calculation of rate plan charges that come from the `ProductRatePlanCharge`.
     */
    taxMode?: string;
    /**
     *  Determines whether the charge is taxable. When set to `True`, the TaxMode and TaxCode fields are required when creating or updating th ProductRatePlanCharge object.
     *
     * @remarks
     *
     * **Character limit**: 5
     *
     * **Values**: `True`, `False`
     *
     * **Note**: This value affects the tax calculation of rate plan charges that come from the `ProductRatePlanCharge`.
     */
    taxable?: boolean;
    /**
     *  Specifies when to start billing the customer for the charge.
     *
     * @remarks
     * **Character limit**: 18 **Values**: one of the following:
     *
     * - `ContractEffective` is the date when the subscription's contract goes into effect and the charge is ready to be billed.
     * - `ServiceActivation` is the date when the services or products for a subscription have been activated and the customers have access.
     * - `CustomerAcceptance` is when the customer accepts the services or products for a subscription.
     *
     */
    triggerEvent?: string;
    /**
     *  Specifies the units to measure usage.
     *
     * @remarks
     * **Character limit**: 25 **Values**: a configured unit of measure **Note**: You must specify this field when creating the following charge models:
     *
     * - Per Unit Pricing
     * - Volume Pricing
     * - Overage Pricing
     * - Tiered Pricing
     * - Tiered with Overage Pricing
     *
     */
    uom?: string;
    /**
     *  Specifies the length of the period during which the charge is active. If this period ends before the subscription ends, the charge ends when this period ends.
     *
     * @remarks
     * **Character limit**: 5 **Values**: a whole number between 0 and 65535, exclusive **Note**:
     *
     * - You must use this field together with the `UpToPeriodsType` field to specify the time period. This field is applicable only when the `EndDateCondition` field is set to `FixedPeriod`.
     * - If the subscription end date is subsequently changed through a Renewal, or Terms and Conditions amendment, the charge end date will change accordingly up to the original period end.
     *
     */
    upToPeriods?: number;
    /**
     *  The period type used to define when the charge ends.
     *
     * @remarks
     * **Character limit**: -- **Values**: one of the following:
     *
     * - `Billing Periods` (default)
     * - `Days`
     * - `Weeks`
     * - `Months`
     * - `Years`
     *
     * **Note**:
     *
     * - You must use this field together with the `UpToPeriods` field to specify the time period.
     * - This field is applicable only when the `EndDateCondition` field is set to `FixedPeriod`.
     *
     */
    upToPeriodsType?: string;
    /**
     * The ID of the last user to update the object. **Character limit**: 32 **Values**: automatically generated
     */
    updatedById?: string;
    /**
     * The date when the object was last updated. **Character limit**: 29 **Values**: automatically generated
     */
    updatedDate?: Date;
    /**
     * Determines whether to define a new accounting code for the new discount charge. **Character limit**: 5 **Values**: `True`, `False`
     */
    useDiscountSpecificAccountingCode?: boolean;
    /**
     *  Applies the tenant-level percentage uplift value for an automatic price change to a termed subscription's renewal. **Character limit**: 5 **Values**: `true`, `false`
     */
    useTenantDefaultForPriceChange?: boolean;
    /**
     *  Specifies which day of the week as the bill cycle day (BCD) for the charge.
     *
     * @remarks
     * This feature is in **Limited Availability**. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/).
     *
     * **Values**: one of the following:
     *
     * - `Sunday`
     * - `Monday`
     * - `Tuesday`
     * - `Wednesday`
     * - `Thursday`
     * - `Friday`
     * - `Saturday`
     *
     */
    weeklyBillCycleDay?: string;
}
