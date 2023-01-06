package shared

type ChargeOverrideBillingBillCycleTypeEnum string

const (
	ChargeOverrideBillingBillCycleTypeEnumDefaultFromCustomer  ChargeOverrideBillingBillCycleTypeEnum = "DefaultFromCustomer"
	ChargeOverrideBillingBillCycleTypeEnumSpecificDayofMonth   ChargeOverrideBillingBillCycleTypeEnum = "SpecificDayofMonth"
	ChargeOverrideBillingBillCycleTypeEnumSubscriptionStartDay ChargeOverrideBillingBillCycleTypeEnum = "SubscriptionStartDay"
	ChargeOverrideBillingBillCycleTypeEnumChargeTriggerDay     ChargeOverrideBillingBillCycleTypeEnum = "ChargeTriggerDay"
	ChargeOverrideBillingBillCycleTypeEnumSpecificDayofWeek    ChargeOverrideBillingBillCycleTypeEnum = "SpecificDayofWeek"
)

type ChargeOverrideBillingBillingPeriodEnum string

const (
	ChargeOverrideBillingBillingPeriodEnumMonth            ChargeOverrideBillingBillingPeriodEnum = "Month"
	ChargeOverrideBillingBillingPeriodEnumQuarter          ChargeOverrideBillingBillingPeriodEnum = "Quarter"
	ChargeOverrideBillingBillingPeriodEnumSemiAnnual       ChargeOverrideBillingBillingPeriodEnum = "Semi_Annual"
	ChargeOverrideBillingBillingPeriodEnumAnnual           ChargeOverrideBillingBillingPeriodEnum = "Annual"
	ChargeOverrideBillingBillingPeriodEnumEighteenMonths   ChargeOverrideBillingBillingPeriodEnum = "Eighteen_Months"
	ChargeOverrideBillingBillingPeriodEnumTwoYears         ChargeOverrideBillingBillingPeriodEnum = "Two_Years"
	ChargeOverrideBillingBillingPeriodEnumThreeYears       ChargeOverrideBillingBillingPeriodEnum = "Three_Years"
	ChargeOverrideBillingBillingPeriodEnumFiveYears        ChargeOverrideBillingBillingPeriodEnum = "Five_Years"
	ChargeOverrideBillingBillingPeriodEnumSpecificMonths   ChargeOverrideBillingBillingPeriodEnum = "Specific_Months"
	ChargeOverrideBillingBillingPeriodEnumSubscriptionTerm ChargeOverrideBillingBillingPeriodEnum = "Subscription_Term"
	ChargeOverrideBillingBillingPeriodEnumWeek             ChargeOverrideBillingBillingPeriodEnum = "Week"
	ChargeOverrideBillingBillingPeriodEnumSpecificWeeks    ChargeOverrideBillingBillingPeriodEnum = "Specific_Weeks"
)

type ChargeOverrideBillingBillingPeriodAlignmentEnum string

const (
	ChargeOverrideBillingBillingPeriodAlignmentEnumAlignToCharge            ChargeOverrideBillingBillingPeriodAlignmentEnum = "AlignToCharge"
	ChargeOverrideBillingBillingPeriodAlignmentEnumAlignToSubscriptionStart ChargeOverrideBillingBillingPeriodAlignmentEnum = "AlignToSubscriptionStart"
	ChargeOverrideBillingBillingPeriodAlignmentEnumAlignToTermStart         ChargeOverrideBillingBillingPeriodAlignmentEnum = "AlignToTermStart"
)

type ChargeOverrideBillingBillingTimingEnum string

const (
	ChargeOverrideBillingBillingTimingEnumInAdvance ChargeOverrideBillingBillingTimingEnum = "IN_ADVANCE"
	ChargeOverrideBillingBillingTimingEnumInArrears ChargeOverrideBillingBillingTimingEnum = "IN_ARREARS"
)

type ChargeOverrideBillingWeeklyBillCycleDayEnum string

