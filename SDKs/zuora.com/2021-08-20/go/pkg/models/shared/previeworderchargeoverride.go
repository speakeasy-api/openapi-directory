package shared

type PreviewOrderChargeOverrideBillingBillCycleTypeEnum string

const (
	PreviewOrderChargeOverrideBillingBillCycleTypeEnumDefaultFromCustomer  PreviewOrderChargeOverrideBillingBillCycleTypeEnum = "DefaultFromCustomer"
	PreviewOrderChargeOverrideBillingBillCycleTypeEnumSpecificDayofMonth   PreviewOrderChargeOverrideBillingBillCycleTypeEnum = "SpecificDayofMonth"
	PreviewOrderChargeOverrideBillingBillCycleTypeEnumSubscriptionStartDay PreviewOrderChargeOverrideBillingBillCycleTypeEnum = "SubscriptionStartDay"
	PreviewOrderChargeOverrideBillingBillCycleTypeEnumChargeTriggerDay     PreviewOrderChargeOverrideBillingBillCycleTypeEnum = "ChargeTriggerDay"
	PreviewOrderChargeOverrideBillingBillCycleTypeEnumSpecificDayofWeek    PreviewOrderChargeOverrideBillingBillCycleTypeEnum = "SpecificDayofWeek"
)

type PreviewOrderChargeOverrideBillingBillingPeriodEnum string

const (
	PreviewOrderChargeOverrideBillingBillingPeriodEnumMonth            PreviewOrderChargeOverrideBillingBillingPeriodEnum = "Month"
	PreviewOrderChargeOverrideBillingBillingPeriodEnumQuarter          PreviewOrderChargeOverrideBillingBillingPeriodEnum = "Quarter"
	PreviewOrderChargeOverrideBillingBillingPeriodEnumSemiAnnual       PreviewOrderChargeOverrideBillingBillingPeriodEnum = "Semi_Annual"
	PreviewOrderChargeOverrideBillingBillingPeriodEnumAnnual           PreviewOrderChargeOverrideBillingBillingPeriodEnum = "Annual"
	PreviewOrderChargeOverrideBillingBillingPeriodEnumEighteenMonths   PreviewOrderChargeOverrideBillingBillingPeriodEnum = "Eighteen_Months"
	PreviewOrderChargeOverrideBillingBillingPeriodEnumTwoYears         PreviewOrderChargeOverrideBillingBillingPeriodEnum = "Two_Years"
	PreviewOrderChargeOverrideBillingBillingPeriodEnumThreeYears       PreviewOrderChargeOverrideBillingBillingPeriodEnum = "Three_Years"
	PreviewOrderChargeOverrideBillingBillingPeriodEnumFiveYears        PreviewOrderChargeOverrideBillingBillingPeriodEnum = "Five_Years"
	PreviewOrderChargeOverrideBillingBillingPeriodEnumSpecificMonths   PreviewOrderChargeOverrideBillingBillingPeriodEnum = "Specific_Months"
	PreviewOrderChargeOverrideBillingBillingPeriodEnumSubscriptionTerm PreviewOrderChargeOverrideBillingBillingPeriodEnum = "Subscription_Term"
	PreviewOrderChargeOverrideBillingBillingPeriodEnumWeek             PreviewOrderChargeOverrideBillingBillingPeriodEnum = "Week"
	PreviewOrderChargeOverrideBillingBillingPeriodEnumSpecificWeeks    PreviewOrderChargeOverrideBillingBillingPeriodEnum = "Specific_Weeks"
)

type PreviewOrderChargeOverrideBillingBillingPeriodAlignmentEnum string

const (
	PreviewOrderChargeOverrideBillingBillingPeriodAlignmentEnumAlignToCharge            PreviewOrderChargeOverrideBillingBillingPeriodAlignmentEnum = "AlignToCharge"
	PreviewOrderChargeOverrideBillingBillingPeriodAlignmentEnumAlignToSubscriptionStart PreviewOrderChargeOverrideBillingBillingPeriodAlignmentEnum = "AlignToSubscriptionStart"
	PreviewOrderChargeOverrideBillingBillingPeriodAlignmentEnumAlignToTermStart         PreviewOrderChargeOverrideBillingBillingPeriodAlignmentEnum = "AlignToTermStart"
)

type PreviewOrderChargeOverrideBillingBillingTimingEnum string

const (
	PreviewOrderChargeOverrideBillingBillingTimingEnumInAdvance PreviewOrderChargeOverrideBillingBillingTimingEnum = "IN_ADVANCE"
	PreviewOrderChargeOverrideBillingBillingTimingEnumInArrears PreviewOrderChargeOverrideBillingBillingTimingEnum = "IN_ARREARS"
)

type PreviewOrderChargeOverrideBillingWeeklyBillCycleDayEnum string

