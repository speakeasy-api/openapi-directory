package shared

type ChargeOverrideForEvergreenBillingBillCycleTypeEnum string

const (
	ChargeOverrideForEvergreenBillingBillCycleTypeEnumDefaultFromCustomer  ChargeOverrideForEvergreenBillingBillCycleTypeEnum = "DefaultFromCustomer"
	ChargeOverrideForEvergreenBillingBillCycleTypeEnumSpecificDayofMonth   ChargeOverrideForEvergreenBillingBillCycleTypeEnum = "SpecificDayofMonth"
	ChargeOverrideForEvergreenBillingBillCycleTypeEnumSubscriptionStartDay ChargeOverrideForEvergreenBillingBillCycleTypeEnum = "SubscriptionStartDay"
	ChargeOverrideForEvergreenBillingBillCycleTypeEnumChargeTriggerDay     ChargeOverrideForEvergreenBillingBillCycleTypeEnum = "ChargeTriggerDay"
	ChargeOverrideForEvergreenBillingBillCycleTypeEnumSpecificDayofWeek    ChargeOverrideForEvergreenBillingBillCycleTypeEnum = "SpecificDayofWeek"
)

type ChargeOverrideForEvergreenBillingBillingPeriodEnum string

const (
	ChargeOverrideForEvergreenBillingBillingPeriodEnumMonth            ChargeOverrideForEvergreenBillingBillingPeriodEnum = "Month"
	ChargeOverrideForEvergreenBillingBillingPeriodEnumQuarter          ChargeOverrideForEvergreenBillingBillingPeriodEnum = "Quarter"
	ChargeOverrideForEvergreenBillingBillingPeriodEnumSemiAnnual       ChargeOverrideForEvergreenBillingBillingPeriodEnum = "Semi_Annual"
	ChargeOverrideForEvergreenBillingBillingPeriodEnumAnnual           ChargeOverrideForEvergreenBillingBillingPeriodEnum = "Annual"
	ChargeOverrideForEvergreenBillingBillingPeriodEnumEighteenMonths   ChargeOverrideForEvergreenBillingBillingPeriodEnum = "Eighteen_Months"
	ChargeOverrideForEvergreenBillingBillingPeriodEnumTwoYears         ChargeOverrideForEvergreenBillingBillingPeriodEnum = "Two_Years"
	ChargeOverrideForEvergreenBillingBillingPeriodEnumThreeYears       ChargeOverrideForEvergreenBillingBillingPeriodEnum = "Three_Years"
	ChargeOverrideForEvergreenBillingBillingPeriodEnumFiveYears        ChargeOverrideForEvergreenBillingBillingPeriodEnum = "Five_Years"
	ChargeOverrideForEvergreenBillingBillingPeriodEnumSpecificMonths   ChargeOverrideForEvergreenBillingBillingPeriodEnum = "Specific_Months"
	ChargeOverrideForEvergreenBillingBillingPeriodEnumSubscriptionTerm ChargeOverrideForEvergreenBillingBillingPeriodEnum = "Subscription_Term"
	ChargeOverrideForEvergreenBillingBillingPeriodEnumWeek             ChargeOverrideForEvergreenBillingBillingPeriodEnum = "Week"
	ChargeOverrideForEvergreenBillingBillingPeriodEnumSpecificWeeks    ChargeOverrideForEvergreenBillingBillingPeriodEnum = "Specific_Weeks"
)

type ChargeOverrideForEvergreenBillingBillingPeriodAlignmentEnum string

const (
	ChargeOverrideForEvergreenBillingBillingPeriodAlignmentEnumAlignToCharge            ChargeOverrideForEvergreenBillingBillingPeriodAlignmentEnum = "AlignToCharge"
	ChargeOverrideForEvergreenBillingBillingPeriodAlignmentEnumAlignToSubscriptionStart ChargeOverrideForEvergreenBillingBillingPeriodAlignmentEnum = "AlignToSubscriptionStart"
	ChargeOverrideForEvergreenBillingBillingPeriodAlignmentEnumAlignToTermStart         ChargeOverrideForEvergreenBillingBillingPeriodAlignmentEnum = "AlignToTermStart"
)

type ChargeOverrideForEvergreenBillingBillingTimingEnum string

const (
	ChargeOverrideForEvergreenBillingBillingTimingEnumInAdvance ChargeOverrideForEvergreenBillingBillingTimingEnum = "IN_ADVANCE"
	ChargeOverrideForEvergreenBillingBillingTimingEnumInArrears ChargeOverrideForEvergreenBillingBillingTimingEnum = "IN_ARREARS"
)

type ChargeOverrideForEvergreenBillingWeeklyBillCycleDayEnum string

const (
	ChargeOverrideForEvergreenBillingWeeklyBillCycleDayEnumSunday    ChargeOverrideForEvergreenBillingWeeklyBillCycleDayEnum = "Sunday"
	ChargeOverrideForEvergreenBillingWeeklyBillCycleDayEnumMonday    ChargeOverrideForEvergreenBillingWeeklyBillCycleDayEnum = "Monday"
	ChargeOverrideForEvergreenBillingWeeklyBillCycleDayEnumTuesday   ChargeOverrideForEvergreenBillingWeeklyBillCycleDayEnum = "Tuesday"
	ChargeOverrideForEvergreenBillingWeeklyBillCycleDayEnumWednesday ChargeOverrideForEvergreenBillingWeeklyBillCycleDayEnum = "Wednesday"
	ChargeOverrideForEvergreenBillingWeeklyBillCycleDayEnumThursday  ChargeOverrideForEvergreenBillingWeeklyBillCycleDayEnum = "Thursday"
	ChargeOverrideForEvergreenBillingWeeklyBillCycleDayEnumFriday    ChargeOverrideForEvergreenBillingWeeklyBillCycleDayEnum = "Friday"
	ChargeOverrideForEvergreenBillingWeeklyBillCycleDayEnumSaturday  ChargeOverrideForEvergreenBillingWeeklyBillCycleDayEnum = "Saturday"
)