const (
	ChargeOverrideBillingWeeklyBillCycleDayEnumSunday    ChargeOverrideBillingWeeklyBillCycleDayEnum = "Sunday"
	ChargeOverrideBillingWeeklyBillCycleDayEnumMonday    ChargeOverrideBillingWeeklyBillCycleDayEnum = "Monday"
	ChargeOverrideBillingWeeklyBillCycleDayEnumTuesday   ChargeOverrideBillingWeeklyBillCycleDayEnum = "Tuesday"
	ChargeOverrideBillingWeeklyBillCycleDayEnumWednesday ChargeOverrideBillingWeeklyBillCycleDayEnum = "Wednesday"
	ChargeOverrideBillingWeeklyBillCycleDayEnumThursday  ChargeOverrideBillingWeeklyBillCycleDayEnum = "Thursday"
	ChargeOverrideBillingWeeklyBillCycleDayEnumFriday    ChargeOverrideBillingWeeklyBillCycleDayEnum = "Friday"
	ChargeOverrideBillingWeeklyBillCycleDayEnumSaturday  ChargeOverrideBillingWeeklyBillCycleDayEnum = "Saturday"
)

// ChargeOverrideBilling
// Billing information about the charge.
type ChargeOverrideBilling struct {
	BillCycleDay           *int64                                           `json:"billCycleDay,omitempty"`
	BillCycleType          *ChargeOverrideBillingBillCycleTypeEnum          `json:"billCycleType,omitempty"`
	BillingPeriod          *ChargeOverrideBillingBillingPeriodEnum          `json:"billingPeriod,omitempty"`
	BillingPeriodAlignment *ChargeOverrideBillingBillingPeriodAlignmentEnum `json:"billingPeriodAlignment,omitempty"`
	BillingTiming          *ChargeOverrideBillingBillingTimingEnum          `json:"billingTiming,omitempty"`
	SpecificBillingPeriod  *int64                                           `json:"specificBillingPeriod,omitempty"`
	WeeklyBillCycleDay     *ChargeOverrideBillingWeeklyBillCycleDayEnum     `json:"weeklyBillCycleDay,omitempty"`
}

// ChargeOverridePricing
// Pricing information about the charge.
type ChargeOverridePricing struct {
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

type ChargeOverrideRevRecTriggerConditionEnum string

const (
	ChargeOverrideRevRecTriggerConditionEnumContractEffectiveDate  ChargeOverrideRevRecTriggerConditionEnum = "Contract Effective Date"
	ChargeOverrideRevRecTriggerConditionEnumServiceActivationDate  ChargeOverrideRevRecTriggerConditionEnum = "Service Activation Date"
	ChargeOverrideRevRecTriggerConditionEnumCustomerAcceptanceDate ChargeOverrideRevRecTriggerConditionEnum = "Customer Acceptance Date"
)

type ChargeOverrideRevenueRecognitionRuleNameEnum string

const (
	ChargeOverrideRevenueRecognitionRuleNameEnumRecognizeUponInvoicing ChargeOverrideRevenueRecognitionRuleNameEnum = "Recognize upon invoicing"
	ChargeOverrideRevenueRecognitionRuleNameEnumRecognizeDailyOverTime ChargeOverrideRevenueRecognitionRuleNameEnum = "Recognize daily over time"
)

// ChargeOverride
// Charge associated with a rate plan.
type ChargeOverride struct {
	Billing                    *ChargeOverrideBilling                        `json:"billing,omitempty"`
	ChargeNumber               *string                                       `json:"chargeNumber,omitempty"`
	CustomFields               map[string]interface{}                        `json:"customFields,omitempty"`
	Description                *string                                       `json:"description,omitempty"`
	EndDate                    *EndConditions                                `json:"endDate,omitempty"`
	Pricing                    *ChargeOverridePricing                        `json:"pricing,omitempty"`
	ProductRatePlanChargeID    string                                        `json:"productRatePlanChargeId"`
	RevRecCode                 *string                                       `json:"revRecCode,omitempty"`
	RevRecTriggerCondition     *ChargeOverrideRevRecTriggerConditionEnum     `json:"revRecTriggerCondition,omitempty"`
	RevenueRecognitionRuleName *ChargeOverrideRevenueRecognitionRuleNameEnum `json:"revenueRecognitionRuleName,omitempty"`
	StartDate                  *TriggerParams                                `json:"startDate,omitempty"`
	UniqueToken                *string                                       `json:"uniqueToken,omitempty"`
}