const (
	PreviewOrderChargeOverrideBillingWeeklyBillCycleDayEnumSunday    PreviewOrderChargeOverrideBillingWeeklyBillCycleDayEnum = "Sunday"
	PreviewOrderChargeOverrideBillingWeeklyBillCycleDayEnumMonday    PreviewOrderChargeOverrideBillingWeeklyBillCycleDayEnum = "Monday"
	PreviewOrderChargeOverrideBillingWeeklyBillCycleDayEnumTuesday   PreviewOrderChargeOverrideBillingWeeklyBillCycleDayEnum = "Tuesday"
	PreviewOrderChargeOverrideBillingWeeklyBillCycleDayEnumWednesday PreviewOrderChargeOverrideBillingWeeklyBillCycleDayEnum = "Wednesday"
	PreviewOrderChargeOverrideBillingWeeklyBillCycleDayEnumThursday  PreviewOrderChargeOverrideBillingWeeklyBillCycleDayEnum = "Thursday"
	PreviewOrderChargeOverrideBillingWeeklyBillCycleDayEnumFriday    PreviewOrderChargeOverrideBillingWeeklyBillCycleDayEnum = "Friday"
	PreviewOrderChargeOverrideBillingWeeklyBillCycleDayEnumSaturday  PreviewOrderChargeOverrideBillingWeeklyBillCycleDayEnum = "Saturday"
)

// PreviewOrderChargeOverrideBilling
// Billing information about the charge.
type PreviewOrderChargeOverrideBilling struct {
	BillCycleDay           *int64                                                       `json:"billCycleDay,omitempty"`
	BillCycleType          *PreviewOrderChargeOverrideBillingBillCycleTypeEnum          `json:"billCycleType,omitempty"`
	BillingPeriod          *PreviewOrderChargeOverrideBillingBillingPeriodEnum          `json:"billingPeriod,omitempty"`
	BillingPeriodAlignment *PreviewOrderChargeOverrideBillingBillingPeriodAlignmentEnum `json:"billingPeriodAlignment,omitempty"`
	BillingTiming          *PreviewOrderChargeOverrideBillingBillingTimingEnum          `json:"billingTiming,omitempty"`
	SpecificBillingPeriod  *int64                                                       `json:"specificBillingPeriod,omitempty"`
	WeeklyBillCycleDay     *PreviewOrderChargeOverrideBillingWeeklyBillCycleDayEnum     `json:"weeklyBillCycleDay,omitempty"`
}

// PreviewOrderChargeOverridePricing
// Pricing information about the charge.
type PreviewOrderChargeOverridePricing struct {
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

type PreviewOrderChargeOverrideRevRecTriggerConditionEnum string

const (
	PreviewOrderChargeOverrideRevRecTriggerConditionEnumContractEffectiveDate  PreviewOrderChargeOverrideRevRecTriggerConditionEnum = "Contract Effective Date"
	PreviewOrderChargeOverrideRevRecTriggerConditionEnumServiceActivationDate  PreviewOrderChargeOverrideRevRecTriggerConditionEnum = "Service Activation Date"
	PreviewOrderChargeOverrideRevRecTriggerConditionEnumCustomerAcceptanceDate PreviewOrderChargeOverrideRevRecTriggerConditionEnum = "Customer Acceptance Date"
)

type PreviewOrderChargeOverrideRevenueRecognitionRuleNameEnum string

const (
	PreviewOrderChargeOverrideRevenueRecognitionRuleNameEnumRecognizeUponInvoicing PreviewOrderChargeOverrideRevenueRecognitionRuleNameEnum = "Recognize upon invoicing"
	PreviewOrderChargeOverrideRevenueRecognitionRuleNameEnumRecognizeDailyOverTime PreviewOrderChargeOverrideRevenueRecognitionRuleNameEnum = "Recognize daily over time"
)

// PreviewOrderChargeOverride
// Charge associated with a rate plan.
type PreviewOrderChargeOverride struct {
	Billing                    *PreviewOrderChargeOverrideBilling                        `json:"billing,omitempty"`
	ChargeNumber               *string                                                   `json:"chargeNumber,omitempty"`
	CustomFields               map[string]interface{}                                    `json:"customFields,omitempty"`
	Description                *string                                                   `json:"description,omitempty"`
	EndDate                    *EndConditions                                            `json:"endDate,omitempty"`
	Pricing                    *PreviewOrderChargeOverridePricing                        `json:"pricing,omitempty"`
	ProductRatePlanChargeID    string                                                    `json:"productRatePlanChargeId"`
	RevRecCode                 *string                                                   `json:"revRecCode,omitempty"`
	RevRecTriggerCondition     *PreviewOrderChargeOverrideRevRecTriggerConditionEnum     `json:"revRecTriggerCondition,omitempty"`
	RevenueRecognitionRuleName *PreviewOrderChargeOverrideRevenueRecognitionRuleNameEnum `json:"revenueRecognitionRuleName,omitempty"`
	StartDate                  *PreviewOrderTriggerParams                                `json:"startDate,omitempty"`
	UniqueToken                *string                                                   `json:"uniqueToken,omitempty"`
}
