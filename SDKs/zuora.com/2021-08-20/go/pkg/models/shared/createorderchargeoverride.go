package shared

type CreateOrderChargeOverrideBillingBillCycleTypeEnum string

const (
	CreateOrderChargeOverrideBillingBillCycleTypeEnumDefaultFromCustomer  CreateOrderChargeOverrideBillingBillCycleTypeEnum = "DefaultFromCustomer"
	CreateOrderChargeOverrideBillingBillCycleTypeEnumSpecificDayofMonth   CreateOrderChargeOverrideBillingBillCycleTypeEnum = "SpecificDayofMonth"
	CreateOrderChargeOverrideBillingBillCycleTypeEnumSubscriptionStartDay CreateOrderChargeOverrideBillingBillCycleTypeEnum = "SubscriptionStartDay"
	CreateOrderChargeOverrideBillingBillCycleTypeEnumChargeTriggerDay     CreateOrderChargeOverrideBillingBillCycleTypeEnum = "ChargeTriggerDay"
	CreateOrderChargeOverrideBillingBillCycleTypeEnumSpecificDayofWeek    CreateOrderChargeOverrideBillingBillCycleTypeEnum = "SpecificDayofWeek"
)

type CreateOrderChargeOverrideBillingBillingPeriodEnum string

const (
	CreateOrderChargeOverrideBillingBillingPeriodEnumMonth            CreateOrderChargeOverrideBillingBillingPeriodEnum = "Month"
	CreateOrderChargeOverrideBillingBillingPeriodEnumQuarter          CreateOrderChargeOverrideBillingBillingPeriodEnum = "Quarter"
	CreateOrderChargeOverrideBillingBillingPeriodEnumSemiAnnual       CreateOrderChargeOverrideBillingBillingPeriodEnum = "Semi_Annual"
	CreateOrderChargeOverrideBillingBillingPeriodEnumAnnual           CreateOrderChargeOverrideBillingBillingPeriodEnum = "Annual"
	CreateOrderChargeOverrideBillingBillingPeriodEnumEighteenMonths   CreateOrderChargeOverrideBillingBillingPeriodEnum = "Eighteen_Months"
	CreateOrderChargeOverrideBillingBillingPeriodEnumTwoYears         CreateOrderChargeOverrideBillingBillingPeriodEnum = "Two_Years"
	CreateOrderChargeOverrideBillingBillingPeriodEnumThreeYears       CreateOrderChargeOverrideBillingBillingPeriodEnum = "Three_Years"
	CreateOrderChargeOverrideBillingBillingPeriodEnumFiveYears        CreateOrderChargeOverrideBillingBillingPeriodEnum = "Five_Years"
	CreateOrderChargeOverrideBillingBillingPeriodEnumSpecificMonths   CreateOrderChargeOverrideBillingBillingPeriodEnum = "Specific_Months"
	CreateOrderChargeOverrideBillingBillingPeriodEnumSubscriptionTerm CreateOrderChargeOverrideBillingBillingPeriodEnum = "Subscription_Term"
	CreateOrderChargeOverrideBillingBillingPeriodEnumWeek             CreateOrderChargeOverrideBillingBillingPeriodEnum = "Week"
	CreateOrderChargeOverrideBillingBillingPeriodEnumSpecificWeeks    CreateOrderChargeOverrideBillingBillingPeriodEnum = "Specific_Weeks"
)

type CreateOrderChargeOverrideBillingBillingPeriodAlignmentEnum string

const (
	CreateOrderChargeOverrideBillingBillingPeriodAlignmentEnumAlignToCharge            CreateOrderChargeOverrideBillingBillingPeriodAlignmentEnum = "AlignToCharge"
	CreateOrderChargeOverrideBillingBillingPeriodAlignmentEnumAlignToSubscriptionStart CreateOrderChargeOverrideBillingBillingPeriodAlignmentEnum = "AlignToSubscriptionStart"
	CreateOrderChargeOverrideBillingBillingPeriodAlignmentEnumAlignToTermStart         CreateOrderChargeOverrideBillingBillingPeriodAlignmentEnum = "AlignToTermStart"
)

type CreateOrderChargeOverrideBillingBillingTimingEnum string

const (
	CreateOrderChargeOverrideBillingBillingTimingEnumInAdvance CreateOrderChargeOverrideBillingBillingTimingEnum = "IN_ADVANCE"
	CreateOrderChargeOverrideBillingBillingTimingEnumInArrears CreateOrderChargeOverrideBillingBillingTimingEnum = "IN_ARREARS"
)

type CreateOrderChargeOverrideBillingWeeklyBillCycleDayEnum string

