package shared

import (
	"time"
)

type EndConditionsEndDateConditionEnum string

const (
	EndConditionsEndDateConditionEnumSubscriptionEnd EndConditionsEndDateConditionEnum = "Subscription_End"
	EndConditionsEndDateConditionEnumFixedPeriod     EndConditionsEndDateConditionEnum = "Fixed_Period"
	EndConditionsEndDateConditionEnumSpecificEndDate EndConditionsEndDateConditionEnum = "Specific_End_Date"
)

type EndConditionsUpToPeriodsTypeEnum string

const (
	EndConditionsUpToPeriodsTypeEnumBillingPeriods EndConditionsUpToPeriodsTypeEnum = "Billing_Periods"
	EndConditionsUpToPeriodsTypeEnumDays           EndConditionsUpToPeriodsTypeEnum = "Days"
	EndConditionsUpToPeriodsTypeEnumWeeks          EndConditionsUpToPeriodsTypeEnum = "Weeks"
	EndConditionsUpToPeriodsTypeEnumMonths         EndConditionsUpToPeriodsTypeEnum = "Months"
	EndConditionsUpToPeriodsTypeEnumYears          EndConditionsUpToPeriodsTypeEnum = "Years"
)

// EndConditions
// Specifies when a charge becomes inactive.
type EndConditions struct {
	EndDateCondition *EndConditionsEndDateConditionEnum `json:"endDateCondition,omitempty"`
	SpecificEndDate  *time.Time                         `json:"specificEndDate,omitempty"`
	UpToPeriods      *int64                             `json:"upToPeriods,omitempty"`
	UpToPeriodsType  *EndConditionsUpToPeriodsTypeEnum  `json:"upToPeriodsType,omitempty"`
}
