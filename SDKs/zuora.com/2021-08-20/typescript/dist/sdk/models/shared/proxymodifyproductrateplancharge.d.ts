import { SpeakeasyBase } from "../../../internal/utils";
import { ProxyCreateOrModifyProductRatePlanChargeChargeModelConfiguration } from "./proxycreateormodifyproductrateplanchargechargemodelconfiguration";
import { ProxyCreateOrModifyProductRatePlanChargeTierData } from "./proxycreateormodifyproductrateplanchargetierdata";
/**
 * Specifies whether the corresponding item in NetSuite is visible under child subsidiaries. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).
 *
 * @remarks
 *
 */
export declare enum ProxyModifyProductRatePlanChargeIncludeChildrenNSEnum {
    Yes = "Yes",
    No = "No"
}
/**
 * Type of item that is created in NetSuite for the product rate plan charge. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).
 *
 * @remarks
 *
 */
export declare enum ProxyModifyProductRatePlanChargeItemTypeNSEnum {
    Inventory = "Inventory",
    NonInventory = "Non Inventory",
    Service = "Service"
}
/**
 * Applies an automatic price change when a termed subscription is renewed.
 *
 * @remarks
 *
 */
export declare enum ProxyModifyProductRatePlanChargePriceIncreaseOptionEnum {
    FromTenantPercentageValue = "FromTenantPercentageValue",
    SpecificPercentageValue = "SpecificPercentageValue"
}
/**
 * End date condition of the corresponding item in NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).
 *
 * @remarks
 *
 */
export declare enum ProxyModifyProductRatePlanChargeRevRecEndNSEnum {
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
export declare enum ProxyModifyProductRatePlanChargeRevRecStartNSEnum {
    ChargePeriodStart = "Charge Period Start",
    RevRecTriggerDate = "Rev Rec Trigger Date",
    UseNetSuiteRevRecTemplate = "Use NetSuite Rev Rec Template"
}
/**
 * Determines how Zuora processes usage records for per-unit usage charges.
 *
 * @remarks
 *
 */
export declare enum ProxyModifyProductRatePlanChargeUsageRecordRatingOptionEnum {
    EndOfBillingPeriod = "EndOfBillingPeriod",
    OnDemand = "OnDemand"
}
/**
 * Container for custom fields of a Product Rate Plan Charge object.
 *
 * @remarks
 *
 */
export declare class ProxyModifyProductRatePlanCharge extends SpeakeasyBase {
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
     * - `MultiAttributePricing` (available only if you have the Multi-Attribute Pricing charge model enabled. The charge model is available for customers with Enterprise and Nine editions by default. If you are a Growth customer, see [Zuora Editions](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/C_Zuora_Editions) for pricing information.)
     * - `PreratedPerUnit` (available only if you have the Pre-rated Per Unit Pricing charge model enabled. The charge model is available for customers with Enterprise and Nine editions by default. If you are a Growth customer, see [Zuora Editions](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/C_Zuora_Editions) for pricing information.)
     * - `PreratedPricing` (available only if you have the Pre-rated Pricing charge model enabled. The charge model is available for customers with Enterprise and Nine editions by default. If you are a Growth customer, see [Zuora Editions](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/C_Zuora_Editions) for pricing information.)
     * - `HighWatermarkVolumePricing` (available only if you have the High Water Mark Volume Pricing charge model enabled. The charge model is available for customers with Enterprise and Nine editions by default. If you are a Growth customer, see [Zuora Editions](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/C_Zuora_Editions) for pricing information.)
     * - `HighWatermarkTieredPricing` (available only if you have the High Water Mark Tiered Pricing charge model enabled. The charge model is available for customers with Enterprise and Nine editions by default. If you are a Growth customer, see [Zuora Editions](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/C_Zuora_Editions) for pricing information.)
     *
     *
     */
    chargeModel?: string;
    /**
     * Container for charge model configuration data.
     *
     * @remarks
     *
     * **Notes**:
     *
     * * This field is only available if you have the Pre-Rated Pricing or Multi-Attribute Pricing charge models enabled. These charge models are available for customers with Enterprise and Nine editions by default. If you are a Growth customer, see [Zuora Editions](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/C_Zuora_Editions) for pricing information.
     * * To use this field, you must set the `X-Zuora-WSDL-Version` request header to `102` or later. Otherwise, an error occurs with "Code: INVALID_VALUE".
     *
     */
    chargeModelConfiguration?: ProxyCreateOrModifyProductRatePlanChargeChargeModelConfiguration;
    /**
     * Class associated with the corresponding item in NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).
     *
     * @remarks
     *
     */
    classNS?: string;
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
     * Specifies whether the corresponding item in NetSuite is visible under child subsidiaries. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).
     *
     * @remarks
     *
     */
    includeChildrenNS?: ProxyModifyProductRatePlanChargeIncludeChildrenNSEnum;
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
    itemTypeNS?: ProxyModifyProductRatePlanChargeItemTypeNSEnum;
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
     * Applies an automatic price change when a termed subscription is renewed.
     *
     * @remarks
     *
     */
    priceIncreaseOption?: ProxyModifyProductRatePlanChargePriceIncreaseOptionEnum;
    /**
     *  Specifies the percentage to increase or decrease the price of a termed subscription's renewal. Use this field if you set the value to `SpecificPercentageValue`.
     *
     * @remarks
     * **Character limit**: 16 **Values**: a decimal value between -100 and 100
     */
    priceIncreasePercentage?: number;
    /**
     * Container for pricing information associated with the product rate plan charge.
     *
     * @remarks
     *
     */
    productRatePlanChargeTierData?: ProxyCreateOrModifyProductRatePlanChargeTierData;
    /**
     *  The ID of the product rate plan associated with this product rate plan charge.
     *
     * @remarks
     * **Character limit**: 32 **Values**: a valid product rate plan ID
     */
    productRatePlanId?: string;
    /**
     * Specifies a rating group based on which usage records are rated.
     *
     * @remarks
     *
     * Possible values:
     *
     * - `ByBillingPeriod` (default): The rating is based on all the usages in a billing period.
     * - `ByUsageStartDate`: The rating is based on all the usages on the same usage start date.
     * - `ByUsageRecord`: The rating is based on each usage record.
     * - `ByUsageUpload`: The rating is based on all the  usages in a uploaded usage file (`.xls` or `.csv`).
     * - `ByGroupId`: The rating is based on all the usages in a custom group.
     *
     * **Note:**
     * - The `ByBillingPeriod` value can be applied for all charge models.
     * - The `ByUsageStartDate`, `ByUsageRecord`, and `ByUsageUpload` values can only be applied for per unit, volume pricing, and tiered pricing charge models.
     * - The `ByGroupId` value is only available if you have the Active Rating feature enabled.
     * - Use this field only for Usage charges. One-Time Charges and Recurring Charges return `NULL`.
     *
     */
    ratingGroup?: string;
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
    revRecEndNS?: ProxyModifyProductRatePlanChargeRevRecEndNSEnum;
    /**
     * Start date condition of the corresponding item in NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).
     *
     * @remarks
     *
     */
    revRecStartNS?: ProxyModifyProductRatePlanChargeRevRecStartNSEnum;
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
     * Determines how Zuora processes usage records for per-unit usage charges.
     *
     * @remarks
     *
     */
    usageRecordRatingOption?: ProxyModifyProductRatePlanChargeUsageRecordRatingOptionEnum;
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