const (
	CreateOrderChargeOverrideBillingWeeklyBillCycleDayEnumSunday    CreateOrderChargeOverrideBillingWeeklyBillCycleDayEnum = "Sunday"
	CreateOrderChargeOverrideBillingWeeklyBillCycleDayEnumMonday    CreateOrderChargeOverrideBillingWeeklyBillCycleDayEnum = "Monday"
	CreateOrderChargeOverrideBillingWeeklyBillCycleDayEnumTuesday   CreateOrderChargeOverrideBillingWeeklyBillCycleDayEnum = "Tuesday"
	CreateOrderChargeOverrideBillingWeeklyBillCycleDayEnumWednesday CreateOrderChargeOverrideBillingWeeklyBillCycleDayEnum = "Wednesday"
	CreateOrderChargeOverrideBillingWeeklyBillCycleDayEnumThursday  CreateOrderChargeOverrideBillingWeeklyBillCycleDayEnum = "Thursday"
	CreateOrderChargeOverrideBillingWeeklyBillCycleDayEnumFriday    CreateOrderChargeOverrideBillingWeeklyBillCycleDayEnum = "Friday"
	CreateOrderChargeOverrideBillingWeeklyBillCycleDayEnumSaturday  CreateOrderChargeOverrideBillingWeeklyBillCycleDayEnum = "Saturday"
)

// CreateOrderChargeOverrideBilling
// Billing information about the charge.
type CreateOrderChargeOverrideBilling struct {
	BillCycleDay           *int64                                                      `json:"billCycleDay,omitempty"`
	BillCycleType          *CreateOrderChargeOverrideBillingBillCycleTypeEnum          `json:"billCycleType,omitempty"`
	BillingPeriod          *CreateOrderChargeOverrideBillingBillingPeriodEnum          `json:"billingPeriod,omitempty"`
	BillingPeriodAlignment *CreateOrderChargeOverrideBillingBillingPeriodAlignmentEnum `json:"billingPeriodAlignment,omitempty"`
	BillingTiming          *CreateOrderChargeOverrideBillingBillingTimingEnum          `json:"billingTiming,omitempty"`
	SpecificBillingPeriod  *int64                                                      `json:"specificBillingPeriod,omitempty"`
	WeeklyBillCycleDay     *CreateOrderChargeOverrideBillingWeeklyBillCycleDayEnum     `json:"weeklyBillCycleDay,omitempty"`
}

// CreateOrderChargeOverridePricing
// Pricing information about the charge.
type CreateOrderChargeOverridePricing struct {
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

type CreateOrderChargeOverrideRevRecTriggerConditionEnum string

const (
	CreateOrderChargeOverrideRevRecTriggerConditionEnumContractEffectiveDate  CreateOrderChargeOverrideRevRecTriggerConditionEnum = "Contract Effective Date"
	CreateOrderChargeOverrideRevRecTriggerConditionEnumServiceActivationDate  CreateOrderChargeOverrideRevRecTriggerConditionEnum = "Service Activation Date"
	CreateOrderChargeOverrideRevRecTriggerConditionEnumCustomerAcceptanceDate CreateOrderChargeOverrideRevRecTriggerConditionEnum = "Customer Acceptance Date"
)

type CreateOrderChargeOverrideRevenueRecognitionRuleNameEnum string

const (
	CreateOrderChargeOverrideRevenueRecognitionRuleNameEnumRecognizeUponInvoicing CreateOrderChargeOverrideRevenueRecognitionRuleNameEnum = "Recognize upon invoicing"
	CreateOrderChargeOverrideRevenueRecognitionRuleNameEnumRecognizeDailyOverTime CreateOrderChargeOverrideRevenueRecognitionRuleNameEnum = "Recognize daily over time"
)

// CreateOrderChargeOverride
// Charge associated with a rate plan.
type CreateOrderChargeOverride struct {
	Billing                    *CreateOrderChargeOverrideBilling                        `json:"billing,omitempty"`
	ChargeNumber               *string                                                  `json:"chargeNumber,omitempty"`
	CustomFields               map[string]interface{}                                   `json:"customFields,omitempty"`
	Description                *string                                                  `json:"description,omitempty"`
	EndDate                    *EndConditions                                           `json:"endDate,omitempty"`
	Pricing                    *CreateOrderChargeOverridePricing                        `json:"pricing,omitempty"`
	ProductRatePlanChargeID    string                                                   `json:"productRatePlanChargeId"`
	RevRecCode                 *string                                                  `json:"revRecCode,omitempty"`
	RevRecTriggerCondition     *CreateOrderChargeOverrideRevRecTriggerConditionEnum     `json:"revRecTriggerCondition,omitempty"`
	RevenueRecognitionRuleName *CreateOrderChargeOverrideRevenueRecognitionRuleNameEnum `json:"revenueRecognitionRuleName,omitempty"`
	StartDate                  *CreateOrderTriggerParams                                `json:"startDate,omitempty"`
	UniqueToken                *string                                                  `json:"uniqueToken,omitempty"`
}
