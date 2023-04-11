import { SpeakeasyBase } from "../../../internal/utils";
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
export declare enum ProxyGetRatePlanChargeRatingGroupEnum {
    ByBillingPeriod = "ByBillingPeriod",
    ByUsageStartDate = "ByUsageStartDate",
    ByUsageRecord = "ByUsageRecord",
    ByUsageUpload = "ByUsageUpload",
    ByGroupId = "ByGroupId"
}
/**
 * Container for custom fields of a Rate Plan Charge object.
 *
 * @remarks
 *
 */
export declare class ProxyGetRatePlanCharge extends SpeakeasyBase {
    /**
     * The accounting code for the charge. Accounting codes group transactions that contain similar accounting attributes.
     *
     * @remarks
     *
     * **Character limit**: 100
     *
     * **Values**: inherited from `ProductRatePlanCharge.AccountingCode`
     *
     * **Note**: This value changes if `ProductRatePlanCharge.AccountingCode` is updated. The values of `UpdatedById` and `UpdatedDate` for the `RatePlanCharge` do not change when `ProductRatePlanCharge.AccountingCode` is updated.
     */
    accountingCode?: string;
    /**
     *  Specifies the type of charges a specific discount applies to. **Character limit**: 21 **Values**: inherited from `ProductRatePlanCharge.ApplyDiscountTo`
     */
    applyDiscountTo?: string;
    /**
     *  Indicates the charge's billing cycle day (BCD), which is when bill runs generate invoices for charges associated with the product rate plan charge or the account.
     *
     * @remarks
     * **Character limit**: 2 **Values**: inherited from `ProductRatePlanCharge.BillCycleDay`
     */
    billCycleDay?: number;
    /**
     *  Specifies how to determine the billing day for the charge.
     *
     * @remarks
     * **Character limit**: 20 **Values**: inherited from `ProductRatePlanCharge.BillCycleType` **Note:** You can override the value inherited from the Product Rate Plan Charge, but only when creating a new subscription or a New Product amendment.
     */
    billCycleType?: string;
    /**
     *  Allows billing period to be overridden on rate plan charge.
     *
     * @remarks
     * ****Values**: **inherited from `ProductRatePlanCharge.BillingPeriod` **Note:** You can override the value inherited from the Product Rate Plan Charge, but only when creating a new subscription or a New Product amendment.
     */
    billingPeriod?: string;
    /**
     *  Aligns charges within the same subscription if multiple charges begin on different dates.
     *
     * @remarks
     * **Character limit**: 24 **Values**: inherited from `ProductRatePlanCharge.BillingPeriodAlignment`
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
     * **Note:** You can override the value inherited from the Product Rate Plan Charge when a subscription has a recurring charge type.
     * This feature is in **Limited Availability**. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/).
     *
     *
     */
    billingTiming?: string;
    /**
     *  Determines how to evaluate charges. Charge models must be individually activated in the web-based UI.
     *
     * @remarks
     * **Character limit**: 29 **Values**: inherited from `ProductRatePlanCharge.ChargeModel`
     */
    chargeModel?: string;
    /**
     *  A unique number that identifies the charge. This number is returned as a string.
     *
     * @remarks
     * **Character limit**: 50 **Values**: one of the following:
     *
     * - automatically generated if left null
     * - a unique number of 50 characters or fewer
     *
     */
    chargeNumber?: string;
    /**
     *  Specifies the type of charge.
     *
     * @remarks
     * **Character limit**: 9 **Values**: inherited from `ProductRatePlanCharge.ChargeType`
     */
    chargeType?: string;
    /**
     *  The date through which a customer has been billed for the charge.
     *
     * @remarks
     * **Character limit**: 29 **Values**: automatically generated
     */
    chargedThroughDate?: Date;
    /**
     * The ID of the Zuora user who created the `RatePlanCharge` object. **Character limit**: 32 **Values**: automatically generated
     */
    createdById?: string;
    /**
     *  The date when the `RatePlanCharge` object was created.
     *
     * @remarks
     * **Character limit**: 29 **Values**: automatically generated
     */
    createdDate?: Date;
    /**
     * A delta monthly recurring charge is the change in monthly recurring revenue caused by an amendment or a new subscription. **Character limit**: 16 **Values**: automatically generated
     */
    dmrc?: number;
    /**
     *  After an Amendment, the change in the total contract value (TCV) amount for this charge, compared with its previous value.
     *
     * @remarks
     * **Character limit**: 16 **Values**: automatically generated
     */
    dtcv?: number;
    /**
     *  A description of the charge.
     *
     * @remarks
     * **Character limit**: 500 **Values**: inherited from `ProductRatePlanCharge.Description`
     */
    description?: string;
    /**
     * Specifies if the discount applies to just the product rate plan, the entire subscription, or to any activity in the account. **Character limit**: 12 **Values**: inherited from `ProductRatePlanCharge.DiscountLevel`
     */
    discountLevel?: string;
    /**
     *  The date when the segmented charge ends or ended.
     *
     * @remarks
     * **Character limit**: 16 **Values**: automatically generated
     */
    effectiveEndDate?: Date;
    /**
     *  The date when the segmented charge starts or started.
     *
     * @remarks
     * **Character limit**: 16 **Values**: automatically generated
     */
    effectiveStartDate?: Date;
    /**
     *  Defines when the charge ends after the charge trigger date. This field can be updated when **Status** is `Draft`.
     *
     * @remarks
     * **Values**: one of the following:
     *
     * - `SubscriptionEnd`: The charge ends on the subscription end date after the charge trigger date. This is the default value.
     * - `FixedPeriod`: The charge ends after a specified period based on the trigger date of the charge. If you set this field to `FixedPeriod`, you must specify the length of the period and a period type by defining the `UpToPeriods` and `UpToPeriodsType` fields.
     * - `SpecificEndDate`: The specific date on which the charge ends. If you set this field to `SpecificEndDate`, you must specify the specific date by defining the `SpecificEndDate` field.
     *
     * **Note**: If the subscription ends before the charge end date, the charge ends when the subscription ends. But if the subscription end date is subsequently changed through a Renewal, or Terms and Conditions amendment, the charge will end on the charge end date.
     */
    endDateCondition?: string;
    /**
     * Object identifier.
     */
    id?: string;
    /**
     * Indicates if the segment of the rate plan charge is the most recent segment. **Character limit**: 5 **Values**: automatically generated: `true`, `false`
     */
    isLastSegment?: boolean;
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
     * Monthly recurring revenue (MRR) is the amount of recurring charges in a given month. The MRR calculation doesn't include one-time charges nor usage charges. **Character limit**: 16 **Values**: automatically generated
     */
    mrr?: number;
    /**
     * The name of the rate plan charge. **Character limit**: 100 **Values**: automatically generated
     */
    name?: string;
    /**
     * Specifies the number of periods to use when calculating charges in an overage smoothing charge model. **Character limit**: 5 **Values**: inherited from `ProductRatePlanCharge.NumberOfPeriod`
     */
    numberOfPeriods?: number;
    /**
     * The original ID of the rate plan charge. **Character limit**: 32 **Values**: automatically generated
     */
    originalId?: string;
    /**
     * Determines when to calculate overage charges. If the value of the SmoothingMode field is null (not specified and not inherited from ProductRatePlanCharge.SmoothingMode), the value of this field is ignored. **Character limit**: 20 **Values**: inherited from `ProductRatePlanCharge.OverageCalculationOption`
     */
    overageCalculationOption?: string;
    /**
     *  Determines whether to credit the customer with unused units of usage.
     *
     * @remarks
     * **Character limit**: 20 **Values**: inherited from `ProductRatePlanCharge.OverageUnusedUnitsCreditOption`
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
     *  Specifies the percentage to increase or decrease the price of renewed subscriptions.
     *
     * @remarks
     * **Character limit**: 16 **Values**: a decimal value between -100 and 100
     */
    priceIncreasePercentage?: number;
    /**
     *  The date until when charges have been processed. When billing in arrears, such as usage, this field value is the the same as the `ChargedThroughDate` value. This date is the earliest date when a charge can be amended.
     *
     * @remarks
     * **Character limit**: 29 **Values**: automatically generated
     */
    processedThroughDate?: Date;
    /**
     *  The default quantity of units, such as the number of authors in a hosted wiki service. Valid for all charge models except for Flat Fee pricing.
     *
     * @remarks
     * **Character limit**: 16 **Values**: a valid quantity value
     */
    quantity?: number;
    /**
     *  The ID of the rate plan associated with the rate plan charge.
     *
     * @remarks
     * **Character limit**: 32 **Values**: inherited from `RatePlan.Id`
     */
    ratePlanId?: string;
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
    ratingGroup?: ProxyGetRatePlanChargeRatingGroupEnum;
    /**
     *  Associates this product rate plan charge with a specific revenue recognition code.
     *
     * @remarks
     *
     * **Character limit**: 70
     *
     * **Values**: inherited from `ProductRatePlanCharge.RevRecCode` or a valid revenue recognition code
     *
     * **Note**: Unless overridden, this value changes if `ProductRatePlanCharge.RevRecCode` is updated. The values of `UpdatedById` and `UpdatedDate` for the `RatePlanCharge` do not change when `ProductRatePlanCharge.RevRecCode` is updated.
     */
    revRecCode?: string;
    /**
     *  Specifies when revenue recognition begins.
     *
     * @remarks
     *
     * **Character limit**: 22
     *
     * **Values**: inherited from `ProductRatePlanCharge.RevRecTriggerCondition` or one of the following:
     *
     * -  `ContractEffectiveDate`
     *
     * -  `ServiceActivationDate`
     *
     * -  `CustomerAcceptanceDate`
     *
     * Note: Unless overridden, this value changes if `ProductRatePlanCharge.RevRecTriggerCondition` is updated. The values of `UpdatedById` and `UpdatedDate` for the `RatePlanCharge` do not change when `ProductRatePlanCharge.RevRecTriggerCondition` is updated.
     */
    revRecTriggerCondition?: string;
    /**
     *  Specifies the Revenue Recognition Rule that you want the Rate Plan Charge to use. This field can be updated when **Status** is `Draft`. By default, the Revenue Recognition Rule is inherited from the Product Rate Plan Charge. For Amend calls, you can use this field only for NewProduct amendments. For Update calls, you can use this field only to update subscriptions in draft status. Note that if you use this field to specify a Revenue Recognition Rule for the Rate Plan Charge, the rule will remain as specified even if you later change the rule used by the corresponding Product Rate Plan Charge.
     *
     * @remarks
     *
     * **Character limit**: n/a
     *
     * **Values**: inherited from `ProductRatePlanCharge.RevenueRecognitionRuleName` or the name of an active Revenue Recognition Rule
     *
     * **Note**: Unless overridden, this value changes if `ProductRatePlanCharge.RevenueRecognitionRuleName` is updated. The values of `UpdatedById` and `UpdatedDate` for the `RatePlanCharge` do not change when `ProductRatePlanCharge.RevenueRecognitionRuleName` is updated.
     */
    revenueRecognitionRuleName?: string;
    /**
     * Specifies the number of units of measure (UOM) rolled over from previous periods. The value of this field is the rollover balance for the corresponding account.
     *
     * @remarks
     *
     * This field is applicable only to usage charges with overage models.
     *
     * **Note**:
     *
     * - You cannot query or filter this field with other fields in a single query.
     * - To query or filter this field, you must specify and only specify the rate plan charge Id in the condition.
     * - You cannot use this field in the query or filter condition.
     *
     */
    rolloverBalance?: number;
    /**
     *  The identifying number of the subscription rate plan segment. Segments are numbered sequentially, starting with 1.
     *
     * @remarks
     * **Character limit**: 2 **Values**: automatically generated
     */
    segment?: number;
    /**
     *  Customizes the number of months or weeks for the charges billing period. This field is required if you set the value of the BillingPeriod field to `Specific Months` or `Specific Weeks`.
     *
     * @remarks
     * **Character limit**: 5 **Values**: inherited from `ProductRatePlanCharge.BillingPeriod` **Note:** You can override the value inherited from the Product Rate Plan Charge, but only when creating a new subscription or a New Product amendment.
     */
    specificBillingPeriod?: number;
    /**
     *  The specific date on which the charge ends, in `yyyy-mm-dd` format.
     *
     * @remarks
     * **Character limit**: 29 **Note**:
     *
     * - This field is only applicable when the `EndDateCondition` field is set to `SpecificEndDate`.
     * - If the subscription ends before the specific end date, the charge ends when the subscription ends. But if the subscription end date is subsequently changed through a Renewal, or Terms and Conditions amendment, the charge will end on the specific end date.
     *
     */
    specificEndDate?: Date;
    /**
     *  The total contract value (TCV) is the value of a single rate plan charge in a subscription over the lifetime of the subscription. This value does not represent all charges on the subscription. The TCV includes recurring charges and one-time charges, but it doesn't include usage charge.
     *
     * @remarks
     * **Character limit**: 16 **Values**: automatically generated
     */
    tcv?: number;
    /**
     *  The date when the charge becomes effective and billing begins, in `yyyy-mm-dd` format. This field is required if the `TriggerEvent` field value is `SpecificDate`.
     *
     * @remarks
     * **Character limit**: 29
     */
    triggerDate?: Date;
    /**
     *  Specifies when to start billing the customer for the charge.
     *
     * @remarks
     * **Note: **This field can be passed through the Subscribe and Amend calls and will override the default value set on the Product Rate Plan Charge.
     * **Character limit**: 18 **Values**: inherited from `ProductRatePlanCharge.TriggerEvent` and can be one of the following values:
     *
     * - `ContractEffective` is the date when the subscription's contract goes into effect and the charge is ready to be billed.
     * - `ServiceActivation` is when the services or products for a subscription have been activated and the customers have access.
     * - `CustomerAcceptance` is when the customer accepts the services or products for a subscription.
     * - `SpecificDate` is valid only on the RatePlanCharge.
     *
     */
    triggerEvent?: string;
    /**
     *  Specifies the units to measure usage.
     *
     * @remarks
     * **Character limit**: 25 **Values**: inherited from `ProductRatePlanCharge.UOM`
     */
    uom?: string;
    /**
     *  Specifies the length of the period during which the charge is active. If this period ends before the subscription ends, the charge ends when this period ends.
     *
     * @remarks
     * **Character limit**: 5 **Values**: inherited from `ProductRatePlanCharge.UpToPeriods` **Note**:
     *
     * - You must use this field together with the `UpToPeriodsType` field to specify the time period. This field is only applicable only when the `EndDateCondition` field is set to `FixedPeriod`.
     * - You can override the value inherited from the Product Rate Plan Charge, but only when creating a new subscription or a New Product amendment.
     * - Use this field to override the value in `ProductRatePlanCharge.UpToPeriod`.
     * - If you override the value in this field, enter a whole number between 0 and 65535, exclusive.
     * - If the subscription end date is subsequently changed through a Renewal, or Terms and Conditions amendment, the charge end date will change accordingly up to the original period end.
     *
     */
    upToPeriods?: number;
    /**
     *  The period type used to define when the charge ends. This field can be updated when **Status** is `Draft`. **Values**: one of the following:
     *
     * @remarks
     *
     * - `Billing Periods` (default)
     * - `Days`
     * - `Weeks`
     * - `Months`
     * - `Years`
     * **Note**:
     *
     * - You must use this field together with the `UpToPeriods` field to specify the time period.
     * - This field is only applicable only when the `EndDateCondition` field is set to `FixedPeriod`.
     *
     */
    upToPeriodsType?: string;
    /**
     * The ID of the last user to update the object. **Character limit**: 32 **Values**: automatically generated
     */
    updatedById?: string;
    /**
     *  The date when the object was last updated.
     *
     * @remarks
     * **Character limit**: 29 **Values**: automatically generated
     */
    updatedDate?: Date;
    /**
     *  The version of the rate plan charge. Each time a charge is amended, Zuora creates a new version of the rate plan charge. **Character limit**: 5 **Values**: automatically generated
     */
    version?: number;
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