// ChargeOverrideForEvergreenBilling
// Billing information about the charge.
type ChargeOverrideForEvergreenBilling struct {
	BillCycleDay           *int64                                                       `json:"billCycleDay,omitempty"`
	BillCycleType          *ChargeOverrideForEvergreenBillingBillCycleTypeEnum          `json:"billCycleType,omitempty"`
	BillingPeriod          *ChargeOverrideForEvergreenBillingBillingPeriodEnum          `json:"billingPeriod,omitempty"`
	BillingPeriodAlignment *ChargeOverrideForEvergreenBillingBillingPeriodAlignmentEnum `json:"billingPeriodAlignment,omitempty"`
	BillingTiming          *ChargeOverrideForEvergreenBillingBillingTimingEnum          `json:"billingTiming,omitempty"`
	SpecificBillingPeriod  *int64                                                       `json:"specificBillingPeriod,omitempty"`
	WeeklyBillCycleDay     *ChargeOverrideForEvergreenBillingWeeklyBillCycleDayEnum     `json:"weeklyBillCycleDay,omitempty"`
}

// ChargeOverrideForEvergreenPricing
// Pricing information about the charge.
type ChargeOverrideForEvergreenPricing struct {
	ChargeModelData        *ChargeModelDataOverride               `json:"chargeModelData,omitempty"`
	Discount               *DiscountPricingOverride               `json:"discount,omitempty"`
	OneTimeFlatFee         *OneTimeFlatFeePricingOverride         `json:"oneTimeFlatFee,omitempty"`
	OneTimePerUnit         *OneTimePerUnitPricingOverride         `json:"oneTimePerUnit,omitempty"`
	OneTimeTiered          *OneTimeTieredPricingOverride          `json:"oneTimeTiered,omitempty"`
	OneTimeVolume          *OneTimeVolumePricingOverride          `json:"oneTimeVolume,omitempty"`
	RecurringFlatFee       *RecurringFlatFeePricingOverride       `json:"recurringFlatFee,omitempty"`
	RecurringPerUnit       *RecurringPerUnitPricingOverride       `json:"recurringPerUnit,omitempty"`
	RecurringTiered        *RecurringTieredPricingOverride        `json:"recurringTiered,omitempty"`
	RecurringVolume        *RecurringVolumePricingOverride        `json:"recurringVolume,omitempty"`
	UsageFlatFee           *UsageFlatFeePricingOverride           `json:"usageFlatFee,omitempty"`
	UsageOverage           *UsageOveragePricingOverride           `json:"usageOverage,omitempty"`
	UsagePerUnit           *UsagePerUnitPricingOverride           `json:"usagePerUnit,omitempty"`
	UsageTiered            *UsageTieredPricingOverride            `json:"usageTiered,omitempty"`
	UsageTieredWithOverage *UsageTieredWithOveragePricingOverride `json:"usageTieredWithOverage,omitempty"`
	UsageVolume            *UsageVolumePricingOverride            `json:"usageVolume,omitempty"`
}

type ChargeOverrideForEvergreenRevRecTriggerConditionEnum string

const (
	ChargeOverrideForEvergreenRevRecTriggerConditionEnumContractEffectiveDate  ChargeOverrideForEvergreenRevRecTriggerConditionEnum = "Contract Effective Date"
	ChargeOverrideForEvergreenRevRecTriggerConditionEnumServiceActivationDate  ChargeOverrideForEvergreenRevRecTriggerConditionEnum = "Service Activation Date"
	ChargeOverrideForEvergreenRevRecTriggerConditionEnumCustomerAcceptanceDate ChargeOverrideForEvergreenRevRecTriggerConditionEnum = "Customer Acceptance Date"
)

type ChargeOverrideForEvergreenRevenueRecognitionRuleNameEnum string

const (
	ChargeOverrideForEvergreenRevenueRecognitionRuleNameEnumRecognizeUponInvoicing ChargeOverrideForEvergreenRevenueRecognitionRuleNameEnum = "Recognize upon invoicing"
	ChargeOverrideForEvergreenRevenueRecognitionRuleNameEnumRecognizeDailyOverTime ChargeOverrideForEvergreenRevenueRecognitionRuleNameEnum = "Recognize daily over time"
)

// ChargeOverrideForEvergreen
// Charge associated with a rate plan.
type ChargeOverrideForEvergreen struct {
	Billing                    *ChargeOverrideForEvergreenBilling                        `json:"billing,omitempty"`
	ChargeNumber               *string                                                   `json:"chargeNumber,omitempty"`
	CustomFields               map[string]interface{}                                    `json:"customFields,omitempty"`
	Description                *string                                                   `json:"description,omitempty"`
	EndDate                    *EndConditions                                            `json:"endDate,omitempty"`
	Pricing                    *ChargeOverrideForEvergreenPricing                        `json:"pricing,omitempty"`
	ProductRatePlanChargeID    string                                                    `json:"productRatePlanChargeId"`
	RevRecCode                 *string                                                   `json:"revRecCode,omitempty"`
	RevRecTriggerCondition     *ChargeOverrideForEvergreenRevRecTriggerConditionEnum     `json:"revRecTriggerCondition,omitempty"`
	RevenueRecognitionRuleName *ChargeOverrideForEvergreenRevenueRecognitionRuleNameEnum `json:"revenueRecognitionRuleName,omitempty"`
	StartDate                  *TriggerParams                                            `json:"startDate,omitempty"`
	UniqueToken                *string                                                   `json:"uniqueToken,omitempty"`
}
